import React from 'react';
import SalesSupervisorSidebar from "../widgets/SalesSupervisorSidebar";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const MrClientProfileDetails = () => {

  const navigate = useNavigate();

  // ⭐ Static Data Instead of API/Navigation State
  const item = {
    name: "Dr. Rahul Verma",
    specialization: "Cardiologist",
    compounderName: "Ramesh Kumar",
    compounderNumber: "9876543210",
    doctorNumber: "9123456780",
    email: "rahul.verma@example.com",
    address: "Shivaji Nagar, Near City Hospital",
    city: "Varanasi",
    state: "Uttar Pradesh",
    clinicDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    clinicTimingsStart: "09:00 AM",
    clinicTimingsEnd: "02:00 PM"
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SalesSupervisorSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 bg-[#F6F6F6] overflow-y-auto h-screen">

        <div className="max-w-7xl mx-auto bg-[#F6F6F6] shadow-md rounded-lg p-6 min-h-[80vh]">

          {/* Header */}
          <div className="flex w-full text-xl font-bold bg-white shadow-lg text-[#14509F] justify-between items-center mb-6 rounded-md px-4 py-2">
            <div className="flex items-center">
              <button onClick={() => navigate(-1)} className="flex items-center mr-2">
                <FiArrowLeft className="mr-2" />
              </button>
              <span>Client Leads &gt; Client Profile Details</span>
            </div>

            <button className="text-base bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Edit
            </button>
          </div>

          {/* Client Information */}
          <div className="grid grid-cols-2 gap-4 bg-[#F6F6F6]">

            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium">Name:</label>
              <input
                type="text"
                value={item.name}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

            {/* Specialization */}
            <div>
              <label className="block text-gray-700 font-medium">Specialization:</label>
              <input
                type="text"
                value={item.specialization}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

            {/* Compounder Name */}
            <div>
              <label className="block text-gray-700 font-medium">Compounder Name:</label>
              <input
                type="text"
                value={item.compounderName}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

            {/* Compounder Number */}
            <div>
              <label className="block text-gray-700 font-medium">Compounder Number:</label>
              <input
                type="text"
                value={item.compounderNumber}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

            {/* Doctor Number */}
            <div>
              <label className="block text-gray-700 font-medium">Doctor Number:</label>
              <input
                type="text"
                value={item.doctorNumber}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-gray-700 font-medium">Email ID:</label>
              <input
                type="text"
                value={item.email}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Address:</label>
              <input
                type="text"
                value={item.address}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 font-medium">City:</label>
              <input
                type="text"
                value={item.city}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-gray-700 font-medium">State:</label>
              <input
                type="text"
                value={item.state}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

            {/* Call Days */}
            <div>
              <label className="block text-gray-700 font-medium">Call Days:</label>
              <div className="flex space-x-2 mt-1">
                {item.clinicDays.map((day, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-md bg-blue-500 text-white border border-gray-500"
                  >
                    {day.slice(0, 1)}
                  </span>
                ))}
              </div>
            </div>

            {/* Call Timing */}
            <div>
              <label className="block text-gray-700 font-medium">Call Timings:</label>
              <input
                type="text"
                value={`${item.clinicTimingsStart} - ${item.clinicTimingsEnd}`}
                className="mt-1 block w-full border border-gray-500 bg-[#F6F6F6] rounded-md px-3 py-2"
                readOnly
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default MrClientProfileDetails;
