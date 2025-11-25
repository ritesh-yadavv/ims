import React, { useEffect, useState } from "react";
import SideNavBar from "../../widgets/sideNavBar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { 
  FaCalendarAlt, 

  
  FaBriefcase,
  FaUmbrellaBeach,
  FaLaptopHouse
} from 'react-icons/fa';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
    const [view, setView] = useState("month");
    const [leaveEvent, setLeaveEvent] = useState([]);

    // Static leave events data
    const staticLeaveEvents = [
        {
            id: 1,
            name: "John Doe",
            profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            startDate: "2024-01-15",
            endDate: "2024-01-17",
            type: "Sick Leave",
            status: "Approved"
        },
        {
            id: 2,
            name: "Jane Smith",
            profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            startDate: "2024-01-20",
            endDate: "2024-01-22",
            type: "Vacation",
            status: "Approved"
        },
        {
            id: 3,
            name: "Mike Johnson",
            profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            startDate: "2024-01-25",
            endDate: "2024-01-25",
            type: "WFH",
            status: "Pending"
        },
        {
            id: 4,
            name: "Sarah Wilson",
            profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            startDate: "2024-02-01",
            endDate: "2024-02-05",
            type: "Maternity Leave",
            status: "Approved"
        },
        {
            id: 5,
            name: "David Brown",
            profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            startDate: "2024-02-10",
            endDate: "2024-02-10",
            type: "Half Day",
            status: "Approved"
        }
    ];

    // Static calendar events
    const staticCalendarEvents = [
        {
            title: "Christmas Day",
            start: new Date(2024, 11, 25),
            end: new Date(2024, 11, 25),
            allDay: true,
            type: "holiday"
        },
        {
            title: "New Year's Day",
            start: new Date(2024, 0, 1),
            end: new Date(2024, 0, 1),
            allDay: true,
            type: "holiday"
        },
        {
            title: "Team Meeting",
            start: new Date(2024, 0, 15, 10, 0),
            end: new Date(2024, 0, 15, 11, 0),
            type: "meeting"
        },
        {
            title: "Project Deadline",
            start: new Date(2024, 0, 20),
            end: new Date(2024, 0, 20),
            allDay: true,
            type: "deadline"
        }
    ];

    const getAllLeaves = async () => {
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLeaveEvent(staticLeaveEvents);
        } catch (error) {
            console.error("Error loading leave data:", error);
        }
    };

    useEffect(() => {
        getAllLeaves();
    }, [view]);

    const handleAddEvent = () => {
        console.log("Add new event clicked");
        // Implement add event functionality
    };

    const handleRequestLeave = () => {
        console.log("Request leave clicked");
        // Implement leave request functionality
    };

    const handleRequestWFH = () => {
        console.log("Request WFH clicked");
        // Implement WFH request functionality
    };

    const getEventStyle = (event) => {
        const backgroundColor = {
            holiday: '#ff6b6b',
            meeting: '#4ecdc4',
            deadline: '#45b7d1',
            default: '#96ceb4'
        };

        return {
            style: {
                backgroundColor: backgroundColor[event.type] || backgroundColor.default,
                borderRadius: '5px',
                opacity: 0.8,
                color: 'white',
                border: '0px',
                display: 'block'
            }
        };
    };

    const getLeaveTypeColor = (type) => {
        const colors = {
            'Sick Leave': 'bg-red-100 text-red-800',
            'Vacation': 'bg-green-100 text-green-800',
            'WFH': 'bg-blue-100 text-blue-800',
            'Maternity Leave': 'bg-purple-100 text-purple-800',
            'Half Day': 'bg-yellow-100 text-yellow-800',
            'default': 'bg-gray-100 text-gray-800'
        };
        return colors[type] || colors.default;
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <SideNavBar />

            <div className="flex flex-col w-full overflow-y-auto p-6 gap-6">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                        <FaCalendarAlt className="mr-3 text-blue-600" />
                        Calendar & Leaves
                    </h1>
                    <div className="flex gap-3">
                        <button 
                            onClick={handleAddEvent}
                            className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                        >
                            <FaCalendarAlt className="w-4 h-4" />
                            Add New Event
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full gap-6">
                    {/* Calendar Section */}
                    <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                                <FaCalendarAlt className="mr-2 text-blue-500" />
                                Company Calendar
                            </h2>
                            <div className="flex gap-2">
                                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                    Month View
                                </button>
                                <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                    Week View
                                </button>
                            </div>
                        </div>
                        
                        <Calendar
                            localizer={localizer}
                            events={staticCalendarEvents}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                            views={{ month: true, week: true }}
                            onView={setView}
                            eventPropGetter={getEventStyle}
                            popup
                        />
                    </div>

                    {/* My Leaves Section */}
                    <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                            <FaUmbrellaBeach className="mr-2 text-green-500" />
                            My Leaves
                        </h2>
                        
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-xl mb-6 shadow-md">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-blue-100">Total Yearly Leaves</p>
                                    <p className="text-sm text-blue-200">Remaining for this year</p>
                                </div>
                                <h3 className="text-3xl font-bold">15</h3>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                                <div>
                                    <p className="font-semibold text-gray-700">This Month</p>
                                    <p className="text-sm text-gray-600">Full Day: <span className="font-bold text-blue-600">3</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">Half Day: <span className="font-bold text-blue-600">0</span></p>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                                <div>
                                    <p className="font-semibold text-gray-700">This Year</p>
                                    <p className="text-sm text-gray-600">Full Day: <span className="font-bold text-green-600">10</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">Half Day: <span className="font-bold text-green-600">0</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button 
                                onClick={handleRequestLeave}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                            >
                                <FaUmbrellaBeach className="w-4 h-4" />
                                Request Leave
                            </button>
                            <button 
                                onClick={handleRequestWFH}
                                className="w-full flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                <FaLaptopHouse className="w-4 h-4" />
                                Request WFH
                            </button>
                        </div>
                    </div>
                </div>

                {/* Leaves & WFH Section */}
                <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaBriefcase className="mr-2 text-purple-500" />
                        Team Leaves & WFH
                    </h2>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-4 px-6 font-semibold text-gray-700">Employee</th>
                                    <th className="py-4 px-6 font-semibold text-gray-700">From</th>
                                    <th className="py-4 px-6 font-semibold text-gray-700">To</th>
                                    <th className="py-4 px-6 font-semibold text-gray-700">Type</th>
                                    <th className="py-4 px-6 font-semibold text-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaveEvent.map((leave) => (
                                    <tr key={leave.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center">
                                                <img
                                                    src={leave.profilePicture}
                                                    alt={leave.name}
                                                    className="w-10 h-10 rounded-full mr-4 object-cover border-2 border-gray-200"
                                                    onError={(e) => {
                                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leave.name)}&background=3085f6&color=fff&size=80`;
                                                    }}
                                                />
                                                <span className="font-medium text-gray-800">{leave.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-gray-700">{leave.startDate}</td>
                                        <td className="py-4 px-6 text-gray-700">{leave.endDate}</td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getLeaveTypeColor(leave.type)}`}>
                                                {leave.type}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                                leave.status === 'Approved' 
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {leave.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {leaveEvent.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            <FaCalendarAlt className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                            <p>No leave requests found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;