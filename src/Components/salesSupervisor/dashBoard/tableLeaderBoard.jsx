import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const TableLeaderBoard = ({ MonthlyLeaderBoard = [] }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(MonthlyLeaderBoard.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = MonthlyLeaderBoard.slice(startIndex, startIndex + itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Team Leaderboard</h2>
        <span className="text-base text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {MonthlyLeaderBoard.length} members
        </span>
      </div>

      {/* Leaderboard List - Optimized for 3 items */}
      <div className="space-y-2 min-h-[210px]">
        {paginatedData.map((member) => (
          <div 
            key={member.id} 
            className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 border border-gray-100"
          >
            {/* Left Section */}
            <div className="flex items-center space-x-2 flex-1 min-w-0">
              <div className="relative flex-shrink-0">
                <img
                  src={member.profilePicture}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover border border-white shadow-xs"
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-6 h-6 text-[9px] rounded-full flex items-center justify-center font-bold text-white border border-white
                    ${
                      member.rank === 1
                        ? "bg-yellow-500"
                        : member.rank === 2
                        ? "bg-gray-400"
                        : member.rank === 3
                        ? "bg-orange-500"
                        : "bg-blue-500"
                    }`}
                >
                  {member.rank}
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-800 text-sm truncate">{member.name}</h3>
                <div className="flex items-center space-x-1 mt-0.5">
                  <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded border">
                    {member.activeClients} clients
                  </span>
                  <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded border">
                    {member.todayVisits} visits
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-right flex-shrink-0 ml-2">
              <p className="font-bold text-gray-800 text-sm">
                ₹{(member.totalSales / 100000).toFixed(1)}L
              </p>
              <p className="text-xs text-gray-500 mt-0.5">sales</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination - Compact */}
      {totalPages > 1 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronLeft className="w-3 h-3" />
              <span>Prev</span>
            </button>

            <div className="flex items-center space-x-1">
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                // Show only relevant pages for better mobile experience
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-7 h-7 text-xs rounded border transition-colors
                        ${
                          currentPage === page
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-200"
                        }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="px-0.5 text-gray-400 text-xs">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed hover:bg-gray-100 rounded transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Page info */}
          <div className="text-center mt-1">
            <p className="text-xs text-gray-500">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableLeaderBoard;