import React from 'react';
import Radium from 'radium';

@Radium
export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div style={styles.header}>
          <img style={styles.logo} src={'http://wpcdn.shocase.com/wp-content/uploads/2014/05/shocase_logo_retina.png'}/>
          <h2 style={styles.text}>React + RxJS</h2>
        </div>

    );
  }
}

var styles = {
  header : {
    width: '100%',
    position: 'relative',
    margin: '0',
    padding: '0 20px',
    borderTop: '3px solid #EC2127',
    backgroundColor: '#282829',
    height: '50px'
  },
  logo : {
    height: '50px',
    width: 'auto'
  },
  text : {
    position: 'absolute',
    top: '0px',
    right: '60px',
    margin: '0',
    fontFamily: 'Raleway, sans-serif',
    color: '#ec2127',
    lineHeight: '50px',
  }
};
