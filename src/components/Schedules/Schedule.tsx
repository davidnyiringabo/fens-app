import React from "react";
import "./schedule.css"
import moreDots from "../../assets/three-dots.svg"
import Modal from "../../Modals";


type NewType = string;

interface Props{
    tasks: task
}
interface task{
    time: string,
    task:string,
    duration:string
}

const Schedule:React.FC<Props> = ({tasks})=>{

  
    return(
       <>

            < div className="task">
                <h3 className="taskTime">{tasks.time}  <hr /></h3>
                <div className="single-task" style={{display:'block'}}>
                <h4 style={{display:'flex',justifyContent:'space-evenly'}}>{tasks.task}</h4>
                <h6 style={{textAlign:'center'}}>{tasks.duration}</h6>
                </div>
                < Modal />
            </div>
        </>
           
    )
}

export default Schedule