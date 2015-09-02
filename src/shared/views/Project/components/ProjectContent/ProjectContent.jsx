import React from 'react';
import Radium from 'radium';
import ProjectDetails from './components/ProjectDetails';
import ProjectTeam from './components/ProjectTeam';

@Radium
export default class ProjectContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='project-content' style={styles.container}>
        <ProjectDetails project={this.props.project}/>
        <ProjectTeam project={this.props.project}/>
      </div>
    );
  }
}

var styles = {
  container: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'top'
  }
};
