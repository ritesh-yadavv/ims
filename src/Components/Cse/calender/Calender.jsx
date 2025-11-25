import React, { useState } from "react";
import CseSideBar from "../widgets/CseSideBar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import headerBg from "../../../assets/devbackground.png";
import ImageCalender from "../../../assets/BackgroundImageCalender.png";

const localizer = momentLocalizer(moment);

// ⭐ Static Calendar Events (No backend)
const events = [
  {
    title: "Christmas Day",
    start: new Date(2024, 11, 25),
    end: new Date(2024, 11, 25),
    allDay: true,
  },
  {
    title: "New Year Event",
    start: new Date(2025, 0, 1),
    end: new Date(2025, 0, 1),
    allDay: true,
  },
];

const CseCalendar = () => {
  const [view] = useState("month");

  return (
    <div className="flex h-screen bg-gray-100">
      <CseSideBar />

      <div className="flex-1 p-4 overflow-auto h-screen">
        <div className="flex w-full gap-6">

          {/* Calendar Section */}
          <div className="w-full lg:w-3/4 rounded-lg p-4">
            <h2 className="text-xl font-bold bg-white rounded-lg shadow-lg p-4 text-white mb-4 bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}>
              Calendar
            </h2>

            <div className="flex justify-end gap-3 mb-4">
              <button className="bg-[#14509F] text-white py-2 px-4 rounded hover:bg-blue-600">
                Month
              </button>
              <button className="text-blue-500 bg-white py-2 px-4 rounded border border-blue-300">
                Add New Event
              </button>
            </div>

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
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">My Leaves</h2>

            <div className="bg-gradient-to-r from-black to-gray-800 text-white p-4 rounded mb-6 flex justify-between items-center shadow bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${ImageCalender})` }}>
              <p className="font-semibold">Total Yearly Leaves</p>
              <h3 className="text-2xl font-bold">15</h3>
            </div>

            <p className="font-semibold mb-2">Remaining Leaves</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded text-center">
                <p className="font-semibold">This Month</p>
                <p>Full Day: <span className="font-bold">3</span></p>
                <p>Half Day: <span className="font-bold">0</span></p>
              </div>

              <div className="bg-blue-100 p-4 rounded text-center">
                <p className="font-semibold">This Year</p>
                <p>Full Day: <span className="font-bold">10</span></p>
                <p>Half Day: <span className="font-bold">0</span></p>
              </div>
            </div>

            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
              Request Leave
            </button>

            <button className="w-full border border-blue-500 text-blue-500 py-2 px-4 rounded">
              Request WFH
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CseCalendar;
