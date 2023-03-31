import './Sidebar.css'
import { CiClock2 } from 'react-icons/ci'
import { SiGoogleanalytics } from 'react-icons/si'
import { MdHomeFilled ,MdOutlineHelpOutline, MdOutlineLogout } from 'react-icons/md'
import { VscFeedback } from 'react-icons/vsc'
import { IoMdSettings } from 'react-icons/io'
import { Link } from 'react-router-dom'

interface Props {
    activateSideBar: boolean
}
const Sidebar:React.FC<Props>=({activateSideBar})=> {
    
    return (
        <>
            { activateSideBar && <div className='container'>

            <div className="container--upper">
                <Link to={"/dashboard#f"}>
                    <div className="link-container active">
                        <div className="link-item">
                            <MdHomeFilled />
                        </div>
                        <div className="link-name">
                            Dashboard
                        </div>
                    </div>
                </Link>
                <Link to={"/schedule"}>
                    <div className="link-container">
                        <div className="link-item">
                            <CiClock2 />
                        </div>
                        <div className="link-name">
                            Schedules
                        </div>
                    </div>
                </Link>
                
                <Link to={"/analytics"}>
                    <div className="link-container">
                        <div className="link-item">
                            <SiGoogleanalytics />
                        </div>
                        <div className="link-name">
                            Analytics
                        </div>
                    </div>
                </Link>
                
                <Link to={"/feedback"}>
                    <div className="link-container">
                        <div className="link-item">
                            <VscFeedback />
                        </div>
                        <div className="link-name">
                            Feedback
                        </div>
                    </div>
                </Link>
               
            </div>

            <div className="container--lower">
                <Link to={"/help"}>
                    <div className="link-container">
                        <div className="link-item">
                            <MdOutlineHelpOutline />
                        </div>
                        <div className="link-name">
                            Help
                        </div>
                    </div>
                </Link>
               
                <Link to={"/settings"}>
                    <div className="link-container">
                    
                        <div className="link-item">
                            <IoMdSettings />
                        </div>
                        <div className="link-name">
                            Settings
                        </div>
                    </div>
                </Link>
                

                <Link to={"/logout"}>
                    <div className="link-container logout">
                        <div className="link-item">
                            <MdOutlineLogout />
                        </div>
                        <div className="link-name">
                            Logout
                        </div>
                    </div>
                </Link>
               
            </div>
            </div>}
            
        </>
        
       
    )
}

export default Sidebar

