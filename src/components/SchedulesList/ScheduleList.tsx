import './ScheduleList.css'
import { MdAddToPhotos } from 'react-icons/md'
// import { useNavigate } from 'react-router-dom'

export default function ScheduleList() {    
    return (
        <>
            <div className="list--container">
                <div className="navigation">
                    <div className="heading">
                        <h3 className="title--heading">Schedules</h3>
                        <h3 className="date--heading">February 01,2023</h3>
                    </div>
                    <div className="new--schedule">
                        <h3 className="schedule--heading">New Schedule</h3>
                        <span className="icon">
                            <MdAddToPhotos />
                        </span>
                    </div>
                </div>

                <div className="schedules--list">
                    <ol className="listing">
                        <li className="schedule--component">
                            <p className="activity">1. Wake up:</p>
                            
                            <span className='startTime'> 6:00 PM </span>
                              - 
                            <span className="endTime">6:40 PM</span>
                        </li>
                        <li className="schedule--component">
                            <p className="activity">2. Breakfast:</p>
                            
                            <span className='startTime'> 6:00 PM </span>
                              - 
                            <span className="endTime">6:40 PM</span>
                        </li>
                        <li className="schedule--component">
                            <p className="activity">3. Classes:</p>
                            
                            <span className='startTime'> 6:00 PM </span>
                              - 
                            <span className="endTime">6:40 PM</span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}