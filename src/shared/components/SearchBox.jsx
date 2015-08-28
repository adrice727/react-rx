import React from 'react';
import Search from '../../services/Search';

export default class SearchBox extends React.Component {

  render() {
    return (
        <div>
          <h2>{this.props.search}</h2>
        </div>
    );
  }
}
