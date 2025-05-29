import React from 'react';

const SecondsCounter = ({ seconds }) => {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-8xl font-light text-gray-800 mb-4 animate-pulse">
        {seconds}
        </div>
      <p className="text-xl text-gray-500 font-medium tracking-wider">
        SEGUNDOS TRANSCURRIDOS
      </p>
  </div>
  );
};

export default SecondsCounter;