import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Hero from './Hero'

interface Props{
    setActivateSideBar:Function,
    activateSideBar: boolean
}
export default function Sample () {
const [activateSideBar,setActivateSideBar] = useState(true)



    return (
        <div className='overall-container'>
            <Navbar setActivateSideBar={setActivateSideBar} activateSideBar={activateSideBar}/>
            <div className='section-container row'>
            <Sidebar activateSideBar={activateSideBar}/>
            <Hero username='Mubaraka Sh.' activateSideBar={activateSideBar}/>
            </div>
           

        </div>
    )
}
