import React from 'react';
import Radium from 'radium';
import Rx from 'rx-lite';
import { requestProject } from '../../stores/ProjectStore';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectNav from './components/ProjectNav/ProjectNav';
import ProjectContent from './components/ProjectContent/ProjectContent';

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
        <ProjectNav lastUpdated={this.state.project.timeSinceModified}/>
        <ProjectContent project={this.state.project}/>
      </div>
    );
  }

  componentWillUnmount () {
    this.subsciptions.forEach( subscription => subscription.dispose() )
  }
}
