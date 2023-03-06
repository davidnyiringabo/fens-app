import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import {Home} from './pages/Home/home'
import './App.css'

function App() {
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

export default App;
