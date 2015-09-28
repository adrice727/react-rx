import React from 'react';
import Rx from 'rx-lite';
import SearchBox from '../../components/SearchBox';
import ProjectSearchResults from './components/ProjectSearchResults';

export default class ProjectSearch extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBox type='project' />
        <ProjectSearchResults />
      </div>
    );
  }

}
