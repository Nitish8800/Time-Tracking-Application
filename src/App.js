import React, { useState } from "react";
import { Stopwatch } from "./Components/Stopwatch";
import "./App.css";

function App() {
  const [onStopWatch, setOnStopWatch] = useState({ hh: 0, mm: 0, ss: 0 });

  const updateStopwatchTimer = (timer) => {
    setOnStopWatch(timer);
  };

  return (
    <div className="App">
      <Stopwatch
        onStopWatch={onStopWatch}
        updateStopwatchTimer={updateStopwatchTimer}
      />
    </div>
  );
}

export default App;
