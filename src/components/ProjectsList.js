import React, { Component } from 'react';
import Card from './Card.js';
import './ProjectsList.css';

class ProjectsList extends Component {
  render() {
    return (
      <div className="ProjectsList wrapper">
        {this.props.projects.filter(project => (
          project.tags.join(' ').includes(this.props.filterTag.toLowerCase())
        ))
          .map(project => (
            <Card key={project.id} changeFilterTag={this.props.changeFilterTag} {...project} />
          ))}
      </div>
    );
  }
}

export default ProjectsList;