import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  render() {
    return (
      <div className="wrapper" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline' }}>
        <form className="SearchForm" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            className="SearchForm__input"
            placeholder="Filter projects by tag"
            value={this.props.filterTag}
            onChange={this.props.handleChange}
          />
          <button style={{ border: 'none', background: 'inherit', outline: 'none' }} onClick={e => this.props.clearFilterTag()}>X</button>
        </form>      
        <div className="showing">
          Showing {this.props.projects.filter(p => p.tags.join(' ').includes(this.props.filterTag.toLowerCase())).length} of {this.props.projects.length} projects
        </div>    
      </div>
    );
  }
}

export default SearchForm;