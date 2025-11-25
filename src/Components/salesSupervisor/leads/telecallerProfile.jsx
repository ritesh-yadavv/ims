import React from "react";
import SalesSupervisorSidebar from "../widgets/SalesSupervisorSidebar";
import ClientFeedbacks from "./clientFeedbacks";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const TelecallerProfile = () => {
  let navigate = useNavigate();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SalesSupervisorSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-[#F6F6F6] overflow-y-auto h-screen overflow-auto">
        <div className="max-w-6xl mx-auto bg-[#F6F6F6] shadow-md rounded-lg p-6 min-h-[80vh]">
          {/* Header */}
          <div className="flex w-full text-xl font-bold bg-white shadow-lg text-[#14509F] justify-between items-center mb-6 rounded-md px-4 py-2">
            <div className="flex items-center">
              <button onClick={() => navigate(-1)} className="flex items-center mr-2">
                <FiArrowLeft className="mr-2" />
              </button>
              <span>Client Leads &gt; Telecaller Profile</span>
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
                value="Dr. A. Shukla"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
            {/* Specialization */}
            <div>
              <label className="block text-gray-700 font-medium">Specialization:</label>
              <input
                type="text"
                value="Pediatrics"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
            {/* Compounder Name */}
            <div>
              <label className="block text-gray-700 font-medium">Compounder Name:</label>
              <input
                type="text"
                value="Raju"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
            {/* Compounder Number */}
            <div>
              <label className="block text-gray-700 font-medium">Compounder Number:</label>
              <input
                type="text"
                value="+91 99443 84923"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
            {/* Doctor Number */}
            <div>
              <label className="block text-gray-700 font-medium">Doctor Number:</label>
              <input
                type="text"
                value="+91 99443 84923"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
            {/* Email ID */}
            <div>
              <label className="block text-gray-700 font-medium">Email ID:</label>
              <input
                type="text"
                value="a.shukla10@gmail.com"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
            {/* Address */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Address:</label>
              <input
                type="text"
                value="128, Shashi Arcade, Gandhi Maidan, Opp. Cinema"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
            {/* City */}
            <div>
              <label className="block text-gray-700 font-medium">City:</label>
              <input
                type="text"
                value="Patna"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
            {/* State */}
            <div>
              <label className="block text-gray-700 font-medium">State:</label>
              <input
                type="text"
                value="Bihar"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
            {/* Call Days */}
            <div>
              <label className="block text-gray-700 font-medium">Call Days:</label>
              <div className="flex space-x-2 mt-1">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-md bg-[#F6F6F6]  border border-gray-500 ${index > 0 && index < 6 ? "bg-blue-500 text-white" : "bg-gray-100"
                      }`}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
            {/* Call Timings */}
            <div>
              <label className="block text-gray-700 font-medium">Call Timings:</label>
              <input
                type="text"
                value="13:00 - 19:00"
                className="mt-1 block w-full bg-[#F6F6F6]  border border-gray-500 rounded-md  px-3 py-2"
                readOnly
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6"></div>

          {/* Customer Support and Installation Date */}
          <div className="flex justify-between items-center">
            <div>
              <label className="block text-gray-700 font-medium">Customer Support:</label>
              <p className="text-gray-900">Ritesh Kumar Gupta</p>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Installation Date:</label>
              <p className="text-gray-900">10/01/2025</p>
            </div>
          </div>
          <div className="border-t border-gray-300 my-6"></div>

          <ClientFeedbacks />
        </div>

      </div>
    </div>

  );
};

export default TelecallerProfile;
