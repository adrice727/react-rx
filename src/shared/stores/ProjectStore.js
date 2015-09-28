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
    let updatedProject = _projects.get(project.id).value.merge(project);
    _projects.get(project.id).onNext(updatedProject);
  } else {
    _projects.set(project.id, new Rx.BehaviorSubject(Immutable.Map(project)));
  }
}

const _addProjectToStore = (id) => {
  if ( _projects.has(id) ) {
    return _projects.get(id);
  } else {
    return _projects.set(id, new Rx.BehaviorSubject(Immutable.Map())).get(id);
  }
}

/***** Public Methods *****/

<<<<<<< HEAD
  return _projects.set(id, projectStream).get(id);
}

/* Exports */
export { requestProject };
=======
const requestProject = (id) => {
  requestSubject.onNext(id);
  return _addProjectToStore(id);
}

const likeProject = id => likeSubject.onNext(id);

/***** Exports *****/
export { requestProject, likeProject };
>>>>>>> immutable_store
