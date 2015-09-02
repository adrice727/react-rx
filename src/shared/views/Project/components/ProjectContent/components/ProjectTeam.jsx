import React from 'react';
import Radium from 'radium';

@Radium
export default class ProjectTeam extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='projectTeam' style={styles.container}>
        <div className='project-team-members' style={styles.descriptionContainer}>
          <div className='project-team-members-header' style={styles.descriptionHeader}>
            Team Members
            <i className="fa fa-users" style={styles.descriptionIcon}></i>
          </div>
          <div className='project-details-description-header' style={styles.descriptionText}>

          </div>
          <div className='project-team-members-header' style={styles.descriptionHeader}>
            Key Terms
            <i className="fa fa-tags" style={styles.descriptionIcon}></i>
          </div>
          <div className='project-details-description-header' style={styles.descriptionText}>

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
  descriptionContainer: {
    marginTop: '20px'
  },
  descriptionHeader: {
    fontFamily: 'Roboto, serif',
    fontSize: '11px',
    color: '#B0B1B5',
    textTransform: 'uppercase',
    paddingBottom: '5px',
    borderBottom: 'solid 1px #CFCFCF'
  },
  descriptionIcon: {
    float: 'right',
    marginRight: '10px',
    position: 'relative',
    top: '-5px',
    fontSize: '18px'
  },
  descriptionText: {
    color: '#818287',
    fontSize: '12px',
    padding: '8px 0'
  }
}
