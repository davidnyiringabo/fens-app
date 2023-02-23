import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import {Home} from './pages/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login'/>
          <Route path='/signup'/>
         </Routes>
    </Router>

  )
}

export default App
