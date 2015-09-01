import React from 'react';
import Radium from 'radium';


@Radium
export default class ProjectDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var agencies = this.props.project.agencies || [];
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>{this.props.project.projectName}</h2>
        <div>
          <span style={[styles.details, styles.label]}>Project Type:</span>
          <span style={[styles.details, styles.data]}>{this.props.project.type}</span>
        </div>
        <div>
          <span style={[styles.details, styles.label]}>Brand:</span>
          <span style={[styles.details, styles.data]}>{this.props.project.brand}</span>
        </div>
        <div>
          <span style={[styles.details, styles.label]}>Agency:</span>
          { agencies.map ( agency => <span style={[styles.details, styles.data, styles.link]}>{agency.name}</span>) }
        </div>
      </div>
    );
  }
}

var styles = {
  container: {
    display: 'inline-block',
    paddingLeft: '55px'
  },
  title: {
    margin: '0',
    fontFamily: 'Roboto Slab, serif',
    fontSize: '32px',
    fontWeight: '100',
    color: '#333',
    height: '45px',
    lineHeight: '45px'
  },
  details: {
    fontFamily: 'Roboto, san serif',
    fontSize: '11px',
    lineHeight: '14px',
    color: '#818287',
    textTransform: 'uppercase',
    display: 'inline-block',
  },
  label: {
    width: '100px',
    letterSpacing: '1px'
  },
  data: {
    color: '#000000'
  },
  link: {
    cursor: 'pointer',
    color: '#229FBC'
  }
}
