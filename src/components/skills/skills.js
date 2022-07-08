import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './skills.css';

function Skills() {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6 col-12">
          <div>
            <h1>
              Skill &
              {' '}
              <br />
              Experience
            </h1>
          </div>
          <div>
            <p className="exp">
              Hi! My name is Banlon Jones.
              I’m an intermediate software developer with 4 years of experience working
              with Java, Springboot, Ruby on Rails, Nodejs, React, and Angular
              I graduated from the College of Technology, the University of
              Buea with a B.Tech degree in software engineering.

              <br />
              I would love to be a part of your team as a software developer.
              I will love to sit down with you this week to talk about what I
              could bring to your development team,

            </p>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="mt-2">
            <h5>Front-end </h5>
            <ProgressBar animated now={100} />
          </div>
          <div className="mt-2">
            <h5> React & Redux </h5>
            <ProgressBar animated now={100} />
          </div>
          <div className="mt-2">
            <h5> Angular </h5>
            <ProgressBar animated now={94} />
          </div>
          <div className="mt-2">
            <h5> Unit Testing </h5>
            <ProgressBar animated now={100} />
          </div>
          <div className="mt-2">
            <h5> Pair Programming </h5>
            <ProgressBar animated now={100} />
          </div>
          <div className="mt-2">
            <h5> Ruby on rails </h5>
            <ProgressBar animated now={90} />
          </div>
          <div className="mt-2">
            <h5> Node JS </h5>
            <ProgressBar animated now={90} />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-body">
              <h3> Beta Tester </h3>
              <small>Adipster Tech</small>
              <br />
              <span>2019 - 2021</span>
              <div>
                exceeded departmental KPIs by 20% for 5 months in a row and got a $200 rise.
                Set up and trained staff of 3 on how to review javascript projects and code
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-body">
              <h3> Full stack developer/ DevOps </h3>
              <small>Go-Groups</small>
              <br />
              <span>2021 - present</span>
              <div>
                Gained a reputation for working well on a team, receiving a ‘Team Player ’ award.
                Praised for the ability to solve difficult problems independently and efficiently.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-body">
              <h3> Student Mentor (Volunteer) </h3>
              <small>Microverse</small>
              <br />
              <span>2022 - present</span>
              <div>
                Mentoring three junior web developers, providing technical support
                through code reviews.
                <br />
                Providing advice and tips on how to maintain motivation to maintain
                longevity in the program.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
