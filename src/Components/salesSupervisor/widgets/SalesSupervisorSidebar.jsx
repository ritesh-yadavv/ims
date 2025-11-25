import React, { useState, useEffect, useRef } from 'react';
import { 
    FaBars, 
    FaHome, 
    FaBell, 
    FaCalendarAlt, 
    FaUserPlus, 
    FaUsers, 
    FaRoute, 
    FaChartBar,
    FaSignOutAlt
} from 'react-icons/fa';
import SidebarBg from "../../../assets/sidebarBg.png";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const SalesSupervisorSidebar = () => {
    const dispatch = useDispatch();
    const salesSuperVisiorProfile = useSelector((state) => state.employeeProfile.employeeProfile);

    const navItems = [
        { name: "Dashboard", link: "/sales-super-visor", icon: <FaHome className="text-lg" />, section: "overview" },
        { name: "Notifications", link: "/super-visor-notifications", icon: <FaBell className="text-lg" />, section: "overview" },
        { name: "Calendar", link: "/super-visor-calendar", icon: <FaCalendarAlt className="text-lg" />, section: "overview" },
        { name: "Leads", link: "/super-visor-lead", icon: <FaUserPlus className="text-lg" />, section: "clients" },
        { name: "Active Clients", link: "/super-visor-active", icon: <FaUsers className="text-lg" />, section: "clients" },
        { name: "Tour Plan", link: "/super-visor-plan", icon: <FaRoute className="text-lg" />, section: "clients" },
        { name: "Reports", link: "/super-visor-report", icon: <FaChartBar className="text-lg" />, section: "clients" },
    ];

    const staticSupervisorProfile = {
        id: 201,
        name: "Alex Johnson",
        profilePicture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        designation: "Sales Supervisor",
        email: "alex.johnson@company.com",
        team: "Enterprise Sales",
        joinDate: "2021-08-15"
    };

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('Role');
        setTimeout(() => {
            window.location.href = '/login';
        }, 500);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const displayProfile = salesSuperVisiorProfile || staticSupervisorProfile;

    const overviewItems = navItems.filter(item => item.section === "overview");
    const clientItems = navItems.filter(item => item.section === "clients");

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
            )}

            <div className="flex h-screen text-white z-50">

                {/* SIDEBAR */}
                <div
                    ref={sidebarRef}
                    className={`fixed md:relative flex flex-col h-screen p-4
                        bg-cover bg-center bg-no-repeat min-w-[16rem] transition-all duration-300 ease-in-out z-50 
                        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
                    style={{
                        backgroundImage: `url(${SidebarBg})`,
                    }}
                >

                    {/* Logo */}
                    <div className="flex items-center justify-between mb-8 pt-4">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white p-2 rounded-lg">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">RS</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white text-xl font-bold">Supervisor</h1>
                                <p className="text-blue-200 text-xs">Management Portal</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    <div className="space-y-6 flex-1 overflow-hidden">

                        {/* OVERVIEW */}
                        <div>
                            <h2 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3 px-2">
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
                                                        ? 'bg-white text-blue-700 shadow-lg transform scale-105'
                                                        : 'text-blue-100 hover:bg-blue-700 hover:text-white hover:shadow-md'
                                                }`
                                            }
                                        >
                                            <div className="text-blue-300 group-hover:text-white">
                                                {item.icon}
                                            </div>
                                            <span className="font-medium">{item.name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CLIENT MANAGEMENT */}
                        <div>
                            <h2 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3 px-2">
                                Client Management
                            </h2>
                            <ul className="space-y-1">
                                {clientItems.map((item, i) => (
                                    <li key={i}>
                                        <NavLink
                                            to={item.link}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-center p-3 space-x-3 rounded-xl transition-all duration-200 group ${
                                                    isActive
                                                        ? 'bg-white text-blue-700 shadow-lg transform scale-105'
                                                        : 'text-blue-100 hover:bg-blue-700 hover:text-white hover:shadow-md'
                                                }`
                                            }
                                        >
                                            <div className="text-blue-300 group-hover:text-white">
                                                {item.icon}
                                            </div>
                                            <span className="font-medium">{item.name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* PROFILE */}
                    <div className="border-t border-blue-700 pt-4 mt-4">
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-800 hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                            <div className="relative">
                                <img
                                    src={displayProfile.profilePicture}
                                    alt={displayProfile.name}
                                    className="w-12 h-12 rounded-full border-2 border-blue-300 object-cover"
                                />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-blue-800"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white font-semibold text-sm truncate">
                                    {displayProfile.name}
                                </p>
                                <p className="text-blue-200 text-xs truncate">
                                    {displayProfile.designation}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center w-full p-3 mt-3 text-red-300 hover:text-red-100 hover:bg-red-900 rounded-lg transition-all duration-200"
                        >
                            <FaSignOutAlt className="mr-2" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden fixed left-4 top-4 z-50">
                    <button 
                        onClick={toggleSidebar}
                        className="bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700"
                    >
                        <FaBars size={20} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SalesSupervisorSidebar;
