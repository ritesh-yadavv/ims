import React, { useState } from 'react';
import toast from "react-hot-toast";
import { FiX, FiFlag, FiMessageSquare, FiCalendar, FiClock } from 'react-icons/fi';

const NotInterestedModal = ({ closeNotInterestedModal, client }) => {
    const [reason, setReason] = useState('');
    const [selectedReason, setSelectedReason] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Static sales profile data
    const staticSalesProfile = {
        id: 101,
        name: "John Salesman",
        email: "john.sales@company.com",
        role: "Senior Sales Executive"
    };

    // Static client data if not provided
    const staticClient = client || {
        id: 1001,
        name: "Dr. Sharma Clinic",
        locality: "Downtown",
        address: "123 Medical Street, Healthcare District"
    };

    // Predefined reasons for quick selection
    const predefinedReasons = [
        "Budget constraints",
        "Not the right time",
        "Already using similar service",
        "Not satisfied with demo",
        "Going with competitor",
        "No longer interested in service",
        "Clinic requirements changed",
        "Other (please specify below)"
    ];

    const formatTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const formatDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleReasonSelect = (predefinedReason) => {
        setSelectedReason(predefinedReason);
        if (predefinedReason !== "Other (please specify below)") {
            setReason(predefinedReason);
        } else {
            setReason('');
        }
    };

    const handleSubmit = async () => {
        if (!reason.trim()) {
            toast.error("Please provide a reason before submitting.");
            return;
        }

        if (reason.trim().length < 10) {
            toast.error("Please provide a more detailed reason (minimum 10 characters).");
            return;
        }

        const submissionData = {
            clientId: staticClient?.id,
            clientName: staticClient?.name,
            employeeId: staticSalesProfile?.id,
            employeeName: staticSalesProfile?.name,
            notes: reason,
            date: formatDate(),
            time: formatTime(),
            type: "NOT_INTERESTED",
            status: "CLOSED"
        };

        console.log("Submitting not interested reason:", submissionData);

        try {
            setIsSubmitting(true);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Mock success response
            const mockResponse = {
                statusCode: 201,
                message: "Reason submitted successfully! Lead marked as not interested."
            };

            toast.success(mockResponse.message);
            console.log("Submission successful:", mockResponse);
            
            setTimeout(() => {
                closeNotInterestedModal();
            }, 1000);
            
        } catch (error) {
            toast.error("Failed to submit reason. Please try again.");
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-t-xl p-6 text-white">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-3">
                            <FiFlag className="text-xl" />
                            <h2 className="text-xl font-bold">Mark as Not Interested</h2>
                        </div>
                        <button
                            onClick={closeNotInterestedModal}
                            className="text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
                        >
                            <FiX size={24} />
                        </button>
                    </div>
                    <p className="text-red-100 text-sm">
                        Please specify why this lead is not interested
                    </p>
                </div>

                {/* Client Info */}
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                            <FiMessageSquare className="text-red-600 text-sm" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">{staticClient.name}</h3>
                            <p className="text-sm text-gray-600">{staticClient.address}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Predefined Reasons */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Select a reason (optional)
                        </label>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                            {predefinedReasons.map((predefinedReason, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => handleReasonSelect(predefinedReason)}
                                    className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                                        selectedReason === predefinedReason
                                            ? "bg-red-50 border-red-300 text-red-700"
                                            : "bg-white border-gray-300 text-gray-700 hover:border-red-200 hover:bg-red-25"
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">{predefinedReason}</span>
                                        {selectedReason === predefinedReason && (
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Reason */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Detailed Reason *
                        </label>
                        <textarea
                            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 resize-none"
                            placeholder="Please provide detailed reason for marking as not interested..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        ></textarea>
                        <div className="flex justify-between items-center mt-2">
                            <span className={`text-xs ${
                                reason.length < 10 ? 'text-red-500' : 'text-gray-500'
                            }`}>
                                Minimum 10 characters required
                            </span>
                            <span className={`text-xs ${
                                reason.length > 500 ? 'text-red-500' : 'text-gray-500'
                            }`}>
                                {reason.length}/500
                            </span>
                        </div>
                    </div>

                    {/* Submission Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center space-x-2 text-sm text-blue-700">
                            <FiCalendar className="text-blue-500" />
                            <span>Date: {formatDate()}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-blue-700 mt-1">
                            <FiClock className="text-blue-500" />
                            <span>Time: {formatTime()}</span>
                        </div>
                        <p className="text-xs text-blue-600 mt-2">
                            This action will mark the lead as closed and update the sales pipeline.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                        <button
                            onClick={closeNotInterestedModal}
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={!reason.trim() || reason.length < 10 || isSubmitting}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                    Submitting...
                                </>
                            ) : (
                                "Submit Reason"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotInterestedModal;