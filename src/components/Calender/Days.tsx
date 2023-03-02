import React from "react";
import "./days.css"


interface Props{
    day: number,
    date: number,
    color:string
}

const Days: React.FC<Props>=({date,day,color})=>{
const dayNames = ["Mon","tue","wed","Thur","Fri","Sat","San"]
const dayName = dayNames[day-1]

    return(
       <div className="calender-date" style={{backgroundColor: `${color}`}}>
          <h4 className="calender-day">{date}</h4>
          <h6 className="calender-dayName">{dayName}</h6>
       </div>
    )
}

export default Days