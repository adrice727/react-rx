import axios from 'axios';
import Rx from 'rx-lite';
import R from 'ramda';

/* Constants */
const baseUrl = 'https://localhost/marketing/v1/';
const searchUrl = 'https://localhost/s/';

/* Private Methods */
var generateQueryString = (params) => {
  let buildString = (query, key) => [query, key, '=', params[key],'&'].join('');
  return R.reduce(buildString, '?', R.keys(params)).slice(0,-1);
}

var buildUrl = (relativeUrl, queryParams, search) => {
  var queryString = queryParams ? generateQueryString(queryParams) : '';
  return [search ? searchUrl : baseUrl, relativeUrl, queryString].join('');
}

/* Module */

var api = {

  get (relativeUrl, queryParams) {
    var url = buildUrl(relativeUrl, queryParams);
    return axios.get(url);
  },

  search (relativeUrl, queryParams) {
    var url = buildUrl(relativeUrl, queryParams, true);
    return axios.get(url);
  }

};

/* Export */

export default api;
