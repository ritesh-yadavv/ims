import React from "react";
import CseSideBar from "../widgets/CseSideBar";
import { useNavigate } from "react-router-dom";
import headerBg from "../../../assets/devbackground.png";

const clients = [
  {
    name: "Dr. Shukla",
    city: "Patna",
    status: [true, true, true, true],
    days: "SMTWTFS",
    time: "13:00 - 19:00",
    contact: "1234567890",
  },
  {
    name: "Dr. Shukla",
    city: "Patna",
    status: [true, false, false, true],
    days: "SMTWTFS",
    time: "13:00 - 19:00",
    contact: "1234567890",
  },
  {
    name: "Dr. Shukla",
    city: "Patna",
    status: [true, false, false, true],
    days: "SMTWTFS",
    time: "13:00 - 19:00",
    contact: "1234567890",
  },
  {
    name: "Dr. Shukla",
    city: "Patna",
    status: [true, true, false, true],
    days: "SMTWTFS",
    time: "13:00 - 19:00",
    contact: "1234567890",
  },
];

const ActiveClients = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-white">
      <CseSideBar />

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="p-6">

          {/* Header */}
          <div className=" text-white py-2 px-4 rounded-t-lg shadow bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}>
            <h2 className="text-lg font-bold">Active Clients</h2>
          </div>

          {/* Table */}
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">City</th>
                <th className="p-2 border-b">Status</th>
                <th className="p-2 border-b">Days</th>
                <th className="p-2 border-b">Time</th>
                <th className="p-2 border-b">Contact No.</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={index}
                  onClick={() => navigate("/cse-active/profile", { state: { client } })}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-2 border-b">{client.name}</td>
                  <td className="p-2 border-b">{client.city}</td>

                  {/* Status Circle Indicators */}
                  <td className="p-2 border-b flex items-center space-x-2">
                    {client.status.map((status, i) => (
                      <span
                        key={i}
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                          status ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {status ? "✓" : "✕"}
                      </span>
                    ))}
                  </td>

                  <td className="p-2 border-b">{client.days}</td>
                  <td className="p-2 border-b">{client.time}</td>
                  <td className="p-2 border-b text-blue-500">{client.contact}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveClients;
