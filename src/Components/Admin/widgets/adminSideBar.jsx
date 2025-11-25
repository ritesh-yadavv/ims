import React, { useState, useEffect, useRef, memo } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// LOCAL STATIC IMAGES
import SidebarLogo from "../../../assets/reshitaSidebarLogo.svg";
import LogoutIcon from "../../../assets/logoutIcon.svg";
import CompanyLogo from "../../../assets/1.png";
import SidebarBg from "../../../assets/sidebarBg.png";

// REACT ICONS
import {
  FaHome,
  FaTools,
  FaUser,
  FaUsers,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaChartLine,
} from "react-icons/fa";

const AdminSideBar = () => {
  // STATIC PROFILE DATA
  const profileData = {
    companyName: "Ritesh Yadav",
    companyLogoURL: CompanyLogo,
  };

  // MENU ITEMS WITH REACT ICONS
  const navItem = [
    { name: "Home", link: "/admin-dashboard", icon: <FaHome size={18} /> },
    { name: "Controls", link: "/admin/controls", icon: <FaTools size={18} /> },
    { name: "Profile", link: "/admin/profile", icon: <FaUser size={18} /> },

    { name: "Employee Details", link: "/admin/employee-list", icon: <FaUsers size={18} /> },
    { name: "Payroll", link: "/admin/payroll", icon: <FaMoneyBillWave size={18} /> },
    { name: "Holiday & Leave", link: "/admin/holiday", icon: <FaCalendarAlt size={18} /> },
    { name: "Employee Performance", link: "/admin/employee-performance", icon: <FaChartLine size={18} /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="flex h-[100vh] bg-gray-100 text-gray-800 z-50">

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

        {/* LOGO */}
        <div className="flex items-center mb-6">
          <img src={SidebarLogo} alt="Sidebar Logo" className="h-[68px] w-[159px]" />
        </div>

        {/* MENU */}
        <div className="space-y-6 flex-1">

          {/* Overview */}
          <div>
            <h2 className="text-sm text-blue-500 mb-3">Overview</h2>
            <ul className="space-y-1 text-sm ml-2">
              {navItem.slice(0, 3).map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 bg-blue-500 text-white rounded-md"
                        : "flex items-center p-2 space-x-3 text-white rounded-md hover:bg-[#3085f6]"
                    }
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Employee Management */}
          <div>
            <h2 className="text-sm text-blue-500 mb-3">Employee Management</h2>
            <ul className="space-y-1 text-sm ml-2">
              {navItem.slice(3).map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 bg-blue-500 text-white rounded-md"
                        : "flex items-center p-2 space-x-3 text-white rounded-md hover:bg-[#3085f6]"
                    }
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* FOOTER PROFILE SECTION */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <img
              src={profileData.companyLogoURL}
              alt="Company Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-white text-sm font-medium">{profileData.companyName}</p>
              <p className="text-gray-400 text-xs">Admin</p>
            </div>
          </div>

          <button className="flex items-center text-red-500 hover:text-red-400 mt-3 text-sm">
            <img src={LogoutIcon} className="w-5 mr-2" alt="logout" />
            Logout
          </button>
        </div>

      </div>

      {/* MOBILE TOGGLE BUTTON */}
      <div className="md:hidden fixed left-2 top-7 z-30">
        <button onClick={toggleSidebar}>
          {!isOpen && <FaBars size={24} className="text-black" />}
        </button>
      </div>

    </div>
  );
};

export default memo(AdminSideBar);
