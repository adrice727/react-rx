import React from 'react';
import Radium from 'radium';
import Rx from 'rx-lite';
import { requestProject } from '../../stores/ProjectStore';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectNav from './components/ProjectNav/ProjectNav';

@Radium
export default class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {id: props.params.projectId, project: {} };
    this.projectStream = requestProject(this.state.id);
    this.subsciptions = [];
  }

  componentWillMount () {
    var stream = this.projectStream.subscribe( (project) => {
      this.setState({project: project});
    })
    this.subsciptions.push(stream);
  }

  render() {
    return (
      <div>
        <ProjectCard project={this.state.project}/>
        <ProjectNav project={this.state.project} lastUpdated={this.state.project.timeSinceModified}/>
      </div>
    );
  }

  componentWillUnmount () {
    this.subsciptions.forEach( subscription => subscription.dispose() )
  }
}
