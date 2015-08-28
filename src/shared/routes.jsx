import { Route } from 'react-router';
import React from 'react';
import App from './views/App/App';
import ProjectSearch from './views/ProjectSearch/ProjectSearch';

export default (
  <Route handler={ App }>
    <Route path="projects" handler={ProjectSearch}/>
  </Route>

);
