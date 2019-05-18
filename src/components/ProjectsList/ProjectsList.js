import React from 'react';
import Card from '../Card/Card';
import './ProjectsList.css';

function ProjectsList({projects, filterTag, changeFilterTag}) {
  return (
    <div className="ProjectsList wrapper">
      {projects.filter(project => (
        project.tags.join(' ').includes(filterTag.toLowerCase())
      ))
        .map(project => (
          <Card key={project.id} changeFilterTag={changeFilterTag} {...project} />
        ))}
    </div>
  );
}

export default ProjectsList;