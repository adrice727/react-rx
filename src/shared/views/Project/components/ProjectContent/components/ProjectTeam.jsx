import React from 'react';
import Radium from 'radium';
import ProjectTeamMember from './ProjectTeamMember';

@Radium
export default class ProjectTeam extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let project = this.props.project;
    console.log(project);
    return (
      <div className='project-team' style={styles.container}>
        <div className='project-team-members' style={styles.section}>
          <div className='project-team-header' style={styles.header}>
            Team Members
            <span style={styles.count}>
              <i className="fa fa-users" style={styles.icon}></i>
              {project.team && project.team.length}
            </span>
          </div>
          <ul style={styles.teamList}>
            {project.team && project.team.map( member => <ProjectTeamMember member={member}/>)}
          </ul>
        </div>

        <div className='project-tags' style={styles.section}>
          <div className='project-tags-header' style={styles.header}>
            Key Terms
            <span style={styles.count}>
              <i className="fa fa-tags" style={styles.icon}></i>
              {project.team && project.team.length}
            </span>
          </div>
          <div className='project-tags-list' style={styles.tagList}>
            { project.tags && project.tags.map( (tag,i) => <span key={i} style={styles.tag}>{tag}</span>)}
          </div>
        </div>

      </div>
    );
  }

}

var styles = {
  container: {
    width: '320px',
    height: '419px',
    backgroundColor: '#EEEEF0',
    padding: '10px'
  },
  section: {
    marginTop: '20px'
  },
  header: {
    fontFamily: 'Roboto, serif',
    fontSize: '11px',
    color: '#B0B1B5',
    textTransform: 'uppercase',
    paddingBottom: '5px',
    borderBottom: 'solid 1px #CFCFCF'
  },
  count: {
    float: 'right',
    position: 'relative',
    top: '-5px',
    fontSize: '18px'
  },
  icon : {
    marginRight: '5px'
  },
  descriptionText: {
    color: '#818287',
    fontSize: '12px',
    padding: '8px 0'
  },
  teamList: {
    padding: '0'
  },
  tagList: {
    marginTop: '5px'
  },
  tag: {
    margin: '2px',
    padding: '2px 10px',
    fontSize: '10px',
    textTransform: 'uppercase',
    color: '#229FBC',
    border: '1px solid #229FBC',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ffffff'
    }
  }
}
