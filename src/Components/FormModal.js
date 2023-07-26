import React, { useState } from "react";

export const FormModal = ({ onStopWatch, setModal, onSave }) => {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const onCancel = () => {
    setModal(false);
  };

  const clearAndCloseModal = () => {
    setFormTitle("");
    setFormDescription("");
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
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

          <div className="modal-btns">
            <button
              className="btn"
              onClick={(event) => {
                event.preventDefault();
                if (formTitle && formDescription) {
                  let data = {
                    title: formTitle,
                    description: formDescription,
                    totalTime: { ...onStopWatch },
                  };
                  onSave(data);
                  clearAndCloseModal();
                }
              }}
            >
              Save
            </button>
            <button
              className="btn"
              onClick={(event) => {
                event.preventDefault();
                clearAndCloseModal();
              }}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
