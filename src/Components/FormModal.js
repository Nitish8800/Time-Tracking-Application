import React, { useState } from "react";

export const FormModal = ({ onStopWatch, setModal, onSave }) => {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const onCancel = () => {
    setModal(false);
  };

  const CloseModal = () => {
    setFormTitle("");
    setFormDescription("");
    onCancel();
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
          />

          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={formDescription}
            onInput={(event) => {
              setFormDescription(event.target.value);
            }}
          ></textarea>
          <div className="buttons">
            <button
              id="stop"
              className="btn"
              onClick={(event) => {
                event.preventDefault();
                CloseModal();
              }}
            >
              cancel
            </button>
            <button
              className="btn"
              id="save"
              onClick={(event) => {
                event.preventDefault();
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
