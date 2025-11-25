import React from 'react';
import SideBarMain from "../widgets/SalesSideBar";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ClientRegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      specialization: '',
      email: '',
      address: '',
      phoneNumber: '',
      state: '',
      city: '',
      compounderName: '',
      compounderNumber: '',
      clinicDays: [],
      clinicStartTime: '',
      clinicEndTime: '',
      callDays: [],
      callStartTime: '',
      callEndTime: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      specialization: Yup.string().required('Specialization is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      address: Yup.string().required('Address is required'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Phone Number is required'),
      state: Yup.string().required('State is required'),
      city: Yup.string().required('City is required'),
      compounderName: Yup.string().required('Compounder Name is required'),
      compounderNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Compounder number must be 10 digits')
        .required('Compounder Number is required'),
      clinicDays: Yup.array().min(1, 'Select at least one clinic day'),
      clinicStartTime: Yup.string().required('Clinic start time is required'),
      clinicEndTime: Yup.string().required('Clinic end time is required'),
      callDays: Yup.array().min(1, 'Select at least one call day'),
      callStartTime: Yup.string().required('Call start time is required'),
      callEndTime: Yup.string().required('Call end time is required'),
    }),
    onSubmit: async (values) => {
      console.log('Form submitted:', values);
      try {
        // Simulate API call with static data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Static success response
        const mockResponse = {
          data: {
            message: 'Client registered successfully!',
            clientId: 'CLI' + Math.random().toString(36).substr(2, 9).toUpperCase()
          }
        };
        
        toast.success(mockResponse.data.message);
        console.log('Registration successful:', mockResponse);
        
        // Reset form after successful submission
        formik.resetForm();
      } catch (error) {
        toast.error(error.message || 'Registration failed. Please try again.');
      }
    },
  });

  const daysOfWeek = [
    { label: 'Sun', value: 'S' },
    { label: 'Mon', value: 'M' },
    { label: 'Tue', value: 'T' },
    { label: 'Wed', value: 'W' },
    { label: 'Thu', value: 'T' },
    { label: 'Fri', value: 'F' },
    { label: 'Sat', value: 'S' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBarMain />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-6 px-8 shadow-lg">
          <h1 className="text-2xl font-bold">Client Registration</h1>
          <p className="text-blue-100 mt-1">Register new clients for your practice</p>
        </div>

        {/* Form Container */}
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Client Information</h2>
                <p className="text-gray-600 text-sm mt-1">Fill in the details below to register a new client</p>
              </div>

              {/* Form Content */}
              <form onSubmit={formik.handleSubmit} className="p-6">
                {/* Personal Information Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.firstName && formik.errors.firstName 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.lastName && formik.errors.lastName 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specialization *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.specialization && formik.errors.specialization 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="text"
                        name="specialization"
                        placeholder="e.g., Cardiologist, Dentist"
                        value={formik.values.specialization}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.specialization && formik.errors.specialization && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.specialization}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.email && formik.errors.email 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.address && formik.errors.address 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="text"
                        name="address"
                        placeholder="Enter full address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.address && formik.errors.address && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.address}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.phoneNumber && formik.errors.phoneNumber 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="tel"
                        name="phoneNumber"
                        placeholder="10-digit phone number"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.state && formik.errors.state 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="text"
                        name="state"
                        placeholder="Enter state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.state && formik.errors.state && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.state}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.city && formik.errors.city 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="text"
                        name="city"
                        placeholder="Enter city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.city && formik.errors.city && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.city}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Compounder Information Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Compounder Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Compounder Name *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.compounderName && formik.errors.compounderName 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="text"
                        name="compounderName"
                        placeholder="Enter compounder name"
                        value={formik.values.compounderName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.compounderName && formik.errors.compounderName && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.compounderName}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Compounder Number *
                      </label>
                      <input
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          formik.touched.compounderNumber && formik.errors.compounderNumber 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        type="tel"
                        name="compounderNumber"
                        placeholder="10-digit compounder number"
                        value={formik.values.compounderNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.compounderNumber && formik.errors.compounderNumber && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.compounderNumber}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Schedule Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Schedule Information
                  </h3>
                  
                  {/* Clinic Schedule */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Clinic Days *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {daysOfWeek.map((day, index) => (
                          <button
                            key={index}
                            type="button"
                            className={`px-4 py-2 border rounded-lg font-medium transition-all duration-200 ${
                              formik.values.clinicDays.includes(day.value)
                                ? "bg-blue-500 text-white border-blue-500 shadow-sm"
                                : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                            }`}
                            onClick={() => {
                              const newClinicDays = formik.values.clinicDays.includes(day.value)
                                ? formik.values.clinicDays.filter((d) => d !== day.value)
                                : [...formik.values.clinicDays, day.value];
                              formik.setFieldValue('clinicDays', newClinicDays);
                            }}
                          >
                            {day.label}
                          </button>
                        ))}
                      </div>
                      {formik.touched.clinicDays && formik.errors.clinicDays && (
                        <div className="text-red-500 text-sm mt-2">{formik.errors.clinicDays}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Clinic Timings *
                      </label>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1">
                          <input
                            type="time"
                            name="clinicStartTime"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              formik.touched.clinicStartTime && formik.errors.clinicStartTime 
                                ? 'border-red-500' 
                                : 'border-gray-300'
                            }`}
                            value={formik.values.clinicStartTime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                        <span className="text-gray-500 font-medium">to</span>
                        <div className="flex-1">
                          <input
                            type="time"
                            name="clinicEndTime"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              formik.touched.clinicEndTime && formik.errors.clinicEndTime 
                                ? 'border-red-500' 
                                : 'border-gray-300'
                            }`}
                            value={formik.values.clinicEndTime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                      </div>
                      {(formik.touched.clinicStartTime && formik.errors.clinicStartTime) && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.clinicStartTime}</div>
                      )}
                      {(formik.touched.clinicEndTime && formik.errors.clinicEndTime) && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.clinicEndTime}</div>
                      )}
                    </div>
                  </div>

                  {/* Call Schedule */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Call Days *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {daysOfWeek.map((day, index) => (
                          <button
                            key={index}
                            type="button"
                            className={`px-4 py-2 border rounded-lg font-medium transition-all duration-200 ${
                              formik.values.callDays.includes(day.value)
                                ? "bg-green-500 text-white border-green-500 shadow-sm"
                                : "bg-white text-gray-700 border-gray-300 hover:border-green-300"
                            }`}
                            onClick={() => {
                              const newCallDays = formik.values.callDays.includes(day.value)
                                ? formik.values.callDays.filter((d) => d !== day.value)
                                : [...formik.values.callDays, day.value];
                              formik.setFieldValue('callDays', newCallDays);
                            }}
                          >
                            {day.label}
                          </button>
                        ))}
                      </div>
                      {formik.touched.callDays && formik.errors.callDays && (
                        <div className="text-red-500 text-sm mt-2">{formik.errors.callDays}</div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Call Timings *
                      </label>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1">
                          <input
                            type="time"
                            name="callStartTime"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              formik.touched.callStartTime && formik.errors.callStartTime 
                                ? 'border-red-500' 
                                : 'border-gray-300'
                            }`}
                            value={formik.values.callStartTime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                        <span className="text-gray-500 font-medium">to</span>
                        <div className="flex-1">
                          <input
                            type="time"
                            name="callEndTime"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              formik.touched.callEndTime && formik.errors.callEndTime 
                                ? 'border-red-500' 
                                : 'border-gray-300'
                            }`}
                            value={formik.values.callEndTime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                      </div>
                      {(formik.touched.callStartTime && formik.errors.callStartTime) && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.callStartTime}</div>
                      )}
                      {(formik.touched.callEndTime && formik.errors.callEndTime) && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.callEndTime}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => formik.resetForm()}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg hover:from-blue-600 hover:to-green-500 transition-all duration-200 font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formik.isSubmitting ? 'Registering...' : 'Register Client'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientRegistrationForm;