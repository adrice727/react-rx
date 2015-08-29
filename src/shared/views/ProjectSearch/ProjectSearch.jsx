import React from 'react';
import Rx from 'rx-lite';
import SearchBox from '../../components/SearchBox';
import { projectResponseStream as projectStream } from '../../services/Search';
import ProjectSearchResults from './components/ProjectSearchResults';

export default class ProjectSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { results: [] };
  }


  componentWillMount () {
    projectStream.subscribe( (response) => {
      console.log('project search getting values', response);
      this.setState({results: response});
    })
  }

  render() {
    return (
        <div>
          <SearchBox type='project' />
          <ProjectSearchResults results={this.state.results} />
        </div>
    );
  }

  componentWillUnmount () {
    // projectStream.dispose();
  }
}
