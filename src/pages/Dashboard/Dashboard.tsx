import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import Schedule from "../../pages/Schedule/Schedule";
import Analytics from "../../components/Analytics/analytics";

interface Props {
  setActivateSideBar: Function;
  activateSideBar: boolean;
}
export default function Dashboard() {
  const [activateSideBar, setActivateSideBar] = useState(true);

  return (
    <div className="overall-container">
      <Navbar
        setActivateSideBar={setActivateSideBar}
        activateSideBar={activateSideBar}
      />
      <div className="section-container row">
        <Sidebar activateSideBar={activateSideBar} />
        <Hero username="Mubaraka Sh." activateSideBar={activateSideBar} />

        {/* <Schedule /> */}
        {/* <Analytics/> */}
      </div>
    </div>
  );
}
