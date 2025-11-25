import React from 'react'
import CseSideBar from "../widgets/CseSideBar";
import CseLead from "./CseLead";
import headerBg from "../../../assets/devbackground.png";

const Index = () => {
  return (
    <div className="flex ">
      <CseSideBar />
      <div className="flex-1 p-4 overflow-x-auto h-screen">
        <div className=" text-white py-2 px-4 rounded-lg shadow bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}>
         
          
            <h1 className="text-2xl font-bold text-white">Client Leads</h1>
            <p className="text-gray-200">Manage your client visits and appointments</p>
          
        </div>
        <CseLead />
      </div>
    </div>
  )
}

export default Index