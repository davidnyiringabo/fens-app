import ScheduleList from "../../components/SchedulesList/ScheduleList";
<<<<<<< HEAD
import Calendar from "../../components/Calendar/Calendar"
=======
import Calendar from "../../components/CalendarModule/Calendar"
>>>>>>> 0f7f665 (new page added --help page)
import './Schedule.css'

export default function Schedules () {
    return (
        <div className="schedule--container">
            <Calendar />
            <ScheduleList />
        </div>
    )
}