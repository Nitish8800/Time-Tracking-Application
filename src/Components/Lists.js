import "./Stopwatch.css";

export const Lists = ({ lists, setLists, setModal }) => {
  const onClear = () => {
    setLists([]);
  };

  return (
    <>
      <div className="shadow container contain">
        <div className="listData">
          <h3>List Task Data</h3>
          <button className="clearAll" onClick={onClear}>
            Clear All
          </button>
        </div>
        {lists?.map((data, i) => (
          <div className="taskList">
            <h4>
              Title ~ <span>{data?.title}</span>
            </h4>
            <h4>
              Time Taken ~ &nbsp;
              <span>
                {data?.totalTime.hh} : {data?.totalTime.mm} :{" "}
                {data?.totalTime.ss}{" "}
              </span>
            </h4>
            <h4>
              Description ~ <span>{data?.description}</span>
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};
