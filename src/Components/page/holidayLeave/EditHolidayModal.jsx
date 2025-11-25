import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { X, Calendar, Edit3, Save } from 'lucide-react';

const EditHolidayModal = ({ holiday, onClose, refreshList }) => {
    const [holidayName, setHolidayName] = useState(holiday?.holidayName || "");
    const [holidayDate, setHolidayDate] = useState(holiday?.date || "");
    const [loading, setLoading] = useState(false);

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

        setLoading(true);

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const dayOfWeek = getDayOfWeek(holidayDate);
            const updatedData = {
                id: holiday.id,
                holidayName: holidayName.trim(),
                day: dayOfWeek,
                date: holidayDate,
            };
            
            // Simulate successful update
            console.log("Updating holiday:", updatedData);
            
            toast.success("Holiday updated successfully!");
            
            // Refresh the holiday list in parent component
            if (refreshList) {
                refreshList();
            }
            
            onClose();
        } catch (error) {
            toast.error("Failed to update holiday.");
            console.error('Error updating holiday:', error);
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
        
        // Optional: Show preview of the selected date
        if (selectedDate) {
            const dayOfWeek = getDayOfWeek(selectedDate);
            console.log(`Selected: ${dayOfWeek}, ${formatDateForDisplay(selectedDate)}`);
        }
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
                        <div className="p-2 bg-blue-100 rounded-full">
                            <Edit3 className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Edit Holiday</h2>
                            <p className="text-sm text-gray-500">Update holiday details</p>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="Enter holiday name"
                            required
                        />
                    </div>

                    {/* Date Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Date *
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                value={holidayDate}
                                onChange={handleDateChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
                                required
                            />
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        
                        {/* Date Preview */}
                        {holidayDate && (
                            <div className="mt-2 p-2 bg-gray-50 rounded-md border border-gray-200">
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Preview:</span> {formatDateForDisplay(holidayDate)}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Current Values Display (Read-only) */}
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Current Values</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <span className="text-gray-500">Name:</span>
                                <p className="font-medium">{holiday?.holidayName}</p>
                            </div>
                            <div>
                                <span className="text-gray-500">Date:</span>
                                <p className="font-medium">{holiday?.date ? formatDateForDisplay(holiday.date) : 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                        <button 
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            disabled={loading || !holidayName.trim() || !holidayDate}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    <span>Updating...</span>
                                </>
                            ) : (
                                <>
                                    <Save className="h-4 w-4" />
                                    <span>Update Holiday</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditHolidayModal;