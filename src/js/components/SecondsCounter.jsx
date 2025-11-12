import React, { useEffect } from 'react';
import { useState } from 'react';
import clock from "../../img/clock.jpg";

const SecondsCounter = () => {

  const [seconds, setSeconds] = useState(0);
  const [formatSeconds, setFormatSeconds] = useState(['0', '0', '0', '0', '0', '0']);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const secondsString = String(seconds).padStart(6, '0');
    setFormatSeconds(secondsString.split(''));
  }, [seconds]);

  return (

    <div className="container-fluid">

      <div className="row align-items-center text-center">
        <div className="col bg-dark text-white p-3">
          <img className ="img-thumbnail" src={clock} />
        </div>
        <div className="col bg-dark text-white" style={{fontSize:'116px'}}>
          <p>{formatSeconds[0]}</p>
        </div>
        <div className="col bg-dark text-white" style={{fontSize:'116px'}}>
          <p>{formatSeconds[1]}</p>
        </div>
        <div className="col bg-dark text-white" style={{fontSize:'116px'}}>
          <p>{formatSeconds[2]}</p>
        </div>
        <div className="col bg-dark text-white" style={{fontSize:'116px'}}>
          <p>{formatSeconds[3]}</p>
        </div>
         <div className="col bg-dark text-white" style={{fontSize:'116px'}}>
          <p>{formatSeconds[4]}</p>
        </div>
        <div className="col bg-dark text-white" style={{fontSize:'116px'}}>
          <p>{formatSeconds[5]}</p>
        </div>
      </div>

    </div>

  );
};

export default SecondsCounter;