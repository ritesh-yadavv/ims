import React, { useState, useEffect, useRef } from 'react';
import SidebarBg from "../../assets/sidebarBg.png";
import { 
    FaBars, 
    FaHome, 
    FaBell, 
    FaCalendarAlt, 
    FaUsers,
    FaMoneyBillWave,
    FaUmbrellaBeach,
    FaChartLine,
    FaSignOutAlt,
    FaChevronRight
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const SideNavBar = () => {
    const dispatch = useDispatch();
    const hrProfile = useSelector((state) => state.employeeProfile.employeeProfile);
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Static HR profile data
    const staticHrProfile = {
        id: 501,
        name: "Sarah Johnson",
        profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        designation: "HR Manager",
        email: "sarah.johnson@company.com",
        department: "Human Resources",
        joinDate: "2019-08-15"
    };

    // Navigation items
    const navItems = [
        { name: "Dashboard", link: "/home", icon: <FaHome className="text-lg" />, section: "overview" },
        { name: "Notifications", link: "/notifications", icon: <FaBell className="text-lg" />, section: "overview" },
        { name: "Calendar", link: "/calendar", icon: <FaCalendarAlt className="text-lg" />, section: "overview" },
        { name: "Employee Details", link: "/employee-details", icon: <FaUsers className="text-lg" />, section: "management" },
        { name: "Payroll", link: "/payroll", icon: <FaMoneyBillWave className="text-lg" />, section: "management" },
        { name: "Holiday & Leaves", link: "/holiday", icon: <FaUmbrellaBeach className="text-lg" />, section: "management" },
        { name: "Employee Performance", link: "/employee-performance", icon: <FaChartLine className="text-lg" />, section: "management" }
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("Role");
        setTimeout(() => {
            window.location.href = '/login';
        }, 500);
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
        if (isOpen) document.addEventListener('mousedown', handleClickOutside);
        else document.removeEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const displayProfile = hrProfile || staticHrProfile;

    const overviewItems = navItems.filter(item => item.section === "overview");
    const managementItems = navItems.filter(item => item.section === "management");

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" />}

            <div className="flex h-screen text-white z-50">

                {/* FULL HEIGHT + FULL SCROLL SIDEBAR */}
                <div
                    ref={sidebarRef}
                    className={`fixed md:relative flex flex-col h-screen overflow-y-auto p-4 
                        bg-cover bg-center bg-no-repeat min-w-[16rem] transition-all duration-300 ease-in-out z-50
                        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
                    style={{ backgroundImage: `url(${SidebarBg})` }}
                >

                    {/* Logo */}
                    <div className="flex items-center justify-between mb-8 pt-4">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white p-2 rounded-lg">
                                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">HR</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white text-xl font-bold">HR Portal</h1>
                                <p className="text-indigo-200 text-xs">Management System</p>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Navigation */}
                    <div className="space-y-6 flex-1 overflow-y-auto pr-2">

                        {/* Overview */}
                        <div>
                            <h2 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3 px-2">
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
                                                        ? 'bg-white text-indigo-700 shadow-lg transform scale-105'
                                                        : 'text-indigo-100 hover:bg-indigo-700 hover:text-white hover:shadow-md'
                                                }`
                                            }
                                        >
                                            <div className="text-indigo-300 group-hover:text-white">
                                                {item.icon}
                                            </div>
                                            <span className="font-medium">{item.name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Management */}
                        <div>
                            <h2 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3 px-2">
                                Employee Management
                            </h2>
                            <ul className="space-y-1">
                                {managementItems.map((item, i) => (
                                    <li key={i}>
                                        <NavLink
                                            to={item.link}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-center p-3 space-x-3 rounded-xl transition-all duration-200 group ${
                                                    isActive
                                                        ? 'bg-white text-indigo-700 shadow-lg transform scale-105'
                                                        : 'text-indigo-100 hover:bg-indigo-700 hover:text-white hover:shadow-md'
                                                }`
                                            }
                                        >
                                            <div className="text-indigo-300 group-hover:text-white">
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
                    <div className="border-t border-indigo-700 pt-4 mt-4">
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-colors duration-200 cursor-pointer">
                            <div className="relative">
                                <img
                                    src={displayProfile.profilePicture}
                                    alt={displayProfile.name}
                                    className="w-12 h-12 rounded-full border-2 border-indigo-300 object-cover"
                                />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-indigo-800"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white font-semibold text-sm truncate">{displayProfile.name}</p>
                                <p className="text-indigo-200 text-xs truncate">{displayProfile.designation}</p>
                            </div>
                        </div>

                        {/* Logout */}
                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center w-full p-3 mt-3 text-red-400 hover:text-red-300 hover:bg-red-900 rounded-lg transition-all duration-200 group"
                        >
                            <FaSignOutAlt className="mr-2" />
                            <span className="font-medium">Logout</span>
                        </button>

                        {/* Stats */}
                        <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-indigo-700 rounded-lg p-2 text-center">
                                <div className="font-semibold text-white">45</div>
                                <div className="text-indigo-200">Employees</div>
                            </div>
                            <div className="bg-indigo-700 rounded-lg p-2 text-center">
                                <div className="font-semibold text-white">8</div>
                                <div className="text-indigo-200">Dept</div>
                            </div>
                            <div className="bg-indigo-700 rounded-lg p-2 text-center">
                                <div className="font-semibold text-white">12</div>
                                <div className="text-indigo-200">On Leave</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Button */}
                <div className="md:hidden fixed left-4 top-4 z-50">
                    <button 
                        onClick={toggleSidebar}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200"
                    >
                        <FaBars size={20} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideNavBar;
