
import './Calendar.css'
import Header from '../CalenderComponents.tsx/Header'
import CalendarBody from '../CalenderComponents.tsx/Body'
import { useState } from 'react'
export default function Calendar () {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className="calendar--container">
            <div className="header">
                <Header date={selectedDate} onSelectDate={setSelectedDate}/>
            </div>
            <div className="main">
                <CalendarBody date={selectedDate}/>
            </div>

            <div className="footer">

            </div>
        </div>
    )
}