import React, { useState } from "react";
import { Stopwatch } from "./Components/Stopwatch";
import "./App.css";
import { Lists } from "./Components/Lists";
import { FormModal } from "./Components/FormModal";

function App() {
  const [onStopWatch, setOnStopWatch] = useState({ hh: 0, mm: 0, ss: 0 });
  const [lists, setLists] = useState([]);
  const [modal, setModal] = useState(false);

  const updateStopwatchTimer = (timer) => {
    setOnStopWatch(timer);
  };

  const saveButton = () => {
    setModal(true);
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
        saveButton={saveButton}
      />
      <Lists setModal={setModal} setLists={setLists} lists={lists} />

      {modal ? (
        <FormModal
          onStopWatch={onStopWatch}
          setModal={setModal}
          onSave={onSave}
        />
      ) : null}
    </div>
  );
}

export default App;
