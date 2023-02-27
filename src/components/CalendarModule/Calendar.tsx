import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { MdOutlineCalendarViewMonth, MdOutlineToday } from "react-icons/md"
import {HiBookmark} from 'react-icons/hi'
import Days from "../Days/Days"
import Months from "../Months/Months"
import Years from "../Years/Years"
import './Calendar.css'
import { useState, useEffect } from 'react'

export default function CustomCalendar() {

    const [month,setMonth] = useState(2);
    const [monthName, setMonthName] = useState('');
    const [showDay, setShowDay] = useState(false);
    const [showMonth, setShowMonth ] = useState(false);
    const [showYear, setShowYear] = useState(false) 


    function incrementMonths () {
        console.log("Incrementing")
        setMonth(month+1)
    }

    function decrementMonths () {
        console.log("Decrementing")
        setMonth(month -1)
    }


    function nameMonth(month: any) {
    switch(month) {
        case 1:
            setMonthName("January")
            break;
        case 2:
            setMonthName("February")
            break;
        case 3: 
            setMonthName("March")
            break;
        case 4: 
            setMonthName("April")
            break;
        case 5: 
            setMonthName("May")
            break;
        case 6: 
            setMonthName("June")
            break;
        case 7: 
            setMonthName("July")
            break;
        case 8: 
            setMonthName("August")
            break;
        case 9: 
            setMonthName("September")
            break;
        case 10: 
            setMonthName("October")
            break;
        case 11: 
            setMonthName("November")
            break;
        case 12: 
            setMonthName("Decemeber")
            break;
        case month>12:
            setMonth(12)
            break;
        case month<1:
            setMonth(1)
            break;
        }
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

    useEffect(()=>{
        nameMonth(month)
    })

    return (
        <div className="calendar--container">
            <div className="calendar--header">
                <div className="calendar--header--left">
                    <div className="calendar--header--left-icons">
                        <FaArrowDown onClick={decrementMonths}/>
                        <FaArrowUp onClick={incrementMonths}/>
                    </div>
                    <div className="calendar--header--month--year">
                        <span id="month">{monthName}</span>  2023
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