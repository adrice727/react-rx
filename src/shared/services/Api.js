import axios from 'axios';
import Rx from 'rx-lite';


const baseUrl = 'https://localhost/marketing/v1/';

var api = {};

var generateQueryString = (params) => {
  let buildString = (query, key) => [query, key, '=', params[key],'&'].join('');
  return Object.keys(params).reduce(buildString, '?').slice(0,-1);
}

var buildUrl = (relativeUrl, queryParams) => {

  var queryString = queryParams ? generateQueryString(queryParams) : '';
  return [baseUrl, relativeUrl, queryString].join('');

}

api.get = (relativeUrl, queryParams) => {

  var url = buildUrl(relativeUrl, queryParams);

  return axios.get(url);
}

// api.get = (relativeUrl, queryParams) => {
//
//   var url = buildUrl(relativeUrl, queryParams);
//
//   return Rx.DOM.ajax({url})
// }


export default api;
