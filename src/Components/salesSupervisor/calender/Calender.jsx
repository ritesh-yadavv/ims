import React, { useState } from "react";
import SalesSuperVisorSidebar from "../widgets/SalesSupervisorSidebar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BackgroundImages from "../../../assets/BackgroundImageCalender.png";
import SsApplyForLeaveModal from "./ssApplyForLeaveModal";
import SsApplyForWFHModal from "./ssApplyForWFHModal";
import headerBg from "../../../assets/devbackground.png";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Christmas Day",
    start: new Date(2024, 11, 25),
    end: new Date(2024, 11, 25),
    allDay: true,
  },
];

const CalendarPage = () => {
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isWFHModalOpen, setIsWFHModalOpen] = useState(false);

  const openLeaveModal = () => setIsLeaveModalOpen(true);
  const closeLeaveModal = () => setIsLeaveModalOpen(false);

  const openWFHModal = () => setIsWFHModalOpen(true);
  const closeWFHModal = () => setIsWFHModalOpen(false);


  return (
    <div className="flex h-screen bg-[#F6F6F6]">
      <SalesSuperVisorSidebar />
      <div className="flex flex-col w-full overflow-y-auto p-6 gap-6">
        <div className="flex w-full gap-6">
          {/* Calendar Section */}
          <div className="w-full lg:w-3/4 rounded-lg p-4">
            <h2 className="text-xl font-bold rounded-lg shadow-lg p-4 text-white mb-4  bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}>
              Calendar
            </h2>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              views={{ month: true }}
            />
          </div>

          {/* My Leaves Section */}
          <div className="w-full lg:w-1/3 bg-[#F6F6F6] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">My Leaves</h2>
            <div
              className="text-white p-4 rounded mb-6 flex justify-between items-center bg-cover"
              style={{ backgroundImage: `url(${BackgroundImages})` }}
            >
              <p className="font-semibold">Total Yearly Leaves</p>
              <h3 className="text-2xl font-bold">15</h3>
            </div>
            <p className="font-semibold mb-2">Remaining Leaves</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded text-center">
                <p className="font-semibold">This Month</p>
                <p>
                  Full Day: <span className="font-bold">3</span>
                </p>
                <p>
                  Half Day: <span className="font-bold">0</span>
                </p>
              </div>
              <div className="bg-blue-100 p-4 rounded text-center">
                <p className="font-semibold">This Year</p>
                <p>
                  Full Day: <span className="font-bold">10</span>
                </p>
                <p>
                  Half Day: <span className="font-bold">0</span>
                </p>
              </div>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4  "
              onClick={openLeaveModal}
            >
              Request Leave
            </button>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
            onClick={openWFHModal}
            >
              Request WFH
            </button>
          </div>
        </div>
      </div>
      {/* Leave Modal */}
      <SsApplyForLeaveModal isOpen={isLeaveModalOpen} onClose={closeLeaveModal} />
      <SsApplyForWFHModal isOpen={isWFHModalOpen} onClose={closeWFHModal} />
    </div>
  );
};

export default CalendarPage;
