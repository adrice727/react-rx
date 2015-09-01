import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { getImageSrc } from '../../../services/Asset';

@Radium
export default class ProjectSearchCard extends React.Component {

  constructor(props) {
    super(props)
    this.project = this.props.project;
    this.imageUrl = getImageSrc(this.project, 'th');
  }

  render() {
    return (
      <li>
        <Link to='project' params={{projectId: this.project.id}} style={styles.projectCard}>
          <img style={styles.projectImage} src={this.imageUrl}/>
          <div style={styles.projectTitle}>{this.project.projectName}</div>
        </Link>
      </li>
    )
  }
}

var styles = {

  projectCard : {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    padding: '5px',
    border: '1px solid lightgrey',
    backgroundColor: '#efefef',
    textDecoration: 'none',
  },

  projectImage : {
    width: '20%',
    border: '1px solid lightgrey',
    backgroundColor: '#ffffff',
    padding: '15px'
  },

  projectTitle : {
    width: '80%',
    paddingLeft: '5%',
    fontSize: '2em',
    color: '#5a8bc8'
  }
}
