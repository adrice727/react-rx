import React from 'react';
import Radium from 'radium';

@Radium
export default class App extends React.Component {

  render() {
    return (
        <div>
            <h1 style={styles.header}>React + Rx</h1>
        </div>

    );
  }
}

var styles = {
  header : {
    width: '100%',
    margin: '0',
    backgroundColor: '#3f3f3f',
    color: '#00c1b6',
    textAlign: 'center',
    height: '60px',
    lineHeight: '60px',
    fontFamily: 'Raleway, sans-serif'
  }
};
