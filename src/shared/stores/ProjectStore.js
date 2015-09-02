import Rx from 'rx-lite';
import R from 'ramda';
import api from '../services/Api'
import { createUser } from './UserStore';
import { getImageSrc } from '../services/Asset';


/* Project Store */
var _projects = new Map();

/* Private Methods */
var _getProject = (id) => api.get(`project/${id}`);
var _getProjectStream = (id) => Rx.Observable.fromPromise(_getProject(id));

class Project {
  constructor(data) {
    R.keys(data).forEach( key => this[key] = data[key]);
    this.type = R.path(['projectTypeList', '0'], data);
    this.agencies = R.map(id => ({id: id, 'name': data.companies[id]}) ,R.keys(data.companies));
    this.primaryAsset.coverImageId = this.primaryAsset.id;
  }
}


/* Public Methods */
var requestProject = (id, update) => {

  var projectStream = _getProjectStream(id)
    .map( response => new Project(response.data) )

  _projects.set(id, projectStream);
  return _projects.get(id);
}


/* Exports */
export { requestProject };
