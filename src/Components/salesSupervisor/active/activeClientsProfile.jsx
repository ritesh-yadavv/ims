import React from "react";
import SalesSupervisorSidebar from "../widgets/SalesSupervisorSidebar";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const TextInput = ({ label, value, type = "text" }) => (
  <div className="flex items-center space-x-2 w-full">
    <label className="text-sm font-medium text-gray-600 w-1/4">{label}:</label>
    <input
      type={type}
      defaultValue={value}
      className="flex-1 p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
    />
  </div>
);

const ActiveClientProfile = () => {
  let navigate = useNavigate();
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Fixed Sidebar */}
      <div className="fixed h-full">
        <SalesSupervisorSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-[#F6F6F6] p-4">
        {/* Header */}
        <div className="flex text-xl font-bold bg-white shadow-lg text-[#14509F] justify-between items-center mb-6 rounded-md px-4 py-4">
          <button onClick={() => navigate(-1)} className="flex items-center space-x-2" aria-label="Go Back">
            <FiArrowLeft />
            <span>Active Clients &gt; Client Profile</span>
          </button>
        </div>

        {/* Client Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Name", value: "Dr. A. Shukla" },
            { label: "Specialization", value: "Pediatrics" },
            { label: "Compounder Name", value: "Raju" },
            { label: "Compounder Number", value: "+91 99443 84923" },
            { label: "Doctor Number", value: "+91 99443 84923" },
            { label: "Email ID", value: "a.shukla10@gmail.com", type: "email" },
            { label: "Address", value: "128, Shashi Arcade, Gandhi Maidan, Opp. Cinema" },
            { label: "City", value: "Patna" },
            { label: "State", value: "Bihar" },
          ].map((field, index) => (
            <TextInput key={index} {...field} />
          ))}
        </div>

        {/* Clinic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-600">Clinic Days:</label>
            <div className="flex space-x-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <button
                  key={index}
                  className={`p-2 w-10 text-center rounded-md transition ${["M", "T", "W", "T", "F"].includes(day) ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-600">Clinic Timings:</label>
            <select className="border border-gray-300 p-2 rounded-md">
              <option>13:00</option>
            </select>
            <span>to</span>
            <select className="border border-gray-300 p-2 rounded-md">
              <option>19:00</option>
            </select>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-600">Customer Support:</label>
            <select className="border border-gray-300 p-2 rounded-md">
              <option>Gupta</option>
            </select>
          </div>
          {["Installation Date", "Date of Contract", "Monthly Subscription"].map((label, index) => (
            <div key={index} className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-600">{label}:</label>
              <input
                type="date"
                defaultValue="2024-10-03"
                className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          ))}
        </div>

        {/* Installation and Training */}
        <div className="bg-gray-100 mt-6 p-4 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Installation and Training</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
              Schedule Training +
            </button>
          </div>
          <div className="space-y-2">
            {[
              { name: "Training I", date: "2024-10-03", status: "Completed" },
              { name: "Training II", date: "2024-10-03", status: "Delayed" },
              { name: "Training III", date: "2024-10-03", status: "Scheduled" },
            ].map((training, index) => (
              <div key={index} className="flex items-center gap-4 border-b border-gray-300 py-2">
                <span className="text-gray-600 font-medium">{training.name}</span>
                <input
                  type="date"
                  defaultValue={training.date}
                  className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
                <span className={`px-4 py-2 text-sm font-medium rounded-md ${training.status === "Completed" ? "bg-green-200 text-green-700" : training.status === "Delayed" ? "bg-red-200 text-red-700" : "bg-yellow-200 text-yellow-700"}`}>{training.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveClientProfile;
