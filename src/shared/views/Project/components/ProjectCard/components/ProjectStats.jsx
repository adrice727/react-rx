import React from 'react';
import Radium from 'radium';

@Radium
export default class ProjectStats extends React.Component {

  constructor(props) {
    super(props);
    console.log('pdpdpdp', props);
  }
  render() {
    var stats = this.props;
    return (
      <div>
      </div>
    );
  }
}
