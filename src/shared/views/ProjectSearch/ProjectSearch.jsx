import React from 'react';
import { RouteHandler } from 'react-router';
import ProjectStream  from '../../services/Search';
import SearchBox from '../../components/SearchBox';


ProjectStream.subscribe( (response) => console.log(response) );

export default class ProjectSearch extends React.Component {

  render() {
    return (
        <div>
          <SearchBox type='projects'/>
        </div>
    );
  }
}
