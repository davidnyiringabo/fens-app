import './Sidebar.css'
import { CiClock2 } from 'react-icons/ci'
import { SiGoogleanalytics } from 'react-icons/si'
import { MdHomeFilled ,MdOutlineHelpOutline, MdOutlineLogout } from 'react-icons/md'
import { VscFeedback } from 'react-icons/vsc'
import { IoMdSettings } from 'react-icons/io'

export default function Sidebar() {
    return (
        <div className='container'>
            <div className="container--upper">
                <div className="link-container active">
                    <div className="link-item">
                        <MdHomeFilled />
                    </div>
                    <div className="link-name">
                        Dashboard
                    </div>
                </div>

                <div className="link-container">
                    <div className="link-item">
                        <CiClock2 />
                    </div>
                    <div className="link-name">
                        Schedules
                    </div>
                </div>

                <div className="link-container">
                    <div className="link-item">
                        <SiGoogleanalytics />
                    </div>
                    <div className="link-name">
                        Analytics
                    </div>
                </div>

                <div className="link-container">
                    <div className="link-item">
                        <VscFeedback />
                    </div>
                    <div className="link-name">
                        Feedback
                    </div>
                </div>
            </div>

            <div className="container--lower">
                <div className="link-container">
                    <div className="link-item">
                        <MdOutlineHelpOutline />
                    </div>
                    <div className="link-name">
                        Help
                    </div>
                </div>

                <div className="link-container">
                    <div className="link-item">
                        <IoMdSettings />
                    </div>
                    <div className="link-name">
                        Settings
                    </div>
                </div>

                <div className="link-container logout">
                    <div className="link-item">
                        <MdOutlineLogout />
                    </div>
                    <div className="link-name">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

