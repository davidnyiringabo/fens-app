import { useState } from 'react'
import { MdArrowDownward, MdArrowUpward, MdViewDay, MdCalendarViewMonth, MdCalendarViewWeek } from 'react-icons/md';
import './Header.css'

export default function Header ({date, onSelectDate}: {date:Date, onSelectDate: (date: Date) => void}) {
    
    const [ datePickerValue, setDatePicker] = useState({day: '', month: '', year: ''})

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setDatePicker(prevDatePickerValue => ({ ...prevDatePickerValue, [name]:value }))
    }

    function handlePrevMonth() {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        onSelectDate(newDate);
    }
    
    function handleNextMonth() {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        onSelectDate(newDate);
    }
    

    return (
        <div className="calendar--header">
            <div className="header--left--container">
                <MdArrowDownward onClick={handlePrevMonth}/>
                <MdArrowUpward onClick={handleNextMonth}/>
                <h2>{date.toLocaleString('default', {month: 'long'})} {date.getFullYear()}</h2>
            </div>
            <div className="date--picker">
                <div className='picker'>
                    <MdViewDay />
                    <input type="number" name='day' value={datePickerValue.day} onChange={handleInputChange} placeholder='Day' />
                </div>
                <div className='picker'>
                    <MdCalendarViewWeek />
                    <input type="number" name="month" value={datePickerValue.month} onChange={handleInputChange} placeholder='Month'/>
                </div>
                <div className='picker'>
                    <MdCalendarViewMonth />
                    <input type="number" name="year" value={datePickerValue.year} onChange={handleInputChange} placeholder='Year' />
                </div>
            </div>
        </div>
    )
}