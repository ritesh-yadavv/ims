import React, { useEffect, useState } from "react";
import SalesSuperVisorSidebar from '../widgets/SalesSupervisorSidebar';
import TableLeaderBoard from "./tableLeaderBoard";
import TotalClient from "./totalClient";
import UpcomingAgenda from "./upcomingAgenda";
import { FaChartLine, FaUsers, FaCalendarCheck, FaTrophy } from 'react-icons/fa';
import Loader from "../../commonComponent/loader";
import dashboardBg from "../../../assets/devbackground.png";

const SaleSupervisorDashboard = () => {
    const [agendas, setAgendas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [monthlyLeaderBoard, setMonthlyLeaderBoard] = useState([]);
    const [dashboardStats, setDashboardStats] = useState({});

    const staticAgendas = [
        { id: 1, name: "Dr. Gupta", callTimingsStart: "10:00 AM", callTimingsEnd: "11:00 AM", title: "Team Performance Review" },
        { id: 2, name: "Dr. Sharma", callTimingsStart: "02:30 PM", callTimingsEnd: "03:30 PM", title: "Monthly Sales Strategy" },
        { id: 3, name: "MedLife Hospital", callTimingsStart: "11:00 AM", callTimingsEnd: "12:00 PM", title: "Client Demo" },
        { id: 4, name: "Planning Team", callTimingsStart: "09:00 AM", callTimingsEnd: "10:00 AM", title: "Quarterly Planning" }
    ];

    const staticLeaderBoard = [
        { id: 1, name: "Rajesh Kumar", profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", activeClients: 42, totalSales: 1250000, todayVisits: 5, rank: 1 },
        { id: 2, name: "Priya Sharma", profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face", activeClients: 38, totalSales: 1180000, todayVisits: 6, rank: 2 },
        { id: 3, name: "Amit Patel", profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", activeClients: 35, totalSales: 1100000, todayVisits: 4, rank: 3 },
        { id: 4, name: "Sneha Reddy", profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", activeClients: 32, totalSales: 980000, todayVisits: 3, rank: 4 },
        { id: 5, name: "Vikram Singh", profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", activeClients: 28, totalSales: 850000, todayVisits: 2, rank: 5 }
    ];

    const staticDashboardStats = {
        totalTeamMembers: 15,
        activeClients: 245,
        totalVisitsToday: 20,
        monthlyRevenue: 8500000,
        targetAchievement: 89,
        pendingApprovals: 8,
        teamPerformance: 92
    };

    useEffect(() => {
        const fetchDashboardData = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setAgendas(staticAgendas);
            setMonthlyLeaderBoard(staticLeaderBoard);
            setDashboardStats(staticDashboardStats);
            setLoading(false);
        };
        fetchDashboardData();
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="flex bg-gray-100 h-screen overflow-hidden">
            {/* Fixed Sidebar */}
            <div className="w-64 h-screen fixed left-0 top-0 bg-white shadow-md z-50">
                <SalesSuperVisorSidebar />
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 ml-64 h-screen flex flex-col">
                {/* FIXED HEADER - No scrolling */}
              <div
  className="bg-gray-800 border-b border-gray-200 px-6 py-6 flex-shrink-0 bg-cover bg-center relative  overflow-hidden"
  style={{ backgroundImage: `url(${dashboardBg})` }}
>
  {/* Optional Dark Overlay For Better Text Visibility */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Actual Content */}
  <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center">
    <div>
      <h1 className="text-3xl font-bold text-white mb-1">
        Sales Supervisor Dashboard
      </h1>
      <p className="text-gray-200">
        Welcome back! Here's your team's performance overview.
      </p>
    </div>

    <div className="text-sm text-gray-200 mt-4 md:mt-0">
      Last updated:{" "}
      {new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>
  </div>
</div>


                {/* SCROLLABLE CONTENT AREA */}
                <div className="flex-1 overflow-y-auto p-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Total Team Members</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{dashboardStats.totalTeamMembers}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <FaUsers className="text-blue-600 text-2xl" />
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Active Clients</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{dashboardStats.activeClients}</p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-lg">
                                <FaUsers className="text-green-600 text-2xl" />
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Today's Total Visits</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{dashboardStats.totalVisitsToday}</p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <FaChartLine className="text-purple-600 text-2xl" />
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Monthly Revenue</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">₹{(dashboardStats.monthlyRevenue || 0).toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-orange-100 p-3 rounded-lg">
                                <FaTrophy className="text-orange-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <TotalClient MonthlyLeaderBoard={monthlyLeaderBoard} />
                            </div>
                            <TableLeaderBoard MonthlyLeaderBoard={monthlyLeaderBoard} loading={loading} />
                        </div>

                        <div className="lg:col-span-1">
                            <UpcomingAgenda agendas={agendas} loading={loading} />
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="p-6 rounded-xl shadow-lg bg-white/80 backdrop-blur-md border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button className="flex flex-col items-center justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-200 bg-blue-50 hover:bg-blue-100 border border-blue-200">
                                <div className="p-3 rounded-lg bg-blue-100 mb-2">
                                    <FaUsers className="text-blue-600 text-lg" />
                                </div>
                                <span className="text-gray-700 font-medium text-sm">Team Report</span>
                            </button>
                            
                            <button className="flex flex-col items-center justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-200 bg-green-50 hover:bg-green-100 border border-green-200">
                                <div className="p-3 rounded-lg bg-green-100 mb-2">
                                    <FaChartLine className="text-green-600 text-lg" />
                                </div>
                                <span className="text-gray-700 font-medium text-sm">Performance</span>
                            </button>
                            
                            <button className="flex flex-col items-center justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-200 bg-purple-50 hover:bg-purple-100 border border-purple-200">
                                <div className="p-3 rounded-lg bg-purple-100 mb-2">
                                    <FaCalendarCheck className="text-purple-600 text-lg" />
                                </div>
                                <span className="text-gray-700 font-medium text-sm">Schedule</span>
                            </button>
                            
                            <button className="flex flex-col items-center justify-center p-4 rounded-lg hover:scale-105 transition-transform duration-200 bg-orange-50 hover:bg-orange-100 border border-orange-200">
                                <div className="p-3 rounded-lg bg-orange-100 mb-2">
                                    <FaTrophy className="text-orange-600 text-lg" />
                                </div>
                                <span className="text-gray-700 font-medium text-sm">Targets</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleSupervisorDashboard;