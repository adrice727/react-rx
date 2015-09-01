import React from 'react';
import { projectResponseStream as searchResults } from '../../../services/Search';
import ProjectSearchCard from './ProjectSearchCard';

//TODO Find a more elegant way of dealing with subscriptions/disposals

export default class ProjectSearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.results = this.props.results;
    this.updateResults.bind(this)
    this.state = {results: []}
    this.subscriptions = [];
  }

  updateResults () { this.props.updateSearch(results) }

  // This is working
  componentWillMount () {
    var resultsStream = searchResults.subscribe( (results) => {
      this.setState({results: results});
    })
    this.subscriptions.push(resultsStream);
  }

  render() {
    return (
      <ul style={styles.resultsList}>
        { this.state.results.map( project => <ProjectSearchCard key={project.id} project={project} /> ) }
      </ul>
    )
  }

  componentWillUnmount () {
    this.subscriptions.forEach( subsciption => subsciption.dispose() )
  }
}

var styles = {
  resultsList : {
    width: '40%',
    margin: '0 auto',
    listStyle: 'none'
  }
}
