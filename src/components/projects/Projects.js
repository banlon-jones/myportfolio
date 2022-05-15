import React from 'react';
import ProjectCard from '../../project-card/ProjectCard';

const Projects = () => {
  // eslint-disable-next-line no-unused-vars
  const projects = [
    {
      image: 'string',
      description: 'string',
      tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      repo: 'string',
      demo: 'string',
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-md-4 col-12">
          <ProjectCard />
        </div>
        <div className="col-md-4 col-12">
          <ProjectCard />
        </div>
        <div className="col-md-4 col-12">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
