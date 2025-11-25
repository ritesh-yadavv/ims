import React, { useState, useEffect } from "react";
import Loader from "../../commonComponent/loader";
import { FaTrophy, FaMedal, FaCrown } from "react-icons/fa";
import headerBg from "../../../assets/devbackground.png";



const TableLeaderBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [monthlyLeaderBoard, setMonthlyLeaderBoard] = useState([]);
  const [loading, setLoading] = useState(false);

  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = monthlyLeaderBoard.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(monthlyLeaderBoard.length / recordsPerPage);

  // Static data
  const staticLeaderBoardData = [
    { id: 1, name: "John Smith", profilePicture: "https://i.pravatar.cc/100?img=1", activeClients: 42, rank: 1 },
    { id: 2, name: "Sarah Johnson", profilePicture: "https://i.pravatar.cc/100?img=2", activeClients: 38, rank: 2 },
    { id: 3, name: "Mike Davis", profilePicture: "https://i.pravatar.cc/100?img=3", activeClients: 35, rank: 3 },
    { id: 4, name: "Emily Wilson", profilePicture: "https://i.pravatar.cc/100?img=4", activeClients: 32, rank: 4 },
    { id: 5, name: "David Brown", profilePicture: "https://i.pravatar.cc/100?img=5", activeClients: 28, rank: 5 },
    { id: 6, name: "Lisa Anderson", profilePicture: "https://i.pravatar.cc/100?img=6", activeClients: 25, rank: 6 },
    { id: 7, name: "Robert Taylor", profilePicture: "https://i.pravatar.cc/100?img=7", activeClients: 22, rank: 7 },
    { id: 8, name: "Jennifer Martinez", profilePicture: "https://i.pravatar.cc/100?img=8", activeClients: 18, rank: 8 }
  ];

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      setMonthlyLeaderBoard(staticLeaderBoardData);
      setLoading(false);
    };
    load();
  }, []);

  const month = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];
  let currentMonth = month[new Date().getMonth()];

  const getRankIcon = (rank) => {
    if (rank === 1) return <FaCrown className="text-yellow-500 text-lg" />;
    if (rank === 2) return <FaMedal className="text-gray-400 text-lg" />;
    if (rank === 3) return <FaMedal className="text-yellow-700 text-lg" />;
    return <span>{rank}</span>;
  };

  const getRankBadgeColor = (rank) => {
    if (rank === 1) return "bg-yellow-100 border-yellow-300";
    if (rank === 2) return "bg-gray-100 border-gray-300";
    if (rank === 3) return "bg-orange-100 border-orange-300";
    return "bg-blue-50 border-blue-200";
  };

  return (
    <div className="max-w-4xl mx-auto mt-2 border border-gray-200 rounded-xl shadow bg-white font-jakarta">

      {/* HEADER */}
    <div
  className="rounded-t-xl py-4 px-6 flex justify-between items-center bg-cover bg-center relative"
  style={{
    backgroundImage: `url(${headerBg})`,
  }}
>
  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-green-500/70 rounded-t-xl"></div> */}

  {/* Content */}
  <div className="relative z-10 flex items-center space-x-3">
    <FaTrophy className="text-white text-xl" />
    <span className="text-xl font-bold text-white">Monthly Leaderboard</span>
  </div>

  <span className="relative z-10 text-lg font-semibold text-white bg-black bg-opacity-30 px-3 py-1 rounded-full">
    {currentMonth}
  </span>
</div>


      {/* SCROLL AREA */}
      <div className="max-h-full overflow-y-auto scroll-smooth">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="sticky top-0 bg-gray-100 border-b z-10">
            <tr>
              <th className="py-4 pl-6">Rank</th>
              <th className="py-4 pl-4">Sales Representative</th>
              <th className="py-4 text-center">Active Clients</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr><td colSpan="3" className="py-10 text-center">Loading...</td></tr>
            ) : (
              records.map((item) => (
                <tr key={item.id} className="border-b hover:bg-blue-50">
                  <td className="py-4 pl-6">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${getRankBadgeColor(item.rank)}`}
                    >
                      {getRankIcon(item.rank)}
                    </div>
                  </td>

                  <td className="py-4 pl-4">
                    <div className="flex items-center space-x-4">
                      <img src={item.profilePicture} className="w-12 h-12 rounded-full" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-xs text-gray-500">Rank #{item.rank}</p>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 text-center">
                    <span className="text-lg font-bold text-blue-600">{item.activeClients}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center border-t px-6 py-4 bg-gray-50 rounded-b-xl">
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          className="px-3 py-2 bg-white border rounded-lg"
        >
          ← Previous
        </button>

        <span>Page {currentPage} of {nPage}</span>

        <button
          onClick={() => currentPage < nPage && setCurrentPage(currentPage + 1)}
          className="px-3 py-2 bg-white border rounded-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default TableLeaderBoard;
