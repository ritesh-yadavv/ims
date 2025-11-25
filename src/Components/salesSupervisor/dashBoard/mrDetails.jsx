import React from "react";
import SalesSupervisorSidebar from "../widgets/SalesSupervisorSidebar";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const MrDetails = () => {
    let navigate = useNavigate();
    // Sample data
    const data = [
        {
            name: "Kamini Dugal",
            location: "Boring Road",
            schedule: [
                { time: "11:00 - 12:00", title: "Meeting with Dr Gupta", color: "bg-orange-200" },
                { time: "11:00 - 12:00", title: "Meeting with Client", color: "bg-blue-200" },
                { time: "11:00 - 12:00", title: "Meeting with Client", color: "bg-pink-200" },
                { time: "11:00 - 12:00", title: "Meeting with Client", color: "bg-green-200" },
            ],
        },
        {
            name: "Lilavati Sharma",
            location: "Boring Road",
            schedule: [
                { time: "11:00 - 12:00", title: "Meeting with Dr Gupta", color: "bg-orange-200" },
                { time: "11:00 - 12:00", title: "Meeting with Client", color: "bg-blue-200" },
                { time: "11:00 - 12:00", title: "Meeting with Client", color: "bg-pink-200" },
                { time: "11:00 - 12:00", title: "Meeting with Client", color: "bg-green-200" },
            ],
        },
    ];

    return (

        <div className="flex">
            <SalesSupervisorSidebar />
            <div className="flex-1 bg-[#ECECEC]  p-4 overflow-auto h-screen ">
                         <h1 className="flex items-center max-md:text-sm max-md:text-center text-xl font-extrabold text-[#14509F] font-jakarta bg-[#F6F6F6] p-2 rounded-lg border border-gray-300 shadow-lg">
                        <button
                          onClick={() => navigate(-1)}
                          className="flex items-center mr-2"
                        >
                          <FiArrowLeft className="mr-2" />
                        </button>
                        <span>All MRs</span>
                      </h1>
                <h1 className="text-lg font-extrabold text-[#000000] font-jakarta mb-4 py-3 px-3  ">
                    20 Nov, 2024
                </h1>
                {data.map((person, personIndex) => (
                    <div
                        key={personIndex}
                        className="border border-gray-300 rounded-lg mb-6 p-4"
                    >
                        <div className="mb-2">
                            <h2 className="font-semibold text-lg">{person.name}</h2>
                            <p className="text-sm text-gray-500">{person.location}</p>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {person.schedule.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-2 rounded-lg text-center text-sm ${item.color}`}
                                >
                                    <p className="font-semibold">{item.time}</p>
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MrDetails;
