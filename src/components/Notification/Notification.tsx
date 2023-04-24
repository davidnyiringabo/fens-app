import React from "react";
import "./notification.css"

interface Props{
    tasks: object[]
}

interface tasks{
    text: string
}

const Notifications:React.FC<Props> = ({tasks})=>{
    return(
        <>
            {tasks ?  tasks.map((task:any)=>{
                return (

                    <div className="notification">

                    
                     <h3>It's remaining for {task.text}</h3>
                
                    </div>)
                     
            }): (
                <h3>There are no notifications</h3>
            )}
        </>
    )
}

export default Notifications

