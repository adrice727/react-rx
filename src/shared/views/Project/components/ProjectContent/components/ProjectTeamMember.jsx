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
      <div className='projec-team-member' style={styles.container}>
        <img src={member.imageSrc} style={styles.image}/>
        <div>{member.name}</div>
        <div>{member.role}</div>
      </div>
    );
  }

}

var styles = {

}
