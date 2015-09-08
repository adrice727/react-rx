import React from 'react';
import Radium from 'radium';
import LikeButton from '../../../../components/LikeButton';
import ProjectDetails from './components/ProjectDetails';
import ProjectStats from './components/ProjectStats';
import { projectLikeStream } from '../../../../services/Like';

@Radium
export default class ProjectCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='project-card' style={styles.card}>
        <LikeButton type={'project'}
          id={this.props.project.id}
          liked={this.props.project.likedByCurrentUser} />
        <ProjectDetails project={this.props.project} />
        <ProjectStats type='project' id={this.props.project.id} stats={{views: this.props.project.numViews, likes: this.props.project.numLikes}} />
      </div>
    );
  }
}

var styles = {
  card: {
    width: '100%',
    minHeight: '142px',
    backgroundColor: '#F5F4F6',
    padding: '18px 18px 9px',
    boxSizing: 'border-box'
  }
}
