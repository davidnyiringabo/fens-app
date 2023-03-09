import RegisterPage from "./pages/Register/RegisterPage";
import Login from "./pages/Login/Login";
import Schedules from "./pages/Schedule/Schedule";
import Navbar from "./components/Navbar/Navbar";
import PlayerV from './components/videos/videoPlayer'
import Shower from './components/images/imageShower'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard/dashboard'
// import Sidebar from './components/Sidebar/sidebar'

function App() {
  return (
    <div className="App">
      <div className='route'>
       <nav>
        <ul>
          <li><Link to="/" className='li1'>images|</Link></li>
          <li><Link to="/videos" className='li2'>videos</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Shower/>}/>
        <Route path='/videos' element={<PlayerV/>}/>
      </Routes>
      </div>
       <Dashboard/>
      <Sidebar/>
    </div>
  )
}

export default App;
