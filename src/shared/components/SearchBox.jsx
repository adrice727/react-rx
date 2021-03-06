import React from 'react';
import Rx from 'rx-lite';
import Radium from 'radium';
import { projectRequestStream as searchQuery } from '../services/Search';

@Radium
export default class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.placeholder = `Search for a ${this.props.type}`;
    this.handleChange.bind(this);
  }

  handleChange() {
    let value = event.target.value;
    this.setState({value});
    !!value && searchQuery.onNext(value);
  }

  render() {
    this.value = this.state.value;
    return (
      <div style={styles.searchBox}>
        <i style={styles.searchBoxIcon} className='fa fa-search'/>
        <input type='text'
               value={this.value}
               placeholder={this.placeholder}
               style={styles.searchBoxInput}
               onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }

  componentWillUnmount () {
    searchQuery.onCompleted();
  }
}


var styles = {
  searchBox : {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    margin: '10px auto',
    padding: '10px 0'
  },
  searchBoxInput : {
    width: '100%',
    height: '30px',
    lineHeight: '30px',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '18px',
    padding: '0 30px',
    fontStyle: 'italic'
  },
  searchBoxIcon : {
    position: 'absolute',
    top: '18px',
    left: '10px'
  }
}
