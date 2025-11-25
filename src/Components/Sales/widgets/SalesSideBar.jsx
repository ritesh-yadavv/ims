import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaHome, FaBell, FaCalendarAlt, FaUserPlus, FaUsers, FaRoute, FaSignOutAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SidebarBg from "../../../assets/sidebarBg.png";

const SalesSideBar = () => {
  const navigate = useNavigate();
  const SalesProfile = useSelector((state) => state.employeeProfile.employeeProfile);

  const staticSalesProfile = {
    id: 101,
    name: "John Salesman",
    email: "john.sales@company.com",
    designation: "Senior Sales Executive",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    team: "Enterprise Sales",
    joinDate: "2022-03-15"
  };

  const navItems = [
    { name: "Dashboard", link: "/sales-dashboard", icon: <FaHome />, section: "overview" },
    { name: "Notifications", link: "/sales/notifications", icon: <FaBell />, section: "overview" },
    { name: "Calendar", link: "/sales/calender", icon: <FaCalendarAlt />, section: "overview" },

    { name: "Leads", link: "/sales/lead", icon: <FaUserPlus />, section: "clients" },
    { name: "Active Clients", link: "/sales/active", icon: <FaUsers />, section: "clients" },
    { name: "Tour Plan", link: "/sales/tour", icon: <FaRoute />, section: "clients" },
  ];

  const displayProfile = SalesProfile || staticSalesProfile;

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("Role");
    navigate("/login");
  };

  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    const handler = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  const overviewItems = navItems.filter(n => n.section === "overview");
  const clientItems = navItems.filter(n => n.section === "clients");

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 md:hidden z-40" />
      )}

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed left-4 top-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
      >
        <FaBars size={20} />
      </button>

      {/* SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`fixed md:relative top-0 left-0 h-full w-64 p-4 text-white
          bg-cover bg-center bg-no-repeat z-50 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        style={{ backgroundImage: `url(${SidebarBg})` }}
      >

        {/* LOGO */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-white p-2 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RS</span>
            </div>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">Sales Portal</h1>
            <p className="text-blue-200 text-xs">Performance Dashboard</p>
          </div>
        </div>

        {/* NAVIGATION (NO SCROLLING) */}
        <div className="flex flex-col justify-between h-[calc(100%-6rem)]">

          {/* TOP NAVIGATION */}
          <div className="space-y-6">
            {/* Overview */}
            <div>
              <h2 className="text-xs text-blue-300 uppercase px-2 mb-2">Overview</h2>
              <div className="space-y-1">
                {overviewItems.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg transition 
                      ${isActive ? "bg-white text-blue-700 shadow" : "text-blue-100 hover:bg-blue-700"}`
                    }
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Client Management */}
            <div>
              <h2 className="text-xs text-blue-300 uppercase px-2 mb-2">Client Management</h2>
              <div className="space-y-1">
                {clientItems.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg transition 
                      ${isActive ? "bg-white text-blue-700 shadow" : "text-blue-100 hover:bg-blue-700"}`
                    }
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM PROFILE SECTION */}
          <div>
            <div className="flex items-center gap-3 px-3 py-3 bg-blue-800 rounded-lg">
              <img
                src={displayProfile.profilePicture}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover border border-blue-300"
              />
              <div>
                <p className="text-white font-semibold text-sm">{displayProfile.name}</p>
                <p className="text-blue-200 text-xs">{displayProfile.designation}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full mt-3 px-3 py-2 text-red-300 hover:bg-red-900 rounded-lg"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default SalesSideBar;
