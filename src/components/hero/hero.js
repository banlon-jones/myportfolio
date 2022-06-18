import React from 'react';

function Hero(Props) {
  const { details } = Props;
  return (
    <div className="bg-purple">
      <div className="container pt-5">
        <div className="row text-left">
          <div className="col-md-6 mt-5 pt-5 col-12 text-white">
            <h2>
              Hi, I’m Jones, Glad to see you!
            </h2>
            <p className="mt-5">
              {details.brief_about}
            </p>
            <button type="button" className="btn btn-danger">
              Contact me
            </button>
          </div>
          <div className="col-md-6 p-4">
            <img className="img-fluid" src={details.image} alt="banlon jones smiling" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
