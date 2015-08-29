// import api from './Api';
// import Rx from 'rx-lite';
// import R from 'ramda';
//
// /* Create behavior subject whose initial value is an empty string */
// export var projectRequestStream = new Rx.ReplaySubject(1);
// projectRequestStream.onNext('herb');
// // export var projectRequestStream = Rx.Observable.just('herbal');
//
// // var projectRequestStream = Rx.Observable.just({relativeUrl: 'suggest', queryParams: projectSearchParams});
//
// export var projectResponseStream = projectRequestStream
//   .flatMap( query => Rx.Observable.fromPromise(api.search('suggest', { t: 'project', q: query })))
//   .map( response => R.path(['data', 'response', 'docs', 'project'], response));
//
// // export var projectResponseStream = projectRequestStream
// //   .flatMap( query => console.log(query));
//
// var test = projectRequestStream.flatMap(function(v){console.log('VVV',v)});


import api from './Api';
import Rx from 'rx-lite';

var projectSearchParams = { t: 'project', q: 'h'}

/* Create behavior subject whose initial value is an empty string */
export var projectRequestStream = new Rx.BehaviorSubject('r');

// var projectRequestStream = Rx.Observable.just({relativeUrl: 'suggest', queryParams: projectSearchParams});

export var projectResponseStream = projectRequestStream
  .flatMap(function(query) {
    console.log('getting things herre', query)
    return Rx.Observable.fromPromise(api.search('suggest', { t: 'project', q: query }))
  })
