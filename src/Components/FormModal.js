import React, { useState } from "react";

export const FormModal = ({ onStopWatch, setModal, onSave }) => {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const CloseModal = () => {
    setFormTitle("");
    setFormDescription("");
    setModal(false);
  };

  return (
    <>
      <div className="modal">
        <h2>Save The Task</h2>
        <form action="">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={formTitle}
            onInput={(event) => {
              setFormTitle(event.target.value);
            }}
            required
          />

          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            rows="12"
            value={formDescription}
            onInput={(event) => {
              setFormDescription(event.target.value);
            }}
            required
          />
          <div className="buttons">
            <button
              id="stop"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                CloseModal();
              }}
            >
              cancel
            </button>
            <button
              className="btn"
              id="save"
              onClick={(e) => {
                e.preventDefault();
                if (formTitle && formDescription) {
                  let data = {
                    title: formTitle,
                    description: formDescription,
                    totalTime: { ...onStopWatch },
                  };
                  onSave(data);
                  CloseModal();
                }
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
