import React, { useState } from "react";

const DevApplyForWFHModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fromDate: "",
        toDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("WFH Request Submitted:", formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-jakarta z-50">
            <div className="bg-[#F6F6F6] rounded-lg shadow-lg p-6 w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-medium">Apply For WFH</h2>
                    <button
                        onClick={onClose}
                        className="text-lg text-gray-500 hover:text-gray-800"
                    >
                        ✖
                    </button>
                </div>
                <hr class="h-[2px] my-2  bg-gray-500 border-0 " />
                <form onSubmit={handleSubmit}>
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

export default DevApplyForWFHModal;
