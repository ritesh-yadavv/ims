import React from "react";
import visitLogo from "../../../assets/All.png";
import clientLogo from "../../../assets/Group 20212.png";

const TotalClient = () => {
  return (
    <>
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
    </>
  );
};

export default TotalClient;
