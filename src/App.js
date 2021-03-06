import './App.css';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-XMK4D74F5V');
    ReactGA.pageview(window.location.pathname);
  });
  const owner = {
    name: 'Banlon Jones',
    email: 'banlonjones@gmail.com',
    brief_about: 'I’m a software developer. I can help you build a product, features or website. Look through some of my work and experience.\n'
      + 'If you like what you see and have a project you need a developer don’t hesitate to contact me.',
    image: 'https://res.cloudinary.com/dbb6u0ke3/image/upload/v1655556550/portfolio/profile-picture-removebg-preview_fs15sp.png',
  };
  return (
    <div className="App">
      <Navbar name={owner.name} />
      <div id="about">
        <Hero details={owner} />
      </div>
      <div id="skills">
        <div className="container-10 p-1">
          <Skills />
        </div>
      </div>
      <div>
        <div className="text-black text-center">
          <h1> Projects </h1>
        </div>
        <div className="container-10" id="projects">
          <Projects />
        </div>
        <div className="text-black text-center">
          <a href="https://github.com/banlon-jones" target="_blank" className="btn btn-lg btn-primary" rel="noreferrer"> More Projects </a>
        </div>
      </div>
      <footer className="bg-purple" id="contact">
        <div className="p-5 mt-4">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <Contact />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
