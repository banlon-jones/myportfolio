import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import fullpic from '../../images/full-pic.png';
import './aboutme.css';

function AboutMe() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          <img className="img-thumbnail shadow rounded-2 over" src={fullpic} alt="jones smiling" />
        </div>
        <div className="col-12 col-md-8">
          <div>
            <h1 className="card-title align-left p-3 display-5">
              About Me
            </h1>
            <p className="align-left">
              I’m a software developer with 3 years of
              experience working with Java, React,
              and Angular I graduated from the College of Technology, the University of Buea with a
              B.Tech degree
              {/* eslint-disable-next-line max-len */}
              in software engineering and spent 3 years working with Java, React, Angular in a startup
              and later
              joined Microverse a remote software development program that uses
              pair programming and project building
              to teach development in HTML/CSS/Javascript, React, Ruby and ruby on rails.
            </p>
          </div>
          <div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Tabs defaultActiveKey="skills" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="skills" title="Main skills">
                hello
              </Tab>
              <Tab eventKey="achievements" title="Achievements">
                hi
              </Tab>
              <Tab eventKey="experience" title="Experience">
                yes
              </Tab>
              <Tab eventKey="education" title="Education & certification">
                yeah
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
