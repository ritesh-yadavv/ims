import React, { useState, useEffect, useRef } from 'react';
import { 
    FaBars, 
    FaHome, 
    FaBell, 
    FaCalendarAlt, 
    FaUserPlus, 
    FaUsers,
    FaSignOutAlt,
    FaChevronDown,
    FaPhone
} from 'react-icons/fa';
import SidebarBg from "../../../assets/sidebarBg.png";
import { NavLink } from 'react-router-dom';

const TelecallerSideBar = () => {

    const navItems = [
        { name: "Dashboard", link: "/telecaller", icon: <FaHome />, section: "overview" },
        { name: "Notifications", link: "/telecaller-notifications", icon: <FaBell />, section: "overview" },
        { name: "Calendar", link: "/telecaller-calendar", icon: <FaCalendarAlt />, section: "overview" },
        { name: "Leads", link: "/telecaller-lead", icon: <FaUserPlus />, section: "clients" },
        { name: "Active Clients", link: "/telecaller-active", icon: <FaUsers />, section: "clients" }
    ];

    const staticTelecallerProfile = {
        name: "Saumya Agarwal",
        profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        designation: "Senior Telecaller"
    };

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("Role");
        window.location.href = "/login";
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsOpen(false);
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const overviewItems = navItems.filter(i => i.section === "overview");
    const clientItems = navItems.filter(i => i.section === "clients");

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
            )}

            <div className="flex h-screen text-white">

                {/* SIDEBAR FIXED FULL HEIGHT + FULL SCROLL */}
                <div
                    ref={sidebarRef}
                    className={`fixed md:relative flex flex-col h-screen 
                        overflow-y-auto no-scrollbar p-4 bg-cover bg-center bg-no-repeat 
                        min-w-[16rem] transition-all duration-300 ease-in-out z-50
                        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
                    style={{ backgroundImage: `url(${SidebarBg})` }}
                >
                    {/* Logo */}
                    <div className="flex items-center space-x-3 mb-8 mt-2">
                        <div className="bg-white p-2 rounded-lg">
                            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                                <FaPhone className="text-white text-sm" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Telecaller</h1>
                            <p className="text-xs text-teal-200">Communication Portal</p>
                        </div>
                    </div>

                    {/* NAVIGATION SCROLL SECTION */}
                    <div className="space-y-8 flex-1">

                        {/* Overview */}
                        <div>
                            <h2 className="text-xs font-semibold text-teal-300 uppercase px-2 mb-3">Overview</h2>
                            <ul className="space-y-2">
                                {overviewItems.map((item, idx) => (
                                    <li key={idx}>
                                        <NavLink
                                            to={item.link}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-center p-3 rounded-xl space-x-3 transition-all duration-200 
                                                ${isActive
                                                    ? "bg-white text-teal-700 shadow-lg scale-105"
                                                    : "text-teal-100 hover:bg-teal-600 hover:text-white"
                                                }`
                                            }
                                        >
                                            <span>{item.icon}</span>
                                            <span className="font-medium">{item.name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Clients */}
                        <div>
                            <h2 className="text-xs font-semibold text-teal-300 uppercase px-2 mb-3">Client Management</h2>
                            <ul className="space-y-2">
                                {clientItems.map((item, idx) => (
                                    <li key={idx}>
                                        <NavLink
                                            to={item.link}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-center p-3 rounded-xl space-x-3 transition-all duration-200 
                                                ${isActive
                                                    ? "bg-white text-teal-700 shadow-lg scale-105"
                                                    : "text-teal-100 hover:bg-teal-600 hover:text-white"
                                                }`
                                            }
                                        >
                                            <span>{item.icon}</span>
                                            <span className="font-medium">{item.name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* PROFILE SECTION (BOTTOM) */}
                    <div className="border-t border-teal-500 pt-4 mt-4 mb-4">
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-teal-700">
                            <img
                                src={staticTelecallerProfile.profilePicture}
                                alt="profile"
                                className="w-12 h-12 rounded-full border-2 border-teal-300 object-cover"
                            />
                            <div>
                                <p className="font-semibold">{staticTelecallerProfile.name}</p>
                                <p className="text-xs text-teal-200">{staticTelecallerProfile.designation}</p>
                            </div>

                            <button onClick={toggleDropdown}>
                                <FaChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                            </button>
                        </div>

                        {dropdownOpen && (
                            <div className="bg-white text-black rounded-lg shadow-lg mt-2">
                                <button
                                    onClick={handleLogout}
                                    className="flex w-full px-4 py-2 space-x-2 text-red-600 hover:bg-red-100"
                                >
                                    <FaSignOutAlt />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={toggleSidebar}
                    className="md:hidden fixed left-4 top-4 z-50 bg-teal-600 p-2 rounded-lg"
                >
                    <FaBars size={20} />
                </button>
            </div>
        </>
    );
};

export default TelecallerSideBar;
