import React from 'react';
import Radium from 'radium';

@Radium
export default class ProjectDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var member = this.props.member;
    return (
      <div className='project-team-member' style={styles.container}>
        <img src={member.imageSrc} style={styles.image}/>
        <div style={styles.info}>
          <div style={styles.name}>{member.name}</div>
          <div style={styles.role}>{member.role}</div>
        </div>
      </div>
    );
  }

}

var styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0',
    padding: '4px 0'
  },
  image: {
    height: '60px',
    width: '60px',
    borderRadius: '50%',
  },
  info: {
    display: 'inline-block',
    marginLeft: '20px'
  },
  name: {
    fontSize: '18px',
    color: '#229FBC',
    marginBottom: '5px',
    cursor: 'pointer'
  },
  role: {
    fontSize: '11px',
    textTransform: 'uppercase'
  }
}
