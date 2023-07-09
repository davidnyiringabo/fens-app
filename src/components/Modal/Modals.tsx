import React from "react";
import "./modal.css";
import { useState } from "react";
import addDots from "../../assets/three-dots.svg";
import { toast } from "react-toastify";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const toastMessage = () => {
    toast.success("Action completed", {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  const closeModal = () => {
    toastMessage();
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        style={{ position: "absolute", backgroundColor: "none", zIndex: "99" }}
        className="checkTask"
      >
        <img src={addDots} className="model-dots-img"></img>
      </button>

      {isOpen && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <button
                className="close-modal"
                onClick={closeModal}
                style={{ borderRadius: "10px", borderColor: "#333" }}
              >
                close
              </button>

              <div className="modal-header">
                <h6> Mark as completed or delete</h6>
              </div>
              <div className="modalBody">
                <h4 className="taskConsidered">Task selected: </h4>

                <div className="modal-body-footer">
                  <button className="completed" onClick={closeModal}>
                    Mark as completed
                  </button>
                  <button className="delete" onClick={closeModal}>
                    Delete Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isOpen && <></>}
    </>
  );
}

export default Modal;
