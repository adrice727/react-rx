import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { getImageSrc } from '../../../services/Asset'


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
        <Link to='project' params={{projectId: this.project.id}}
              style={styles.projectCard}
              onMouseOver={this.mouseOver}
              onMouseOut={this.mouseOut}>
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
    textDecoration: 'none'
  },

  projectImage : {
    width: '20%',
    border: '1px solid lightgrey',
    padding: '15px'
  },

  projectTitle : {
    width: '80%',
    paddingLeft: '5%',
    fontSize: '2em',
    color: '#5a8bc8'
  }
}

//
// coverImageDimensions: "[{"c":{"w":4369,"h":2458}},{"l":{"w":1280,"h":720}},{"m":{"w":960,"h":540}},{"s":{"w":640,"h":360}},{"th":{"w":320,"h":180}}]"
// coverImageId: "S1uznamt8mu48cS1fihyxn3f4l42"
// coverImageSizes: "c,l,m,s,th"
// id: "spk90484puyxS1bbu7tso1as74"
// numAwards: 0
// numCollaborators: 0
// numComments: 0
// numLikes: 0
// popularity: 0
// projectName: "adoifj"
