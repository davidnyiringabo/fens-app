import './App.css'
import Schedules from './pages/Schedule/Schedule'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
// import CalendarModule from './CalendarModule/Calendar'
function App() {

  return (
    <>
      <Navbar />
      <Schedules />
      <Sidebar />
    </>
  )
}

export default App;
