import React from 'react';
import './hero.css';

function Hero(Props) {
  const { details } = Props;
  return (
    <div className="bg-purple">
      <div className="container-fluid m-5">
        <div className="row text-left p-12">
          <div className="col-md-6 mt-5 pt-5 col-12 text-white">
            <h2 className="text-xl">
              Hi,
              <br />
              I’m Jones,
              <br />
              Glad to see you!
            </h2>
            <p className="mt-5 details">
              {details.brief_about}
            </p>
            <a href="#contact" className="btn btn-lg btn-danger">
              Contact me
            </a>
          </div>
          <div className="col-md-6 p-4">
            <img className="img-fluid dp" src={details.image} alt="banlon jones smiling" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
