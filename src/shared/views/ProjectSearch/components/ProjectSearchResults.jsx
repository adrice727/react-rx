import React from 'react';
import ProjectSearchCard from './ProjectSearchCard';

export default class ProjectSearchResults extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillUpdate(props, state) {
    // console.log(props)
  }

  render() {
    return (
      <ul>
        { this.props.results.map( project => <ProjectSearchCard project={project} /> ) }
      </ul>
    )
  }
}
