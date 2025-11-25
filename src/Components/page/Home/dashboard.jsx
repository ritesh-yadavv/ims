import React from 'react';
import visitLogo from "../../../assets/All.png";
import clientLogo from "../../../assets/Group 20212.png";
import AddIcon from "../../../assets/Calendar Add 01.png";

const Dashboard = () => {
    return (
        <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-2">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">

                        <div className="bg-white p-4 rounded  flex items-center">
                            <div className="flex-shrink-0 mr-4">
                                <div className="bg-[#14509F] text-white rounded-md p-3">
                                    <img
                                        src={visitLogo}
                                        className="rounded-full h-12"
                                        alt="Landwind Logo"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Total Employees</h4>
                                <p className="text-2xl">15</p>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded  flex items-center">
                            <div className="flex-shrink-0 mr-4">
                                <div className="bg-[#27D095] text-white rounded-md p-3">
                                    <img
                                        src={clientLogo}
                                        className="rounded-full h-12"
                                        alt="Landwind Logo"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Total Active Clients</h4>
                                <p className="text-2xl">34</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded ">
                        <h4 className="text-lg font-semibold mb-4">Work Status</h4>
                        <div className="h-[300px] bg-gray-200 rounded"></div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow-md border">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold">Upcoming Schedule</h4>
                        <select className="border border-gray-300 rounded p-1">
                            <option>Today, Jun 3 2024</option>
                        </select>
                    </div>

                    <div>
                        <h5 className="text-sm font-semibold">Priority</h5>
                        <ul className="mb-8">
                            <li className="flex justify-between py-2 border-b border-gray-200">
                                <span className="w-2/6">09:30</span>
                                <div className="w-5/6">
                                    <p>UI/UX Designer</p>
                                    <p className="font-semibold">Practical Task Review</p>
                                </div>
                            </li>
                            <li className="flex justify-between py-2 border-b border-gray-200">
                                <span className="w-2/6">12:00</span>
                                <div className="w-5/6">
                                    <p>Magento Developer</p>
                                    <p className="font-semibold">Resume Review</p>
                                </div>
                            </li>
                            <li className="flex justify-between py-2 border-b border-gray-200">
                                <span className="w-2/6">01:30</span>
                                <div className="w-5/6">
                                    <p>Sales Manager</p>
                                    <p className="font-semibold">Final HR Round</p>
                                </div>
                            </li>
                        </ul>
                        <h5 className="text-sm font-semibold">Others</h5>
                        <ul className="mb-4">
                            <li className="flex justify-between py-2 border-b border-gray-200">
                                <span className="w-2/6">09:30</span>
                                <div className="w-5/6">
                                    <p>Front end Developer</p>
                                    <p className="font-semibold">Practical Task Review</p>
                                </div>
                            </li>
                            <li className="flex justify-between py-2 border-b border-gray-200">
                                <span className="w-2/6">11:00</span>
                                <div className="w-5/6">
                                    <p>React JS TL</p>
                                    <p className="font-semibold">Meeting</p>
                                </div>
                            </li>
                        </ul>

                        <div className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded">
                            <img src={AddIcon} alt="Add icon" />
                            <button>Create New Schedule</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
