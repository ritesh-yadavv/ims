import React from 'react';
import SalesSupervisorSidebar from "../widgets/SalesSupervisorSidebar";
import { useNavigate } from 'react-router-dom';
import headerBg from "../../../assets/devbackground.png";

const data = [
  {
    cse: "Rahul Kumar",
    clientName: "Dr. Anubhav Bassi",
    address: "NA",
    city: "NA",
    status: ["warning"],
    days: [],
    time: "NA",
  },
  {
    cse: "Rahul Kumar",
    clientName: "Dr. Shukla",
    address: "128, Shashi Arcade, Gandhi Maidan",
    city: "Patna",
    status: ["success", "error", "neutral", "success"],
    days: ["S", "M", "T", "W", "T", "F", "S"],
    time: "13:00 - 19:00",
  },
  {
    cse: "Rahul Kumar",
    clientName: "Dr. Anubhav Bassi",
    address: "NA",
    city: "NA",
    status: ["warning"],
    days: [],
    time: "NA",
  },
  {
    cse: "Rahul Kumar",
    clientName: "Dr. Shukla",
    address: "128, Shashi Arcade, Gandhi Maidan",
    city: "Patna",
    status: ["success", "neutral", "success", "warning"],
    days: ["S", "M", "T", "W", "T", "F", "S"],
    time: "13:00 - 19:00",
  },
  // Additional rows can be added here
];

const statusIcons = {
  success: "✅",
  error: "❌", 
  warning: "⚠️", 

};

const ActiveClients = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen w-full bg-[#F6F6F6]">
        
        <SalesSupervisorSidebar />
        <div className="p-4 w-full ">
          <div className="text-xl mb-4 font-bold rounded-lg  shadow-lg p-4 text-white  bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}>
            <h2 className="text-lg font-bold">Active Clients</h2>
          </div>

          <div className="overflow-x-auto w-full rounded-lg shadow-lg">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gradient-to-r from-teal-400 to-blue-500 text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">CSE</th>
                  <th className="border border-gray-300 px-4 py-2">Client Name</th>
                  <th className="border border-gray-300 px-4 py-2">Address</th>
                  <th className="border border-gray-300 px-4 py-2">City</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                  <th className="border border-gray-300 px-4 py-2">Days</th>
                  <th className="border border-gray-300 px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr onClick={() => navigate("/super-visor-active/ClientsProfile")}
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-gray-50 hover:bg-gray-100 text-[#4F4F4F]"
                        : "bg-white hover:bg-gray-100 text-[#4F4F4F]"
                    }
                  >
                    <td className="border border-gray-300 px-4 py-2">{row.cse}</td>
                    <td className="border border-gray-300 px-4 py-2">{row.clientName}</td>
                    <td className="border border-gray-300 px-4 py-2">{row.address}</td>
                    <td className="border border-gray-300 px-4 py-2">{row.city}</td>
                    <td className="border border-gray-300 px-4 py-2 flex space-x-2 justify-center">
                      {row.status.map((status, i) => (
                        <span key={i}>{statusIcons[status]}</span>
                      ))}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {row.days.length > 0 ? row.days.join(" ") : "NA"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveClients;
