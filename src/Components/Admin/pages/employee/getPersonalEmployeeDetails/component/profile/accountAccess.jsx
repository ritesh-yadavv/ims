import React from 'react'
import FaEye from "../../../../../../../assets/view.png"
import FaDownload from "../../../../../../../assets/download 01.png"

const AccountAccess = () => {
  // Static employee data
  const staticEmployeeData = {
    id: 1,
    name: 'John Doe',
    employeeId: 'EMP001',
    department: 'Engineering',
    designation: 'Software Engineer',
    typeOfEmployment: 'Full Time',
    personalEmail: 'john.doe@gmail.com',
    officeEmail: 'john.doe@company.com',
    joiningDate: '2023-01-15',
    officeLocation: 'San Francisco Office',
    role: 'Software Developer',
    appointmentLetter: 'https://example.com/documents/appointment-letter.pdf',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    mobileNumber: '+1 (555) 123-4567',
    dob: '1990-05-15',
    gender: 'Male',
    nationality: 'American',
    address: '123 Main Street, Downtown',
    city: 'San Francisco',
    state: 'California',
    pinCode: '94105'
  };

  // Use static data instead of Redux
  const Employee = staticEmployeeData;

  const viewAppointmentLetter = () => {
    if (Employee.appointmentLetter) {
      window.open(Employee.appointmentLetter, '_blank');
    } else {
      // Fallback to a sample PDF or show message
      alert('Appointment letter not available');
    }
  };

  const downloadAppointmentLetter = (e) => {
    if (!Employee.appointmentLetter) {
      e.preventDefault();
      alert('Appointment letter not available for download');
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
    <div className="p-6 bg-white mx-auto w-full rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        Account & Access Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Employee Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employee Email
          </label>
          <div className="flex items-center">
            <span className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md border border-gray-300 w-full">
              {Employee.personalEmail || 'Not specified'}
            </span>
          </div>
        </div>

        {/* Department */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department
          </label>
          <div className="flex items-center">
            <span className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md border border-gray-300 w-full">
              {Employee.department || 'Not specified'}
            </span>
          </div>
        </div>

        {/* Employee ID */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employee ID
          </label>
          <div className="flex items-center">
            <span className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md border border-gray-300 w-full font-mono">
              {Employee.employeeId || 'Not assigned'}
            </span>
          </div>
        </div>

        {/* Designation */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Designation
          </label>
          <div className="flex items-center">
            <span className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md border border-gray-300 w-full">
              {Employee.designation || 'Not specified'}
            </span>
          </div>
        </div>

        {/* Joining Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Joining Date
          </label>
          <div className="flex items-center">
            <span className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md border border-gray-300 w-full">
              {formatDate(Employee.joiningDate)}
            </span>
          </div>
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <div className="flex items-center">
            <span className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md border border-gray-300 w-full">
              {Employee.role || 'Not specified'}
            </span>
          </div>
        </div>

        {/* Office Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Office Location
          </label>
          <div className="flex items-center">
            <span className="text-gray-900 bg-gray-50 px-3 py-2 rounded-md border border-gray-300 w-full">
              {Employee.officeLocation || 'Not specified'}
            </span>
          </div>
        </div>

        {/* Employment Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employment Type
          </label>
          <div className="flex items-center">
            <span className={`px-3 py-2 rounded-md border w-full text-center ${
              Employee.typeOfEmployment === 'Full Time' 
                ? 'bg-green-100 text-green-800 border-green-300' 
                : Employee.typeOfEmployment === 'Part Time'
                ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                : 'bg-blue-100 text-blue-800 border-blue-300'
            }`}>
              {Employee.typeOfEmployment || 'Not specified'}
            </span>
          </div>
        </div>
      </div>

      {/* Appointment Letter Section */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Appointment Letter
        </label>
        <div className="flex justify-between items-center border-2 border-dashed border-gray-300 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <span className="text-gray-900 font-medium">Appointment_Letter.pdf</span>
              <p className="text-sm text-gray-500">Official appointment document</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={viewAppointmentLetter}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
              title="View Appointment Letter"
            >
              <img
                src={FaEye}
                className="w-5 h-5"
                alt="View"
              />
            </button>
            <a 
              href={Employee.appointmentLetter} 
              download
              onClick={downloadAppointmentLetter}
              className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer"
              title="Download Appointment Letter"
            >
              <img
                src={FaDownload}
                className="w-5 h-5"
                alt="Download"
              />
            </a>
          </div>
        </div>
        
        {!Employee.appointmentLetter && (
          <p className="text-sm text-yellow-600 mt-2">
            Appointment letter is not available for this employee.
          </p>
        )}
      </div>

      {/* Additional Information */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">System Access</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Email Access</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">HR System</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Project Tools</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Admin Panel</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Inactive</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountAccess