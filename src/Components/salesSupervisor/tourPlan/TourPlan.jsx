import React, { useState } from "react";
import SalesSupervisorSidebar from "../widgets/SalesSupervisorSidebar";
import headerBg from "../../../assets/devbackground.png";

const TourPlan = () => {
    const [selectedSalesExe, setSelectedSalesExe] = useState("");

    // Static supervisor profile
    const staticSupervisorProfile = {
        name: "Alex Johnson",
        profilePicture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        designation: "Sales Supervisor"
    };

    // Static sales executives data
    const allSalesExecutives = [
        { id: 1, name: "Kamini Dugal" },
        { id: 2, name: "Sweta Singh" },
        { id: 3, name: "Avinash Mishra" },
        { id: 4, name: "Raju Rastogi" },
        { id: 5, name: "Priya Sharma" },
        { id: 6, name: "Rahul Verma" }
    ];

    // Static tour plan data
    const tourPlanData = {
        1: [
            { id: 1, date: "2024-01-15", location: "Kankarbagh" },
            { id: 2, date: "2024-01-16", location: "Boring Road" },
            { id: 3, date: "2024-01-17", location: "Rajendra Nagar" },
            { id: 4, date: "2024-01-18", location: "Danapur" },
            { id: 5, date: "2024-01-19", location: "Kankarbagh" }
        ],
        2: [
            { id: 1, date: "2024-01-15", location: "Rajendra Nagar" },
            { id: 2, date: "2024-01-16", location: "Boring Road" },
            { id: 3, date: "2024-01-17", location: "Danapur" },
            { id: 4, date: "2024-01-18", location: "Kankarbagh" },
            { id: 5, date: "2024-01-19", location: "Rajendra Nagar" }
        ],
        3: [
            { id: 1, date: "2024-01-15", location: "Danapur" },
            { id: 2, date: "2024-01-16", location: "Boring Road" },
            { id: 3, date: "2024-01-17", location: "Kankarbagh" },
            { id: 4, date: "2024-01-18", location: "Rajendra Nagar" },
            { id: 5, date: "2024-01-19", location: "Danapur" }
        ],
        4: [
            { id: 1, date: "2024-01-15", location: "Boring Road" },
            { id: 2, date: "2024-01-16", location: "Kankarbagh" },
            { id: 3, date: "2024-01-17", location: "Danapur" },
            { id: 4, date: "2024-01-18", location: "Rajendra Nagar" },
            { id: 5, date: "2024-01-19", location: "Boring Road" }
        ],
        5: [
            { id: 1, date: "2024-01-15", location: "Kankarbagh" },
            { id: 2, date: "2024-01-16", location: "Rajendra Nagar" },
            { id: 3, date: "2024-01-17", location: "Boring Road" },
            { id: 4, date: "2024-01-18", location: "Danapur" },
            { id: 5, date: "2024-01-19", location: "Kankarbagh" }
        ],
        6: [
            { id: 1, date: "2024-01-15", location: "Rajendra Nagar" },
            { id: 2, date: "2024-01-16", location: "Danapur" },
            { id: 3, date: "2024-01-17", location: "Boring Road" },
            { id: 4, date: "2024-01-18", location: "Kankarbagh" },
            { id: 5, date: "2024-01-19", location: "Rajendra Nagar" }
        ]
    };

    const handleSalesExeChange = (event) => {
        setSelectedSalesExe(event.target.value);
    };

    const currentTourPlan = selectedSalesExe ? tourPlanData[selectedSalesExe] : [];

    return (
        <div className="flex h-screen bg-gray-50">
            <SalesSupervisorSidebar />
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-6 shadow-lg p-4 text-white  bg-cover bg-center bg-no-repeat relative  rounded-lg"
          style={{ backgroundImage: `url(${headerBg})` }}>
                        <h2 className="text-2xl font-bold text-white">Tour Plan</h2>
                        <p className="text-white">View and manage team tour plans</p>
                    </div>

                    {/* Profile and Selection Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200">
                                    <img
                                        src={staticSupervisorProfile.profilePicture}
                                        alt="profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{`Hi ${staticSupervisorProfile.name}`}</h3>
                                    <p className="text-sm text-gray-600">{staticSupervisorProfile.designation}</p>
                                </div>
                            </div>
                            <div className="flex-1 md:max-w-xs">
                                <select
                                    value={selectedSalesExe}
                                    onChange={handleSalesExeChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                >
                                    <option value="" disabled>
                                        Select Sales Executive
                                    </option>
                                    {allSalesExecutives.map((exe) => (
                                        <option key={exe.id} value={exe.id}>
                                            {exe.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Tour Plan Content */}
                    {!selectedSalesExe ? (
                        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Select a Sales Executive</h3>
                            <p className="text-gray-500">Choose a team member from the dropdown to view their tour plan</p>
                        </div>
                    ) : currentTourPlan.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">No Tour Plan Available</h3>
                            <p className="text-gray-500">No tour plan found for the selected Sales Executive</p>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Tour Plan for {allSalesExecutives.find(exe => exe.id == selectedSalesExe)?.name}
                                </h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                                                Date
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                                                Location
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentTourPlan.map((plan) => (
                                            <tr key={plan.id} className="hover:bg-gray-50 transition-colors duration-150">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {new Date(plan.date).toLocaleDateString("en-IN", {
                                                            weekday: 'short',
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric",
                                                        })}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                                        <span className="text-sm text-gray-700">{plan.location}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                                        Scheduled
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TourPlan;