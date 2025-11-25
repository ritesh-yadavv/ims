import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Trash2, X, AlertTriangle } from 'lucide-react';

const DeleteHolidayModal = ({ holiday, onClose, refreshList }) => {
  const handleDelete = async () => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Simulate successful deletion
      console.log(`Deleting holiday: ${holiday.holidayName} (ID: ${holiday.id})`);
      
      toast.success("Holiday deleted successfully!");
      
      // Refresh the holiday list in parent component
      if (refreshList) {
        refreshList();
      }
      
      onClose();
    } catch (error) {
      toast.error("Failed to delete holiday.");
      console.error('Error deleting holiday:', error);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-full">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Delete Holiday</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          <p className="text-gray-600 mb-3">
            Are you sure you want to delete this holiday? This action cannot be undone.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-red-800">
              <Trash2 className="h-4 w-4" />
              <span className="font-semibold">{holiday.holidayName}</span>
            </div>
            {holiday.date && (
              <p className="text-red-700 text-sm mt-1 ml-6">
                Date: {new Date(holiday.date).toLocaleDateString()}
              </p>
            )}
            {holiday.description && (
              <p className="text-red-700 text-sm mt-1 ml-6">
                {holiday.description}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button 
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center space-x-2"
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete Holiday</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteHolidayModal;