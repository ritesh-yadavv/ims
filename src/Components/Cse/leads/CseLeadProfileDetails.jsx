import React, { useState } from "react";
import CseSideBar from "../widgets/CseSideBar";
import { useLocation } from 'react-router-dom';
import VerifyOtpModal from "./VerifyOtpModal";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../commonComponent/loader"
import { FiArrowLeft, FiMail, FiMapPin, FiCalendar, FiClock, FiUser, FiTarget } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import headerBg from "../../../assets/devbackground.png";

const CseLeadProfileDetails = () => {
    let navigate = useNavigate();
    const location = useLocation();
    
    // Static client data with enhanced fields
    const staticClientData = {
        id: 1,
        clientName: 'John Smith',
        clientEmail: 'john.smith@business.com',
        clientAddress: '123 Business Park, Downtown, New York, NY 10001, United States',
        purpose: 'Product Demonstration',
        visitDate: '2024-01-15',
        visitTime: '10:00 AM',
        scheduleId: 'SCH001',
        company: 'Tech Solutions Inc.',
        phone: '+1 (555) 123-4567',
        status: 'Scheduled',
        visited: false,
        notes: 'Interested in enterprise solutions. Previously used competitor products.'
    };

    // Use location state or fallback to static data
    const { client: locationClient } = location.state || {};
    const client = locationClient || staticClientData;
    
    const [VerifyOtpModalOpen, setVerifyOtpModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log("Client data:", client);

    const CloseVerifyOtpModal = () => {
        setVerifyOtpModalOpen(false);
    }

    // Handle Demo Complete Action with static simulation
    const HandleDemoComplete = async () => {
        setLoading(true);
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Simulate successful OTP generation
            console.log("OTP generated for:", client.clientEmail);
            toast.success("Demo completion email has been sent successfully.");
            
            // Open verification modal
            setVerifyOtpModalOpen(true);
        } catch (error) {
            console.error("Error in demo completion:", error);
            toast.error("Failed to process demo completion. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Format date for better display
    const formatDate = (dateString) => {
        if (!dateString) return 'Not scheduled';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!client) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-600 mb-4">Client Not Found</h1>
                    <p className="text-gray-500 mb-4">The client information you're looking for is not available.</p>
                    <button 
                        onClick={() => navigate(-1)}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <CseSideBar />
            <Toaster position="top-right" />
            <div className="flex flex-col flex-1 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center ml-4 py-4 text-white px-6 font-bold mt-6 w-[95%] rounded-lg shadow-sm  bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center mr-4 p-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                        <FiArrowLeft className="text-xl" />
                    </button>
                    <div>
                        <span className="text-lg">Client Profile</span>
                        <p className="text-blue-100 text-sm font-normal mt-1">
                            {client.company} • {client.status}
                        </p>
                    </div>
                </div>

                {/* Client Details */}
                <div className="p-6 mt-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column - Client Information */}
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                    <FiUser className="mr-2 text-blue-500" />
                                    Client Information
                                </h2>
                                
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-start">
                                        <div className="text-gray-500 w-32 flex items-center">
                                            <FiUser className="mr-2" />
                                            Client Name
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-medium">{client.clientName}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-start">
                                        <div className="text-gray-500 w-32 flex items-center">
                                            <FiMail className="mr-2" />
                                            Email
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 break-words">{client.clientEmail}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-start">
                                        <div className="text-gray-500 w-32 flex items-center">
                                            <FiMapPin className="mr-2" />
                                            Address
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900">{client.clientAddress}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-start">
                                        <div className="text-gray-500 w-32 flex items-center">
                                            <FiTarget className="mr-2" />
                                            Purpose
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                                                {client.purpose}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Notes */}
                            {client.notes && (
                                <div className="bg-yellow-50 rounded-lg shadow-sm border border-yellow-200 p-4 mt-4">
                                    <h3 className="text-sm font-semibold text-yellow-800 mb-2">Client Notes</h3>
                                    <p className="text-yellow-700 text-sm">{client.notes}</p>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Visit Information */}
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                    <FiCalendar className="mr-2 text-green-500" />
                                    Visit Details
                                </h2>
                                
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-start">
                                        <div className="text-gray-500 w-32 flex items-center">
                                            <FiCalendar className="mr-2" />
                                            Visit Date
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-medium">{formatDate(client.visitDate)}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-start">
                                        <div className="text-gray-500 w-32 flex items-center">
                                            <FiClock className="mr-2" />
                                            Visit Time
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-mono bg-gray-50 px-3 py-1 rounded-md border">
                                                {client.visitTime}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-start">
                                        <div className="text-gray-500 w-32 flex items-center">
                                            <span className="mr-2">#</span>
                                            Schedule ID
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-mono bg-purple-50 px-3 py-1 rounded-md border border-purple-200">
                                                {client.scheduleId}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-start">
                                        <div className="text-gray-500 w-32 flex items-center">
                                            <span className="mr-2">🏢</span>
                                            Company
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900">{client.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-start">
                                        <div className="text-gray-500 w-32 flex items-center">
                                            <span className="mr-2">📞</span>
                                            Phone
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900">{client.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Demo Complete Button */}
                                <div className="mt-8 pt-4 border-t border-gray-200">
                                    <button
                                        onClick={HandleDemoComplete}
                                        className={`w-full text-white rounded-lg px-6 py-3 font-semibold transition-all duration-200 flex items-center justify-center
                                            ${loading || client.visited 
                                                ? "bg-gray-400 cursor-not-allowed" 
                                                : "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 shadow-md hover:shadow-lg cursor-pointer"
                                            }`}
                                        type="button"
                                        disabled={loading || client.visited}
                                    >
                                        {loading ? (
                                            <Loader />
                                        ) : client.visited ? (
                                            <span className="flex items-center">
                                                <span className="mr-2">✅</span>
                                                Demo Completed
                                            </span>
                                        ) : (
                                            <span className="flex items-center">
                                                <span className="mr-2">🎯</span>
                                                Complete Demo
                                            </span>
                                        )}
                                    </button>
                                    
                                    {!client.visited && (
                                        <p className="text-gray-500 text-sm text-center mt-2">
                                            Mark this demo as completed and send verification email
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* OTP Verification Modal */}
            {VerifyOtpModalOpen && (
                <VerifyOtpModal 
                    email={client.clientEmail} 
                    scheduleId={client.scheduleId} 
                    CloseVerifyOtpModal={CloseVerifyOtpModal} 
                />
            )}
        </div>
    );
};

export default CseLeadProfileDetails;