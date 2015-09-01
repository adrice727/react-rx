import React from 'react';
import Radium from 'radium';

@Radium
export default class ProjectNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='project-nav' style={styles.container}>
        <span style={styles.text}>Updated {this.props.lastUpdated} ago</span>
      </div>
    )
  }
}

var styles = {
  container: {
    height: '40px',
    background: '#ffffff',
    paddingLeft: '18px'
  },
  text: {
    fontSize: '12px',
    color: '#B0B1B5',
    fontStyle: 'italic',
    lineHeight: '30px',
    padding: '0 4.5px'
  }
};
