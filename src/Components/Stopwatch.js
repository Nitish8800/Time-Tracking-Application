import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

export const Stopwatch = ({
  onStopWatch,
  updateStopwatchTimer,
  saveButton,
}) => {
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [time, setTime] = useState("");

  const timer = () => {
    let stopwatchTimer = onStopWatch;
    stopwatchTimer.ss += 1;
    if (stopwatchTimer.ss > 60) {
      stopwatchTimer.ss = 0;
      stopwatchTimer.mm += 1;
    }
    if (stopwatchTimer.mm > 60) {
      stopwatchTimer.mm = 0;
      stopwatchTimer.hh += 1;
    }
    updateStopwatchTimer(stopwatchTimer);
  };

  const updateTime = () => {
    let getDate = new Date();
    let getSecond = getDate.getSeconds();
    let getMinute = getDate.getMinutes();
    let getHour = getDate.getHours();
    let getMeridiem = "AM";

    if (getSecond < 10) {
      getSecond = 0 + getSecond;
    }

    if (getHour === 0) {
      getHour = 12;
    }

    if (getHour > 12) {
      getHour = getHour - 12;
      getMeridiem = "PM";
    }

    setTime(getHour + ":" + getMinute + ":" + getSecond + " " + getMeridiem);
  };

  const startButton = () => {
    timer();
    setStart(true);
    setPause(false);
  };

  const pauseButton = () => {
    setStart(false);
    setPause(true);
  };

  useEffect(() => {
    const timerInterval = setTimeout(() => {
      if (start && !pause) {
        timer();
      }
    }, 1000);

    const updateTimerInterval = setTimeout(() => {
      updateTime();
    }, 1000);

    return () => {
      clearTimeout(timerInterval);
      clearTimeout(updateTimerInterval);
    };
  }, [time, onStopWatch]);

  const { hh, mm, ss } = onStopWatch;

  return (
    <>
      <div className="container">
        <h1>
          Time Tracking <br />
          Stop Watch
        </h1>
        <div className="shadow">
          <div>
            {" "}
            <div className="time">{time}</div>
            <div id="time">
              <span className="digit" id="hr">
                {hh}
                <span className="txt">Hr</span>:
              </span>

              <span className="digit" id="min">
                {mm}
                <span className="txt">Min</span>:
              </span>

              <span className="digit" id="sec">
                {ss}
              </span>
              <span className="txt">Sec</span>
            </div>
          </div>

          <div className="buttons">
            <button
              className="btn"
              id={start ? "disableButton" : "start"}
              onClick={startButton}
              disabled={start}
            >
              Start
            </button>
            <button
              className="btn"
              id={pause ? "disableButton" : "stop"}
              onClick={pauseButton}
              disabled={pause}
            >
              Pause
            </button>
            <button className="btn" id="save" onClick={saveButton}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
