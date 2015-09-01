import Rx from 'rx-lite';
import R from 'ramda';
import api from '../services/Api'

var _projects = new Map();

var requestProject = (id) => Rx.Observable.fromPromise(api.get( `project/${id}`))
