import React from 'react';
import { RouteHandler } from 'react-router';


var styleHeaderMain = {
  color: 'orange',
  textAlign: 'center'
}

export default class App extends React.Component {

  render() {
    return (
        <div>
            <h1 style={styleHeaderMain}>React + Rx</h1>
            <RouteHandler/>
        </div>

    );
  }
}
