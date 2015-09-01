import React from 'react';
import Rx from 'rx-lite';
import SearchBox from '../../components/SearchBox';
import ProjectSearchResults from './components/ProjectSearchResults';
import { projectRequestStream as searchQuery, projectResponseStream as searchResults } from '../../services/Search';

export default class ProjectSearch extends React.Component {

  constructor(props) {
    super(props);
  }

  updateSearch (value) { searchQuery.onNext(value); }

  render() {
    return (
      <div>
        <SearchBox type='project' updateSearch={this.updateSearch} />
        <ProjectSearchResults />
      </div>
    );
  }

  componentWillUnmount () { searchQuery.onCompleted() }
}
