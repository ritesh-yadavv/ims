import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const Account = () => {
  const [loading, setLoading] = useState(false);
  
  // Static employee data
  const allEmployeeData = {
    department: 'DEVELOPER',
    designation: 'FRONTEND DEVELOPER',
    joiningDate: '2023-01-15',
    officeLocation: 'Mumbai, India',
    typeOfEmployment: 'Full-time'
  };

  const departmentDesignationMap = {
    ADMIN: ["FOUNDER", "DIRECTOR", "ACCOUNTS"],
    HR: ["HR MANAGER", "OTHER OFFICE STAFF"],
    MARKETING: ["BUSINESS DEVELOPMENT MANAGER", "BUSINESS DEVELOPMENT EXECUTIVE", "CUSTOMER SUPPORT EXECUTIVE", "TELECALLER EXECUTIVE", "DIGITAL MARKETING", "MARKETING MANAGER"],
    DEVELOPER: ["CTO", "BACKEND DEVELOPER", "FRONTEND DEVELOPER", "INTERNS", "TESTER", "DEVOPS", "UI/UX DESIGNER", "APP DEVELOPER"]
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    formik.setFieldValue('department', selectedDepartment);
    formik.setFieldValue('designation', '');
  };

  const formik = useFormik({
    initialValues: {
      department: allEmployeeData?.department || '',
      designation: allEmployeeData?.designation || '',
      joiningDate: allEmployeeData?.joiningDate || '',
      officeLocation: allEmployeeData?.officeLocation || '',
      typeOfEmployment: allEmployeeData?.typeOfEmployment || '',
    },
    validationSchema: Yup.object({
      department: Yup.string().required('Department is required'),
      designation: Yup.string().required('Designation is required'),
      joiningDate: Yup.string().required('Joining date is required'),
      officeLocation: Yup.string().required('Office location is required'),
      typeOfEmployment: Yup.string().required('Employment type is required'),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      try {
        // Simulate successful update
        console.log('Form submitted with values:', values);
        toast.success('Account information updated successfully!');
        
        // In a real app, you would update local state or context here
        // For demo purposes, we'll just show the success message
        
      } catch (error) {
        toast.error("Something went wrong while updating");
        console.error('Error updating account information:', error);
      }
      setLoading(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Toaster />
      <div className="p-6 space-y-6 flex font-jakarta">
        <div className="w-full">
          <div className="grid grid-cols-6 gap-6">

            {/* Department Field */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="department" className="text-sm font-medium text-gray-900 block mb-2">
                Department
              </label>
              <select
                name="department"
                id="department"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm max-md:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                value={formik.values.department}
                onChange={handleDepartmentChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Department</option>
                {Object.keys(departmentDesignationMap).map((dept) => (
                  <option key={dept} value={dept}>
                    {dept.charAt(0).toUpperCase() + dept.slice(1)}
                  </option>
                ))}
              </select>
              {formik.touched.department && formik.errors.department ? (
                <div className="text-red-600 text-sm">{formik.errors.department}</div>
              ) : null}
            </div>

            {/* Designation Field */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="designation" className="text-sm font-medium text-gray-900 block mb-2">
                Designation
              </label>
              <select
                name="designation"
                id="designation"
                className="shadow-sm max-md:text-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                value={formik.values.designation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={!formik.values.department}
              >
                <option value="">Select Designation</option>
                {departmentDesignationMap[formik.values.department]?.map((designation, index) => (
                  <option key={index} value={designation}>
                    {designation}
                  </option>
                ))}
              </select>
              {formik.touched.designation && formik.errors.designation ? (
                <div className="text-red-600 text-sm">{formik.errors.designation}</div>
              ) : null}
            </div>

            {/* Joining Date Field */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="joiningDate" className="text-sm font-medium text-gray-900 block mb-2">
                Joining Date
              </label>
              <input
                type="date"
                name="joiningDate"
                id="joiningDate"
                className="shadow-sm max-md:text-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Select date"
                value={formik.values.joiningDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.joiningDate && formik.errors.joiningDate ? (
                <div className="text-red-600 text-sm">{formik.errors.joiningDate}</div>
              ) : null}
            </div>

            {/* Office Location Field */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="officeLocation" className="text-sm font-medium text-gray-900 block mb-2">
                Office Location
              </label>
              <input
                type="text"
                name="officeLocation"
                id="officeLocation"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Office Location"
                value={formik.values.officeLocation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-describedby="officeLocationError"
              />
              {formik.touched.officeLocation && formik.errors.officeLocation ? (
                <div className="text-red-600 text-sm">{formik.errors.officeLocation}</div>
              ) : null}
            </div>

            {/* Type of Employment Field */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="typeOfEmployment" className="text-sm font-medium text-gray-900 block mb-2">
                Type of Employment
              </label>
              <select
                name="typeOfEmployment"
                id="typeOfEmployment"
                className="shadow-sm max-md:text-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                value={formik.values.typeOfEmployment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-Time</option>
                <option value="Part-time">Part-Time</option>
                <option value="Contract">Contract</option>
              </select>
              {formik.touched.typeOfEmployment && formik.errors.typeOfEmployment ? (
                <div className="text-red-600 text-sm">{formik.errors.typeOfEmployment}</div>
              ) : null}
            </div>

          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 mt-6">
            <button 
              type="submit" 
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Updating...
                </div>
              ) : (
                'Update'
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Account;