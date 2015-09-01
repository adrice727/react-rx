import React from 'react';
import Radium from 'radium';
import R from 'ramda';

@Radium
export default class CardStat extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    var stat = this.props.data;
    return (
      <div style={styles.container}>
        <div style={[styles.base, styles.value]}>{stat.value}</div>
        <div style={[styles.base, styles.label]}>{stat.type}</div>
      </div>
    );
  }
}

var styles = {
  container: {
    backgroundColor: '#EEEEF0',
    height: '106px',
    width: '106px',
    float: 'right',
    margin: '0 4px',
    padding: '4.5px',
    borderRadius: '5px'
  },
  base: {
    textAlign: 'center'
  },
  value: {
    fontFamily: 'Roboto Slab, serif',
    fontSize: '38px',
    color: '#58585C',
    fontWeight: '100',
    lineHeight: '70px'
  },
  label: {
    fontFamily: 'Roboto, sans-serif',
    color: '#818287',
    textTransform: 'uppercase',
    fontSize: '11px',
    lineHeight: '14px'
  }
}
