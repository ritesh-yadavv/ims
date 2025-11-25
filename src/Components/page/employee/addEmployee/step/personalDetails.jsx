import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from "../../../../commonComponent/loader"
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaCalendarAlt, 
  FaVenusMars, 
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaCity,
  FaMapPin,
  FaIdCard,
  FaCamera,
  FaTimes
} from 'react-icons/fa';

const PersonalDetails = ({ nextStep }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Static profile images for fallback
  const staticProfileImages = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  ];

  const getRandomProfileImage = () => {
    const randomIndex = Math.floor(Math.random() * staticProfileImages.length);
    return staticProfileImages[randomIndex];
  };

  const formik = useFormik({
    initialValues: {
      profileImage: null,
      employeeId: '',
      personalEmail: '',
      officeEmail: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      dob: '',
      gender: '',
      nationality: '',
      address: '',
      city: '',
      state: '',
      pinCode: '',
    },
    validationSchema: Yup.object({
      profileImage: Yup.mixed().required('Profile image is required')
        .test(
          'fileSize',
          'File size must be less than 500KB',
          (value) => !value || (value && value.size <= 500 * 1024) // Make optional for static data
        ),
      employeeId: Yup.string().required('Employee ID is required'),
      personalEmail: Yup.string()
        .email('Invalid email format')
        .required('Personal Email is required'),
      officeEmail: Yup.string()
        .email('Invalid email format')
        .required('Office Email is required'),
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile Number must be 10 digits')
        .required('Mobile Number is required'),
      dob: Yup.date().required('Date of Birth is required'),
      gender: Yup.string()
        .oneOf(['Male', 'Female', 'Other'], 'Invalid gender')
        .required('Gender is required'),
      nationality: Yup.string().required('Nationality is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      pinCode: Yup.string()
        .matches(/^[0-9]{6}$/, 'Pin Code must be exactly 6 digits')
        .required('Pin Code is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Static data processing
        const profilePicture = values.profileImage 
          ? URL.createObjectURL(values.profileImage)
          : getRandomProfileImage();

        const { firstName, lastName, profileImage, ...otherValues } = values;
        const formValues = {
          ...otherValues,
          name: `${values.firstName} ${values.lastName}`,
          profilePicture: profilePicture,
          employeeId: values.employeeId || `EMP${Math.floor(1000 + Math.random() * 9000)}`
        };

        // Store in localStorage (simulating Redux state)
        localStorage.setItem('employeePersonalData', JSON.stringify(formValues));
        
        console.log("Personal details submitted:", formValues);
        
        // Move to next step
        nextStep();
      } catch (error) {
        console.error('Error processing personal details:', error);
        alert('Failed to save personal details. Please try again.');
      }
      setLoading(false);
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files?.[0] || null;
    formik.setFieldValue('profileImage', file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const removeImage = () => {
    formik.setFieldValue('profileImage', null);
    setImagePreview(null);
  };

  const fillSampleData = () => {
    const sampleData = {
      firstName: 'Amit',
      lastName: 'Sharma',
      employeeId: `EMP${Math.floor(1000 + Math.random() * 9000)}`,
      personalEmail: 'amit.sharma@gmail.com',
      officeEmail: 'amit.sharma@company.com',
      mobileNumber: '9876543210',
      dob: '1990-05-15',
      gender: 'Male',
      nationality: 'Indian',
      address: '123 Main Street, Downtown',
      city: 'Mumbai',
      state: 'Maharashtra',
      pinCode: '400001'
    };
    
    formik.setValues({
      ...formik.values,
      ...sampleData
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-6 space-y-6 flex flex-col md:flex-row font-jakarta">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center md:w-1/3 w-full">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <FaUser className="mr-2 text-blue-600" />
              Profile Photo
            </h2>
            <p className="text-gray-600 text-sm">Upload a professional profile picture</p>
          </div>
          
          <div className="relative">
            <div className="h-40 w-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl hover:bg-gray-200 flex flex-col items-center justify-center transition-colors">
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                id="profileImage"
                name="profileImage"
                className="hidden"
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Profile Preview"
                    className="h-40 w-40 object-cover rounded-2xl"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => document.getElementById('profileImage').click()}
                  className="p-4 flex flex-col justify-center items-center text-gray-500 hover:text-gray-700"
                >
                  <FaCamera className="w-8 h-8 mb-2" />
                  <span className="text-sm">Upload Photo</span>
                </button>
              )}
            </div>
          </div>
          
          {formik.touched.profileImage && formik.errors.profileImage && (
            <div className="text-red-600 text-sm mt-2 flex items-center">
              <span className="mr-1">⚠️</span>
              {formik.errors.profileImage}
            </div>
          )}

          {/* Sample Data Button */}
          <button
            type="button"
            onClick={fillSampleData}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
          >
            Fill Sample Data
          </button>
        </div>

        {/* Form Fields Section */}
        <div className="md:w-2/3 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <label htmlFor="firstName" className="flex items-center text-sm font-medium text-gray-900">
                <FaUser className="mr-2 text-blue-500" />
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.firstName}
                </div>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label htmlFor="lastName" className="flex items-center text-sm font-medium text-gray-900">
                <FaUser className="mr-2 text-blue-500" />
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.lastName}
                </div>
              )}
            </div>

            {/* Employee ID */}
            <div className="space-y-2">
              <label htmlFor="employeeId" className="flex items-center text-sm font-medium text-gray-900">
                <FaIdCard className="mr-2 text-purple-500" />
                Employee ID
              </label>
              <input
                type="text"
                name="employeeId"
                id="employeeId"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Employee ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.employeeId}
              />
              {formik.touched.employeeId && formik.errors.employeeId && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.employeeId}
                </div>
              )}
            </div>

            {/* Personal Email */}
            <div className="space-y-2">
              <label htmlFor="personalEmail" className="flex items-center text-sm font-medium text-gray-900">
                <FaEnvelope className="mr-2 text-red-500" />
                Personal Email
              </label>
              <input
                type="email"
                name="personalEmail"
                id="personalEmail"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Personal Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.personalEmail}
              />
              {formik.touched.personalEmail && formik.errors.personalEmail && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.personalEmail}
                </div>
              )}
            </div>

            {/* Office Email */}
            <div className="space-y-2">
              <label htmlFor="officeEmail" className="flex items-center text-sm font-medium text-gray-900">
                <FaEnvelope className="mr-2 text-green-500" />
                Office Email
              </label>
              <input
                type="email"
                name="officeEmail"
                id="officeEmail"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Office Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.officeEmail}
              />
              {formik.touched.officeEmail && formik.errors.officeEmail && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.officeEmail}
                </div>
              )}
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label htmlFor="mobileNumber" className="flex items-center text-sm font-medium text-gray-900">
                <FaPhone className="mr-2 text-blue-500" />
                Mobile Number
              </label>
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Mobile Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobileNumber}
              />
              {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.mobileNumber}
                </div>
              )}
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <label htmlFor="dob" className="flex items-center text-sm font-medium text-gray-900">
                <FaCalendarAlt className="mr-2 text-orange-500" />
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
              />
              {formik.touched.dob && formik.errors.dob && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.dob}
                </div>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label htmlFor="gender" className="flex items-center text-sm font-medium text-gray-900">
                <FaVenusMars className="mr-2 text-pink-500" />
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.gender}
                </div>
              )}
            </div>

            {/* Nationality */}
            <div className="space-y-2">
              <label htmlFor="nationality" className="flex items-center text-sm font-medium text-gray-900">
                <FaGlobeAmericas className="mr-2 text-teal-500" />
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Nationality"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nationality}
              />
              {formik.touched.nationality && formik.errors.nationality && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.nationality}
                </div>
              )}
            </div>

            {/* Address */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="address" className="flex items-center text-sm font-medium text-gray-900">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Full Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.address}
                </div>
              )}
            </div>

            {/* City */}
            <div className="space-y-2">
              <label htmlFor="city" className="flex items-center text-sm font-medium text-gray-900">
                <FaCity className="mr-2 text-blue-500" />
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="City"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.city}
                </div>
              )}
            </div>

            {/* State */}
            <div className="space-y-2">
              <label htmlFor="state" className="flex items-center text-sm font-medium text-gray-900">
                <FaMapMarkerAlt className="mr-2 text-green-500" />
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="State"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
              />
              {formik.touched.state && formik.errors.state && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.state}
                </div>
              )}
            </div>

            {/* Pin Code */}
            <div className="space-y-2">
              <label htmlFor="pinCode" className="flex items-center text-sm font-medium text-gray-900">
                <FaMapPin className="mr-2 text-purple-500" />
                Pin Code
              </label>
              <input
                type="text"
                name="pinCode"
                id="pinCode"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Pin Code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pinCode}
              />
              {formik.touched.pinCode && formik.errors.pinCode && (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.pinCode}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
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
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center gap-2"
            >
              {loading ? <Loader /> : "Next"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalDetails;