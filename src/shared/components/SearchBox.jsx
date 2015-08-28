import React from 'react';
import Search from '../services/Search';

export default class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.placeholder = `Search for ${this.props.type}`;
    this.state = { value : '' };
    this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({value: event.target.value});
  }

  render() {
    this.value = this.state.value;
    return (
      <div style={styles_searchBox}>
        <i style={styles_searchBoxIcon} className='fa fa-search'/>
        <input type='text'
               value={this.value}
               placeholder={this.placeholder}
               style={styles_searchBoxInput}
               onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

var styles_searchBox = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  margin: '10px auto',
  padding: '10px 0'
};

var styles_searchBoxInput = {
  height: '30px',
  lineHeight: '30px',
  fontFamily: 'Raleway, sans-serif',
  fontSize: '18px',
  padding: '0 30px',
  fontStyle: 'italic'
};

var styles_searchBoxIcon = {
  position: 'absolute',
  top: '18px',
  left: '35px'
};
