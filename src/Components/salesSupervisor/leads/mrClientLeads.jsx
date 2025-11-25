import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import SalesSupervisorSidebar from '../widgets/SalesSupervisorSidebar';

const MrClientLeads = () => {

    // ⭐ Static Data (No Backend)
    const [clientLeadsData] = useState([
        {
            name: "Dr. Rahul Verma",
            address: "Shivaji Nagar, Near City Hospital",
            city: "Varanasi",
            clinicTimingsStart: "09:00 AM",
            clinicTimingsEnd: "02:00 PM"
        },
        {
            name: "Dr. Neha Sharma",
            address: "Sector 12, Jaipur Road",
            city: "Jaipur",
            clinicTimingsStart: "10:00 AM",
            clinicTimingsEnd: "01:00 PM"
        },
        {
            name: "Dr. Kunal Singh",
            address: "Gomti Nagar, Lucknow",
            city: "Lucknow",
            clinicTimingsStart: "11:00 AM",
            clinicTimingsEnd: "03:00 PM"
        }
    ]);

    return (
        <div className="flex h-screen bg-[#F6F6F6]">
            {/* Sidebar */}
            <SalesSupervisorSidebar />

            {/* Main Area */}
            <div className="flex flex-col flex-1 h-screen overflow-hidden">

                {/* Top Header */}
                <div className="bg-white p-4 m-4 shadow-md flex items-center sticky top-0 z-10">
                    <button className="flex items-center text-[#14509F] font-bold">
                        <FiArrowLeft className="mr-2" />
                        <h2 className="text-lg">Client Leads</h2>
                    </button>
                </div>

                {/* Table Content */}
                <div className="p-4 flex-1 overflow-y-auto">
                    {clientLeadsData.length === 0 ? (
                        <div className="text-center text-gray-500 mt-10">No Client Found</div>
                    ) : (
                        <div className="border rounded-lg overflow-hidden shadow-md bg-white">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-[#F6F6F6] text-gray-700">
                                        <th className="py-3 px-6 text-left w-1/5">Doctor Name</th>
                                        <th className="py-3 px-6 text-left w-2/5">Address</th>
                                        <th className="py-3 px-6 text-left w-1/5">City</th>
                                        <th className="py-3 px-6 text-left w-1/5">Time</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {clientLeadsData.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                                        >
                                            <td className="py-3 px-6 text-gray-700">{item.name}</td>
                                            <td className="py-3 px-6 text-gray-700 truncate">{item.address}</td>
                                            <td className="py-3 px-6 text-gray-700">{item.city}</td>
                                            <td className="py-3 px-6 text-gray-700">
                                                {item.clinicTimingsStart} - {item.clinicTimingsEnd}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MrClientLeads;
