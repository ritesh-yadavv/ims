import React from 'react';
import CseSideBar from '../widgets/CseSideBar';
import TableLeaderBoard from "./tableLeaderBoard";
import TotalClient from "./totalClient";
import UpcomingAgenda from "./upcomingAgenda";
import headerBg from "../../../assets/devbackground.png";

const CseDashboard = () => {
    return (
        <div className="flex">
            <CseSideBar />

            <div className="flex-1 p-4 overflow-hidden">
                <h2 className="text-xl font-bold rounded-lg shadow-lg p-4 text-white mb-4  bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}>
                    Client Statistics
                </h2>
                <div className="p-2 md:p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">

                        {/* LEFT SECTION */}
                        <div className="md:col-span-2">

                            {/* CARDS */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <TotalClient />
                            </div>

                            {/* LEADERBOARD */}
                            <TableLeaderBoard />
                        </div>

                        {/* RIGHT SECTION */}
                        <UpcomingAgenda />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CseDashboard;