import React from "react";
import visitLogo from "../../../assets/All.png";
import clientLogo from "../../../assets/Group 20212.png";

const TotalClient = () => {
  return (
    <>
      <div className="bg-white p-4 rounded  flex items-center font-jakarta ">
        <div className="flex-shrink-0 mr-4">
          <div className="bg-[#14509F]  items-center text-white rounded-xl p-5">
            <img
              src={visitLogo}
              className="w-8 h-8 "
              alt="Landwind Logo"
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold">Today's Visit</h4>
          <p className="text-2xl text-[#6F757E]">5</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded  flex items-center font-jakarta">
        <div className="flex-shrink-0 mr-4">
          <div className="bg-[#27D095] text-white rounded-xl p-3">
            <img
              src={clientLogo}
              className="w-12 h-12"
              alt="Landwind Logo"
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold">Total Active Clients</h4>
          <p className="text-2xl text-[#6F757E]">34</p>
        </div>
      </div>
    </>
  );
};

export default TotalClient;
