import { ReactNode, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import "./sample.css"
import Sidebar from '../components/Sidebar/side'
import DashBoard from './DashBoard'
import { BrowserRouter, Route } from 'react-router-dom'
// import Analytics from './analytics'

interface Props{
    children: ReactNode
}
export default function Sample ({children}:Props) {
const [activateSideBar,setActivateSideBar] = useState(true)



    return (
        <div className='overall-container'>
            <Navbar setActivateSideBar={setActivateSideBar} activateSideBar={activateSideBar}/>
            <div className='section-container row'>
            <Sidebar activateSideBar={activateSideBar}/>
            {children}
            </div>
           

        </div>
    )
}
