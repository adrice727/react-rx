/**** Imports ****/
import axios from 'axios';
import Immutable from 'immutable';
import Rx from 'rx-lite';


/**** Constants ****/

// Composed into metastream
const _asyncStreams = [];


// Error handling
// TODO: Add proper keys
const _errors = {
  0: 'A key is required to add a model to the store',
  1: 'If a key is not provided, the data passed to the store must contain an\
      id parameter which can be used as a key',
  2: 'A url and a unique key/id is required to define a stream'
};

const _throwError = (key) => {
  throw new Error(['Loro: ', _errors(key)].join(''))
};

// Dummy mapping function for streams if none defined
const _defaultMapFunction = (value) => value;

// Builds and appends query string to url if provided. Otherwise, url is returned.
const buildUrl = (options) => {
    let queryString = '';
    let url = options.url;
    let params = options.query;
    if ( params ) {
        let buildQuery = (query, key) => [query, key, '=', options[key],'&'].join('');
        queryString = Object.keys(params).reduce(buildQuery, '?').slice(0,-1);
    }
    return url + queryString;
};

// Create http request
const buildAsyncRequest = (options) => {
  let method = options.method || 'get';
  let url = options.query ? buildUrl(options) : options.url;
  let params = [url];
  !!options.data && params.push(options.data);
  return axios[method].apply(null, params);
};

// Convert http request into observable stream
const buildAsyncStream = (options) => {
  let request = buildRequest(options);
  return Rx.Observable.fromPromise(request)
};

/**** Store Constructor ****/
class Store {

  /* @descriptions Store Constructor
   * @param {String} name (optional)
   */
  constructor(name) {
    this.name = name || '';
    this._store = Immutable.Map();
  }


  /* @descriptions Add a new entry to the store
   * @param {Object} data
   *    @property {}
   */
  _add (key, data) {
    if ( arguments.length === 0 ) { throwError(0) }
    if ( arguments.length === 1 ) {
      key = data.key || data.id;
      if ( !key ) { throwError(0) }
    }
    if ( _store.has(key) ) {
      if ( data ) {
        return this.updateStore(key, data)
      } else {
        return _store.set(key, new Rx.BehaviorSubject(Immutable.Map(data)))
      }
    }
  }

  _update (data) {
    if ( arguments.length === 0 ) { _throwError(0) }
    if ( arguments.length === 1 ) {
      let key = data.key || data.id;
      if ( !key ) { _throwError(1) }
    }
    if ( _store.has(key) ) {
      // Let Immutable.js handle the merge
      let updatedModel = _store.get(key).value.merge(data);
      _store.get(key).onNext(updatedModel);
    } else {
      _store.set(key, new Rx.BehaviorSubject(Immutable.Map(data)));
    }
  }

/* Create an asynchronous stream which will be used to update the store.
 * @param {Object} options
 *    @property {String} url The API server endpoint used to build the stream
 *    @property {String} key OR id The unique identifier for the store
 *    @property {Object} query (optional) Query params to be appended to the url
 *    @property {...} data (optional) Data to be included in request
 *    @property {Function} map (optional) Mapping function to be applied to the
 */
  defineStream (options) {
    if ( !options || !options.url || (!options.key && !options.id ) ) {
      _throwError(2);
    }
    options.key = options.key || options.id;
    let subject = new Rx.Subject();
    let asyncStream = buildAsyncStream(options);
    let mapFn = options.map || _defaultMapFunction;
    let stream = subject
      .flatMap( data => asyncStream(data) )
      .map( data => { data.key = data.key || options.key })//Key required for store
      .map( mapFn );

    _asyncStreams.push(stream);

    return subject;
  }

  fly (map) {
    map = map || _defaultMapFunction;
    let metaStream = Rx.Observable.merge.apply(null, _asyncStreams);
    metaStream.subscribe( data => this.update(data) );
  }
}

export default {
  Store: Store
}
