
import React from "react";
import propTypes, { any } from "prop-types"
import schedulecomp from "../../assets/image3.png"
import addIcon from "../../assets/plus-circle1.png"
import deleteIcon from "../../assets/x-circle1.png"
import right from "../../assets/chevron-right.svg"
import caret from "../../assets/caret-down-fill.svg"
import Calender from "../../components/Calender/Calender";
import Days from "../../components/Calender/Days";
import Schedule from "../../components/Schedules/Schedule";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import './hero.css'
import plus from "../../assets/+.svg"
import plusCirc from "../../assets/plus-circle-dotted.svg"

import Notification from "../../components/Notification/Notification"
import { useState,useEffect } from "react";
import check from "../../assets/check1.png"
import calenderimg from "../../assets/calendar-check1.png"
import dots from "../../assets/three-dots.svg"
import member2 from "../../assets/Ellipse48(1).png"


const  members=[
    {
        title :'Managing Gushima F.',
    },{
        title :'Assistant Henry H.',
    },{
        title :'Director Minoy B.',
    },{
        title :'CEO David N.',
    },
]


interface Props{
    username: string
    Calender: Function,
    tasks: object[],
    firstTasks: object[],
    completed:object[],
    time: string,
    organisations: string[],
    organsm: object,
    activateSideBar: boolean
    
}

let time = new Date();
const month = (time.getMonth())
const day = time.getDay()
// const day =4
const date = time.getDate()
const hour = time.getHours()
const minute = time.getMinutes()

const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let nameOfMonth = monthName[month];

export interface Organisation {
    name: string;
}




