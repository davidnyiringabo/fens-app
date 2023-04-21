import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/side'
import Analytics from '../Analytics/analytics'
import Hero from '../Hero/Hero'
import './Dashboard.css'

interface Props{
    setActivateSideBar:Function,
    activateSideBar: boolean
}
export default function Dashboard (props) {
const [activateSideBar,setActivateSideBar] = useState(true)

    return (
        <div className='overall-container'>
            <Navbar setActivateSideBar={setActivateSideBar} activateSideBar={activateSideBar}/>
            <div className='section-container row'>
                <Sidebar activateSideBar={activateSideBar}/>
            </div>
            <div className="section-container--one">
                <Hero username={'Mr Abushali'} Calender={undefined} tasks={[]} firstTasks={[]} completed={[]} time={''} organisations={[]} organsm={undefined} activateSideBar={false} />
            </div>
        </div>
    )
}
