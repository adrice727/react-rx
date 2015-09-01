import React from 'react';
import Radium from 'radium';

@Radium
export default class ProjectHeader extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.project.name}
      </div>
    );
  }
  
}
