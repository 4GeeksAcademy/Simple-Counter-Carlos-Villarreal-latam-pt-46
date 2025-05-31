import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = ({ seconds }) => {
  
  return (
  
      <div className="container">
      <h1 className="bg-dark text-white px-3 py-2 rounded gap-3 m-2"><FontAwesomeIcon icon={faClock} />
         <div className="row col-sm">
      {seconds}
      <p className="text-xl text-gray-400 font-medium tracking-wider">
      SEGUNDOS TRANSCURRIDOS
      </p>
    </div>
      </h1>
    </div>
    );
  };

export default SecondsCounter;