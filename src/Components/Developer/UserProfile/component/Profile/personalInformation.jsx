import React from 'react';
import { 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaVenusMars, 
  FaGlobeAmericas, 
  FaMapMarkerAlt,
  FaCity,
  FaMapPin,
  FaIdCard
} from 'react-icons/fa';

const PersonalInformation = () => {
  // Static employee data
  const staticEmployeeData = {
    id: 1,
    name: 'Amit Sharma',
    mobileNumber: '+91 98765 43210',
    personalEmail: 'amit.sharma@gmail.com',
    officeEmail: 'amit.sharma@company.com',
    dob: '1990-05-15',
    gender: 'Male',
    nationality: 'Indian',
    address: '123 Main Street, Downtown Area',
    city: 'Mumbai',
    state: 'Maharashtra',
    pinCode: '400001',
    employeeId: 'EMP001',
    department: 'Engineering',
    designation: 'Senior Software Engineer'
  };

  const allEmployee = staticEmployeeData;

  // Splitting name into first and last name
  const [firstName, lastName] = allEmployee?.name?.split(' ') || ['Amit', 'Sharma'];

  // Format date for better display
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format phone number for better display
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return 'Not specified';
    return phoneNumber;
  };

  return (
    <div className="p-6 space-y-6 mb-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
        <FaUser className="mr-3 text-blue-600" />
        Personal Information
      </h2>
      <p className="text-gray-600 text-sm mb-6">Basic personal details and contact information</p>

      {allEmployee ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaUser className="mr-2 text-blue-500" />
              First Name
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{firstName}</p>
            </div>
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaUser className="mr-2 text-blue-500" />
              Last Name
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{lastName}</p>
            </div>
          </div>

          {/* Mobile Number */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaPhone className="mr-2 text-green-500" />
              Mobile Number
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{formatPhoneNumber(allEmployee.mobileNumber)}</p>
            </div>
          </div>

          {/* Personal Email */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaEnvelope className="mr-2 text-red-500" />
              Personal Email
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium break-words">{allEmployee.personalEmail}</p>
            </div>
          </div>

          {/* Office Email */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaEnvelope className="mr-2 text-purple-500" />
              Office Email
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium break-words">{allEmployee.officeEmail}</p>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaCalendarAlt className="mr-2 text-orange-500" />
              Date of Birth
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{formatDate(allEmployee.dob)}</p>
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaVenusMars className="mr-2 text-pink-500" />
              Gender
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{allEmployee.gender}</p>
            </div>
          </div>

          {/* Nationality */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaGlobeAmericas className="mr-2 text-teal-500" />
              Nationality
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{allEmployee.nationality}</p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2 md:col-span-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              Address
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{allEmployee.address}</p>
            </div>
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaCity className="mr-2 text-blue-500" />
              City
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{allEmployee.city}</p>
            </div>
          </div>

          {/* State */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-green-500" />
              State
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{allEmployee.state}</p>
            </div>
          </div>

          {/* Pin Code */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaMapPin className="mr-2 text-purple-500" />
              Pin Code
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium font-mono">{allEmployee.pinCode}</p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-2 md:col-span-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaIdCard className="mr-2 text-cyan-500" />
              Employee ID
            </label>
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-3 hover:bg-blue-100 transition-colors">
              <p className="text-blue-900 font-medium font-mono">{allEmployee.employeeId}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading personal information...</p>
          </div>
        </div>
      )}

      {/* Information Note */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-700 text-sm flex items-center">
          <span className="mr-2">ℹ️</span>
          This information is used for official records and communication purposes.
        </p>
      </div>
    </div>
  );
}

export default PersonalInformation;