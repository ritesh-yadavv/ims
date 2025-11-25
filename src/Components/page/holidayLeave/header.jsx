import React, { useState } from 'react';
import { CalendarPlus, Calendar, Clock, Plus } from 'lucide-react';
import HolidayList from './holidayList';
import LeaveApproval from './LeaveApproval';
import AddHolidayModal from './Modal';

const Header = () => {
    const [activeComponent, setActiveComponent] = useState("LeaveApproval");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'LeaveApproval':
                return <LeaveApproval />;
            case 'HolidayList':
                return <HolidayList />;
            default:
                return <LeaveApproval />;
        }
    };

    const navigationItems = [
        {
            key: "LeaveApproval",
            label: "Leave Approval",
            icon: Clock
        },
        {
            key: "HolidayList",
            label: "Holiday List",
            icon: Calendar
        }
    ];

    return (
        <div className="font-jakarta">
            {/* Header Section */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-4 rounded-t-lg border border-gray-300 shadow-sm">
                    Holiday & Leaves Management
                </h1>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    {/* Navigation Tabs */}
                    <div className="flex items-center space-x-1">
                        {navigationItems.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = activeComponent === item.key;
                            
                            return (
                                <button
                                    key={item.key}
                                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                                        isActive
                                            ? "bg-blue-50 text-blue-600 border-b-2 border-blue-500"
                                            : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                    }`}
                                    onClick={() => setActiveComponent(item.key)}
                                >
                                    <IconComponent size={18} className={isActive ? "text-blue-600" : "text-gray-500"} />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Add Holiday Button - Only shows on HolidayList tab */}
                    {activeComponent === "HolidayList" && (
                        <button
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <CalendarPlus size={18} />
                            <span>Add Holiday</span>
                        </button>
                    )}
                </div>

                {/* Active Tab Indicator */}
                <div className="relative">
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200">
                        <div 
                            className={`h-full bg-blue-500 transition-all duration-300 ${
                                activeComponent === "LeaveApproval" ? "w-1/2" : "w-1/2 translate-x-full"
                            }`}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-2">
                <div className="flex justify-between items-center">
                    {navigationItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = activeComponent === item.key;
                        
                        return (
                            <button
                                key={item.key}
                                className={`flex flex-col items-center space-y-1 p-2 rounded-lg flex-1 mx-1 transition-colors ${
                                    isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-600 hover:text-blue-500"
                                }`}
                                onClick={() => setActiveComponent(item.key)}
                            >
                                <IconComponent size={20} />
                                <span className="text-xs font-medium">{item.label}</span>
                            </button>
                        );
                    })}
                    
                    {activeComponent === "HolidayList" && (
                        <button
                            className="flex flex-col items-center space-y-1 p-2 rounded-lg bg-blue-500 text-white mx-1 transition-colors"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Plus size={20} />
                            <span className="text-xs font-medium">Add</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Modal */}
            <AddHolidayModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Content Area */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[500px]">
                {renderComponent()}
            </div>
        </div>
    );
};

export default Header;