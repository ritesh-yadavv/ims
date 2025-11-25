import React from "react";
import CseSideBar from "../widgets/CseSideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const ActiveProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Static fallback data (in case user opens page directly)
  const defaultClient = {
    name: "Dr. Shukla",
    specialization: "General Physician",
    compounderName: "Rohit Kumar",
    email: "doctor@example.com",
    address: "MG Road, Patna",
    city: "Patna",
    state: "Bihar",
    compounderNumber: "9876543210",
    doctorNumber: "9123456789",
    clinicTimingsStart: "13:00",
    clinicTimingsEnd: "19:00",
    clinicDays: ["Mon", "Tue", "Wed", "Fri"],
  };

  // If coming from previous page, use passed data
  const client = location?.state?.client || defaultClient;

  return (
    <div className="flex h-screen bg-white">
      <CseSideBar />

      <div className="flex flex-col flex-1 overflow-y-auto">

        {/* Header Section */}
        <div className="p-4">
          <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 px-4 rounded-lg">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center mr-2"
            >
              <FiArrowLeft className="mr-2" />
              <span>Active Clients {">"} Client Profile</span>
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="lg:text-[14px] md:text-[10px] sm:text-[10px]">
          <div className="flex flex-wrap p-4">

            {/* LEFT SIDE */}
            <div className="w-[50%] p-4">
              <div className="flex flex-wrap">

                <div className="text-gray-400 w-2/5">Name</div>
                <div className="w-3/5 mb-2">{client.name}</div>

                <div className="text-gray-400 w-2/5">Specialization</div>
                <div className="w-3/5 mb-2">{client.specialization}</div>

                <div className="text-gray-400 w-2/5">Compounder Name</div>
                <div className="w-3/5 mb-2">{client.compounderName}</div>

                <div className="text-gray-400 w-2/5">Email</div>
                <div className="w-3/5 mb-2">{client.email}</div>

                <div className="text-gray-400 w-2/5">Address</div>
                <div className="w-3/5 mb-2">{client.address}</div>

                <div className="text-gray-400 w-2/5">City</div>
                <div className="w-3/5 mb-2">{client.city}</div>

                <div className="text-gray-400 w-2/5">State</div>
                <div className="w-3/5 mb-2">{client.state}</div>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-[49%] p-4">
              <div className="flex flex-wrap">

                <div className="text-gray-400 w-2/5">Compounder Number</div>
                <div className="w-3/5 mb-2">{client.compounderNumber}</div>

                <div className="text-gray-400 w-2/5">Doctor Number</div>
                <div className="w-3/5 mb-2">{client.doctorNumber}</div>

                <div className="text-gray-400 w-2/5">Clinic Timing</div>
                <div className="w-3/5 mb-2">
                  {client.clinicTimingsStart} - {client.clinicTimingsEnd}
                </div>

              </div>

              <div className="text-gray-400 mt-2">Clinic Days</div>
              <div className="flex p-2 rounded-md">
                {client.clinicDays.map((day, index) => (
                  <div
                    key={index}
                    className="ml-1 flex items-center justify-center w-7 h-7 border rounded-md bg-blue-100 text-blue-700"
                  >
                    {day.charAt(0)}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        <hr className="h-px mx-5 my-4 bg-blue-400 border-0" />

        {/* Assign Support Button */}
        <div className="p-4 m-4">
          <button className="bg-blue-800 p-3 rounded-lg text-white">
            Assign Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default ActiveProfile;