const Hero: React.FC<Props>= ({username,activateSideBar})=>{
const [memberModal,setMemberModal] = useState(false);


const [background,sebackground] = useState(false)

const [openDrop,setOpenDrop] = useState(false)
// -------------------------------------------------FOR TASKS VARIABLES--------------------------------------------------------
const [tasks,setTasks] = useState([
    {
         id: 0,
         text:'Board meeting',
         time:'10:20PM',
         duration:'10:20PM to 11:00PM'
    },
    {
        id: 1,
        text:'taking lunch',
        time:'10:20PM',
        duration:'10:20PM to 11:00PM'
   },
   {
    id: 2,
    text:'Interviewing other members',
    time:'10:20PM',
    duration:'10:20PM to 11:00PM'
}
])

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------FOR VARIABLES ORGANISATIONS-----------------------------------------------------
const [organsm,setOrgansm] = useState({
    name: 'Morncast'
})

const [organisations,setOrganisations] = useState<Organisation[]>([
    {
        name: "Morncast"
    },
    {
        name: "oreDigital"
    },
    {
        name: "eCard"
    }
])

// -------------------------------------------------------------------------------------------------------------------------------------

const [completed,setCompleted]= useState([
    {
        task: 'Check the production of the week',
        time: '11:30'
    },
    {
        task: 'Check the production of the week',
        time: '11:30'
    },{
        task: 'Check the production of the week',
        time: '11:30'
    }
])

// --------------FOR ADD SCHEDULE MODAL-------------------------
const [openAddScheduleModal,setOpenAddSchedule] = useState(false) 

const openAddSchedule = ()=>{
    setOpenAddSchedule(true)
}
const closeAddSchedule = ()=>{
    setOpenAddSchedule(false)
}

const deleteNotifications = ()=>{
    setTasks((tasks)=>{
        return tasks.filter((task) => task.id > 3);
    })
}

// --------------------------HANDLING FORM SUBMIT----------------------------------------------

const handleFormSubmit = ()=>{

}
// ----------------------------------------------------------------    

    return(
        <main className={ !activateSideBar ? 'coverwidth' : ''} >
            <div className={"container-hero" + `${ activateSideBar? ' coverhero' : ''}`}>
                {/* --------for the left content */}

            
                
                <div className="container-left">
                   <div className="welcome-container">
                    <h4>Welcome back {username}</h4>
                   </div>
                        <div></div>
                   <div className="schedule-container">
                    <div className="left-schedule-content">
                    <h2>Schedule of today</h2>
                    <h6 style={{fontSize:'16px'}}>Check the schedule that has to be completed today </h6>
                    <button className="button-view-schedule">Today's schedule</button>
                    </div>

                    <img src={schedulecomp} />
                
                   </div>
                   <div className="addTask">
                    <button className="addSchedule" onClick={openAddSchedule}><img src={addIcon} style={{ width: '17%',marginLeft:'2%'}} /><h6 style={{}}> ADD SCHEDULE</h6></button>
                    
                    { openAddScheduleModal && (
                        (
                            <div className="modal">
                            <div className="overlay" >
                            <div className="addScheduleModal">

                                <button className='close-modal' onClick={closeAddSchedule}  style={{borderRadius:'10px', borderColor:'#333'}}>close</button>

                                <div className="addAScheduleForm">
                                    <form className="SchedulemodalForm" onSubmit={(e)=>{
                                        e.preventDefault()
                                        handleFormSubmit
                                        }}>
                                        <h3>Schedule Event</h3>

                                        <div className="form-control">
                                            <label>Time: </label>
                                            <input type="time" required/>
                                        </div>

                                        <div className="form-control">
                                            <label>Event: </label>
                                            <textarea placeholder="Eg. Going to sleep" required></textarea>
                                        </div>

                                        <div className="form-control">
                                            <label>Sound: </label>
                                            <select required>
                                                <option value="chimes">Chimes</option>
                                                <option value="Xylophone">Xylophone</option>
                                                <option value="Bounce">Bounce</option>
                                                <option value="Echo">Echo</option>
                                                <option value="Ascending">Ascending</option>
                                            </select>
                                        </div>

                                        <div className="form-control">
                                            <label>Notify for: </label>
                                            <select required>
                                            <option value="5 Minutes">5 Minutes</option>
                                            <option value="10 Minutes">10 Minutes</option>
                                            <option value="30 Minutes">30 Minutes</option>
                                            <option value="1 Hour">1 Hour</option>
                                            <option value="2 Hours">2 Hours</option>
                                            <option value="1 day">1 Day</option>
                                            </select>
                                            
                                            

                                        </div>

                                        <div className="notifyday">
                                            <label style={{fontSize:'18px'}}>Notify on </label>
                                            <div className="days">
                                            <button className="notifyDay" onClick={()=>sebackground(!background)}>Mon</button>
                                            <button className="notifyDay" onClick={()=>sebackground(!background)}>Tue</button>
                                            <button className="notifyDay" onClick={()=>sebackground(!background)}>Wed</button>
                                            <button className="notifyDay" onClick={()=>sebackground(!background)}>Thur</button>
                                            <button className="notifyDay" onClick={()=>sebackground(!background)}>Fri</button>
                                            <button className="notifyDay" onClick={()=>sebackground(!background)}>Sat</button>
                                            <button className="notifyDay" onClick={()=>sebackground(!background)}>Sun</button>
                                            </div>
                                            
                                        </div>

                                        <div className="form-control" >
                                            <label>Location: </label>
                                            <select required>
                                                <option value=""></option>
                                                <option value="">Kigali</option>
                                                <option value="">Muhanga</option>
                                                <option value="">Newyork</option>
                                            </select>
                                        </div>

                                        <div className="addmodalbuttons">
                                            <button className="save">Save</button>
                                            <button className="cancel">cancel</button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                            </div>
                            </div>
                        )
                    )
                        
                    }

                   </div>

                   <div className="notifications-placeholder">

                        <div className="notif-header">
                            <h5 style={{paddingTop:'1rem'}}>Notifications</h5>
                        <button className="deleteNotification"  onClick={deleteNotifications} style={{cursor:'pointer'}}><img src={deleteIcon} style={{ width: '17%',fontSize:'21px'}} /><h6 style={{color:'#b73434'}}> DELETE</h6></button>
                        </div>

                        <div id="notifications" className="notification-container">
                            < Notification tasks={tasks}/>

                        </div>

                        <h6 style={{alignItems:'center',cursor:'pointer',textAlign:'right'}}>View more notifications <span>  <img src={right} style={{height:'10px',padding:'3px 4px 0px',color:'#10926E'}}/></span></h6>
                   </div>

                   <div className="completedTask-placeholder" >
                        <div className="completed-header">
                            <h5 style={{paddingTop:'1rem'}}>Completed Tasks</h5>
                        </div>

                         {completed.map((complete, index)=>{
                            return (
                                <>
                                    <div className="Completed-Task" key={index}><img src={calenderimg}/> {complete.task} <img src={check} style={{position:'absolute',right:'0%'}}/></div>
                                </>
                                            )
                                })
                            }

                        <h6 style={{alignItems:'center',cursor:'pointer',textAlign:'right'}}>View more content <span>  <img src={right} style={{height:'10px',padding:'3px 4px 0px'}}/></span></h6>

                   </div>


                </div>
                {/* ---------------------for the right content  */}
                <div className="container-right">
                    <div className="dropdown">
                        <div className="select-header" onClick={()=>{setOpenDrop(!openDrop)}}>
                            <h6>Organisation:</h6>
                            <div className="select-organsm" style={{display:'flex',gap:'5%'}}><h6 className="selected">{organsm.name}</h6>
                                <span className={`select-caret ${ openDrop ? 'rotate-caret' : ''}`}>
                                    <img src={caret}/>
                                </span>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    { openDrop ? '' : ''}
                    { openDrop && (
                        <div className={`dropmenuContainer $`}>
                            <h6 style={{fontSize:'17px'}}>Choose the Organisation</h6>

                            <ul className="dropdown-menu">
                              
                              {organisations.map(organisation => {
                                return <div className="dropdown-item" onClick={()=>{
                                    setOrgansm({name: organisation.name});
                                    setOpenDrop(!openDrop);

                                }}><img src={check}/> {organisation.name}</div>
                            })}  

                            </ul>
                            <div className="addOrganisation">
                                <button className="addOrgan"><img src={plusCirc} style={{width:'13%',}}/> Add</button>
                            </div>
                            
                        </div>
                    )}
                        

                        

                         < Calender month={nameOfMonth} date={date} day={day} openAddSchedule={openAddSchedule}/>

                         <ToastContainer
                           position="top-right"
                           autoClose={3500}
                           hideProgressBar={false}
                           newestOnTop={false}
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                           theme="colored"
                         />
                         
                         <div className="team-members-container">
                            <div className="title">
                                <h2>Team-members</h2>
                            </div>
                            <div className="teamMembers">
                                     {members.map((member)=>{
                                        return (
                                            <div className="teamMember" style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'87%',height:'20%',border:'1px #CDC2C2 solid',borderRadius:'10px'}}>
                                                <img src={member2} /> 
                                                <h3 style={{fontSize:'15px',textAlign:'left'}}>{member.title}</h3> 
                                                <img src={dots}  onClick= {()=>{setMemberModal(!memberModal)}}/> 
                                            </div>
                                        )
                                    })} 
                                    
                                    

                            </div>

                             {memberModal && (
                            <div className="remove-or-add-member">
                                            <div className="title">
                                                <h6>Remove a member ?</h6>
                                            </div>

                                            <div className="pop-body" style={{width:'100%',height:'60%',display:'flex',alignItems:'center',justifyContent:'center',gap:'5%'}}>
                                            <button className="addMember" style={{width:'30%',height:'60%',background:'#D565',border:'none',borderRadius:'10px',fontSize:'17px',fontWeight:'700'}} onClick={()=>setMemberModal(!memberModal)}>Remove</button>
                                            <button className="view" style={{width:'40%',height:'60%',background:'#fff',border:'none',borderRadius:'10px',fontSize:'17px',fontWeight:'700'}}>View details</button>
                                            </div>

                                        </div>
                                     )} 

                            <div className="addTeamMember">
                                <button className="addTeam"><img src={plus} style={{width:'13%'}}/> <h4 style={{fontSize:'13px'}}>Add a team-mate</h4></button>
                            </div>
                         </div>

                </div>
            </div>
        </main>
    )
}

export default Hero


