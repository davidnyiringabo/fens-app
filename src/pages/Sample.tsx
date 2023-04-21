import { ReactNode, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import "./sample.css"
import Sidebar from '../components/Sidebar/side'

interface Props{
    setActivateSideBar:Function,
    activateSideBar: boolean,
    children: ReactNode
}
export default function Sample ({children}: {children: any}) {
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
