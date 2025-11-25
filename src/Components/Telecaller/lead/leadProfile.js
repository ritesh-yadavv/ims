import React, { useState } from "react";
import SideBarMain from "../widgets/TelecallerSideBar";
import EditLogo from "../../../assets/edit.png";
import { useLocation } from 'react-router-dom';
import {
  FaUser,
  FaStethoscope,
  FaUserNurse,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCity,
  FaGlobe,
  FaPhone,
  FaClock,
  FaCalendarAlt,
  FaSave,
  FaEdit,
  FaCheck
} from "react-icons/fa";

const LeadProfile = () => {
  const location = useLocation();
  const { client } = location.state || {};
  const [selectedDays, setSelectedDays] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [feedbackHistory, setFeedbackHistory] = useState([
    { name: "Anaya Sangha", notes: "Less patients for now", time: "11:23 am", date: "12/11/24" },
    { name: "Rishi Parsa", notes: "Shifting clinic to other place", time: "11:23 am", date: "12/11/24" },
    { name: "Kamala Sidhu", notes: "Less Patient", time: "11:23 am", date: "12/11/24" },
  ]);

  const handleDayClick = (index) => {
    const isDaySelected = selectedDays.includes(index);
    if (isDaySelected) {
      setSelectedDays(selectedDays.filter((day) => day !== index));
    } else {
      setSelectedDays([...selectedDays, index]);
    }
  };

  const handleSaveFeedback = () => {
    if (feedback.trim()) {
      const newFeedback = {
        name: "You",
        notes: feedback,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString(),
      };
      setFeedbackHistory([newFeedback, ...feedbackHistory]);
      setFeedback("");
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleConfirm = () => {
    setIsEditing(false);
    // Add your confirmation logic here
    alert("Changes confirmed successfully!");
  };

  if (!client) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-xl font-bold text-gray-600">Client Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* SIDEBAR */}
      <div className="fixed top-0 left-0 h-full bg-white shadow-lg z-50 w-60">
        <SideBarMain />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col flex-1 ml-60">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 shadow-lg sticky top-0 z-40">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Client Profile</h1>
              <p className="text-blue-100 mt-1">
                Detailed information about the lead
              </p>
            </div>
            <button 
              onClick={handleEditToggle}
              className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center shadow-md"
            >
              <img alt="Edit" className="w-4 h-4 mr-2" src={EditLogo} />
              {isEditing ? "Cancel Edit" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* PROFILE CONTENT */}
        <div className="p-6 flex-1">
          {/* CLIENT INFORMATION CARD */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-6 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white flex items-center justify-center font-bold text-xl">
                    {client.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{client.name}</h2>
                    <p className="text-green-600 font-medium">{client.specialization}</p>
                    <div className="flex items-center mt-1 text-gray-600">
                      <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                      <span>{client.city}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                    <FaClock className="w-3 h-3 mr-1" />
                    {client.clinicTimingsStart} - {client.clinicTimingsEnd}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaUser className="w-5 h-5 mr-2 text-blue-500" />
                      Personal Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Full Name</span>
                        <span className="text-gray-800 font-semibold">{client.name}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Specialization</span>
                        <span className="text-gray-800 font-semibold">{client.specialization}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Email</span>
                        <span className="text-gray-800">{client.email || "Not provided"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaPhone className="w-5 h-5 mr-2 text-green-500" />
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Doctor Number</span>
                        <span className="text-gray-800 font-semibold">{client.doctorNumber}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Compounder Name</span>
                        <span className="text-gray-800">{client.compounderName || "Not provided"}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Compounder Number</span>
                        <span className="text-gray-800">{client.compounderNumber || "Not provided"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Location Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaMapMarkerAlt className="w-5 h-5 mr-2 text-red-500" />
                      Location Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Address</span>
                        <span className="text-gray-800 text-right">{client.address || "Not provided"}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">City</span>
                        <span className="text-gray-800">{client.city}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">State</span>
                        <span className="text-gray-800">{client.state || "Not provided"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Clinic Schedule */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaCalendarAlt className="w-5 h-5 mr-2 text-purple-500" />
                      Clinic Schedule
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Timings</span>
                        <span className="text-gray-800 font-semibold">
                          {client.clinicTimingsStart} - {client.clinicTimingsEnd}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 font-medium block mb-3">Clinic Days</span>
                        <div className="flex flex-wrap gap-2">
                          {client.clinicDays.map((day, index) => (
                            <div
                              key={index}
                              className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                                selectedDays.includes(index)
                                  ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md"
                                  : "bg-gray-100 text-gray-700 border border-gray-200"
                              }`}
                              onClick={() => handleDayClick(index)}
                            >
                              {day}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm Button */}
              {isEditing && (
                <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleConfirm}
                    className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
                  >
                    <FaCheck className="w-4 h-4 mr-2" />
                    Confirm Changes
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* FEEDBACK SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Add Feedback */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FaEdit className="w-5 h-5 mr-2 text-blue-500" />
                Add Feedback
              </h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your feedback about this client..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
              />
              <button
                onClick={handleSaveFeedback}
                disabled={!feedback.trim()}
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md"
              >
                <FaSave className="w-4 h-4 mr-2" />
                Save Feedback
              </button>
            </div>

            {/* Feedback History */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FaStethoscope className="w-5 h-5 mr-2 text-green-500" />
                Feedback History
              </h3>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {feedbackHistory.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-gray-800">{item.name}</span>
                      <div className="text-right text-sm text-gray-500">
                        <div>{item.date}</div>
                        <div>{item.time}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{item.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadProfile;