import React, { useState } from "react";
import SalesSupervisorSidebar from "../widgets/SalesSupervisorSidebar";
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaFilter, FaUser, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TourPlanui = () => {
    const [currentWeek, setCurrentWeek] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [locationFilter, setLocationFilter] = useState('all');

    // Static supervisor profile
    const staticSupervisorProfile = {
        name: "Alex Johnson",
        profilePicture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        designation: "Sales Supervisor"
    };

    // Enhanced sales team data with more realistic information
    const salesTeamData = [
        {
            id: 1,
            name: "Kamini Dugal",
            profilePicture: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
            designation: "Senior Sales Executive",
            locations: ["Kankarbagh", "Kankarbagh", "-", "Kankarbagh", "Kankarbagh", "Boring Road", "Boring Road", "-", "Boring Road", "Boring Road", "Danapur", "Danapur", "-", "Danapur"],
            performance: "Excellent",
            activeClients: 23
        },
        {
            id: 2,
            name: "Sweta Singh",
            profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            designation: "Sales Executive",
            locations: ["Rajendra Nagar", "Rajendra Nagar", "-", "Rajendra Nagar", "Rajendra Nagar", "Boring Road", "Boring Road", "-", "Boring Road", "Boring Road", "Danapur", "Danapur", "-", "Danapur"],
            performance: "Good",
            activeClients: 18
        },
        {
            id: 3,
            name: "Avinash Mishra",
            profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            designation: "Senior Sales Executive",
            locations: ["Danapur", "Danapur", "-", "Danapur", "Danapur", "Boring Road", "Boring Road", "-", "Boring Road", "Boring Road", "Danapur", "Danapur", "-", "Danapur"],
            performance: "Very Good",
            activeClients: 21
        },
        {
            id: 4,
            name: "Raju Rastogi",
            profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            designation: "Junior Sales Executive",
            locations: ["Boring Road", "Boring Road", "-", "Boring Road", "Boring Road", "Boring Road", "Boring Road", "-", "Boring Road", "Boring Road", "Danapur", "Danapur", "-", "Danapur"],
            performance: "Satisfactory",
            activeClients: 15
        },
        {
            id: 5,
            name: "Priya Sharma",
            profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            designation: "Sales Executive",
            locations: ["Kankarbagh", "Kankarbagh", "Kankarbagh", "-", "Kankarbagh", "Boring Road", "Boring Road", "Boring Road", "-", "Boring Road", "Danapur", "Danapur", "Danapur", "-"],
            performance: "Excellent",
            activeClients: 25
        },
        {
            id: 6,
            name: "Rahul Verma",
            profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            designation: "Senior Sales Executive",
            locations: ["Rajendra Nagar", "Rajendra Nagar", "-", "Rajendra Nagar", "Rajendra Nagar", "Boring Road", "Boring Road", "-", "Boring Road", "Boring Road", "Danapur", "Danapur", "-", "Danapur"],
            performance: "Very Good",
            activeClients: 22
        }
    ];

    // Enhanced dates and days for better visualization
    const generateWeekDates = (weekOffset = 0) => {
        const dates = [];
        const days = [];
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() + (weekOffset * 7));
        
        for (let i = 0; i < 14; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            dates.push(date.toLocaleDateString('en-IN', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }));
            
            days.push(date.toLocaleDateString('en-IN', { weekday: 'short' }));
        }
        
        return { dates, days };
    };

    const { dates, days } = generateWeekDates(currentWeek);

    // Filter team members based on search and location
    const filteredTeam = salesTeamData.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            member.designation.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesLocation = locationFilter === 'all' || 
                              member.locations.some(loc => 
                                  loc.toLowerCase().includes(locationFilter.toLowerCase()) && loc !== '-'
                              );
        
        return matchesSearch && matchesLocation;
    });

    // Get unique locations for filter
    const uniqueLocations = ['all', ...new Set(salesTeamData.flatMap(member => 
        member.locations.filter(loc => loc !== '-')
    ))];

    const getPerformanceColor = (performance) => {
        switch (performance.toLowerCase()) {
            case 'excellent': return 'bg-green-100 text-green-800 border-green-200';
            case 'very good': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'good': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'satisfactory': return 'bg-orange-100 text-orange-800 border-orange-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getLocationColor = (location) => {
        const locationColors = {
            'Kankarbagh': 'bg-purple-100 text-purple-800 border-purple-200',
            'Rajendra Nagar': 'bg-indigo-100 text-indigo-800 border-indigo-200',
            'Danapur': 'bg-teal-100 text-teal-800 border-teal-200',
            'Boring Road': 'bg-amber-100 text-amber-800 border-amber-200'
        };
        return locationColors[location] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <SalesSupervisorSidebar />
            
            <div className="flex-1 overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 shadow-lg">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                                <FaCalendarAlt className="text-2xl" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">Team Tour Plan</h1>
                                <p className="text-blue-100">Two-week overview of field visits and locations</p>
                            </div>
                        </div>
                        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                            <div className="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-2">
                                <img
                                    src={staticSupervisorProfile.profilePicture}
                                    alt="profile"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <div>
                                    <div className="font-semibold">{staticSupervisorProfile.name}</div>
                                    <div className="text-blue-100 text-sm">{staticSupervisorProfile.designation}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls Section */}
                <div className="bg-white border-b border-gray-200 p-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        {/* Search and Filters */}
                        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 flex-1">
                            <div className="relative lg:max-w-xs">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaSearch className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search team members..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <FaFilter className="text-gray-400" />
                                <select
                                    value={locationFilter}
                                    onChange={(e) => setLocationFilter(e.target.value)}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {uniqueLocations.map(location => (
                                        <option key={location} value={location}>
                                            {location === 'all' ? 'All Locations' : location}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Week Navigation */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setCurrentWeek(prev => prev - 1)}
                                className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                <FaArrowLeft className="text-gray-600" />
                                <span className="text-sm font-medium">Previous</span>
                            </button>
                            
                            <span className="text-sm font-medium text-gray-700 min-w-[120px] text-center">
                                Week {currentWeek + 1}
                            </span>
                            
                            <button
                                onClick={() => setCurrentWeek(prev => prev + 1)}
                                className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="text-sm font-medium">Next</span>
                                <FaArrowRight className="text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Summary Stats */}
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-blue-50 rounded-lg p-3">
                            <div className="text-2xl font-bold text-blue-600">{filteredTeam.length}</div>
                            <div className="text-sm text-blue-700">Team Members</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                            <div className="text-2xl font-bold text-green-600">
                                {filteredTeam.reduce((sum, member) => sum + member.activeClients, 0)}
                            </div>
                            <div className="text-sm text-green-700">Active Clients</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3">
                            <div className="text-2xl font-bold text-purple-600">
                                {uniqueLocations.length - 1}
                            </div>
                            <div className="text-sm text-purple-700">Locations</div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3">
                            <div className="text-2xl font-bold text-orange-600">14</div>
                            <div className="text-sm text-orange-700">Days View</div>
                        </div>
                    </div>
                </div>

                {/* Tour Plan Table */}
                <div className="p-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        {/* Table Header */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold text-gray-700 border-r border-gray-200 min-w-[200px]">
                                            Team Member
                                        </th>
                                        {dates.map((date, index) => (
                                            <th
                                                key={index}
                                                className={`px-4 py-3 text-center font-semibold border-r border-gray-200 min-w-[120px] ${
                                                    days[index] === 'Sun' ? 'bg-red-50 text-red-700' : 'text-gray-700'
                                                }`}
                                            >
                                                <div className="flex flex-col items-center">
                                                    <span className="text-xs font-normal text-gray-500">
                                                        {days[index]}
                                                    </span>
                                                    <span className="text-sm font-semibold">
                                                        {date}
                                                    </span>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredTeam.map((member) => (
                                        <tr key={member.id} className="hover:bg-gray-50 transition-colors duration-150">
                                            {/* Team Member Info */}
                                            <td className="px-6 py-4 border-r border-gray-200">
                                                <div className="flex items-center space-x-3">
                                                    <img
                                                        src={member.profilePicture}
                                                        alt={member.name}
                                                        className="w-10 h-10 rounded-full border-2 border-gray-200"
                                                    />
                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center space-x-2">
                                                            <h4 className="font-semibold text-gray-800 truncate">
                                                                {member.name}
                                                            </h4>
                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPerformanceColor(member.performance)}`}>
                                                                {member.performance}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-gray-600 truncate">
                                                            {member.designation}
                                                        </p>
                                                        <div className="flex items-center space-x-2 mt-1">
                                                            <FaUser className="text-gray-400 text-xs" />
                                                            <span className="text-xs text-gray-500">
                                                                {member.activeClients} clients
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Location Cells */}
                                            {member.locations.map((location, i) => (
                                                <td
                                                    key={i}
                                                    className={`px-4 py-3 text-center border-r border-gray-200 ${
                                                        days[i] === 'Sun' ? 'bg-red-50' : ''
                                                    }`}
                                                >
                                                    {location !== '-' ? (
                                                        <div className="flex flex-col items-center space-y-1">
                                                            <span className={`px-2 py-1 rounded text-xs font-medium border ${getLocationColor(location)}`}>
                                                                {location}
                                                            </span>
                                                            <FaMapMarkerAlt className="text-gray-400 text-xs" />
                                                        </div>
                                                    ) : (
                                                        <span className="text-gray-300 text-sm">-</span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Empty State */}
                        {filteredTeam.length === 0 && (
                            <div className="text-center py-12">
                                <FaCalendarAlt className="text-4xl text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-600 mb-2">No Team Members Found</h3>
                                <p className="text-gray-500">
                                    {searchTerm || locationFilter !== 'all' 
                                        ? "Try adjusting your search or filter criteria."
                                        : "No team members available for the selected period."
                                    }
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Legend */}
                    <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">Location Legend</h4>
                        <div className="flex flex-wrap gap-3">
                            {uniqueLocations.filter(loc => loc !== 'all').map(location => (
                                <div key={location} className="flex items-center space-x-2">
                                    <div className={`w-3 h-3 rounded ${getLocationColor(location).split(' ')[0]}`}></div>
                                    <span className="text-sm text-gray-600">{location}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourPlanui;