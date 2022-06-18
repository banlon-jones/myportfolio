import React, { useState } from 'react';
import './project-card.css';
import Modal from 'react-bootstrap/Modal';

const ProjectCard = (Props) => {
  const { project } = Props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="card text-left m-4">
        <div className="card-body p-3">
          <div className="row">
            <div className="col-md-6">
              <img src={project.cover} alt="project preview" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h3>{project.title}</h3>
              <div className="d-flex">
                <h5 className="p-2 bg-lightBlue rounded">
                  {' '}
                  {project.organization}
                  {' '}
                </h5>
                <span className="p-2">
                  {project.role}
                  {' '}
                  -
                  {' '}
                </span>
                <span className="p-2">
                  {
                    project.year
                  }
                </span>
              </div>
              <div>
                <p className="m-2">
                  {`${project.description.slice(0, 200)} ...`}
                </p>
              </div>
              <div>
                <ul className="work-tags">
                  {
                    project.stack.map((item) => (
                      <li key={item}>
                        <button type="button" className="tag-button">{item}</button>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <button type="button" className="work-button mb-5" onClick={handleShow}>
                See project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-12">
                <div className="p-2">
                  <div className="d-flex">
                    <h5 className="p-2 bg-lightBlue rounded shadow-sm">
                      {' '}
                      {project.organization}
                      {' '}
                    </h5>
                    <span className="p-2">
                      {project.role}
                      {' '}
                      -
                      {' '}
                    </span>
                    <span className="p-2">
                      {
                        project.year
                      }
                    </span>
                  </div>
                </div>
                <div>
                  <img src={project.cover} alt="caption" className="img-fluid" />
                </div>
              </div>
            </div>
            <div>
              <div className="col-12">
                <div className="p-2">
                  <div>
                    <ul className="work-tags">
                      {
                        project.stack.map((item) => (
                          <li key={item}>
                            <button type="button" className="tag-button">{item}</button>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="py-2">
                    <p>
                      {
                        project.description
                      }
                    </p>
                  </div>
                  <div className="py-3">
                    <a href={project.demo} className="work mt-5" target="_blank" rel="noreferrer">
                      See Demo
                    </a>
                    <a href={project.repo} className="work my-5 mx-2" target="_blank" rel="noreferrer">
                      See Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectCard;
