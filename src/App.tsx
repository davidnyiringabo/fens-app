import RegisterPage from "./pages/Register/RegisterPage";
import Login from "./pages/Login/Login";
import Schedules from "./pages/Schedule/Schedule";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import PlayerV from './components/videos/videoPlayer'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'

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
        {/* <Route path='/' element={<h1>hello world</h1>}/> */}
        <Route path='/videos' element={<PlayerV/>}/>
      </Routes>
      </div>
      <PlayerV/>
    </div>
  )
}

export default App;
