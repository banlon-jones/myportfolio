import React from 'react';

function Hero(Props) {
  const { details } = Props;
  return (
    <div className="bg-purple">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 pt-5 col-12 text-white">
            <h3>
              Hi! My name is Banlon Jones. I’m a software developer with 3 years of experience
            </h3>
            <p className="mt-5">
              {details.brief_about}
            </p>
            <button type="button" className="btn btn-danger">
              Contact me
            </button>
          </div>
          <div className="col-md-6 p-4">
            <img className="rounded-circle img-thumbnail" src={details.image} alt="banlon jones smiling" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
