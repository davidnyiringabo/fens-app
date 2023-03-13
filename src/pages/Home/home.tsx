import "./home.css";
import { Link } from "react-router-dom";
import { Card, Card2, Icon } from "../../components/card";
import {
  Bell,
  Feedback,
  Notify,
  Middle,
  Header,
  Header2,
  Footer2,
  Fotter,
} from "../../assets/svg";
import {
  FaInstagram,
  FaFacebookF,
  FaFacebookSquare,
  FaTwitter,
  FaDiscord,
  FaPhoneAlt,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
export const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <div className="logo">
          <img src="../../public/log.png" alt="snof logo" />
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#services">Our Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="register-btns">
          <div className="reglink" id="link1">
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="reglink">
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
      <div className="first">
        <div className="svg">
          <Header />
          <Header2 />
        </div>
        <div className="intro">
          <h1>The Future of Communication</h1>
          <p>What is in Store for us?</p>
        </div>
      </div>
      <div className="section" id="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <Card
            name="Shedule"
            svg={<Notify />}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos cupiditate non. Temporibus, officia? Maiores aliquam cum exercitationem, eum saepe dolorem quisquam neque ratione esse inventore distinctio culpa reprehenderit. Quae!"
          />
          <Card
            name="Notify"
            svg={<Bell />}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos cupiditate non. Temporibus, officia? Maiores aliquam cum exercitationem, eum saepe dolorem quisquam neque ratione esse inventore distinctio culpa reprehenderit. Quae!"
          />
          <Card
            name="Feedback"
            svg={<Feedback />}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos cupiditate non. Temporibus, officia? Maiores aliquam cum exercitationem, eum saepe dolorem quisquam neque ratione esse inventore distinctio culpa reprehenderit. Quae!"
          />
        </div>
        <div className="middle">
          <Middle />
        </div>
      </div>
      <div className="section" id="pricing">
        <h2>Pricing</h2>
        <div className="subscription">
          <Card2
            title="Free"
            price="$0 per month"
            desc="For business just  getting started."
            feature0="Shedule for event"
            feature1="Shedule for event"
            feature2="Shedule for event"
          />
          <Card2
            title="Pro"
            price="$5 per month"
            desc="For business just  getting started."
            feature0="Shedule for event"
            feature1="Shedule for event"
            feature2="Shedule for event"
          />
          <Card2
            title="Ultimate"
            price="$10 Per month"
            desc="For business just  getting started."
            feature0="Shedule for event"
            feature1="Shedule for event"
            feature2="Shedule for event"
          />
        </div>
      </div>
      <div className="section" id="contact">
        <h2>Contact Us</h2>
        <div className="contact">
          <div className="contact-info">
            <div className="location">
              <div>
                <FaMapMarkerAlt />
                <p>KN Street 256 KIGALI</p>
              </div>
              <div>
                <FaPhoneAlt />
                <p>+250783490734</p>
              </div>
              <div>
                <FaEnvelope />
                <p>info@SNoF-Labs.com</p>
              </div>
            </div>
            <div className="social-medial">
              <Icon icon={<FaInstagram />} />
              <Icon icon={<FaFacebookF />} />
              <Icon icon={<FaTwitter />} />
              <Icon icon={<FaLinkedinIn />} />
              <Icon icon={<FaDiscord />} />
            </div>
          </div>
          <div className="contact-form">
            <form action="post">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Email" />
              <textarea cols={8} rows={10} placeholder="Message"></textarea>
              <a href="#contact">
                Send
                <i></i>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="s">
            <Fotter />
            <Footer2 />
          </div>
          <div className="contents">
            <div className="foot-description">
              <h2>SNoF Technologies</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                ea quam.chitecto repellendus commodi? Temporibus fugiat pariatur
                nisi dignissimos esse.
              </p>
              <div className="social-media">
                <FaInstagram />
                <FaFacebookSquare />
                <FaLinkedin />
              </div>
            </div>
            <hr />
            <div className="weblinks">
              <h2>Website Links</h2>
              <p>Home</p>
              <p>Services</p>
              <p>Pricing</p>
              <p>Contact</p>
              <p>FAQs</p>
            </div>
            <div className="web-services">
              <h2>Services</h2>
              <p>Schedule</p>
              <p>Notify</p>
              <p>Feedback</p>
            </div>
            <div className="copyright">
              <hr />
              <p>@copyrights SNoF -All right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
