import CalendarModule from "../../components/Calendar/Calendar";
import ScheduleList from "../../components/SchedulesList/ScheduleList";
import './Schedule.css'

export default function Schedules () {
    return (
        <div className="schedule--container">
            <CalendarModule />
            <ScheduleList />
        </div>
    )
}