import api from './Api';
import Rx from 'rx-lite';

var projectSearchParams = { t: 'project', q: 'h'}

/* Create behavior subject whose initial value is an empty string */
var projectRequestStream = new Rx.BehaviorSubject('');


// var projectRequestStream = Rx.Observable.just({relativeUrl: 'suggest', queryParams: projectSearchParams});

var projectResponseStream = projectRequestStream
  .flatMap(function(query) {
    return Rx.Observable.fromPromise(api.search('suggest', { q: query }));
  });

export default projectResponseStream;
