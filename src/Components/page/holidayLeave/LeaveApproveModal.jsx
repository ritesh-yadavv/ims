import React, { useState } from 'react';
import closeButton from "../../../assets/closeButton.png"

const LeaveApproveModal = ({ setIsOpen, data, updateLeaveStatus }) => {

    const closeModal = () => {
        setIsOpen(false);
    };

    return (

        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center font-jakarta">

            <div className="bg-[#EFEFEF] rounded-lg shadow-lg p-8 w-[350px] h-[auto] max-h-[80%] relative">
                {/* X button inside modal, fixed to top right */}
                <div
                    onClick={closeModal}
                    className="absolute top-1.5  right-1.5  cursor-pointer"
                >
                    <img className="text-lg font-semibold" src={closeButton} alt="" />

                </div>


                <div className="flex items-center justify-between mb-4 p-2 border border-gray-300 rounded-md shadow-sm bg-white">
                    <div className="text-md font-semibold text-gray-500">
                        Left Leaves
                    </div>
                    <span className="bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-md">
                        {data.remainingLeave}
                    </span>
                </div>



                <div className="mb-4">
                    <h3 className="text-sm font-medium text-orange-500">{`REQUEST ${data?.leaveStatus}`}</h3>
                    <p className="text-gray-600 mt-1">Reason</p>
                    <p className="text-gray-800 font-medium">{data?.reason}</p>
                </div>

                <div className="flex justify-between gap-4 mt-6">
                    <button
                        onClick={() => updateLeaveStatus(data?.id, "REJECTED",data)}
                        type="button"
                        disabled={data.leaveStatus === "APPROVED" || data.leaveStatus === "REJECTED"}
                        className={`w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none
            ${data.leaveStatus === "APPROVED" || data.leaveStatus === "REJECTED" ? "cursor-not-allowed opacity-50" : ""}
        `}
                    >
                        Deny
                    </button>
                    <button
                        onClick={() => updateLeaveStatus(data?.id, "APPROVED",data)}
                        type="button"
                        disabled={data.leaveStatus === "APPROVED" || data.leaveStatus === "REJECTED"}
                        className={`w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none
            ${data.leaveStatus === "APPROVED" || data.leaveStatus === "REJECTED" ? "cursor-not-allowed opacity-50" : ""}
        `}
                    >
                        Approve
                    </button>
                </div>


            </div>
        </div>
    );
};

export default LeaveApproveModal;
