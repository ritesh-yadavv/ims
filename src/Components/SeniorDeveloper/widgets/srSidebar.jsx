import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { 
    FaBars, 
    FaHome, 
    FaBell, 
    FaCalendarAlt, 
    FaProjectDiagram,
    FaSignOutAlt,
    FaChevronRight
} from 'react-icons/fa';

import SidebarBg from "../../../assets/sidebarBg.png";
import { useDispatch, useSelector } from 'react-redux';

const SrSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const hrProfile = useSelector(state => state.employeeProfile.employeeProfile);
    const sidebarRef = useRef(null);

    // Static HR profile data
    const staticHrProfile = {
        id: 301,
        name: "Sarah Johnson",
        profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        designation: "Senior Developer",
        email: "sarah.johnson@company.com",
        department: "Software Development",
        joinDate: "2020-06-15"
    };

    // Navigation items with React Icons
    const navItems = [
        { 
            name: "Dashboard", 
            link: "/sr/dev/home", 
            icon: <FaHome className="text-lg" />,
            section: "overview"
        },
        { 
            name: "Notifications", 
            link: "/sr/dev/notification", 
            icon: <FaBell className="text-lg" />,
            section: "overview"
        },
        { 
            name: "Calendar", 
            link: "/sr/dev/calender", 
            icon: <FaCalendarAlt className="text-lg" />,
            section: "overview"
        },
        { 
            name: "Projects", 
            link: "/sr/dev/project", 
            icon: <FaProjectDiagram className="text-lg" />,
            section: "development"
        },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("Role");
        // Simulate logout process
        setTimeout(() => {
            window.location.href = '/login';
        }, 500);
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

    // Use static profile data
    const displayProfile = hrProfile || staticHrProfile;

    const overviewItems = navItems.filter(item => item.section === "overview");
    const developmentItems = navItems.filter(item => item.section === "development");

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" />
            )}

            <div className="flex h-screen text-white z-50">
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
                    <div className="flex items-center justify-between mb-8 pt-4">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-emerald-400 to-blue-500 p-2 rounded-lg">
                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                    <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent font-bold text-sm">
                                        SR
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white text-xl font-bold">Developer</h1>
                                <p className="text-gray-300 text-xs">Senior Developer Portal</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    <div className="space-y-6 flex-1 overflow-y-auto">
                        {/* Overview Section */}
                        <div>
                            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                                Overview
                            </h2>
                            <ul className="space-y-1">
                                {overviewItems.map((item, i) => (
                                    <li key={i}>
                                        <NavLink
                                            to={item.link}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-center p-3 space-x-3 rounded-xl transition-all duration-200 group ${
                                                    isActive
                                                        ? 'bg-gradient-to-r from-emerald-400 to-blue-500 text-white shadow-lg transform scale-105'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-md'
                                                }`
                                            }
                                        >
                                            <div className={`transition-colors duration-200 ${
                                                window.location.pathname === item.link ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                            }`}>
                                                {item.icon}
                                            </div>
                                            <span className="font-medium">{item.name}</span>
                                            {window.location.pathname === item.link && (
                                                <FaChevronRight className="ml-auto text-white text-sm" />
                                            )}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Development Section */}
                        <div>
                            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                                Development
                            </h2>
                            <ul className="space-y-1">
                                {developmentItems.map((item, i) => (
                                    <li key={i}>
                                        <NavLink
                                            to={item.link}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-center p-3 space-x-3 rounded-xl transition-all duration-200 group ${
                                                    isActive
                                                        ? 'bg-gradient-to-r from-emerald-400 to-blue-500 text-white shadow-lg transform scale-105'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-md'
                                                }`
                                            }
                                        >
                                            <div className={`transition-colors duration-200 ${
                                                window.location.pathname === item.link ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                            }`}>
                                                {item.icon}
                                            </div>
                                            <span className="font-medium">{item.name}</span>
                                            {window.location.pathname === item.link && (
                                                <FaChevronRight className="ml-auto text-white text-sm" />
                                            )}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className="border-t border-gray-700 pt-4 mt-4">
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                            <div className="relative">
                                <img
                                    src={displayProfile.profilePicture}
                                    alt={displayProfile.name}
                                    className="w-12 h-12 rounded-full border-2 border-emerald-400 object-cover"
                                />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white font-semibold text-sm truncate">
                                    {displayProfile.name}
                                </p>
                                <p className="text-gray-300 text-xs truncate">
                                    {displayProfile.designation}
                                </p>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center w-full p-3 mt-3 text-red-400 hover:text-red-300 hover:bg-red-900 rounded-lg transition-all duration-200 group"
                        >
                            <FaSignOutAlt className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden fixed left-4 top-4 z-50">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white p-2 rounded-lg shadow-lg hover:from-emerald-500 hover:to-blue-600 transition-colors duration-200"
                    >
                        <FaBars size={20} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SrSideBar;