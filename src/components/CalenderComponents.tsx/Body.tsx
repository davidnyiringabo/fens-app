import './Body.css'

export default function CalendarBody({date}: {date: Date}) {
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month +1, 0);

    const daysInMonth = [];

    for( let i = 1; i<= lastDayOfMonth.getDate(); i++) {
        daysInMonth.push(new Date(year,month, i))
    }
    
    const days = ['Sun','Mon','Tue', 'Wed','Thu', 'Fri','Sat'];
    return (
        <div className="calendar--body">
            {days.map((day) => (
                <div className="calendar--day" key={day}>
                    {day}
                </div>
            ))}
            {daysInMonth.map((day) => (
                <div className="calendar--day" key={day.toString()} >
                    {day.getDate()}
                </div>
            ))}
        </div>
    )
}