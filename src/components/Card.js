import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Tag from './Tag';


function Card({ title, url, sourceCodeUrl, liveDemoUrl, screenshot, description, tags, changeFilterTag }) {
  return (
    <div className="Card">
      <div
        className="Card__top"
      >
        <div
          className="Card__screenshot"
          style={{ background: `url(${screenshot})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
        >
          <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer"><p className="Card__description">{description}</p></a>
        </div>
      </div>
      <div className="Card__bottom">
        <h2 className="Card__title">{title}</h2>
        <div className="Tags__list">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} changeFilterTag={changeFilterTag} />
          ))}
        </div>
        <div style={{ textAlign: 'right', margin: '0', color: '#4c4c4c' }}>
          <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#4c4c4c', fontSize: '90%', margin: '0 2px' }}>Source</a>|
            <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#4c4c4c', fontSize: '90%', margin: '0 2px' }}>Live Demo</a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  sourceCodeUrl: PropTypes.string,
  liveDemoUrl: PropTypes.string,
  screenshot: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  changeFilterTag: PropTypes.func
}

Card.defaultProps = {
  title: 'Default Title',
  sourceCodeUrl: 'https://www.google.com',
  liveDemoUrl: 'https://www.google.com',
  screenshot: 'https://s3.amazonaws.com/ktpublic-pics/reactTodoAppScreenshot.JPG',
  description: 'Hello this is the default description',
  tags: ['no', 'tags', 'available'],
  changeFilterTag: () => console.log('hello')
}

export default Card;