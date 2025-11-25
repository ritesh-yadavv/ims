import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarBg from "../../../assets/sidebarBg.png"
import { 
  FaBars, 
  FaHome, 
  FaBell, 
  FaCalendarAlt, 
  FaUsers, 
  FaCheckCircle,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa';

const CseSideBar = () => {
  // Static profile data
  const staticProfileData = {
    id: 1,
    name: 'John Doe',
    designation: 'Customer Support Executive',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    department: 'Customer Support',
    email: 'john.doe@company.com',
    employeeId: 'CSE001'
  };

  const [cseProfile, setCseProfile] = useState(staticProfileData);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navItem = [
    { 
      name: "Home", 
      link: "/cse", 
      icon: <FaHome className="w-5 h-5" />
    },
    { 
      name: "Notifications", 
      link: "/cse-notifications", 
      icon: <FaBell className="w-5 h-5" />
    },
    { 
      name: "Calendar", 
      link: "/cse-calendar", 
      icon: <FaCalendarAlt className="w-5 h-5" />
    },
    { 
      name: "Lead", 
      link: "/cse-lead", 
      icon: <FaUsers className="w-5 h-5" />
    },
    { 
      name: "Active", 
      link: "/cse-active", 
      icon: <FaCheckCircle className="w-5 h-5" />
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Role');
    window.location.reload();
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    const sidebarNode = sidebarRef.current;
    if (sidebarNode && sidebarNode.contains && !sidebarNode.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Simulate profile data loading
  useEffect(() => {
    const simulateProfileLoad = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setCseProfile(staticProfileData);
    };

    simulateProfileLoad();
  }, []);

  return (
    <div className="flex h-[100vh] bg-gray-100 text-gray-800 z-50">
      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
   <div
  ref={sidebarRef}
  className={`fixed md:relative flex flex-col h-screen p-4 
    bg-cover bg-center bg-no-repeat min-w-[16rem] transition-all duration-300 ease-in-out z-50
    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
  style={{
    backgroundImage: `url(${SidebarBg})`,
  }}
>

        {/* Logo Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Customer</h1>
              <p className="text-blue-300 text-sm">Support Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-6 flex-1">
          {/* Overview Section */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
              Overview
            </h2>
            <ul className="space-y-1">
              {navItem.slice(0, 3).map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.link}
                    onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center p-3 space-x-3 rounded-lg transition-all duration-200 group
                      ${isActive
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                      }`
                    }
                  >
                    <div className={`transition-transform duration-200 group-hover:scale-110 ${
                      ({ isActive }) => isActive ? 'text-white' : 'text-gray-400'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Management Section */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
              Client Management
            </h2>
            <ul className="space-y-1">
              {navItem.slice(3).map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.link}
                    onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center p-3 space-x-3 rounded-lg transition-all duration-200 group
                      ${isActive
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                      }`
                    }
                  >
                    <div className={`transition-transform duration-200 group-hover:scale-110 ${
                      ({ isActive }) => isActive ? 'text-white' : 'text-gray-400'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Profile Section */}
        <div className="p-4 border-t border-gray-700 mt-auto">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <img
                src={cseProfile?.profilePicture}
                alt={cseProfile?.name}
                className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cseProfile?.name || 'User')}&background=3085f6&color=fff&size=128`;
                }}
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#00142E]"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm truncate">{cseProfile?.name}</p>
              <p className="text-gray-400 text-xs truncate">{cseProfile?.designation}</p>
              <p className="text-gray-500 text-xs truncate">{cseProfile?.employeeId}</p>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full p-3 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-all duration-200 group"
          >
            <FaSignOutAlt className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed left-4 top-4 z-50">
        <button 
          onClick={toggleSidebar}
          className="p-2 bg-[#00142E] text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          <FaBars size={20} />
        </button>
      </div>
    </div>
  );
};

export default CseSideBar;