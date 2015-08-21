import React from 'react';
import { RouteHandler } from 'react-router';
// import './app.scss';

// var RouteHandler = Router.RouteHandler;

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
