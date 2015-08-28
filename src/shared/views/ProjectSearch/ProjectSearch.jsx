import React from 'react';
import { RouteHandler } from 'react-router';
import ProjectStream  from '../../services/Search';
import SearchBox from '../../components/SeachBox';


ProjectStream.subscribe( (response) => console.log(response) );

export default class App extends React.Component {

  render() {
    return (
        <div>
          <SearchBox search='projects'/>
        </div>
    );
  }
}
