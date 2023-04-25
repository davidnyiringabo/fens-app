import React from 'react'
import './Notification_popup.css'
import { Link } from 'react-router-dom'

interface Props{
    tasks: object[]
}

interface tasks{
    text: string
}

const Notification_popup: React.FC<Props> = ({tasks}) => {
    return (
        <div className="notification_popup">
            {tasks ?  tasks.map((task:any)=>{
                return (

                    <div className="notification_popup_item">

                        <p>{task.text}</p>
                
                    </div>)
                     
            }): (
                <h3>There are no notifications</h3>
            )}
            <Link to="#" className='link'>view more</Link>
        </div>
    )
}

export default Notification_popup;