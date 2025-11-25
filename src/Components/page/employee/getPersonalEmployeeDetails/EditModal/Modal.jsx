import React, { useState } from 'react';
import Header from './editEmployee/header/header';

const Modal = ({ onClose }) => {
    // Static employee data
    const allEmployee = {
        name: 'John Doe',
        officeEmail: 'john.doe@company.com',
        personalEmail: 'john.doe@personal.com',
        mobileNumber: '9876543210',
    };

    const [formData, setFormData] = useState({
        name: allEmployee.name || '',
        officeEmail: allEmployee.officeEmail || '',
        personalEmail: allEmployee.personalEmail || '',
        mobileNumber: allEmployee.mobileNumber || '',
    });

    const closeModal = () => {
        onClose(false);
        console.log('Modal closed');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        console.log('Form data to be saved:', formData);
        // Here you would typically make an API call to save the data
        // For now, we'll just log it and close the modal
        onClose(false);
    };

    return (
        <div className="fixed inset-0 flex justify-end bg-gray-800 bg-opacity-50 z-50">
            <div className="w-[80%] h-full overflow-x-auto bg-white shadow-lg transform translate-x-0 transition-transform duration-300">
                <div className="p-6">
                    {/* Close Button */}
                    <div className="flex justify-between items-center mb-6">
                        <button
                            onClick={closeModal}
                            className="text-gray-600 hover:text-white bg-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md border border-red-500 px-3 py-1 transition duration-200 ease-in-out"
                        >
                            ✕ Close
                        </button>
                        
                        {/* Save Button */}
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>

                    {/* Header Component */}
                    <div className="mb-6">
                        <Header />
                    </div>

                    {/* Form Fields */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Edit Employee Details
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter full name"
                                />
                            </div>

                            {/* Office Email Field */}
                            <div>
                                <label htmlFor="officeEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                    Office Email
                                </label>
                                <input
                                    type="email"
                                    id="officeEmail"
                                    name="officeEmail"
                                    value={formData.officeEmail}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter office email"
                                />
                            </div>

                            {/* Personal Email Field */}
                            <div>
                                <label htmlFor="personalEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                    Personal Email
                                </label>
                                <input
                                    type="email"
                                    id="personalEmail"
                                    name="personalEmail"
                                    value={formData.personalEmail}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter personal email"
                                />
                            </div>

                            {/* Mobile Number Field */}
                            <div>
                                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter mobile number"
                                />
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="mt-6 p-4 bg-blue-50 rounded-md">
                            <h3 className="text-sm font-medium text-blue-800 mb-2">
                                💡 Information
                            </h3>
                            <p className="text-sm text-blue-600">
                                Changes made here will be reflected in the employee's profile. 
                                Make sure to save your changes before closing the modal.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons at Bottom */}
                    <div className="flex justify-end space-x-4 mt-6 pt-6 border-t border-gray-200">
                        <button
                            onClick={closeModal}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;