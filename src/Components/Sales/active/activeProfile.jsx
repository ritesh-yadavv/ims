import React from 'react'
import SalesSideBar from "../widgets/SalesSideBar";
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

const ActiveProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { client } = location?.state || {};

    // Static client data in case no client is passed via navigation
    const staticClient = {
        id: 1,
        name: "Dr. John Smith",
        specialization: "Cardiologist",
        compounderName: "Sarah Wilson",
        email: "john.smith@medicalcenter.com",
        address: "123 Medical Plaza, Health Street",
        city: "New York",
        state: "New York",
        compounderNumber: "+1 (555) 123-4567",
        doctorNumber: "+1 (555) 987-6543",
        clinicTimingsStart: "09:00 AM",
        clinicTimingsEnd: "05:00 PM",
        clinicDays: ["Monday", "Wednesday", "Friday", "Saturday"]
    };

    const displayClient = client || staticClient;

    return (
        <div className="flex h-screen bg-gray-50">
            <SalesSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
                {/* Header Section */}
                <div className="p-6">
                    <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-4 px-6 rounded-lg shadow-md">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center text-white hover:text-blue-100 transition-colors duration-200"
                        >
                            <FiArrowLeft className="mr-3 text-lg" />
                            <span className="font-medium">Active Clients › Client Profile</span>
                        </button>
                    </div>
                </div>

                {/* Client Profile Card */}
                <div className="px-6 pb-6">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                        {/* Profile Header */}
                        <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-800">{displayClient?.name}</h1>
                                    <p className="text-green-600 font-medium">{displayClient?.specialization}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">Client ID: #{displayClient?.id?.toString().padStart(4, '0')}</p>
                                    <p className="text-sm text-gray-500">Active Status</p>
                                </div>
                            </div>
                        </div>

                        {/* Client Details */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                                            <p className="text-gray-900 font-medium">{displayClient?.name}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Specialization</label>
                                            <p className="text-gray-900">{displayClient?.specialization || "Not specified"}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Compounder Name</label>
                                            <p className="text-gray-900">{displayClient?.compounderName || "Not assigned"}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                                            <p className="text-gray-900 break-words">{displayClient?.email || "Not provided"}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">Full Address</label>
                                        <p className="text-gray-900">{displayClient?.address}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">City</label>
                                            <p className="text-gray-900">{displayClient?.city}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">State</label>
                                            <p className="text-gray-900">{displayClient?.state}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Compounder Contact</label>
                                            <p className="text-gray-900">{displayClient?.compounderNumber || "Not provided"}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Doctor Contact</label>
                                            <p className="text-gray-900">{displayClient?.doctorNumber}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">Clinic Timings</label>
                                        <p className="text-gray-900 font-medium">
                                            {displayClient?.clinicTimingsStart} - {displayClient?.clinicTimingsEnd}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-3">Clinic Days</label>
                                        <div className="flex flex-wrap gap-2">
                                            {displayClient?.clinicDays?.map((day, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center justify-center px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
                                                >
                                                    {day}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Additional Info Section */}
                                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                                        <h3 className="text-sm font-medium text-gray-700 mb-2">Additional Information</h3>
                                        <p className="text-sm text-gray-600">
                                            This client is currently active and receiving regular support. Last activity: Today
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6">
                    <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
                        <div className="flex flex-wrap gap-4">
                            <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm'>
                                Assign Support
                            </button>
                            <button className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm'>
                                Schedule Visit
                            </button>
                            <button className='bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm'>
                                Send Message
                            </button>
                            <button className='border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200'>
                                View History
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveProfile