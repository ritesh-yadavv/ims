import React, { useState } from 'react';
import profileIcon from "../../../assets/Performance.png";
import attandenceIcon from "../../../assets/calendar-check.png";
import leaveIcon from "../../../assets/notepad.png";
import Attendance from "./component/attandence";
import Leave from "./component/leave";
import EditProfileSection from "./component/editProfileSection";
import Header from "./Header/header";
import DevSideBar from "../widgets/deveSidebar";

const Index = () => {
  const [activeComponent, setActiveComponent] = useState('Header');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Header':
        return <Header />;
      case 'Attendance':
        return <Attendance />;
      case 'Leave':
        return <Leave />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="flex bg-[#ECECEC] ">
      < DevSideBar />
      <div className=" flex-col flex-1 p-4 overflow-x-auto h-screen">
        <EditProfileSection />
        <div className=" bg-[#ECECEC] text-gray-800 text-base mt-6 space-y-0 flex">
          <nav className="space-y-2 w-[14rem]  bg-[#F6F6F6] max-md:hidden border rounded-xl h-full mr-3">
            <button
              onClick={() => setActiveComponent('Header')}
              className={`flex items-center space-x-2 p-2 rounded-t-xl hover:bg-[#14509F] hover:text-white w-full text-left ${activeComponent === "Header" && "bg-[#14509F] text-white"}`}
            >
              <img src={profileIcon} />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveComponent('Attendance')}
              className={`flex items-center space-x-2 p-2  hover:bg-[#14509F] hover:text-white w-full text-left ${activeComponent === "Attendance" && "bg-[#14509F] text-white"}`}
            >
              <img src={attandenceIcon} />
              <span>Attendance</span>
            </button>
            <button
              onClick={() => setActiveComponent('Leave')}
              className={`flex items-center space-x-2 p-2 rounded-b-lg hover:bg-[#14509F] hover:text-white w-full text-left ${activeComponent === "Leave" && "bg-[#14509F] text-white"}`}
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
