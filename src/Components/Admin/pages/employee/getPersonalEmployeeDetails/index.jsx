import React, { useState } from 'react';
import profileIcon from "../../../../../assets/Performance.png"
import attandenceIcon from "../../../../../assets/calendar-check.png"
import projectIcon from "../../../../../assets/file 01.png"
import leaveIcon from "../../../../../assets/notepad.png"
import Attendance from "./component/attandence"
import Projects from "./component/projects";
import Leave from "./component/leave";
import EditProfileSection from './component/editProfileSection';
import Header from './header/header';
import AdminSideBar from "../../../widgets/adminSideBar"

const Index = () => {
  const [activeComponent, setActiveComponent] = useState('Header');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Header':
        return <Header />;
      case 'Attendance':
        return <Attendance />;
      case 'Projects':
        return <Projects />;
      case 'Leave':
        return <Leave />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="flex">
      < AdminSideBar />
      <div className=" flex-col flex-1 p-4 overflow-x-auto h-screen">
        <EditProfileSection />
        <div className="md:w-1/ text-gray-800  mt-1 space-y-0 flex">
          <nav className="space-y-2 w-[14rem] max-md:hidden border rounded h-48 mr-3">
            <button
              onClick={() => setActiveComponent('Header')}
              className={`flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white w-full text-left ${activeComponent === "Header" && "bg-blue-500 text-white"}`}
            >
              <img src={profileIcon} />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveComponent('Attendance')}
              className={`flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white w-full text-left ${activeComponent === "Attendance" && "bg-blue-500 text-white"}`}
            >
              <img src={attandenceIcon} />
              <span>Attendance</span>
            </button>
            <button
              onClick={() => setActiveComponent('Projects')}
              className={`flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white w-full text-left ${activeComponent === "Projects" && "bg-blue-500 text-white"}`}
            >
              <img src={projectIcon} />
              <span>Projects</span>
            </button>
            <button
              onClick={() => setActiveComponent('Leave')}
              className={`flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white w-full text-left ${activeComponent === "Leave" && "bg-blue-500 text-white"}`}
            >
              <img src={leaveIcon} />
              <span>Leave</span>
            </button>
          </nav>
          <div className="flex-1 ">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
