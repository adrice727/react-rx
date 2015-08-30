import api from './Api';
import Rx from 'rx-lite';
import R from 'ramda';

/* Create behavior subject whose initial value is an empty string. The value of
 * the subject will be updated by as user enters input.
 */
export var projectRequestStream = new Rx.BehaviorSubject('');

/*
 * Receives values from the request stream subject, makes API calls to retrieve
 * project search results, and outputs those results as an observable stream.
 */
export var projectResponseStream = projectRequestStream
  .sample(500)
  .distinctUntilChanged()
  .flatMap( query => Rx.Observable.fromPromise(api.search('suggest', { t: 'project', q: query })))
  .map( results => R.path(['data', 'response', 'docs', 'project'], results))
