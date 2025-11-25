import React from "react";
import visitLogo from "../../../assets/All.png";
import clientLogo from "../../../assets/Group 20212.png";

const TotalClient = ({ MonthlyLeaderBoard }) => {
  const todayVisit = MonthlyLeaderBoard?.reduce((sum, ele) => sum + (ele?.todayVisits || 0), 0) || 0;
  const totalActiveClient = MonthlyLeaderBoard?.reduce((sum, ele) => sum + (ele?.activeClients || 0), 0) || 0;

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-lg flex items-center font-jakarta hover:shadow-xl transition-shadow duration-300">
        <div className="flex-shrink-0 mr-4">
          <div className="bg-[#14509F] items-center text-white rounded-xl p-4">
            <img
              src={visitLogo}
              className="w-8 h-8"
              alt="Visits Logo"
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Today's Total Visits</h4>
          <p className="text-2xl font-bold text-[#14509F]">{todayVisit}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg flex items-center font-jakarta hover:shadow-xl transition-shadow duration-300">
        <div className="flex-shrink-0 mr-4">
          <div className="bg-[#27D095] text-white rounded-xl p-3">
            <img
              src={clientLogo}
              className="w-12 h-12"
              alt="Clients Logo"
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Total Active Clients</h4>
          <p className="text-2xl font-bold text-[#27D095]">{totalActiveClient}</p>
        </div>
      </div>
    </>
  );
};

export default TotalClient;