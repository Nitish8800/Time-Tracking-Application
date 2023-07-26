export const Lists = ({ lists, setLists }) => {
  const onClear = () => {
    setLists([]);
  };

  return (
    <div className="tasks br-12">
      <div className="tasks-header">
        <h3>Lists</h3>
        <button className="clear-tasks-btn br-4" onClick={onClear}>
          Clear All
        </button>
      </div>

      {lists.map((data, i) => (
        <div className="task br-8">
        {/* <button onClick={}>X</button> */}
          <h6>{data?.title}</h6>
          <p>{data?.description}</p>
          <h4>
            <span className="time-taken-label"> Time Taken : </span>
            {data?.totalTime.hh} : {data?.totalTime.mm} : {data?.totalTime.ss}
          </h4>
        </div>
      ))}
    </div>
  );
};
