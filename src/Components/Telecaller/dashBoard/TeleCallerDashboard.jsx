import React, { useEffect } from "react";
import TelecallerSideBar from "../widgets/TelecallerSideBar";
import TableLeaderBoard from "./tableLeaderBoard";
import TotalClient from "./totalClient";
import UpcomingAgenda from "./upcomingAgenda";
import { TeleCallerMonthlyLeaderBoard } from "../../../api/telecaller/telecallerClient";
import headerBg from "../../../assets/devbackground.png";

const TeleCallerDashboard = () => {
  const fetchMonthlyLeaderBoard = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await TeleCallerMonthlyLeaderBoard(token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMonthlyLeaderBoard();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Left Sidebar */}
      <div className="w-64 fixed left-0 top-0 h-full bg-white shadow-lg z-50">
        <TelecallerSideBar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">

        {/* Sticky Header */}
        <header className="h-14   flex items-center px-4  top-0 z-40 shadow bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${headerBg})` }}>
          <h1 className="text-xl font-semibold text-white">Telecaller Dashboard</h1>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">

          {/* Small cards section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <TotalClient />
          </div>

          {/* Leaderboard + Agenda Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Leaderboard 2/3 width */}
            <div className="lg:col-span-2">
              <TableLeaderBoard />
            </div>

            {/* Agenda 1/3 width */}
            <div className="lg:col-span-1">
              <UpcomingAgenda />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TeleCallerDashboard;
