import React from 'react';
import Rx from 'rx-lite';
import SearchBox from '../../components/SearchBox';
import { projectRequestStream as searchQuery, projectResponseStream as searchResults } from '../../services/Search';


export default class ProjectSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { results: [] };
    // this.updateSearch.bind(this);
  }

  updateSearch (value) { searchQuery.onNext(value); }

  componentWillMount () {
    searchResults.subscribe( (response) => {
      console.log('project search getting values', response);
      this.setState({results: response});
    })
  }

  render() {
    return (
        <div>
          <SearchBox type='project' updateSearch={this.updateSearch} />

        </div>
    );
  }

  componentWillUnmount () {
    // projectStream.dispose();
  }
}
