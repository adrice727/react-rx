import React from 'react';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
        <div>
            <h1>React + Rx</h1>
            <RouteHandler/>
        </div>

    );
  }
}
