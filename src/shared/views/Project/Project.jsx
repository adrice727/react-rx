import React from 'react';
import Radium from 'radium';
import Rx from 'rx-lite';
import { requestProject, projectStream } from '../../stores/ProjectStore';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectNav from './components/ProjectNav/ProjectNav';
import ProjectContent from './components/ProjectContent/ProjectContent';

@Radium
export default class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {id: props.params.projectId, project: {} };
    this.subsciptions = [];
  }

  componentWillMount () {
    var stream = requestProject(this.state.id)
      .subscribe( update => {
        let project = update.toJS(); // Convert Immutable Map to JS Object
        let existing = this.state.project;
        project !== existing && this.setState({project});
      })
    this.subsciptions.push(stream);
  }

  render() {
    return (
      <div>
        <ProjectCard project={this.state.project}/>
        <ProjectNav lastUpdated={this.state.project.timeSinceModified}/>
        <ProjectContent project={this.state.project}/>
      </div>
    );
  }

  componentWillUnmount () {
    this.subsciptions.forEach( subscription => subscription.dispose() )
  }
}
