import React, { useEffect, useState } from "react";
import { Edit3, Trash2, Calendar, Loader } from 'lucide-react';
import EditHolidayModal from "./EditHolidayModal";
import DeleteHolidayModal from "./DeleteHolidayModal";

const HolidayList = () => {
  const [holidayList, setHolidayList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // Static holiday data
  const staticHolidays = [
    {
      id: '1',
      holidayName: 'New Year',
      day: 'Monday',
      date: '2024-01-01',
      description: 'Celebration of the new year'
    },
    {
      id: '2',
      holidayName: 'Republic Day',
      day: 'Friday',
      date: '2024-01-26',
      description: 'Indian Republic Day celebration'
    },
    {
      id: '3',
      holidayName: 'Holi',
      day: 'Monday',
      date: '2024-03-25',
      description: 'Festival of colors'
    },
    {
      id: '4',
      holidayName: 'Independence Day',
      day: 'Thursday',
      date: '2024-08-15',
      description: 'Indian Independence Day'
    },
    {
      id: '5',
      holidayName: 'Diwali',
      day: 'Wednesday',
      date: '2024-11-13',
      description: 'Festival of lights'
    },
    {
      id: '6',
      holidayName: 'Christmas',
      day: 'Wednesday',
      date: '2024-12-25',
      description: 'Christmas celebration'
    }
  ];

  useEffect(() => {
    fetchHolidayList();
  }, []);

  const fetchHolidayList = async () => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setHolidayList(staticHolidays);
    } catch (error) {
      console.error("Error fetching holidays:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (holiday) => {
    setSelectedHoliday(holiday);
    setIsEditOpen(true);
  };

  const handleDeleteClick = (holiday) => {
    setSelectedHoliday(holiday);
    setIsDeleteOpen(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getUpcomingHolidays = () => {
    const today = new Date();
    return holidayList.filter(holiday => new Date(holiday.date) >= today);
  };

  const getPastHolidays = () => {
    const today = new Date();
    return holidayList.filter(holiday => new Date(holiday.date) < today);
  };

  const upcomingHolidays = getUpcomingHolidays();
  const pastHolidays = getPastHolidays();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-32">
        <div className="flex flex-col items-center">
          <Loader className="h-8 w-8 animate-spin text-blue-500 mb-2" />
          <p className="text-gray-600">Loading holidays...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4 font-jakarta p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Total Holidays</p>
              <p className="text-2xl font-bold text-blue-900">{holidayList.length}</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Upcoming Holidays</p>
              <p className="text-2xl font-bold text-green-900">{upcomingHolidays.length}</p>
            </div>
            <Calendar className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">Past Holidays</p>
              <p className="text-2xl font-bold text-gray-900">{pastHolidays.length}</p>
            </div>
            <Calendar className="h-8 w-8 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Upcoming Holidays Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-green-500" />
            Upcoming Holidays ({upcomingHolidays.length})
          </h3>
        </div>
        {upcomingHolidays.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Holiday Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Day
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {upcomingHolidays.map((holiday) => (
                  <tr key={holiday.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{holiday.holidayName}</div>
                      {holiday.description && (
                        <div className="text-sm text-gray-500">{holiday.description}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {holiday.day}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(holiday.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditClick(holiday)}
                          className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded hover:bg-blue-50"
                          title="Edit holiday"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(holiday)}
                          className="text-red-600 hover:text-red-800 transition-colors p-1 rounded hover:bg-red-50"
                          title="Delete holiday"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No upcoming holidays</p>
          </div>
        )}
      </div>

      {/* Past Holidays Table */}
      {pastHolidays.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-gray-500" />
              Past Holidays ({pastHolidays.length})
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Holiday Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Day
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pastHolidays.map((holiday) => (
                  <tr key={holiday.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{holiday.holidayName}</div>
                      {holiday.description && (
                        <div className="text-sm text-gray-500">{holiday.description}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        {holiday.day}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(holiday.date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditOpen && (
        <EditHolidayModal 
          holiday={selectedHoliday} 
          onClose={() => setIsEditOpen(false)} 
          refreshList={fetchHolidayList} 
        />
      )}

      {/* Delete Modal */}
      {isDeleteOpen && (
        <DeleteHolidayModal 
          holiday={selectedHoliday} 
          onClose={() => setIsDeleteOpen(false)} 
          refreshList={fetchHolidayList} 
        />
      )}
    </div>
  );
};

export default HolidayList;