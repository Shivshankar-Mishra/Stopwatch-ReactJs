import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [isRunning, setIsRunning] = useState(false);
  const handleStart = () => {
    setHour("00");
    setMinute("00");
    setSecond("00");
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleResume = () => {
    setIsRunning(true);
  };
  const handleReset = () => {
    setHour("00");
    setMinute("00");
    setSecond("00");
    setIsRunning(false);
  };
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSecond((prevSecond) => +prevSecond + 1);
        setMinute(+minute + Math.floor(second / 60));
        setHour(+hour + Math.floor(minute / 60));
        if(second > 59){setSecond(0)} 
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minute, second]);

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col gap-20 w-[55vw] h-[60vh] shadow-2xl shadow-orange-800 p-8 my-[15vh]">
        <div className="flex flex-row justify-center items-center gap-3 bg-black rounded-xl p-6">
          <span className="text-white text-2xl font-bold">{hour}</span>
          <span className="text-white text-2xl font-bold">:</span>
          <span className="text-white text-2xl font-bold">{minute}</span>
          <span className="text-white text-2xl font-bold">:</span>
          <span className="text-white text-2xl font-bold">{second}</span>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 p-4">
          {isRunning ? (
            <button
              onClick={handleStop}
              className="w-[20vw] h-[10vh] bg-red-600 hover:bg-red-400 text-white font-bold text-lg rounded-xl"
            >
              Stop
            </button>
          ) : (
            <button
              onClick={handleStart}
              className="w-[20vw] h-[10vh] bg-emerald-600 hover:bg-emerald-400 text-white font-bold text-lg rounded-xl"
            >
              Start
            </button>
          )}
          {isRunning ? null : (
            <button
              onClick={handleResume}
              className="w-[20vw] h-[10vh] bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg rounded-xl"
            >
              Resume
            </button>
          )}
          <button
            onClick={handleReset}
            className="w-[20vw] h-[10vh] bg-slate-700 hover:bg-slate-500 text-white font-bold text-lg rounded-xl"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;

/*
import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resumeStopwatch = () => {
    setIsRunning(true);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const pad = (value) => (value < 10 ? `0${value}` : value);

    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <div>
        {isRunning ? (
          <button onClick={stopStopwatch}>Stop</button>
        ) : (
          <button onClick={startStopwatch}>Start</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
        {isRunning ? null : (
          <button onClick={resumeStopwatch}>Resume</button>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;



*/
