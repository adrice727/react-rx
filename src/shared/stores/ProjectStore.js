import Rx from 'rx-lite';
import R from 'ramda';
import api from '../services/Api'
import { createUser } from './UserStore';
import { getImageSrc } from '../services/Asset';

/* A solid introduction to RxJS Streams and Observables: https://goo.gl/KVPXp6 */

/***** Project Store *****/
const _projects = new Map();

/***** Private Methods *****/

/* A composed function which returns an observable stream that emits values
 * upon the resolution of promises.
 * @param {String} id
 */
const _getProjectStream = R.compose(
  request => Rx.Observable.fromPromise(request),
  id => api.get(`project/${id}`)
);

/* An observable subject which emits projects ids when called with 'onNext'.
 * ex. requestSubject.onNext('a14x4') => 'a14x4'
 */
const requestSubject = new Rx.Subject();

/* An observable stream which maps values from the requestSubject.  With each
 * value (project id), an observable stream is emitted.
 * https://goo.gl/iQvpbC
 */
const _requestStream = requestSubject
  .flatMap( id => _getProjectStream(id) )



const _getLikeStream = R.compose(
  request => Rx.Observable.fromPromise(request),
  id => api.get(`project/${id}`) // this will change to a POST
);

/* Faking it until login is set up */
const _mockProjectLike = (response) => {
  response.data.numLikes++;
  response.data.numViews--;
  response.data.likedByCurrentUser = true;
  return response;
}

const likeSubject = new Rx.Subject();

const _likeStream = likeSubject
  .flatMap( id => _getLikeStream(id))
  .map( _mockProjectLike )

/*
 * Metastream which combines multiple streams into a single observable
 * stream of projects.
 */
const projectMetaStream = Rx.Observable.merge(_requestStream, _likeStream)
  .map( response => new Project(response.data) )

/*
 * Listen to metastream and update project store as necessary
 */
projectMetaStream.subscribe( project => _updateStore(project) );


/***** Project Constructor & Related Methods *****/
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


/*
 * Checks the store to see if the project already exists.  If so, it passes the
 * updated project to the behavior subject.  Otherwise, it creates a new behavior
 * subject with the project as its initial value
 * TODO: Combine with '_addProjectToStore'
 */
const _updateStore = (project) => {
  if ( _projects.has(project.id) ) {
    _projects.get(project.id).onNext(project);
  } else {
    _projects.set(project.id, new Rx.BehaviorSubject(project));
  }
}

const _addProjectToStore = (id) => {
  if ( _projects.has(id) ) {
    return _projects.get(id);
  } else {
    return _projects.set(id, new Rx.BehaviorSubject()).get(id);
  }
}

/***** Public Methods *****/

const requestProject = (id) => {
  requestSubject.onNext(id);
  return _addProjectToStore(id);
}

const likeProject = id => likeSubject.onNext(id);

/***** Exports *****/
export { requestProject, likeProject };
