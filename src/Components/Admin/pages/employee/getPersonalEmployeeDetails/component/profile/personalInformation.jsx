import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loader from "../../../../../../commonComponent/loader"

const PersonalInformation = () => {
  const { id } = useParams();
  const [allEmployee, setAllEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

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
    joiningDate: '2023-01-15',
    officeLocation: 'San Francisco Office',
    role: 'Software Developer',
    
    // Bank Information
    bankName: 'State Bank of India',
    bankAccountNumber: '12345678901',
    branchName: 'Main Branch, Downtown',
    monthlySalary: '₹75,000',
    incentive: '₹5,000',
    accountHolderName: 'John Doe',
    ifsc: 'SBIN0000123',
    ctc: '₹12,00,000',
    allowance: '₹15,000',
    cancelledBankCheque: 'https://example.com/documents/cancelled-cheque.pdf',
    
    // Documents
    aadharCard: 'https://example.com/documents/aadhar-sample.pdf',
    panCard: 'https://example.com/documents/pan-sample.jpg',
    highestQualification: 'Bachelor of Science in Computer Science',
    highestQualificationPassingYear: '2012',
    highestQualificationCollege: 'Stanford University',
    qualificationMarksheet: 'https://example.com/documents/marksheet-sample.pdf',
    experienceLetter: 'https://example.com/documents/experience-letter-sample.pdf',
    pastPaySlips: 'https://example.com/documents/payslip-sample.pdf',
    appointmentLetter: 'https://example.com/documents/appointment-letter.pdf'
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Use static data instead of API call
        setAllEmployee(staticEmployeeData);
        console.log("Loaded static employee data for profile");
      } catch (error) {
        console.error('Error fetching employee:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  // Splitting name into first and last name
  const [firstName, lastName] = allEmployee?.name?.split(' ') || ['', ''];

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

  if (loading) {
    return (
      <div className="p-1 space-y-6 mb-6 flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-1 space-y-6 mb-6">
      {allEmployee ? (
        <div className="grid grid-cols-6 gap-6">
          {/* First Name */}
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              First Name
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{firstName || 'Not specified'}</p>
            </div>
          </div>

          {/* Last Name */}
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Last Name
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{lastName || 'Not specified'}</p>
            </div>
          </div>

          {/* Mobile Number */}
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Mobile Number
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{formatPhoneNumber(allEmployee.mobileNumber)}</p>
            </div>
          </div>

          {/* Personal Email */}
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Personal Email
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm break-words">{allEmployee.personalEmail || 'Not specified'}</p>
            </div>
          </div>

          {/* Office Email */}
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Office Email
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm break-words">{allEmployee.officeEmail || 'Not specified'}</p>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Date of Birth
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{formatDate(allEmployee.dob)}</p>
            </div>
          </div>

          {/* Gender */}
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Gender
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{allEmployee.gender || 'Not specified'}</p>
            </div>
          </div>

          {/* Nationality */}
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Nationality
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{allEmployee.nationality || 'Not specified'}</p>
            </div>
          </div>

          {/* Address */}
          <div className="col-span-6">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Address
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{allEmployee.address || 'Not specified'}</p>
            </div>
          </div>

          {/* City */}
          <div className="col-span-6 sm:col-span-2">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              City
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{allEmployee.city || 'Not specified'}</p>
            </div>
          </div>

          {/* State */}
          <div className="col-span-6 sm:col-span-2">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              State
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{allEmployee.state || 'Not specified'}</p>
            </div>
          </div>

          {/* Pin Code */}
          <div className="col-span-6 sm:col-span-2">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Pin Code
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-2.5">
              <p className="text-gray-900 text-sm">{allEmployee.pinCode || 'Not specified'}</p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Employee ID
            </label>
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-2.5">
              <p className="text-blue-900 text-sm font-mono">{allEmployee.employeeId || 'Not assigned'}</p>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Department
            </label>
            <div className="bg-green-50 border border-green-300 rounded-lg p-2.5">
              <p className="text-green-900 text-sm">{allEmployee.department || 'Not specified'}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No employee data found.</p>
        </div>
      )}
    </div>
  );
}

export default PersonalInformation;