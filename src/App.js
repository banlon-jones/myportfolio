import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/hero';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/Projects';

function App() {
  const owner = {
    name: 'Banlon Jones',
    email: 'banlonjones@gmail.com',
    brief_about: 'Hi! I`m Banlon Jones. I’m a software developer with 3 years of experience working with Java, React, and Angular I graduated from the College of Technology, the University of Buea with a B.Tech degree in software engineering and spent 3 years working with Java, React, Angular in a startup and later joined Microverse a remote software development program that uses pair programming and project building to teach development in HTML/CSS/Javascript, React, Ruby and ruby on rails.',
    image: 'https://avatars.githubusercontent.com/u/52419124?v=4',
  };
  return (
    <div className="App">
      <Navbar name={owner.name} />
      <div>
        <Hero details={owner} />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <div className="text-black text-center">
          <h3 className="m-4"> Projects </h3>
        </div>
        <div className="container">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
