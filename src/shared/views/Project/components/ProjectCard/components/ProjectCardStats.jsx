import React from 'react';
import Radium from 'radium';
import R from 'ramda';
import CardStat from '../../../../../components/CardStat';
import { buildStats } from '../../../../../utilities/Utilities';

@Radium
export default class ProjectCardStats extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    var stats = buildStats(this.props.stats);
    return (
      <div style={styles.container}>
        { stats.map( stat => <CardStat data={stat}/> ) }
      </div>
    );
  }
}

var styles = {
  container: {
    float: 'right'
  }
};
