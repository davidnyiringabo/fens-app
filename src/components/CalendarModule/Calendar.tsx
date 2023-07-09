import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { MdOutlineCalendarViewMonth, MdOutlineToday } from "react-icons/md"
import {HiBookmark} from 'react-icons/hi'
import Days from "../Days/Days"
import Months from "../Months/Months"
import Years from "../Years/Years"
import './Calendar.css'
import { useState, useEffect } from 'react'

export default function CustomCalendar() {
    const [date, setDate] = useState(new Date());
    const [month,setMonthName] = useState('');
    const [year,setYearName] = useState('')
    const [showDay, setShowDay] = useState(false);
    const [showMonth, setShowMonth ] = useState(false);
    const [showYear, setShowYear] = useState(false) 
    const currentDate = new Date(date);

    useEffect(()=>{
        nameMonths(currentDate)
    })

    function incrementMonths () {
        currentDate.setMonth(currentDate.getMonth() + 1)
        setDate(currentDate)
    }

    function decrementMonths () {
        currentDate.setMonth(currentDate.getMonth() - 1)
        setDate(currentDate)
    }

    function showDays() {
        console.log("days component")
        setShowDay(!showDay)
    }

    function showMonths () {
        console.log("months component")
        setShowMonth(!showMonth)
    }

    function showYears() {
        console.log("years component")
        setShowYear(!showYear)
    }

    function nameMonths(currentDate: Date) {
        var stringDate = currentDate.toString();
        var response = stringDate.split(" ",5);
        console.log(response)
        setMonthName(response[1])
        setYearName(response[3])
    }

    return (
        <div className="calendar--container">
            <div className="calendar--header">
                <div className="calendar--header--left">
                    <div className="calendar--header--left-icons">
                        <FaArrowDown onClick={decrementMonths}/>
                        <FaArrowUp onClick={incrementMonths}/>
                    </div>
                    <div className="calendar--header--month--year">
                        <span id="month">{month}</span>  {year}
                    </div>
                </div>
                <div className="calendar--header--right">
                    <div className="day--holder" onClick={showDays}>
                        <div className="icon">
                            <MdOutlineToday />
                            {
                                showDay ? <Days/> : ""
                            }
                        </div>
                        <p className="title">Day</p>
                    </div>
                    <div className="month--holder" onClick={showMonths}>
                        <div className="icon">
                            <MdOutlineCalendarViewMonth />
                            { showMonth ? <Months /> : ""}
                        </div>
                        <p className="title">Month</p>
                    </div>
                    <div className="year--holder"  onClick={showYears}>
                        <div className="icon">
                            <MdOutlineCalendarViewMonth/>
                            { showYear ? <Years /> : "" }
                        </div>
                        <p className="title">Year</p>
                    </div>
                </div>
            </div>

            <div className="calendar--days--names--container">
                <div className="calendar--days--name">
                    <p className="name">Monday</p>
                </div>
                <div className="calendar--days--name">
                    <p className="name">Tuesday</p>
                </div>
                <div className="calendar--days--name">
                    <p className="name">Wednesday</p>
                </div>
                <div className="calendar--days--name">
                    <p className="name">Thursday</p>
                </div>
                <div className="calendar--days--name">
                    <p className="name">Friday</p>
                </div>
                <div className="calendar--days--name">
                    <p className="name">Saturday</p>
                </div>
                <div className="calendar--days--name">
                    <p className="name">Sunday</p>
                </div>
            </div>
            
            <div className="calendar--days--numbers">
                <div className=" active calendar--day--card">
                    <div className="icon">
                        <HiBookmark />
                    </div>
                    <p className="day--number">01</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">02</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon">
                        <HiBookmark />
                    </div>
                    <p className="day--number">03</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">04</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon">
                        <HiBookmark />
                    </div>
                    <p className="day--number">05</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number ">06</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">07</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">08</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">09</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">10</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">11</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">12</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">13</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">14</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">15</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon">
                        <HiBookmark />
                    </div>
                    <p className="day--number">16</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">17</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">18</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">19</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">20</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">21</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">22</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">23</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">24</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">25</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">26</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">27</p>
                </div>
                <div className="calendar--day--card">
                    <div className="icon hidden">
                        <HiBookmark />
                    </div>
                    <p className="day--number">28</p>
                </div>
            </div>
        </div>
    )
}
