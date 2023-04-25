import './Navbar.css'
import { FaAd, FaSearch, FaAddressBook } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { MdNotifications } from 'react-icons/md'

import logo from '../../assets/snof-logo.png'
import profile from '../../assets/profile-pic.png'
import Notification_popup from '../Notification_popup/Notification_popup'
import { useState } from 'react'

interface Props {
    setActivateSideBar: Function,
    activateSideBar: boolean
}

 const Navbar:React.FC<Props>=({setActivateSideBar,activateSideBar}) =>{
    const [showComponent, setShowComponent] = useState(false);

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

    const consol = ()=>{
        setActivateSideBar(!activateSideBar)
        console.log("it is clicked")
    }

    function handleClick() {
        setShowComponent(!showComponent);
    }
    return (
        <div className="nav">
            <div className="nav--left">
                <span className="search-icon">
                    <FiMenu size={40} onClick={consol}/>
                </span>
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav--middle">
                <input type="text" name="search" id="search" placeholder='Search ...' />
                <div className="icon-holder">
                    <span className="search-icon">
                        <FaSearch size={25}/>
                    </span>
                </div>
            </div>
            <div className="nav--right">
                <span className="icon-holder"  onClick={handleClick}>
                    <MdNotifications size={40}/>
                    {showComponent && <Notification_popup tasks={tasks}/>}
                </span>
                <div className="person--profile">
                    <img src={profile} alt="Profile picture" />
                </div>
            </div>
        </div>
    )
}

export default Navbar