import React, { useState } from "react";

const PersonalInformation = () => {
  // Static employee data
  const staticEmployeeData = {
    name: "John Doe",
    mobileNumber: "+91 9876543210",
    personalEmail: "john.doe@personal.com",
    officeEmail: "john.doe@company.com",
    dob: "1990-05-15",
    gender: "Male",
    nationality: "Indian",
    address: "123 Main Street, Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    pinCode: "400069"
  };

  // Splitting name into first and last name
  const [firstName, lastName] = staticEmployeeData?.name?.split(' ') || ['', ''];

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    mobileNumber: staticEmployeeData?.mobileNumber || '',
    personalEmail: staticEmployeeData?.personalEmail || '',
    officeEmail: staticEmployeeData?.officeEmail || '',
    dob: staticEmployeeData?.dob || '',
    gender: staticEmployeeData?.gender || '',
    nationality: staticEmployeeData?.nationality || '',
    address: staticEmployeeData?.address || '',
    city: staticEmployeeData?.city || '',
    state: staticEmployeeData?.state || '',
    pinCode: staticEmployeeData?.pinCode || '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Format label names
  const formatLabel = (key) => {
    const labels = {
      firstName: "First Name",
      lastName: "Last Name",
      mobileNumber: "Mobile Number",
      personalEmail: "Personal Email",
      officeEmail: "Office Email",
      dob: "Date of Birth",
      gender: "Gender",
      nationality: "Nationality",
      address: "Address",
      city: "City",
      state: "State",
      pinCode: "PIN Code"
    };
    return labels[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
  };

  // Get input type based on field name
  const getInputType = (key) => {
    if (key === 'dob') return 'date';
    if (key.includes('Email')) return 'email';
    if (key === 'mobileNumber') return 'tel';
    return 'text';
  };

  return (
    <div className="p-1 space-y-6 mb-6 font-jakarta">
      <div className="grid grid-cols-6 gap-6">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="col-span-6 sm:col-span-3">
            <label htmlFor={key} className="text-sm font-medium text-gray-900 block mb-2">
              {formatLabel(key)}
            </label>
            <input
              type={getInputType(key)}
              id={key}
              name={key}
              value={value}
              onChange={handleInputChange}
              className="text-gray-900 sm:text-sm block w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder={`Enter ${formatLabel(key).toLowerCase()}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInformation;