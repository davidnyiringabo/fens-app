import { Link } from 'react-router-dom'
import './Feedback.css'

export default function Feedback({children} : {children: any}) {
    return(
        <div className="feedback--container">
            <div className="navbar">
                <Link to='/feedback'>Images</Link> |
                <Link to='/feedback-videos'> Videos</Link>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}