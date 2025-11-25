import React from 'react';
import { 
  FaBriefcase, 
  FaEnvelope, 
  FaUser, 
  FaIdCard, 
  FaBuilding, 
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEdit
} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const EditProfileSection = () => {
  let navigate = useNavigate();
  
  // Static employee data
  const staticEmployeeData = {
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Amit Sharma",
    department: "Engineering",
    designation: "Senior Software Engineer",
    officeEmail: "amit.sharma@company.com",
    personalEmail: "amit.sharma@gmail.com",
    employeeId: "EMP001",
    mobileNumber: "+91 98765 43210",
    location: "Mumbai, India",
    joinDate: "2022-03-15",
    status: "Active"
  };

  const allEmployee = staticEmployeeData;

  const handleEditProfile = () => {
    // Navigate to edit profile page
    console.log('Edit profile clicked');
    // navigate('/edit-profile');
  };

  return (
    <div className="flex-1 p-4 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <FaUser className="mr-3 text-blue-600" />
            My Profile
          </h1>
          <button
            onClick={handleEditProfile}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <FaEdit className="w-4 h-4" />
            <span className="font-medium">Edit Profile</span>
          </button>
        </div>
        <p className="text-gray-600 mt-2">Manage your personal and professional information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={allEmployee.profilePicture}
                alt="Profile"
                className="w-24 h-24 object-cover border-4 border-blue-100 rounded-2xl shadow-md"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(allEmployee.name)}&background=3085f6&color=fff&size=96`;
                }}
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{allEmployee.name}</h2>
                  <p className="text-blue-600 font-medium">{allEmployee.designation}</p>
                </div>

                <div className="flex items-center text-gray-700">
                  <FaIdCard className="mr-3 text-purple-500 w-4 h-4" />
                  <div>
                    <span className="text-sm text-gray-500">Employee ID</span>
                    <p className="font-mono font-medium">{allEmployee.employeeId}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <FaBuilding className="mr-3 text-green-500 w-4 h-4" />
                  <div>
                    <span className="text-sm text-gray-500">Department</span>
                    <p className="font-medium">{allEmployee.department}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <FaEnvelope className="mr-3 text-red-500 w-4 h-4" />
                  <div>
                    <span className="text-sm text-gray-500">Work Email</span>
                    <p className="font-medium break-words">{allEmployee.officeEmail}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <FaPhone className="mr-3 text-blue-500 w-4 h-4" />
                  <div>
                    <span className="text-sm text-gray-500">Mobile</span>
                    <p className="font-medium">{allEmployee.mobileNumber}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="mr-3 text-orange-500 w-4 h-4" />
                  <div>
                    <span className="text-sm text-gray-500">Location</span>
                    <p className="font-medium">{allEmployee.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FaUser className="mr-2 text-blue-500" />
            Personal Information
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Personal Email</span>
              <span className="text-gray-800 font-medium">{allEmployee.personalEmail}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Mobile Number</span>
              <span className="text-gray-800 font-medium">{allEmployee.mobileNumber}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Location</span>
              <span className="text-gray-800 font-medium">{allEmployee.location}</span>
            </div>
          </div>
        </div>

        {/* Employment Information Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FaBriefcase className="mr-2 text-green-500" />
            Employment Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Employee ID</span>
              <span className="text-gray-800 font-mono font-medium">{allEmployee.employeeId}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Department</span>
              <span className="text-gray-800 font-medium">{allEmployee.department}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Designation</span>
              <span className="text-gray-800 font-medium">{allEmployee.designation}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Join Date</span>
              <span className="text-gray-800 font-medium">{allEmployee.joinDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Card */}
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-sm p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Account Status</h3>
            <p className="text-blue-100">Your profile is complete and active</p>
          </div>
          <div className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
            {allEmployee.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileSection;