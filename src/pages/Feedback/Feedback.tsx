import { Link } from 'react-router-dom'
import './Feedback.css'

export default function Feedback({children} : {children: any}) {
    return(
        <div className="feedback--container">
            <div className="nav">
                <nav>
                    <Link to='/feedback'>Images</Link>
                    <Link to='/feedback-videos'>Videos</Link>
                </nav>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}