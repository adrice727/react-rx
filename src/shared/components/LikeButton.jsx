import React from 'react';
import Radium from 'radium';
import { likeProject as likeStream } from '../stores/ProjectStore';

@Radium
export default class LikeButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {liked: this.props.liked};
    this.likeProject.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({liked: props.liked})
  }

  likeProject() {
    likeStream(this.props.id);
  }

  render() {
    return (
      <button key='c1' style={[styles.button, this.state.liked && styles.liked]} onClick={this.likeProject.bind(this)}>
        <i key='c2' style={styles.icon} className="fa fa-thumbs-up"></i>
        <div key='c3' style={styles.label} >{this.state.liked ? 'Liked' : 'Like'}</div>
      </button>
    );
  }
}

var styles = {
  button: {
    position: 'absolute',
    height: '48px',
    width: '48px',
    margin: '8px',
    color: '#B0B1B5',
    border: '1px solid #B0B1B5',
    background: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      background: 'linear-gradient(to bottom, #65bfcf 0%,#229fbc 100%)',
      color: '#ffffff'
    }
  },
  liked: {
    color: '#229FBC',
    borderColor: '#229FBC'
  },
  icon: {
    fontSize: '19px',
    ':hover': {
      color: '#ffffff'
    }
  },
  label: {
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '.5px',
    fontWeight: '300',
    marginTop: '2px'
  }
}
