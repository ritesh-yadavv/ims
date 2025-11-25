import React from 'react';
import { 
  FaEye, 
  FaDownload, 
  FaEnvelope, 
  FaBuilding, 
  FaIdCard, 
  FaUserTie, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaFilePdf
} from 'react-icons/fa';

const AccountAccess = () => {
  // Static employee data
  const staticEmployeeData = {
    personalEmail: "alex.johnson@company.com",
    officeEmail: "alex.j@department.com",
    department: "Engineering",
    employeeId: "DEV001",
    designation: "Senior Software Engineer",
    joiningDate: "2023-01-15",
    officeLocation: "San Francisco Office, CA",
    role: "Full Stack Developer",
    typeOfEmployment: "Full Time",
    appointmentLetter: "https://example.com/documents/appointment-letter.pdf",
    status: "Active"
  };

  const Employee = staticEmployeeData;

  const viewAppointmentLetter = () => {
    if (Employee.appointmentLetter) {
      window.open(Employee.appointmentLetter, '_blank');
    } else {
      alert('Appointment letter is not available');
    }
  };

  const downloadAppointmentLetter = (e) => {
    if (!Employee.appointmentLetter) {
      e.preventDefault();
      alert('Appointment letter is not available for download');
    }
  };

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

  return (
    <div className="p-6 bg-white font-jakarta mx-auto w-full rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
        <FaIdCard className="mr-3 text-blue-600" />
        Account & Access Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Employee Email */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaEnvelope className="mr-2 text-blue-500" />
            Employee Email
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <p className="text-gray-900 font-medium truncate">{Employee.personalEmail}</p>
          </div>
        </div>

        {/* Department */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaBuilding className="mr-2 text-green-500" />
            Department
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <p className="text-gray-900 font-medium">{Employee.department}</p>
          </div>
        </div>

        {/* Employee ID */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaIdCard className="mr-2 text-purple-500" />
            Employee ID
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <p className="text-gray-900 font-mono font-medium">{Employee.employeeId}</p>
          </div>
        </div>

        {/* Designation */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaUserTie className="mr-2 text-orange-500" />
            Designation
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <p className="text-gray-900 font-medium">{Employee.designation}</p>
          </div>
        </div>

        {/* Joining Date */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaCalendarAlt className="mr-2 text-red-500" />
            Joining Date
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <p className="text-gray-900 font-medium">{formatDate(Employee.joiningDate)}</p>
          </div>
        </div>

        {/* Role */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaUserTie className="mr-2 text-cyan-500" />
            Role
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <p className="text-gray-900 font-medium">{Employee.role}</p>
          </div>
        </div>

        {/* Office Location */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-pink-500" />
            Office Location
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <p className="text-gray-900 font-medium">{Employee.officeLocation}</p>
          </div>
        </div>

        {/* Employment Type */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FaBuilding className="mr-2 text-teal-500" />
            Employment Type
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <p className="text-gray-900 font-medium">{Employee.typeOfEmployment}</p>
          </div>
        </div>
      </div>

      {/* Appointment Letter Section */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <label className="flex items-center text-sm font-medium text-gray-700 mb-4">
          <FaFilePdf className="mr-2 text-red-500" />
          Appointment Letter
        </label>
        <div className="flex justify-between items-center border-2 border-dashed border-gray-300 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <FaFilePdf className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <span className="text-gray-900 font-medium block">Appointment_Letter.pdf</span>
              <p className="text-gray-500 text-sm">Official employment appointment document</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={viewAppointmentLetter}
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center"
              title="View Appointment Letter"
            >
              <FaEye className="w-4 h-4" />
            </button>
            <a 
              href={Employee.appointmentLetter} 
              download
              onClick={downloadAppointmentLetter}
              className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center"
              title="Download Appointment Letter"
            >
              <FaDownload className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {!Employee.appointmentLetter && (
          <p className="text-sm text-yellow-600 mt-2 flex items-center">
            <span className="mr-2">⚠️</span>
            Appointment letter is not available for this employee.
          </p>
        )}
      </div>

      {/* Status Information */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Account Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700">Account Status</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {Employee.status}
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700">Email Access</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountAccess;