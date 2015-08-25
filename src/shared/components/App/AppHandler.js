import React from 'react';
import { RouteHandler } from 'react-router';
import api from '../../services/Api';


api.get('association/S1xjmb5x0eoqivSzs210iuytlfj')
  .then( (r) => console.log('yay!!!!', r));

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
