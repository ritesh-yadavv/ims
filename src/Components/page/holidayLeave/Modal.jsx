import React, { useState } from "react";
import { X, Calendar, Plus, AlertCircle } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ isOpen, onClose, refreshList }) => {
    const [holidayName, setHolidayName] = useState("");
    const [holidayDate, setHolidayDate] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const getDayOfWeek = (dateString) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date(dateString);
        return days[date.getDay()];
    };

    const formatDateForDisplay = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!holidayName.trim()) {
            toast.error("Please enter a holiday name");
            return;
        }
        
        if (!holidayDate) {
            toast.error("Please select a date");
            return;
        }

        // Check if date is in the past
        const selectedDate = new Date(holidayDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            toast.error("Cannot add holidays for past dates");
            return;
        }

        setLoading(true);

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const dayOfWeek = getDayOfWeek(holidayDate);
            const newHoliday = {
                id: Date.now().toString(), // Generate unique ID
                date: holidayDate,
                day: dayOfWeek,
                holidayName: holidayName.trim(),
                createdAt: new Date().toISOString()
            };

            // Simulate successful addition
            console.log("Adding new holiday:", newHoliday);
            
            toast.success("Holiday added successfully!");
            
            // Refresh the holiday list in parent component
            if (refreshList) {
                refreshList();
            }

            // Clear input fields after successful submission
            setHolidayName("");
            setHolidayDate("");
            onClose(); // Close modal after submitting
            
        } catch (error) {
            console.error("Error adding holiday:", error);
            toast.error("Failed to add holiday. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setHolidayDate(selectedDate);
    };

    const handleClose = () => {
        setHolidayName("");
        setHolidayDate("");
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <Toaster />
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md transform transition-all">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-full">
                            <Plus className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Add New Holiday</h2>
                            <p className="text-sm text-gray-500">Create a new company holiday</p>
                        </div>
                    </div>
                    <button 
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                        disabled={loading}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Holiday Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Holiday Name *
                        </label>
                        <input
                            type="text"
                            value={holidayName}
                            onChange={(e) => setHolidayName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                            placeholder="Enter holiday name (e.g., New Year's Day)"
                            disabled={loading}
                        />
                    </div>

                    {/* Date Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Holiday Date *
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                value={holidayDate}
                                onChange={handleDateChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors pr-10"
                                min={new Date().toISOString().split('T')[0]} // Prevent past dates
                                disabled={loading}
                            />
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        
                        {/* Date Preview */}
                        {holidayDate && (
                            <div className="mt-2 p-2 bg-blue-50 rounded-md border border-blue-200">
                                <p className="text-sm text-blue-700 flex items-center">
                                    <Calendar className="h-3 w-3 mr-2" />
                                    <span className="font-medium">Selected:</span> {formatDateForDisplay(holidayDate)}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Information Box */}
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                        <div className="flex items-start space-x-2">
                            <AlertCircle className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-gray-600">
                                <p className="font-medium">Important Notes:</p>
                                <ul className="list-disc list-inside mt-1 space-y-1">
                                    <li>Holidays cannot be set for past dates</li>
                                    <li>All employees will be notified</li>
                                    <li>This action cannot be undone</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                        <button 
                            type="button"
                            onClick={handleClose}
                            disabled={loading}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            disabled={loading || !holidayName.trim() || !holidayDate}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    <span>Adding...</span>
                                </>
                            ) : (
                                <>
                                    <Plus className="h-4 w-4" />
                                    <span>Add Holiday</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;