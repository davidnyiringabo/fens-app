import ScheduleList from "../../components/SchedulesList/ScheduleList";
import Calendar from "../../components/CalendarModule/Calendar"
// import './Schedule.css'

export default function Schedules () {
    return (
        <div className="schedule--container" style={{marginTop:'4.5%',border:'1px solid'}}>
            <Calendar />
            <ScheduleList />
        </div>
    )
}