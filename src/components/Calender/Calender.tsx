import React, { MouseEventHandler } from "react";
import Days from "./Days";
import "./calender.css"
import plus from "../../assets/plus.svg"
import Schedule from "../Schedules/Schedule";


   
    interface Props {
        month: string,
        openAddSchedule: MouseEventHandler
        day: number,
        date: number
    }
    
 const Calender: React.FC<Props>=({month,date,day,openAddSchedule})=>{
    const tasks={
        time:'9:00 AM',
        task:'Board meeting',
        duration:'9:00AM to 10:30AM'
    }
    
    return(
        <div className="calender-placeholder" style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'10px'}}>
           <div className="calender-date" style={{backgroundColor:'#F1EEF6',width:'95%',height:'30%',borderRadius:'10px'}}>
            <div className="calender-date-top" style={{display:'flex',justifyContent:'space-between',paddingTop:'7px'}}>
            <h3 style={{fontSize:'15px'}}>{month}</h3>
            <button className="addaSchedule" onClick={openAddSchedule} style={{width:'40%',height:'2.9rem',display:'flex',cursor:'pointer'}}><img src={plus} style={{ width: '15%'}} /><h6 style={{fontSize:'15px'}}> Schedule</h6></button>
            </div>
            <div className="calender-main">
                < Days date={date-1}  day={day-1}  color=""/>
                < Days date={date} day={day}  color="#10926E"/>
                < Days date={date+1} day={day+1}  color=""/>
                < Days date={date+2} day={day+2}  color=""/>
                < Days date={date+3} day={day-3} color=""/>

            </div>

            
            

           </div>
           <div className="schedule-saved-tasks" style={{height:'100%',width:'97%'}}>
                <div className="schedule" style={{height:'100%'}}>
                    < Schedule tasks={tasks}/>
                    < Schedule tasks={tasks}/>
                    < Schedule tasks={tasks}/>

                </div>
            </div>
        </div>
    )
 }


 export default Calender