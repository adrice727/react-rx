import Rx from 'rx-lite';
import R from 'ramda';
import api from '../services/Api'
import { createUser } from './UserStore';


/* Project Store */
var _projects = new Map();

/* Private Methods */
var _getProject = (id) => api.get(`project/${id}`);
var _getProjectStream = (id) => Rx.Observable.fromPromise(_getProject(id));
var requestStream = Rx.Observable.just('https://api.github.com/users');

class Project {
  constructor(data) {
    this.name = data.projectName; 
  }
}


/* Export Methods */
var requestProject = (id, update) => {

  var projectStream = _getProjectStream(id)
    .map( response => new Project(response.data) )

  _projects.set(id, projectStream);
  return _projects.get(id);
}


export { requestProject };
