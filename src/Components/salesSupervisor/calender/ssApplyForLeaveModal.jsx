import React, { useState } from "react";

const SsApplyForLeaveModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    leaveType: "Full Day",
    startTime: "",
    reason: "",
  });

  const handleLeaveTypeChange = (leaveType) => {
    setFormData((prev) => ({
      ...prev,
      leaveType,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Leave Request Submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-jakarta z-50">
      <div className="bg-[#F6F6F6] rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Apply For Leave</h2>
          <button
            onClick={onClose}
            className="text-lg text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
        </div>
        <hr className="h-[2px] my-2 bg-gray-500 border-0" />
        <form onSubmit={handleSubmit}>
          {/* Leave Types */}
          <div className="mb-4">
            <h5 className="block text-base text-[#14509F] font-medium mb-1">Leave Type</h5>
            <div className="flex gap-2">
              <button
                type="button"
                className={`flex items-center justify-center w-1/2 p-2 rounded ${
                  formData.leaveType === "Half Day" ? "bg-[#2B2E40] text-[#FFFFFF]" : "bg-white border border-[#21D0B3]"
                }`}
                onClick={() => handleLeaveTypeChange("Half Day")}
              >
                Half Day
              </button>
              <button
                type="button"
                className={`flex items-center justify-center w-1/2 p-2 rounded ${
                  formData.leaveType === "Full Day" ? "bg-[#2B2E40] text-[#FFFFFF]" : "bg-white border border-[#21D0B3]"
                }`}
                onClick={() => handleLeaveTypeChange("Full Day")}
              >
                Full Day
              </button>
            </div>
          </div>

          {/* Select Date & Time for Half Day */}
          {formData.leaveType === "Half Day" ? (
            <div className="mb-4">
              <h5 className="block text-base text-[#14509F] font-medium mb-1">Select Date & Time</h5>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <input
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#21D0B3] rounded"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <select
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full p-[10px] border border-[#21D0B3] rounded"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="10:00 AM">10:00 AM: 1:30 PM</option>

                    <option value="2:30 PM">2:30 PM : 6:00 PM</option>
                    
                  </select>
                </div>
              </div>
            </div>
          ) : (
            // Full Day Date Selection
            <div className="mb-4">
              <h5 className="block text-base text-[#14509F] font-medium mb-1">Select Date</h5>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="block">From</label>
                  <input
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#21D0B3] rounded"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block">To</label>
                  <input
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#21D0B3] rounded"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Reason */}
          <div className="mb-4">
            <label className="block text-base text-[#14509F] font-medium mb-1">Reason</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="1"
              className="w-full p-2 border border-[#21D0B3] rounded"
              placeholder="Enter your reason here"
              required
            ></textarea>
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SsApplyForLeaveModal;
