import React, { useState } from "react";
import DeveSidebar from "../widgets/deveSidebar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BackgroundImages from "../../../assets/BackgroundImageCalender.png";
import DevApplyForLeaveModal from "./devApplyForLeaveModal";
import DevApplyForWFHModal from "./devApplyForWFHModal";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Christmas Day 🎅",
    start: new Date(2024, 11, 25),
    end: new Date(2024, 11, 25),
    allDay: true,
  },
];

const CalendarPage = () => {
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isWFHModalOpen, setIsWFHModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#ECECEC] font-jakarta">
      <DeveSidebar />

      <div className="flex-1 p-6">
        <div className="bg-[#F6F6F6] rounded-xl shadow-md mb-6 px-6 py-4">
          <h2 className="text-2xl font-semibold text-[#14509F]">
            Calendar - Meetings, Leaves & Holidays
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Calendar Section */}
          <div className="w-full lg:w-3/4 bg-[#F6F6F6] rounded-xl shadow-md p-4">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              views={{ month: true }}
              popup
            />
          </div>

          {/* My Leaves Section */}
          <div className="w-full lg:w-1/3 bg-[#F6F6F6] rounded-xl shadow-md p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">My Leaves</h3>

            <div
              className="bg-cover bg-center text-white rounded-lg p-4 mb-6 flex justify-between items-center"
              style={{ backgroundImage: `url(${BackgroundImages})` }}
            >
              <span className="font-medium">Total Yearly Leaves</span>
              <span className="text-3xl font-bold">15</span>
            </div>

            <p className="font-semibold mb-4 text-gray-800 text-lg">Remaining Leaves</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* This Month */}
              <div className="bg-[#E6EEFF] rounded-md  flex flex-col shadow-sm  border-2 border-[#FFFFFF] font-jakarta">
                <p className="text-[#14509F] font-semibold text-sm ml-2  p-2">This Month</p>
                <hr className="border-[1.5px] border-[#FFFFFF] w-full mx-auto " />
                <div className="flex justify-between w-full text-center p-2 ml-2">
                  <div className="flex-1 text-left">
                    <p className="text-xs text-[#14509F] font-medium">Full Day</p>
                    <p className="text-2xl font-semibold text-[#14509F] mt-1">3</p>
                  </div>
                  <div className="flex-1 text-left ">
                    <p className="text-xs text-[#14509F] font-medium">Half Day</p>
                    <p className="text-2xl  font-semibold text-[#14509F] mt-1">0</p>
                  </div>
                </div>
              </div>


             {/* This Year */}
<div className="bg-[#E6EEFF] rounded-md flex flex-col shadow-sm border-2 border-[#FFFFFF] font-jakarta">
  <p className="text-[#14509F] font-semibold text-sm ml-2 p-2">This Year</p>
  <hr className="border-[1.5px] border-[#FFFFFF] w-full mx-auto" />
  <div className="flex justify-between w-full text-center p-2 ml-2">
    <div className="flex-1 text-left">
      <p className="text-xs text-[#14509F] font-medium">Full Day</p>
      <p className="text-2xl font-semibold text-[#14509F] mt-1">10</p>
    </div>
    <div className="flex-1 text-left">
      <p className="text-xs text-[#14509F] font-medium">Half Day</p>
      <p className="text-2xl font-semibold text-[#14509F] mt-1">0</p>
    </div>
  </div>
</div>

            </div>

            {/* Spacer pushes buttons to the bottom */}
            <div className="flex-grow" />

            <button
              className="w-full bg-[#14509F] text-white py-2 rounded-md font-medium hover:bg-[#103f80] transition mb-3"
              onClick={() => setIsLeaveModalOpen(true)}
            >
              Request Leave
            </button>
            <button
              className="w-full border border-[#14509F] text-[#14509F] py-2 rounded-md font-medium hover:bg-[#14509F] hover:text-white transition"
              onClick={() => setIsWFHModalOpen(true)}
            >
              Request WFH
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <DevApplyForLeaveModal isOpen={isLeaveModalOpen} onClose={() => setIsLeaveModalOpen(false)} />
      <DevApplyForWFHModal isOpen={isWFHModalOpen} onClose={() => setIsWFHModalOpen(false)} />
    </div>
  );
};

export default CalendarPage;
