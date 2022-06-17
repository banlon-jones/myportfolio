import React from 'react';
import ProjectCard from '../../project-card/ProjectCard';
import projs from '../../data/data';

const Projects = () => (
  <div>
    <div className="row">
      {
          // eslint-disable-next-line no-unused-vars
        projs.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div key={item.title} className="col-md-12 col-12">
            <ProjectCard project={item} />
          </div>
        ))
       }
    </div>
  </div>
);

export default Projects;
