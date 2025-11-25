import React from "react";
import { Link } from "react-router-dom";

const UpcomingAgenda = ({ agendas, loading }) => {
  
  if (loading) {
    return (
      <div className="bg-white shadow-md rounded-lg p-5 w-full border border-gray-300">
        <h2 className="text-lg font-semibold mb-4">My Upcoming Agenda</h2>
        <div className="animate-pulse">
          {[1, 2, 3].map((item) => (
            <div key={item} className="mb-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-6">My Upcoming Agenda</h2>
      <div className="space-y-4">
        {agendas?.length > 0 ? (
          agendas.map((agenda, index) => (
            <div key={agenda.id || index} className="pb-4 border-b border-gray-100 last:border-b-0">
              <div
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${index === 0
                    ? "bg-orange-100 text-orange-800 border border-orange-200"
                    : index === 1
                      ? "bg-blue-100 text-blue-800 border border-blue-200"
                      : index === 2
                        ? "bg-purple-100 text-purple-800 border border-purple-200"
                        : "bg-green-100 text-green-800 border border-green-200"
                  }`}
              >
                {agenda.callTimingsStart} - {agenda.callTimingsEnd}
              </div>
              <p className="text-sm text-gray-600 mt-1">Meeting with {agenda.name}</p>
              <p className="text-xs text-gray-500 mt-1">{agenda.title}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm text-center py-4">No upcoming agendas.</p>
        )}
      </div>
      
      <button className="mt-6 w-full py-3 bg-[#004AAD] text-white font-medium rounded-lg shadow-md hover:bg-[#003A8C] transition-colors duration-200">
        <Link to="/sales-super-mr" className="w-full flex justify-center items-center">
          View Other MR
        </Link>
      </button>
    </div>
  );
};

export default UpcomingAgenda;