import React from 'react';
import './skills.css';

function Skills() {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-6 col-12">
          <div>
            <h1>
              Skill &
              <br />
              Experience
            </h1>
          </div>
          <div>
            <p>
              I graduated from the College of Technology, the University of
              Buea with a B.Tech degree in software engineering with 4 years of experience working.
              <br />
              <p>
                <strong>Front-End: </strong>
                JavaScript, React, Redux, jQuery, Jest, HTML5,
                CSS3, Angular, Typescript, UX/UI, Figma
              </p>
              <p>
                <strong>Back-End: </strong>
                Rails, java, SpringBoot, Nodejs, MySQL, Postgresql
              </p>
              <p>
                <strong> Tools & Methods: </strong>
                Git, GitHub, Heroku, Netlify,  RSpec, Minitest, Capybara,
                TDD, Chrome Dev Tools, Jest
              </p>
              <p>
                <strong> DevOps tools: </strong>
                Travis Ci, Concourse CI, Docker, AWS, Digital Oceans
              </p>
              <p>
                <strong> Professional:</strong>
                Remote, Pair-Programming, Teamwork, Mentoring
              </p>
            </p>
          </div>
          <div className="card rounded mb-2">
            <div className="card-body">
              <h3> Mentor (Volunteer) </h3>
              <small>Microverse</small>
              <br />
              <span>Nov 2022</span>
              <div>
                {/* eslint-disable-next-line max-len */}
                - Mentoring three junior web developers, providing technical support through code reviews.
                <br />
                {/* eslint-disable-next-line max-len */}
                - Providing advice and tips on how to maintain motivation to maintain longevity in the program.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="card rounded mb-2">
            <div className="card-body">
              <h3> Full stack developer/ DevOps </h3>
              <small>Go-Groups Ltd</small>
              <br />
              <span>Feb 2021 - present</span>
              <div>
                - Gained a reputation for working well on a team, receiving a ‘Team Player ’ award.
                <br />
                - Praised for the ability to solve difficult problems independently and efficiently.
              </div>
            </div>
          </div>
          <div className="card rounded mb-2">
            <div className="card-body">
              <h3> Full-stack / Beta tester </h3>
              <small>Adipster tech</small>
              <br />
              <span>Sep 2019 - Feb 2021</span>
              <div>
                - Exceeded departmental KPIs by 20% for 5 months in a row.
                <br />
                - Set up and trained staff of 3 on how to review JavaScript projects and code.
              </div>
            </div>
          </div>
          <div className="card rounded mb-2">
            <div className="card-body">
              <h3> Software Engineer </h3>
              <small> Go-Groups Ltd</small>
              <br />
              <span>Sep 2019 - Feb 2021</span>
              <div>
                {/* eslint-disable-next-line max-len */}
                - Developed or implemented new procedures for sending bulk SMS to customers and potential clients to advertise brands and products.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
