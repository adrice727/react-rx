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
          <h2 style={styles.text}>React + Rx</h2>
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
    backgroundColor: '#282829',
    color: '#00c1b6',
    height: '60px'
  },
  logo : {
    height: '60px',
    width: 'auto'
  },
  text : {
    position: 'absolute',
    top: '0px',
    right: '60px',
    margin: '0',
    fontFamily: 'Raleway, sans-serif',
    lineHeight: '60px',
  }
};
