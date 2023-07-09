import React from "react";
import "./schedule.css"
import "../Modal/modal.css"
import moreDots from "../../assets/three-dots.svg"
import Modal from "../Modal/Modals";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props{
    tasks: task
}
interface task{
    id: string,
    time: string,
    task:string,
    duration:string
}

const Schedule:React.FC<Props> = ({tasks})=>{
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
    //   toastMessage();
      setIsOpen(false);
    };
    return(
       <>

            < div className="task">
                <h3 className="taskTime">  <hr /></h3>
                <div className="single-task" style={{display:'block'}}>
                    <h4 style={{display:'flex',justifyContent:'space-evenly'}}>{tasks.task}</h4>
                    <h6 style={{textAlign:'center'}}>{tasks.time}</h6>
                    {/* < Modal /> */}
                    <img src={moreDots} className="model-dots-img" onClick={()=> setIsOpen(true)}/>
                </div>
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
            </div>
        </>
           
    )
}

export default Schedule