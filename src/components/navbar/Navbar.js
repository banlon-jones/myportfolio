import React from 'react';
import './navbar.css';

function Navbar(Props) {
  const { name } = Props;
  return (
    <nav className="fixed-top shadow navbar navbar-expand-lg navbar-dark bg-purple">
      <div className="container">
        <h4 className="navbar-brand text-white">{name}</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
