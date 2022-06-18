import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/hero';
import Projects from './components/projects/Projects';

function App() {
  const owner = {
    name: 'Banlon Jones',
    email: 'banlonjones@gmail.com',
    brief_about: 'I’m a software developer! '
      + 'I can help you build a product, features or websites, Look through some of my work and experience! '
      + 'If you like what you see and have a project you need a developer, don’t hestiate to contact me.',
    image: 'http://banlonjones.tech/wp-content/uploads/elementor/thumbs/profile-picture-removebg-preview-pq645nhouftjwuiyhldg35ky0stey19vokibsy2r9k.png',
  };
  return (
    <div className="App">
      <Navbar name={owner.name} />
      <div>
        <Hero details={owner} />
      </div>
      {/* <div>
        <AboutMe />
      </div> */}
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
