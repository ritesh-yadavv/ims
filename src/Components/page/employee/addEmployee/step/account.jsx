import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import Loader from "../../../../commonComponent/loader"
import { 
  FaBuilding, 
  FaUserTie, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaLock,
  FaFileUpload,
  FaFilePdf
} from 'react-icons/fa';

const Account = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const departmentDesignationMap = {
    ADMIN: ["FOUNDER", "DIRECTOR", "ACCOUNTS"],
    HR: ["HR MANAGER", "OTHER OFFICE STAFF"],
    MARKETING: ["BUSINESS DEVELOPMENT MANAGER", "BUSINESS DEVELOPMENT EXECUTIVE", "CUSTOMER SUPPORT EXECUTIVE", "TELECALLER EXECUTIVE", "DIGITAL MARKETING", "MARKETING MANAGER"],
    DEVELOPER: ["CTO", "BACKEND DEVELOPER", "FRONTEND DEVELOPER", "INTERNS", "TESTER", "DEVOPS", "UI/UX DESIGNER", "APP DEVELOPER"]
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    formik.setFieldValue('department', selectedDepartment);
    formik.setFieldValue('designation', ''); // Reset designation when department changes
  };

  const formik = useFormik({
    initialValues: {
      appointmentLetter: null,
      department: '',
      designation: '',
      joiningDate: '',
      officeLocation: '',
      typeOfEmployment: '',
      password: ''
    },
    validationSchema: Yup.object({
      appointmentLetter: Yup.mixed().required('Appointment Letter is required')
        .test(
          'fileSize',
          'File size must be less than 500KB',
          (value) => !value || (value && value.size <= 500 * 1024) // Make optional for static data
        ),
      department: Yup.string().required('Department required'),
      designation: Yup.string().required('Designation is required'),
      joiningDate: Yup.date().required('Joining Date is required'),
      officeLocation: Yup.string().required('Office Location is required'),
      typeOfEmployment: Yup.string().required('Type of Employment is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      console.log("Form Submitted with values:", values);
      setLoading(true);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Static data processing
        const appointmentLetterUrl = values.appointmentLetter 
          ? URL.createObjectURL(values.appointmentLetter)
          : 'https://example.com/documents/appointment-letter.pdf';
        
        const employeeData = {
          ...values,
          appointmentLetter: appointmentLetterUrl,
          employeeId: `EMP${Math.floor(1000 + Math.random() * 9000)}`,
          status: 'Active',
          createdDate: new Date().toISOString()
        };

        console.log("Created employee data:", employeeData);
        
        // Simulate successful creation
        toast.success('Employee created successfully!');
        
        setTimeout(() => {
          navigate("/employee-details");
        }, 1500);

      } catch (error) {
        toast.error('Failed to create employee. Please try again.');
        console.error('Error creating employee:', error);
      }
      setLoading(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Toaster />
      <div className="p-6 space-y-6 font-jakarta">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Department Field */}
            <div className="space-y-2">
              <label htmlFor="department" className="flex items-center text-sm font-medium text-gray-900">
                <FaBuilding className="mr-2 text-blue-500" />
                Department
              </label>
              <select
                name="department"
                id="department"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formik.values.department}
                onChange={handleDepartmentChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Department</option>
                {Object.keys(departmentDesignationMap).map((dept) => (
                  <option key={dept} value={dept}>
                    {dept.charAt(0).toUpperCase() + dept.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
              {formik.touched.department && formik.errors.department ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.department}
                </div>
              ) : null}
            </div>

            {/* Designation Field */}
            <div className="space-y-2">
              <label htmlFor="designation" className="flex items-center text-sm font-medium text-gray-900">
                <FaUserTie className="mr-2 text-green-500" />
                Designation
              </label>
              <select
                name="designation"
                id="designation"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.designation}
                </div>
              ) : null}
            </div>

            {/* Joining Date Field */}
            <div className="space-y-2">
              <label htmlFor="joiningDate" className="flex items-center text-sm font-medium text-gray-900">
                <FaCalendarAlt className="mr-2 text-purple-500" />
                Joining Date
              </label>
              <input
                type="date"
                name="joiningDate"
                id="joiningDate"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formik.values.joiningDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.joiningDate && formik.errors.joiningDate ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.joiningDate}
                </div>
              ) : null}
            </div>

            {/* Office Location Field */}
            <div className="space-y-2">
              <label htmlFor="officeLocation" className="flex items-center text-sm font-medium text-gray-900">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                Office Location
              </label>
              <input
                type="text"
                name="officeLocation"
                id="officeLocation"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter office location"
                value={formik.values.officeLocation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.officeLocation && formik.errors.officeLocation ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.officeLocation}
                </div>
              ) : null}
            </div>

            {/* Type of Employment Field */}
            <div className="space-y-2">
              <label htmlFor="typeOfEmployment" className="flex items-center text-sm font-medium text-gray-900">
                <FaBriefcase className="mr-2 text-orange-500" />
                Type of Employment
              </label>
              <select
                name="typeOfEmployment"
                id="typeOfEmployment"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formik.values.typeOfEmployment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Employment Type</option>
                <option value="Full-time">Full-Time</option>
                <option value="Part-time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              {formik.touched.typeOfEmployment && formik.errors.typeOfEmployment ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.typeOfEmployment}
                </div>
              ) : null}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="flex items-center text-sm font-medium text-gray-900">
                <FaLock className="mr-2 text-cyan-500" />
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          {/* Appointment Letter Upload Field */}
          <div className="mt-6 space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-900">
              <FaFilePdf className="mr-2 text-red-500" />
              Appointment Letter
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FaFileUpload className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Upload Appointment Letter</p>
                    <p className="text-gray-500 text-sm">Supported formats: PDF, JPEG, PNG (Max 500KB)</p>
                    {formik.values.appointmentLetter && (
                      <p className="text-green-600 text-sm mt-1">
                        ✓ {formik.values.appointmentLetter.name}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => document.getElementById('appointmentLetter')?.click()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <FaFileUpload className="w-4 h-4" />
                  Choose File
                </button>
                <input
                  type="file"
                  className="hidden"
                  id="appointmentLetter"
                  name="appointmentLetter"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(event) => {
                    formik.setFieldValue('appointmentLetter', event.currentTarget.files?.[0] || null);
                  }}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            {formik.touched.appointmentLetter && formik.errors.appointmentLetter ? (
              <div className="text-red-600 text-sm flex items-center mt-1">
                <span className="mr-1">⚠️</span>
                {formik.errors.appointmentLetter}
              </div>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
            <button 
              type="button" 
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center gap-2"
            >
              {loading ? <Loader /> : 'Create Employee'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Account;