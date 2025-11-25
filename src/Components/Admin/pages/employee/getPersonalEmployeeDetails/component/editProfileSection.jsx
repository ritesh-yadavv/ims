import React from 'react'
import { FaEdit, FaBriefcase, FaEnvelope } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const EditProfileSection = () => {
  let navigate = useNavigate();
  
  // Static employee data
  const staticEmployeeData = {
    id: 1,
    name: 'John Doe',
    employeeId: 'EMP001',
    department: 'Engineering',
    designation: 'Software Engineer',
    typeOfEmployment: 'Full Time',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    officeEmail: 'john.doe@company.com',
    personalEmail: 'john.doe@gmail.com',
    mobileNumber: '+1 (555) 123-4567',
    dob: '1990-05-15',
    gender: 'Male',
    nationality: 'American',
    address: '123 Main Street, Downtown',
    city: 'San Francisco',
    state: 'California',
    pinCode: '94105',
    aadharCard: 'https://example.com/documents/aadhar-sample.pdf',
    panCard: 'https://example.com/documents/pan-sample.jpg',
    highestQualification: 'Bachelor of Science in Computer Science',
    highestQualificationPassingYear: '2012',
    highestQualificationCollege: 'Stanford University',
    qualificationMarksheet: 'https://example.com/documents/marksheet-sample.pdf',
    experienceLetter: 'https://example.com/documents/experience-letter-sample.pdf',
    pastPaySlips: 'https://example.com/documents/payslip-sample.pdf'
  };

  // Use static data instead of Redux
  const allEmployee = staticEmployeeData;

  const handleEditProfile = () => {
    // Navigate to edit profile page or open edit modal
    console.log('Edit profile clicked');
    // navigate('/admin/edit-employee/' + allEmployee.id);
  };

  return (
    <div className="flex-1 p-1">
      <h1 className="flex items-center max-md:text-sm max-md:text-center text-xl font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-2 rounded-t-md border border-gray-300">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mr-2 hover:bg-blue-400 p-1 rounded transition-colors"
        >
          <FiArrowLeft className="mr-2" />
        </button>
        <span>Employee Profile</span>
      </h1>
      
      <div className="mt-5 p-4 bg-white rounded-md shadow-md flex max-md:flex-col max-md:items-center">
        {/* Profile Image and Info */}
        <div className="flex-shrink-0 max-md:mb-4">
          <img
            src={allEmployee?.profilePicture}
            alt="Profile"
            className="w-32 h-32 object-cover border border-gray-300 rounded-lg shadow-sm"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
            }}
          />
        </div>
        
        <div className="ml-4 flex-1 mt-7 max-md:ml-0 max-md:text-center">
          <h2 className="text-xl font-bold text-blue-700 mb-3">{allEmployee?.name}</h2>
          
          <div className="space-y-2">
            <div className="flex items-center text-md text-gray-600">
              <FaBriefcase className="mr-2 text-blue-500" />
              <span className="font-medium">Department:</span>
              <span className="ml-2 text-gray-800">{allEmployee?.department}</span>
            </div>

            <div className="flex items-center text-md text-gray-600">
              <FaBriefcase className="mr-2 text-green-500" />
              <span className="font-medium">Designation:</span>
              <span className="ml-2 text-gray-800">{allEmployee?.designation}</span>
            </div>

            <div className="flex items-center text-md text-gray-600">
              <FaEnvelope className="mr-2 text-red-500" />
              <span className="font-medium">Email:</span>
              <span className="ml-2 text-gray-800">{allEmployee?.officeEmail}</span>
            </div>

            {/* Additional static information */}
            <div className="flex items-center text-md text-gray-600">
              <span className="font-medium w-24">Employee ID:</span>
              <span className="ml-2 text-gray-800">{allEmployee?.employeeId}</span>
            </div>

            <div className="flex items-center text-md text-gray-600">
              <span className="font-medium w-24">Employment:</span>
              <span className="ml-2 px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">
                {allEmployee?.typeOfEmployment}
              </span>
            </div>
          </div>
        </div>
        
        {/* Edit Button */}
        <div className="max-md:mt-4 mt-[5rem] max-md:w-full">
          <button 
            onClick={handleEditProfile}
            className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full max-w-xs"
          >
            <FaEdit className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
          
          {/* Additional action buttons */}
          <div className="mt-2 space-y-2">
            <button 
              onClick={() => console.log('View documents')}
              className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors w-full max-w-xs"
            >
              <span>View Documents</span>
            </button>
            
            <button 
              onClick={() => console.log('Contact employee')}
              className="flex items-center justify-center space-x-2 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors w-full max-w-xs"
            >
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Profile Information Section */}
      <div className="mt-6 p-4 bg-white rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Personal Email</span>
            <span className="text-gray-800">{allEmployee?.personalEmail}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Mobile Number</span>
            <span className="text-gray-800">{allEmployee?.mobileNumber}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Date of Birth</span>
            <span className="text-gray-800">{allEmployee?.dob}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Gender</span>
            <span className="text-gray-800">{allEmployee?.gender}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Nationality</span>
            <span className="text-gray-800">{allEmployee?.nationality}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Address</span>
            <span className="text-gray-800">{allEmployee?.address}, {allEmployee?.city}, {allEmployee?.state} - {allEmployee?.pinCode}</span>
          </div>
        </div>
      </div>

      {/* Qualifications Section */}
      <div className="mt-6 p-4 bg-white rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Qualifications</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-800 font-medium">{allEmployee?.highestQualification}</span>
            <span className="text-sm text-gray-500">{allEmployee?.highestQualificationPassingYear}</span>
          </div>
          <div className="text-gray-600">{allEmployee?.highestQualificationCollege}</div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileSection