import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaBell, FaCalendarAlt, FaProjectDiagram, FaSignOutAlt } from 'react-icons/fa';
import sideBarLogo from "../../../assets/reshitaSidebarLogo.svg";
import BackgroundImage from "../../../assets/sidebarBg.png";

const navItem = [
  { name: "Home", link: "/dev/dashboard", icon: <FaHome size={18} /> },
  { name: "Notifications", link: "/dev/notification", icon: <FaBell size={18} /> },
  { name: "Calendar", link: "/dev/calender", icon: <FaCalendarAlt size={18} /> },
  { name: "Projects", link: "/dev/project", icon: <FaProjectDiagram size={18} /> },
];

// Static user data
const staticUser = {
  name: "John Doe",
  designation: "Developer",
  profilePicture: "https://via.placeholder.com/40", // placeholder image
};

const DevSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // For static version, just reload page
    window.location.reload();
  };

  return (
    <div className="flex h-screen font-jakarta text-[#ECECEC] bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {/* Sidebar */}
      <div className={`fixed md:static flex flex-col min-w-[15rem] h-full p-3 transition-transform bg-opacity-90 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        {/* Logo */}
        <div className="mb-5">
          <img src={sideBarLogo} alt="Logo" className="h-[68px] w-[159px]" />
        </div>

        {/* Navigation */}
        <div className="flex-1 space-y-1">
          <h2 className="text-sm text-white font-semibold mb-4 ml-5">Overview</h2>
          <ul className="space-y-1 ml-2">
            {navItem.map((item, i) => (
              <NavItem key={i} item={item} />
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 mb-2">
            <img src={staticUser.profilePicture} alt="Profile" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-white text-sm font-medium">{staticUser.name}</p>
              <p className="text-gray-400 text-xs">{staticUser.designation}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center text-red-500 hover:text-red-400 text-sm">
            <FaSignOutAlt className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Mobile toggle */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-gradient-to-r from-emerald-400 to-blue-500 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
          <FaBars size={24} />
        </button>
      </div>
    </div>
  );
};

// Reusable Nav Item component
const NavItem = ({ item }) => (
  <li>
    <NavLink to={item.link}>
      {({ isActive }) => (
        <div className={`flex items-center space-x-3 p-2 py-3 rounded-md text-sm ${isActive ? 'bg-[#14509F] text-white font-semibold' : 'text-white/70 hover:bg-[#3085f6] hover:text-white'}`}>
          {React.cloneElement(item.icon, { className: `${isActive ? 'text-white' : 'text-white/70'}` })}
          <span>{item.name}</span>
        </div>
      )}
    </NavLink>
  </li>
);

export default DevSideBar;
