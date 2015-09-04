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
  id => api.get(`project/${id}`)
);

const _buildTeam = R.map( collaborator => {
  return {
    'id': collaborator.id,
    'name': `${collaborator.user.firstName} ${collaborator.user.lastName}`,
    'role': R.path(['roles', '0'], collaborator),
    'imageSrc': getImageSrc(R.path(['user', 'profileImage'], collaborator), 'c')
  }
});

/* Project Constructor */
class Project {
  constructor(data) {
    R.keys(data).forEach( key => this[key] = data[key]);
    this.type = R.path(['projectTypeList', '0'], data);
    this.agencies = R.map(id => ({id: id, 'name': data.companies[id]}) ,R.keys(data.companies));
    this.team = _buildTeam(data.collaborators);
  }
}

/* Public Methods */
const requestProject = (id, update) => {

  if ( _projects.has(id) ) { return _projects.get(id); }

  let projectStream = _getProjectStream(id)
    .map( response => new Project(response.data) )
    .map( project => new Rx.BehaviorSubject(project) );

  _projects.set(id, projectStream);
  return _projects.get(id);
}

const likeProject = new Rx.Subject();

const x = likeProject.subscribe( id => {

  console.log(_projects.get(id))

  // let doThings = project => {
  //   let p = _projects.get(project.id);
  //   console.log(p);
  // }
  // let addProject = project => _projects.set(project.id, new new Rx.BehaviorSubject(project));
  // let updateProject = project => _projects.get(project.id).onNext(project);
  //
  // let likeStream = _getLikeStream(id)
  //   .map( (response) =>  {
  //     response.data.numLikes++;
  //     response.data.likedByCurrentUser = true;
  //     return response.data;
  //   })
  //   .map( data => new Project(data) )
  //   .tap( project => doThings(project) )
  //   .subscribe();
})

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
