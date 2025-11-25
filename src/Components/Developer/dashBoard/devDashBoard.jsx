import React from 'react';
import DevSidebar from '../widgets/deveSidebar';
import TotalProjects from './totalProject';
import UpcomingAgenda from './upcomingAgenda';

const DevDashBoard = () => {
    return (
        <div className="flex min-h-screen bg-[#ECECEC] font-jakarta">
            <DevSidebar />
            <main className="flex-1 p-6 overflow-auto space-y-6">
                <h2 className="text-2xl font-semibold bg-[#F6F6F6]  rounded-lg shadow-lg p-4 text-[#14509F] mb-4">
                    Dashboard
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <TotalProjects />
                    </div>
                    <UpcomingAgenda />
                </div>
            </main>
        </div>
    );
};

export default DevDashBoard;
