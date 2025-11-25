import { useEffect, useState } from "react";
import AdminSideBar from "../widgets/adminSideBar";
import OfflineComponent from "../../commonComponent/offlineComponent";

import visitLogo from "../../../assets/All.png";
import clientLogo from "../../../assets/Group 20212.png";
import AddIcon from "../../../assets/Calendar Add 01.png";

const AdminHomePage = () => {
  const [isOnline, setIsOnline] = useState(true);

  // Static Dashboard Data
  const dashboardStats = [
    {
      title: "Total Employees",
      count: 15,
      bg: "#14509F",
      icon: visitLogo,
    },
    {
      title: "Total Active Clients",
      count: 34,
      bg: "#27D095",
      icon: clientLogo,
    },
  ];

  // Static Schedule
  const priorityTasks = [
    { time: "09:30", role: "UI/UX Designer", work: "Practical Task Review" },
    { time: "12:00", role: "Magento Developer", work: "Resume Review" },
    { time: "01:30", role: "Sales Manager", work: "Final HR Round" },
  ];

  const otherTasks = [
    { time: "09:30", role: "Front end Developer", work: "Practical Task Review" },
    { time: "11:00", role: "React JS TL", work: "Meeting" },
  ];

  // Offline Detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) return <OfflineComponent />;

  return (
    <div className="flex">
      <AdminSideBar />

      <div className="flex-1 p-4 overflow-auto h-screen">
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* LEFT SIDE CONTENT */}
            <div className="md:col-span-2">
              {/* Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {dashboardStats.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded flex items-center shadow-md">
                    <div className="flex-shrink-0 mr-4">
                      <div style={{ backgroundColor: item.bg }} className="text-white rounded-md p-3">
                        <img src={item.icon} className="h-12" alt="Icon" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-2xl font-bold">{item.count}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Work Status Box */}
              <div className="bg-white p-4 rounded shadow-md">
                <h4 className="text-lg font-semibold mb-4">Work Status</h4>
                <div className="h-[300px] bg-gray-200 rounded flex justify-center items-center text-gray-500">
                  Chart Coming Soon
                </div>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT - Schedule */}
            <div className="bg-white p-4 rounded shadow-md border">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Upcoming Schedule</h4>
                <select className="border border-gray-300 rounded p-1">
                  <option>Jun 3 2024</option>
                  <option>Jun 4 2024</option>
                  <option>Jun 5 2024</option>
                  <option>Jun 6 2024</option>
                </select>
              </div>

              {/* Priority */}
              <h5 className="text-sm font-semibold">Priority</h5>
              <ul className="mb-8">
                {priorityTasks.map((item, index) => (
                  <li key={index} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="w-2/6">{item.time}</span>
                    <div className="w-5/6">
                      <p>{item.role}</p>
                      <p className="font-semibold">{item.work}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Others */}
              <h5 className="text-sm font-semibold">Others</h5>
              <ul className="mb-4">
                {otherTasks.map((item, index) => (
                  <li key={index} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="w-2/6">{item.time}</span>
                    <div className="w-5/6">
                      <p>{item.role}</p>
                      <p className="font-semibold">{item.work}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Add New Schedule Button */}
              <div className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded cursor-pointer">
                <img src={AddIcon} alt="Add icon" className="h-5" />
                <button>Create New Schedule</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
