import '../styles/home.css'
import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'
import header from '../assets/header.svg'
import header2 from '../assets/header2.svg'
import footer from '../assets/fotter.svg'
import footer2 from '../assets/footer2.svg'
import mid from '../assets/middle.svg'
import { Card } from '../components/card'
import { Card2 } from '../components/card'

export const Home = ()=>{
    return(
        <div>
            <div className="top">
                <div className="logo">
                    <img src={reactLogo} alt="snof logo" />
                </div>
                    <div className="links">
                        <a href="#">Home</a>
                        <a href="#services">Our Services</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="register">
                        <Link to='/login'>signup</Link>
                        <Link to='/signup' >login</Link>
                    </div>
            </div>
            <div className="first">
                <div className="svg">
                 <img src={header}  /> 
                 <img src={header2} id="second"/> 
                </div>
                <div className="intro">
                <h1>The Future of Communication</h1>
                <p>What is in Store for us?</p>
                </div>
            </div>
            <div className="section" id='services'>
                <h2>Our Services</h2>
                <div className="service-card">
                    <Card name = 'Shedule' desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos cupiditate non. Temporibus, officia? Maiores aliquam cum exercitationem, eum saepe dolorem quisquam neque ratione esse inventore distinctio culpa reprehenderit. Quae!'/>
                    <Card name = 'Notify' desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos cupiditate non. Temporibus, officia? Maiores aliquam cum exercitationem, eum saepe dolorem quisquam neque ratione esse inventore distinctio culpa reprehenderit. Quae!'/>
                    <Card name = 'Feedback' desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos cupiditate non. Temporibus, officia? Maiores aliquam cum exercitationem, eum saepe dolorem quisquam neque ratione esse inventore distinctio culpa reprehenderit. Quae!'/>
                </div> 
                <div className="svg middle">
                 <img src={mid} id='middle' /> 
                </div>

                <div className="section" id="pricing">
                    <h2>Pricing</h2>
                    <div className="subscription">
                        <Card2 title='Free' price='$0 per month'  desc='For business just  getting started.' feature0='Shedule' feature1='Shedule' feature2='Shedule' />
                        <Card2 title='Pro' price='$5 per month'  desc='For business just  getting started.' feature0='Shedule' feature1='Shedule' feature2='Shedule' />
                        <Card2 title='Ultimate' price='$10 Per month'  desc='For business just  getting started.' feature0='Shedule' feature1='Shedule' feature2='Shedule' />
                    </div>
                </div>
            </div>
            <h2>Contact Us</h2>
            <div className="contact" id="contact">
                <div className="contact-info">
                    <div><i></i>
                    <p>KN Street 256 KIGALI</p>
                    </div>
                    <div><i></i>
                    <p>KN Street 256 KIGALI</p>
                    </div>
                    <div><i></i>
                    <p>KN Street 256 KIGALI</p>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="post">
                        <input type="text" placeholder='First name'  />
                        <input type="text"  placeholder='Email' />
                        <textarea cols={8} rows={10}  placeholder='Message' ></textarea>
                        <a href='#contact'>Send
                            <i></i>
                        </a>
                        </form>
                </div>
            </div>
            <div className="footer">
            <div className="s">
                 <img src={footer2}/>
                 <img src={footer} id='footer' /> 
                </div>
                <div className="footer-content">
                    <div className="contact"></div>
                    <hr/>
                    <p></p>
                </div>
            </div>
        </div>
    )
}