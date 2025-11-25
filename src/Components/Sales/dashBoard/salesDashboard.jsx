import React from "react";
import SalesSideBar from "../widgets/SalesSideBar";
import TableLeaderBoard from "./tableLeaderBoard";
import TotalClient from "./totalClient";
import UpcomingAgenda from "./upcomingAgenda";

const SalesDashboard = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">

      {/* FIXED FULL-HEIGHT SIDEBAR */}
      <div className="w-64 h-screen fixed left-0 top-0">
        <SalesSideBar />
      </div>

      {/* RIGHT MAIN CONTENT */}
      <div className="flex-1 ml-64 h-screen overflow-y-auto p-4">
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

            {/* LEFT SECTION */}
            <div className="md:col-span-2">

              {/* TOP CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <TotalClient />
              </div>

              {/* LEADERBOARD */}
              <TableLeaderBoard />

            </div>

            {/* RIGHT SECTION (Agenda) */}
            <UpcomingAgenda />

          </div>
        </div>
      </div>

    </div>
  );
};

export default SalesDashboard;
