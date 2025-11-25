import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../../../../assets/ArrowLeft.svg"; 

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-[#ECECEC] flex">
      <div className="flex-1  overflow-auto space-y-6 font-jakarta">
        {/* Breadcrumb Navigation */}
        <h1 className="text-2xl font-semibold bg-[#F6F6F6] rounded-lg shadow-lg p-4 text-[#14509F]">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-[#14509F]"
            >
              <ArrowLeft className="mr-1" />
            </button>
            <span className="cursor-pointer">Projects</span>
            <span>&gt;</span>
            <span className="font-semibold">Internal Management System</span>
          </div>
        </h1>
        {/* Project Container */}
        <div className="flex justify-between items-center border rounded-lg p-4 bg-[#F6F6F6] mt-4 font-jakarta">
          {/* Project Title, Status, and Action */}
          <div className="flex-1 font-jakarta">
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-semibold">Internal Management System (IMS)</h2>
              <span className="bg-[#14509F] text-white px-2 py-1 rounded text-sm font-medium">Active</span>
            </div>
            <p className="text-black/70 text-sm mt-1 font-jakarta font-normal">Description</p>
          </div>

          {/* Project Progress */}
          <div className="flex-1 ml-2 px-4 bg-[#EDF2FE] p-2 border border-[#00000026] rounded-md font-jakarta">
            <div className="flex items-center text-base font-medium text-[#14509F]">
              <label>Project Progress</label>
            </div>
            <div className="flex items-center space-x-2 w-full">
              <div className="relative w-full">
                <div className="w-full bg-gray-300 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-2.5 rounded-full"
                    style={{
                      width: "75%",
                      background: "linear-gradient(to right, #B9C0F2, #14509F)"
                    }}
                  ></div>
                </div>
                <div
                  className="absolute top-0 -mt-1 h-4 w-4 border rounded-full"
                  style={{
                    left: "calc(75% - 8px)",
                    background: "linear-gradient(to right, #B9C0F2, #14509F)"
                  }}
                ></div>
              </div>
              <span className="text-[#14509F] text-sm font-semibold">75%</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
