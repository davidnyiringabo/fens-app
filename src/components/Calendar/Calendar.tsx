import Calendar from "react-calendar";
import './Calendar.css'
import 'react-calendar/dist/Calendar.css'

export default function CalendarModule() {
    return (
        <div className="calendar--container">
            <Calendar />
        </div>
    )
}