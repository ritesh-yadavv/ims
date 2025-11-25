import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const PersonalDetails = ({ nextStep }) => {
  // Static employee data
  const allEmployee = {
    employeeId: 'EMP001',
    personalEmail: 'john.doe@personal.com',
    officeEmail: 'john.doe@company.com',
    name: 'John Doe',
    mobileNumber: '9876543210',
    dob: '1990-05-15',
    gender: 'Male',
    nationality: 'Indian',
    address: '123 Main Street, Andheri East',
    city: 'Mumbai',
    state: 'Maharashtra',
    pinCode: '400069',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  };

  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      employeeId: allEmployee?.employeeId || '',
      personalEmail: allEmployee?.personalEmail || '',
      officeEmail: allEmployee?.officeEmail || '',
      firstName: allEmployee?.name?.split(' ')[0] || '',
      lastName: allEmployee?.name?.split(' ')[1] || '',
      mobileNumber: allEmployee?.mobileNumber || '',
      dob: allEmployee?.dob || '',
      gender: allEmployee?.gender || '',
      nationality: allEmployee?.nationality || '',
      address: allEmployee?.address || '',
      city: allEmployee?.city || '',
      state: allEmployee?.state || '',
      pinCode: allEmployee?.pinCode || '',
    },
    validationSchema: Yup.object({
      employeeId: Yup.string().required('Employee ID is required'),
      personalEmail: Yup.string().email('Invalid email format').required('Personal email is required'),
      officeEmail: Yup.string().email('Invalid email format').required('Office email is required'),
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile Number must be 10 digits')
        .required('Mobile number is required'),
      dob: Yup.date()
        .max(new Date(), 'Date of birth cannot be in the future')
        .required('Date of birth is required'),
      gender: Yup.string()
        .oneOf(['Male', 'Female', 'Other'], 'Invalid gender')
        .required('Gender is required'),
      nationality: Yup.string().required('Nationality is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      pinCode: Yup.string()
        .matches(/^[0-9]{6}$/, 'Pin Code must be exactly 6 digits')
        .required('Pin code is required'),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      try {
        const { firstName, lastName, ...otherValues } = values;
        const formValues = {
          ...otherValues,
          name: `${values.firstName} ${values.lastName}`
        };
        
        console.log('Personal details submitted:', formValues);
        toast.success("Personal details updated successfully!");
        
        // If nextStep prop is provided, navigate to next step
        if (nextStep) {
          nextStep();
        }
        
      } catch (error) {
        toast.error("Error updating personal details");
        console.error('Error submitting form:', error);
      }
      setLoading(false);
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files?.[0] || null;
    setProfileImage(file);

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

  const handleUpdateImage = async () => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Profile image to be uploaded:', profileImage);
      toast.success("Profile image updated successfully!");
      setImagePreview(null);
      
    } catch (error) {
      toast.error("Something went wrong while updating profile image!");
      console.error('Error updating profile image:', error);
    }
  };

  return (
    <div className="p-6 space-y-6 flex flex-col md:flex-row font-jakarta">
      <Toaster position='top-right' />
      
      {/* Profile Image Section */}
      <div className="flex flex-col items-center mt-20 md:w-1/3 w-full">
        <div className="h-40 w-40 bg-gray-100 p-4 rounded hover:bg-gray-200 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
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
            <div className="flex flex-col items-center">
              <img 
                src={allEmployee.profilePicture} 
                alt="Current Profile" 
                className="h-32 w-32 object-cover rounded mb-2"
              />
              <button
                type="button"
                onClick={() => document.getElementById('profileImage').click()}
                className="p-2 flex justify-center items-center hover:bg-gray-300 rounded transition-colors"
              >
                <span className="text-blue-600 font-medium">Change Photo</span>
              </button>
            </div>
          )}
        </div>
        {imagePreview && (
          <div className="flex flex-col space-y-2 mt-4 w-full max-w-xs">
            <button
              type="button"
              onClick={() => document.getElementById('profileImage').click()}
              className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Change Image
            </button>
            <button
              type="button"
              onClick={handleUpdateImage}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Update Image
            </button>
          </div>
        )}
      </div>

      {/* Form Section */}
      <div className="md:w-2/3 w-full">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full">
            <div className="grid grid-cols-6 gap-6">
              {/* First Name */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-900 block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-600 text-sm">{formik.errors.firstName}</div>
                )}
              </div>

              {/* Last Name */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
                )}
              </div>

              {/* Employee ID */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="employeeId" className="text-sm font-medium text-gray-900 block mb-2">
                  Employee ID
                </label>
                <input
                  type="text"
                  name="employeeId"
                  id="employeeId"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Employee ID"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.employeeId}
                />
                {formik.touched.employeeId && formik.errors.employeeId && (
                  <div className="text-red-600 text-sm">{formik.errors.employeeId}</div>
                )}
              </div>

              {/* Personal Email */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="personalEmail" className="text-sm font-medium text-gray-900 block mb-2">
                  Personal Email
                </label>
                <input
                  type="email"
                  name="personalEmail"
                  id="personalEmail"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Personal Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.personalEmail}
                />
                {formik.touched.personalEmail && formik.errors.personalEmail && (
                  <div className="text-red-600 text-sm">{formik.errors.personalEmail}</div>
                )}
              </div>

              {/* Office Email */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="officeEmail" className="text-sm font-medium text-gray-900 block mb-2">
                  Office Email
                </label>
                <input
                  type="email"
                  name="officeEmail"
                  id="officeEmail"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Office Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.officeEmail}
                />
                {formik.touched.officeEmail && formik.errors.officeEmail && (
                  <div className="text-red-600 text-sm">{formik.errors.officeEmail}</div>
                )}
              </div>

              {/* Mobile Number */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="mobileNumber" className="text-sm font-medium text-gray-900 block mb-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Mobile Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobileNumber}
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                  <div className="text-red-600 text-sm">{formik.errors.mobileNumber}</div>
                )}
              </div>

              {/* Date of Birth */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="dob" className="text-sm font-medium text-gray-900 block mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                />
                {formik.touched.dob && formik.errors.dob && (
                  <div className="text-red-600 text-sm">{formik.errors.dob}</div>
                )}
              </div>

              {/* Gender */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="gender" className="text-sm font-medium text-gray-900 block mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {formik.touched.gender && formik.errors.gender && (
                  <div className="text-red-600 text-sm">{formik.errors.gender}</div>
                )}
              </div>

              {/* Nationality */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="nationality" className="text-sm font-medium text-gray-900 block mb-2">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Nationality"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nationality}
                />
                {formik.touched.nationality && formik.errors.nationality && (
                  <div className="text-red-600 text-sm">{formik.errors.nationality}</div>
                )}
              </div>

              {/* Address */}
              <div className="col-span-6">
                <label htmlFor="address" className="text-sm font-medium text-gray-900 block mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address && (
                  <div className="text-red-600 text-sm">{formik.errors.address}</div>
                )}
              </div>

              {/* City */}
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="city" className="text-sm font-medium text-gray-900 block mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="City"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city && (
                  <div className="text-red-600 text-sm">{formik.errors.city}</div>
                )}
              </div>

              {/* State */}
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="state" className="text-sm font-medium text-gray-900 block mb-2">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="State"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                />
                {formik.touched.state && formik.errors.state && (
                  <div className="text-red-600 text-sm">{formik.errors.state}</div>
                )}
              </div>

              {/* Pin Code */}
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="pinCode" className="text-sm font-medium text-gray-900 block mb-2">
                  Pin Code
                </label>
                <input
                  type="text"
                  name="pinCode"
                  id="pinCode"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Pin Code"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pinCode}
                />
                {formik.touched.pinCode && formik.errors.pinCode && (
                  <div className="text-red-600 text-sm">{formik.errors.pinCode}</div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed min-w-[150px]"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Updating...
                  </div>
                ) : (
                  "Update and Save"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;