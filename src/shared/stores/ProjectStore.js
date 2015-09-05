import Rx from 'rx-lite';
import R from 'ramda';
import api from '../services/Api'
import { createUser } from './UserStore';
import { getImageSrc } from '../services/Asset';

/* Project Store */
const _projects = new Map();

/* Private Methods */
const _getProjectStream = R.compose(
  request => Rx.Observable.fromPromise(request),
  id => api.get(`project/${id}`)
);

const _getLikeStream = R.compose(
  request => Rx.Observable.fromPromise(request),
  id => api.get(`project/${id}`) // this will change to a POST
);

const requestSubject = new Rx.Subject();
const likeProject = new Rx.Subject();

const _createProject = (id) => {
  if ( _projects.has(id) ) {
    return _projects.get(id);
  } else {
    return _projects.set(id, new Rx.BehaviorSubject()).get(id);
  }
}

const requestProject = (id) => {
  requestSubject.onNext(id);
  return _createProject(id);
}

const _mockProjectLike = (response) => {
  response.data.numLikes++;
  response.data.numViews--;
  response.data.likedByCurrentUser = true;
  return response;
}

const _requestStream = requestSubject
  .flatMap( id => _getProjectStream(id))

const _likeStream = likeProject
  .flatMap( id => _getLikeStream(id))
  .map( _mockProjectLike )

const _updateStore = (project) => {
  if ( _projects.has(project.id) ) {
    _projects.get(project.id).onNext(project);
  } else {
    _projects.set(project.id, new Rx.BehaviorSubject(project));
  }
}


/* Meta Stream */
var projectMetaStream = Rx.Observable.merge(_requestStream, _likeStream)
  .map( response => new Project(response.data) )

projectMetaStream.subscribe( project => _updateStore(project) );


/* Project Constructor & Related Methods */
class Project {
  constructor(data) {
    R.keys(data).forEach( key => this[key] = data[key]);
    this.type = R.path(['projectTypeList', '0'], data);
    this.agencies = R.map( id => ({id: id, 'name': data.companies[id]}), R.keys(data.companies));
    this.team = _buildTeam(data.collaborators);
  }
}

const _buildTeam = R.map( collaborator => {
  return {
    'id': collaborator.id,
    'name': `${collaborator.user.firstName} ${collaborator.user.lastName}`,
    'role': R.path(['roles', '0'], collaborator),
    'imageSrc': getImageSrc(R.path(['user', 'profileImage'], collaborator), 'c')
  }
});

/* Public Methods */
// const requestProject = (id) =>  _projects.has(id) ? _projects.get(id) : _createProjectStream(id);

// const requestProject = (id) => {
//
//   if ( _projects.has(id) ) {
//     return _projects.get(id);
//   } else {
//     _requestStream(id);
//     return _projects.set(id, new Rx.BehaviorSubject()).get(id);
//   }
// }

// const likeProject = new Rx.Subject();
//
// const x = likeProject.subscribe( id => {
//
//   console.log(_projects.get(id))
//
//   // let doThings = project => {
//   //   let p = _projects.get(project.id);
//   //   console.log(p);
//   // }
//   // let addProject = project => _projects.set(project.id, new new Rx.BehaviorSubject(project));
//   // let updateProject = project => _projects.get(project.id).onNext(project);
//   //
//   // let likeStream = _getLikeStream(id)
//   //   .map( (response) =>  {
//   //     response.data.numLikes++;
//   //     response.data.likedByCurrentUser = true;
//   //     return response.data;
//   //   })
//   //   .map( data => new Project(data) )
//   //   .tap( project => doThings(project) )
//   //   .subscribe();
// })

// let likeStream = _getLikeStream(id)
//   .map( (response) => {
//     reponse.data.numLikes++;
//     response.data.likeByCurrentUser = true;
//     return response.data
//   })
//   .map( data => new Project(data) )
//   .tap( (project) => {
//     if ( _projects.has(id) ) {
//       let project = _projects.get(id);
//       console.log('here', project);
//     }
//   })





/* Exports */
export { requestProject, likeProject };
