import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/RegisterPage";
import Sample from "./pages/Sample";
import "./App.css";
import Analytics from "./pages/Analytics/analytics";

function App() {

  interface Task {
    id: number;
    text: string;
    time: string;
    duration: string;
  }

  const [tasks,setTasks] = useState<Task[]>([
    {
         id: 0,
         text:'Board meeting',
         time:'10:20PM',
         duration:'10:20PM to 11:00PM'
    },
    {
        id: 1,
        text:'taking lunch',
        time:'10:20PM',
        duration:'10:20PM to 11:00PM'
   },
   {
    id: 2,
    text:'Interviewing other members',
    time:'10:20PM',
    duration:'10:20PM to 11:00PM'
}
])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Sample/>} />
        <Route path="/analytics" element={<Analytics tasks={tasks}/>}/>
        <Route path="/dashboard" element={<Sample/>}/>
        <Route path="/signup" element={<RegisterPage/>}/>
        <Route path="/dashboard" element={<Sample/>}/>
        <Route path="/dashboard" element={<Sample/>} />
      </Routes>
    </Router>
  );
}

export default App;
