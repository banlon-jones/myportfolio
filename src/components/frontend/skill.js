import React from 'react';
import redux from '../../images/cib_redux.svg';

function Skill() {
  return (
    <div className="col-6">
      <div className="card m-2 shadow-sm">
        <div className="card-body">
          <img src={redux} alt="react logo" />
          <h4> Redux </h4>
        </div>
      </div>
    </div>
  );
}

export default Skill;
