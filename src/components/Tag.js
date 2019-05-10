import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

const tagPropTypes = {
  tag: PropTypes.string.isRequired,
  changeFilterTag: PropTypes.func.isRequired
}

function Tag({ tag, changeFilterTag }) {

  const tagColors = {
    react: '#5d7eaa',
    redux: '#a664db',
    nodejs: '#219641',
    mongodb: '#2fbc8b',
    express: '#93e82c',
    api: '#c9c910',
    css: '#7fc1e2',
    flexbox: '#3da6e2',
    grid: '#3dc2e2',
    responsive: '#e2b931',
    ejs: '#9e7eba',
    rhea: '#fff',
    rest: '#a2bcd6',
    sass: '#cc6699',
    vanilla: '#ddcdbe',
    json: '#c0c444',
    PWA: '#fccb7b',
    typescript: '#294E80',
    styledcomponents: '#db7093',
    npm: '#fb3e44',
    storybook: '#ff4785',
    bootstrap: '#7952b3'
  }

  let tagColor = tagColors[tag] || '#c4c4c4';

  function handleTagClick(e) {
    changeFilterTag(tag)
  }

  return (
    <button
      className="Tag"
      onClick={handleTagClick}
      value={tag}
      style={{
        display: 'inline-block',
        background: tagColor,
        color: 'white',
        marginRight: '5px',
        padding: '2px 3px',
        borderRadius: '3px',
        border: 'none',
        outline: 'none'
      }}
    >{tag}</button>
  );
}

Tag.propTypes = tagPropTypes;

export default Tag;