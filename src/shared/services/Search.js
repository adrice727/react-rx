import api from './Api';
import Rx from 'rx-lite';

var projectSearchParams = { t: 'project', q: 'h'}
var projectRequestStream = Rx.Observable.just({relativeUrl: 'suggest', queryParams: projectSearchParams});

var projectResponseStream = projectRequestStream
  .flatMap(function(options) {
    return Rx.Observable.fromPromise(api.search(options.relativeUrl, options.queryParams));
  });

export default projectResponseStream;
