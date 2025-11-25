import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setEmployeeData } from "../../../../../redux/slices/createEmployeeAdminSlice";
import Loader from "../../../../../commonComponent/loader";

const PersonalDetails = ({ nextStep }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Static image URLs for profile pictures
  const staticProfileImages = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  ];

  // Function to get a random profile image
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
          (value) => !value || (value && value.size <= 500 * 1024) // Make it optional for static data
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
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      try {
        // Use static profile image URL instead of uploaded file
        const profilePicture = values.profileImage 
          ? URL.createObjectURL(values.profileImage) 
          : getRandomProfileImage();

        const { firstName, lastName, profileImage, ...otherValues } = values;
        const formValues = {
          ...otherValues,
          name: `${values.firstName} ${values.lastName}`,
          profilePicture: profilePicture,
        };

        // Dispatch to Redux store with static data
        dispatch(setEmployeeData(formValues));

        console.log('Form submitted with values:', formValues);
        nextStep();
      } catch (error) {
        console.error('Error submitting form:', error);
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

  // Function to fill form with sample static data for testing
  const fillWithSampleData = () => {
    const sampleData = {
      employeeId: 'EMP' + Math.floor(1000 + Math.random() * 9000),
      personalEmail: `user${Math.floor(1000 + Math.random() * 9000)}@gmail.com`,
      officeEmail: `employee${Math.floor(1000 + Math.random() * 9000)}@company.com`,
      firstName: 'John',
      lastName: 'Doe',
      mobileNumber: '9876543210',
      dob: '1990-01-15',
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
      <div className="p-6 space-y-6 flex flex-col md:flex-row">
        <div className="flex flex-col items-center mt-20 md:w-1/3 w-full">
          <div className="h-40 w-40 bg-gray-100 p-4 rounded hover:bg-gray-200 flex flex-col items-center justify-center">
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              id="profileImage"
              name="profileImage"
              className="hidden"
              onChange={handleImageChange}
            />
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="h-full w-full object-cover rounded"
              />
            ) : (
              <button
                type="button"
                onClick={() => document.getElementById('profileImage').click()}
                className="p-2 flex justify-center items-center hover:bg-gray-400"
              >
                <img src="https://d2sv8898xch8nu.cloudfront.net/MediaFiles/camera.png" alt="Upload" />
              </button>
            )}
          </div>
          {imagePreview && (
            <button
              type="button"
              onClick={() => document.getElementById('profileImage').click()}
              className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Change Image
            </button>
          )}
          {formik.touched.profileImage && formik.errors.profileImage && (
            <div className="text-red-600 text-sm">
              {formik.errors.profileImage}
            </div>
          )}
          
          {/* Sample Data Button for Testing */}
          <button
            type="button"
            onClick={fillWithSampleData}
            className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-700 text-sm"
          >
            Fill Sample Data
          </button>
        </div>

        <div className="md:w-2/3 w-full">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-600 text-sm">
                  {formik.errors.firstName}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-600 text-sm">
                  {formik.errors.lastName}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="employeeId"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Employee ID
              </label>
              <input
                type="text"
                name="employeeId"
                id="employeeId"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Employee ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.employeeId}
              />
              {formik.touched.employeeId && formik.errors.employeeId && (
                <div className="text-red-600 text-sm">
                  {formik.errors.employeeId}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="personalEmail"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Personal Email
              </label>
              <input
                type="email"
                name="personalEmail"
                id="personalEmail"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Personal Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.personalEmail}
              />
              {formik.touched.personalEmail && formik.errors.personalEmail && (
                <div className="text-red-600 text-sm">
                  {formik.errors.personalEmail}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="officeEmail"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Office Email
              </label>
              <input
                type="email"
                name="officeEmail"
                id="officeEmail"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Office Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.officeEmail}
              />
              {formik.touched.officeEmail && formik.errors.officeEmail && (
                <div className="text-red-600 text-sm">
                  {formik.errors.officeEmail}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="mobileNumber"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Mobile Number
              </label>
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Mobile Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobileNumber}
              />
              {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                <div className="text-red-600 text-sm">
                  {formik.errors.mobileNumber}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="dob"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Date of Birth"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
              />
              {formik.touched.dob && formik.errors.dob && (
                <div className="text-red-600 text-sm">
                  {formik.errors.dob}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="gender"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
              >
                <option value="" label="Select gender" />
                <option value="Male" label="Male" />
                <option value="Female" label="Female" />
                <option value="Other" label="Other" />
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <div className="text-red-600 text-sm">
                  {formik.errors.gender}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="nationality"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Nationality"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nationality}
              />
              {formik.touched.nationality && formik.errors.nationality && (
                <div className="text-red-600 text-sm">
                  {formik.errors.nationality}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-red-600 text-sm">
                  {formik.errors.address}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="City"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city && (
                <div className="text-red-600 text-sm">
                  {formik.errors.city}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="state"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="State"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
              />
              {formik.touched.state && formik.errors.state && (
                <div className="text-red-600 text-sm">
                  {formik.errors.state}
                </div>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="pinCode"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Pin Code
              </label>
              <input
                type="text"
                name="pinCode"
                id="pinCode"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Pin Code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pinCode}
              />
              {formik.touched.pinCode && formik.errors.pinCode && (
                <div className="text-red-600 text-sm">
                  {formik.errors.pinCode}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/admin/employee-list")}
              className="text-gray-800 py-2 px-4 rounded-lg border-2 border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-lg border-2 border-blue-500"
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