import React from 'react';
import { Card } from 'react-bootstrap';
import './project-card.css';

const ProjectCard = () => (
  <Card className="shadow my-4 align-left" style={{ width: '100%' }}>
    <div>
      <div>
        <Card.Img variant="top" src="https://banlon-jones.github.io/portfolio/images/Snapshoot1.png" />
      </div>
      <div>
        <Card.Body>
          <div className="card-title">
            <h3>Multi-Post Stories</h3>
          </div>
          <ul className="work-tags">
            <li>
              <button type="button" className="tag-button">html</button>
            </li>
            <li>
              <button type="button" className="tag-button">css</button>
            </li>
            <li>
              <button type="button" className="tag-button">javaScript</button>
            </li>
          </ul>
          <div>
            <p>
              A daily selection of privately personalized reads; no accounts or sign-ups required.
              A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
          </div>
          <div className="text-center">
            <button type="button" name="see-project" className="work-button">See Project</button>
            <button type="button" name="see-project" className="btn my-2">See Demo</button>
          </div>
        </Card.Body>
      </div>
    </div>
  </Card>
);

export default ProjectCard;
