import './Logout.css'
import logo from '../../assets/snof-logo.png'
import { MdSupervisedUserCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
export default function Logout() {
    return (
        <div className="logout--container">
            <div className="logo--container">
                <img src={logo} alt="Logo og the app" />
            </div>

            <div className="main--container">
                <hr />
                <div className="circle">
                    <MdSupervisedUserCircle className='logout--icon'/>
                </div>
                <hr />
            </div>

            <div className="logout--message">
                <p className='success--message'>Successfully logged out.</p>
            </div>

            <div className="logout--footer">
                <p>or</p>
                <p>Want to Log in again? <span><Link to="/login" className='logout--link'>Click here</Link></span></p>
            </div>
        </div>
    )
}