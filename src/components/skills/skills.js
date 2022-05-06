import React from 'react';
import Skill from '../frontend/skill';

function Skills() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-4">
          <h4> Frontend </h4>
          <div className="row">
            <Skill />
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <h4> Backend </h4>
          <div className="row">
            <Skill />
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <h4> DevOps tools </h4>
          <div className="row">
            <Skill />
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <h4> Tools & Methods </h4>
          <div className="row">
            <Skill />
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <h4> Professional skills </h4>
          <div className="row">
            <Skill />
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <h4> soft skills </h4>
          <div className="row">
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
