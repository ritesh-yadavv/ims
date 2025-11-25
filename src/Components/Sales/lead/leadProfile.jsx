import React, { useState } from "react";
import SideBarMain from "../widgets/SalesSideBar";
import { useLocation, useNavigate } from 'react-router-dom';
import CseAssignmentModal from "./cseAssignmentModal";
import ScheduleDemoModalPage from "./scheduleDemoModal";
import NotIntersetedModal from "./notIntersetedModal";
import ScheduleVisitDemoModalPage from "./scheduleVisitModal";
import toast, { Toaster } from "react-hot-toast";
import { FiArrowLeft, FiEdit2, FiCalendar, FiUserCheck, FiClock, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaStethoscope, FaUserMd, FaClinicMedical } from "react-icons/fa";

const LeadProfile = () => {
  const location = useLocation();
  const { client } = location.state || {};
  const navigate = useNavigate();
  
  // Static client data if not provided
  const staticClient = client || {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiologist",
    compounderName: "Priya Sharma",
    email: "dr.rajesh@medicalcenter.com",
    address: "123 Medical Plaza, Health Street, Healthcare District",
    city: "Mumbai",
    state: "Maharashtra",
    compounderNumber: "+91 98765 43210",
    doctorNumber: "+91 87654 32109",
    clinicTimingsStart: "09:00 AM",
    clinicTimingsEnd: "05:00 PM",
    clinicDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    locality: "Downtown",
    subLocality: "Medical District",
    isInterested: false,
    leadScore: 85,
    status: "qualified",
    lastContact: "2024-01-15"
  };

  const [cseAssignmentModalIsOpen, setCseAssignmentModalIsOpen] = useState(false);
  const [scheduleDemoModalIsOpen, setScheduleDemoModalIsOpen] = useState(false);
  const [scheduleVisitModalIsOpen, setScheduleVisitModalIsOpen] = useState(false);
  const [notInterestedModalIsOpen, setNotInterestedModalIsOpen] = useState(false);

  const onClose = () => setCseAssignmentModalIsOpen(false);
  const onCloseDemo = () => setScheduleDemoModalIsOpen(false);
  const onCloseScheduleVisit = () => setScheduleVisitModalIsOpen(false);
  const closeNotInterestedModal = () => setNotInterestedModalIsOpen(false);

  const formatTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleClickInterested = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockResponse = {
        statusCode: 201,
        message: "Interest noted successfully!"
      };
      
      toast.success(mockResponse.message);
      console.log("Interest recorded:", {
        clientId: staticClient?.id,
        notes: "INTERESTED",
        date: formatDate(),
        time: formatTime()
      });
    } catch (error) {
      console.log("error", error);
      toast.error("Failed to submit interest.");
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      new: { color: "bg-blue-100 text-blue-800", label: "New Lead" },
      contacted: { color: "bg-yellow-100 text-yellow-800", label: "Contacted" },
      qualified: { color: "bg-green-100 text-green-800", label: "Qualified" }
    };
    
    const config = statusConfig[status] || statusConfig.new;
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const getLeadScoreColor = (score) => {
    if (score >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (score >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <SideBarMain />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center text-white hover:text-blue-100 transition-colors duration-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-20"
                >
                  <FiArrowLeft className="mr-2 text-lg" />
                  <span className="font-medium">Back to Leads</span>
                </button>
                <div className="h-6 w-px bg-white bg-opacity-30"></div>
                <div>
                  <h1 className="text-2xl font-bold">{staticClient.name}</h1>
                  <p className="text-blue-100">Lead Profile Management</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {getStatusBadge(staticClient.status)}
                <div className={`px-3 py-1 rounded-full border text-sm font-semibold ${getLeadScoreColor(staticClient.leadScore)}`}>
                  Lead Score: {staticClient.leadScore}%
                </div>
              </div>
            </div>
          </div>

          {/* Client Details Card */}
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    <FaUserMd className="mr-2 text-blue-600" />
                    Client Information
                  </h2>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <FiEdit2 className="text-sm" />
                    <span className="text-sm font-medium">Edit Profile</span>
                  </button>
                </div>
              </div>

              {/* Client Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-500 mb-2">
                          <FaUserMd className="mr-2 text-blue-500" />
                          Full Name
                        </label>
                        <p className="text-gray-900 font-medium">{staticClient.name}</p>
                      </div>
                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-500 mb-2">
                          <FaStethoscope className="mr-2 text-green-500" />
                          Specialization
                        </label>
                        <p className="text-gray-900">{staticClient.specialization}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-500 mb-2">
                          <FiMail className="mr-2 text-purple-500" />
                          Email Address
                        </label>
                        <p className="text-gray-900 break-words">{staticClient.email}</p>
                      </div>
                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-500 mb-2">
                          <FiPhone className="mr-2 text-blue-500" />
                          Doctor Contact
                        </label>
                        <p className="text-gray-900">{staticClient.doctorNumber}</p>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-500 mb-2">
                        <FiMapPin className="mr-2 text-red-500" />
                        Full Address
                      </label>
                      <p className="text-gray-900">{staticClient.address}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">
                          City
                        </label>
                        <p className="text-gray-900">{staticClient.city}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">
                          State
                        </label>
                        <p className="text-gray-900">{staticClient.state}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Professional Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                      Professional Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-500 mb-2">
                          <FaUserMd className="mr-2 text-orange-500" />
                          Compounder Name
                        </label>
                        <p className="text-gray-900">{staticClient.compounderName}</p>
                      </div>
                      <div>
                        <label className="flex items-center text-sm font-medium text-gray-500 mb-2">
                          <FiPhone className="mr-2 text-green-500" />
                          Compounder Contact
                        </label>
                        <p className="text-gray-900">{staticClient.compounderNumber}</p>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-500 mb-2">
                        <FiClock className="mr-2 text-blue-500" />
                        Clinic Timings
                      </label>
                      <p className="text-gray-900 font-medium">
                        {staticClient.clinicTimingsStart} - {staticClient.clinicTimingsEnd}
                      </p>
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-500 mb-2">
                        <FaClinicMedical className="mr-2 text-purple-500" />
                        Clinic Days
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {staticClient.clinicDays.map((day, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center justify-center px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium border border-blue-200"
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">
                          Locality
                        </label>
                        <p className="text-gray-900">{staticClient.locality}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">
                          Sub-locality
                        </label>
                        <p className="text-gray-900">{staticClient.subLocality}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="mt-6 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Lead Actions</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Interest Options */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Mark Interest Level</h4>
                  <div className="space-y-3">
                    {!staticClient?.isInterested && (
                      <button
                        onClick={handleClickInterested}
                        className="w-full flex items-center justify-between p-4 border border-green-500 rounded-lg hover:bg-green-50 transition-colors duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 border-2 border-green-500 rounded-full group-hover:bg-green-500 transition-colors duration-200"></div>
                          <span className="text-gray-700 font-medium">Interested</span>
                        </div>
                        <div className="text-green-500 font-semibold">✓</div>
                      </button>
                    )}
                    
                    <button
                      onClick={() => setNotInterestedModalIsOpen(true)}
                      className="w-full flex items-center justify-between p-4 border border-red-500 rounded-lg hover:bg-red-50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 border-2 border-red-500 rounded-full group-hover:bg-red-500 transition-colors duration-200"></div>
                        <span className="text-gray-700 font-medium">Not Interested</span>
                      </div>
                      <div className="text-red-500 font-semibold">✗</div>
                    </button>
                    
                    <button
                      onClick={() => setNotInterestedModalIsOpen(true)}
                      className="w-full flex items-center justify-between p-4 border border-gray-400 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 border-2 border-gray-400 rounded-full group-hover:bg-gray-400 transition-colors duration-200"></div>
                        <span className="text-gray-700 font-medium">Others</span>
                      </div>
                      <div className="text-gray-500 font-semibold">⋯</div>
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Schedule Actions</h4>
                  <div className="space-y-3">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setCseAssignmentModalIsOpen(true)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg px-4 py-3 transition-colors duration-200 shadow-sm flex items-center justify-center space-x-2"
                      >
                        <FiUserCheck className="text-sm" />
                        <span>Confirm</span>
                      </button>
                      <button
                        onClick={() => setScheduleVisitModalIsOpen(true)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-3 transition-colors duration-200 shadow-sm flex items-center justify-center space-x-2"
                      >
                        <FiCalendar className="text-sm" />
                        <span>Schedule Visit</span>
                      </button>
                    </div>
                    
                    <button
                      onClick={() => setScheduleDemoModalIsOpen(true)}
                      className="w-full bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-4 py-3 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <FiCalendar className="text-sm" />
                      <span>Schedule Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {cseAssignmentModalIsOpen && <CseAssignmentModal onClose={onClose} client={staticClient} />}
      {scheduleDemoModalIsOpen && <ScheduleDemoModalPage onCloseDemo={onCloseDemo} client={staticClient} />}
      {notInterestedModalIsOpen && <NotIntersetedModal closeNotInterestedModal={closeNotInterestedModal} client={staticClient} />}
      {scheduleVisitModalIsOpen && <ScheduleVisitDemoModalPage onCloseScheduleVisit={onCloseScheduleVisit} client={staticClient} />}
    </>
  );
};

export default LeadProfile;