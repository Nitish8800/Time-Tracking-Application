import React, { useState, useEffect } from "react";
import { FormModal } from "./FormModal";

export const Stopwatch = ({ onStopWatch, updateStopwatchTimer, onSave }) => {
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [time, setTime] = useState("");
  const [modal, setModal] = useState(false);

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

  const saveButton = () => {
    setModal(true);
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

  //   const { hh, mm, ss } = onStopWatch;

  return (
    <>
      <div>{time}</div>
      <div>
        {onStopWatch.hh + " : " + onStopWatch.mm + " : " + onStopWatch.ss}
      </div>
      <div>
        <button onClick={startButton} disabled={start}>
          Start
        </button>
        <button onClick={pauseButton} disabled={pause}>
          Pause
        </button>
        <button onClick={saveButton}>Save</button>
      </div>

      {modal ? (
        <FormModal
          onStopWatch={onStopWatch}
          setModal={setModal}
          onSave={onSave}
        />
      ) : null}
    </>
  );
};
