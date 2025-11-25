import React, { useState } from "react";
import TeleCallerSideBar from "../widgets/TelecallerSideBar"
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import headerBg from "../../../assets/devbackground.png";


const localizer = momentLocalizer(moment);

const events = [
    {
        title: "Hospital Duty",
        start: new Date(2024, 11, 16, 10, 40),
        end: new Date(2024, 11, 16, 12, 0),
        allDay: false,
    },
    {
        title: "Clinic Appointment: Patient Name",
        start: new Date(2024, 11, 16, 10, 40),
        end: new Date(2024, 11, 16, 11, 20),
        allDay: false,
    },
    {
        title: "Day Off",
        start: new Date(2024, 11, 19),
        end: new Date(2024, 11, 19),
        allDay: true,
    },
];

const TeleCallerCalendar = () => {
    const [view, setView] = useState("week");

    const dayPropGetter = (date) => {
        const day = date.getDay();
        if (day === 0 || day === 6) {
            return {
                className: "bg-red-100 text-red-600 border-red-300",
            };
        }
        return {};
    };

    const eventPropGetter = () => ({
        className:
            "bg-blue-500 text-white rounded-lg px-2 py-1 shadow-md hover:shadow-lg",
    });

    return (
        <div className='flex h-screen bg-white'>
            <TeleCallerSideBar />

            <div className="p-4 max-md:ml-0 w-full mr-1 overflow-y-auto">
                <h1 className="max-md:text-sm max-md:text-center text-xl font-bold text-white  p-3 rounded-t-md border border-gray-300 shadow bg-cover bg-center bg-no-repeat relative " style={{ backgroundImage: `url(${headerBg})` }}>
                    Calendar
                </h1>
                <div className="flex flex-col md:flex-row p-4">
                    {/* Left Side - Calendar */}
                    <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">
                            Meetings & Events
                        </h2>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            defaultView={view}
                            views={["day", "week", "month"]}
                            step={10}
                            timeslots={2}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: "75vh" }}
                            onView={(newView) => setView(newView)}
                            dayPropGetter={dayPropGetter}
                            eventPropGetter={eventPropGetter}
                        />
                    </div>
                    {/* Right side - Leave Summary */}
                    <div className="w-full lg:w-1/4 bg-gray-50 p-6 border-l">
                        <h3 className="text-lg font-semibold text-gray-700">Leave Summary</h3>
                        <div className="mt-4 space-y-3">
                            {[
                                { type: "Casual Leave", remaining: 47, used: 2, total: 6 },
                                { type: "Sick Leave", remaining: 4, used: 2, total: 6 },
                                { type: "Earned Leave", remaining: 4, used: 2, total: 6 },
                                { type: "Half Day", remaining: 4, used: 2, total: 6 },
                                { type: "Maternity Leave", remaining: 180, used: 0, total: 180 },
                                { type: "Leave Without Pay", remaining: 4, used: 2, total: 6 },
                            ].map((leave, index) => (
                                <div
                                    key={index}
                                    className="p-3 bg-white rounded-lg shadow border border-gray-200"
                                >
                                    <h4 className="text-sm font-medium text-gray-800">
                                        {leave.type}
                                    </h4>
                                    <p className="text-xs text-gray-600">
                                        Remaining: {leave.remaining} | Used: {leave.used} | Total:{" "}
                                        {leave.total}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 space-y-2">
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600">
                                Request Leave
                            </button>
                            <button className="w-full bg-gray-700 text-white py-2 rounded-lg shadow hover:bg-gray-800">
                                Work From Home
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeleCallerCalendar;
