import React, { useState } from "react";
import { Stopwatch } from "./Components/Stopwatch";
import "./App.css";
import { Lists } from "./Components/Lists";

function App() {
  const [onStopWatch, setOnStopWatch] = useState({ hh: 0, mm: 0, ss: 0 });
  const [lists, setLists] = useState([]);

  const updateStopwatchTimer = (timer) => {
    setOnStopWatch(timer);
  };

  const onSave = (data) => {
    setLists([...lists, data]);
  };

  console.log(lists);

  return (
    <div className="App">
      <Stopwatch
        onStopWatch={onStopWatch}
        updateStopwatchTimer={updateStopwatchTimer}
        onSave={onSave}
      />
      <Lists setLists={setLists} lists={lists} />


      
    </div>
  );
}

export default App;
