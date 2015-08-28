import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../Header/Header';
import api from '../../services/Api';

// api.get('association/S1xjmb5x0eoqivSzs210iuytlfj')
//   .then( (r) => console.log('yay!!!!', r));

export default class App extends React.Component {

  render() {
    return (
        <div>
            <Header/>
            <RouteHandler/>
        </div>
    );
  }
}
