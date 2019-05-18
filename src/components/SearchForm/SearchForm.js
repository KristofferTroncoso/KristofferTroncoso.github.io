import React from 'react';
import './SearchForm.css';

function SearchForm({filterTag, clearFilterTag, handleChange, projects}) {
  return (
    <div className="SearchSection wrapper">
      <form className="SearchForm" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          className="SearchForm__input"
          placeholder="Filter projects by tag"
          value={filterTag}
          onChange={handleChange}
        />
        <button className="xbutton" style={{ border: 'none', background: 'inherit', outline: 'none' }} onClick={e => clearFilterTag()}>X</button>
      </form>      
      <div className="showing">
        Showing {projects.filter(p => p.tags.join(' ').includes(filterTag.toLowerCase())).length} of {projects.length} projects
      </div>    
    </div>
  );
}

export default SearchForm;