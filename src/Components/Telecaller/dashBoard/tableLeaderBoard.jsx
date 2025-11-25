import React, { useState } from "react";
import profile from "../../../assets/Avatar.png";
import headerBg from "../../../assets/BackgroundImageCalender.png";

const array = [
  { photo: profile, name: "Kamilia Dugala", age: 20 },
  { photo: profile, name: "Rohit Gupta", age: 32 },
  { photo: profile, name: "Aisha Khan", age: 39 },
  { photo: profile, name: "Vikram Verma", age: 82 },
  { photo: profile, name: "Nisha Patel", age: 87 },
  { photo: profile, name: "Karthik Sharma", age: 92 },
  { photo: profile, name: "Aman Singh", age: 45 },
  { photo: profile, name: "Pooja Mehta", age: 30 },
  { photo: profile, name: "Deepak Yadav", age: 12 },
  { photo: profile, name: "Sonia Das", age: 13 },
  { photo: profile, name: "Arjun Jain", age: 33 },
  { photo: profile, name: "Kiran Rao", age: 72 },
];

const TableLeaderBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = array.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(array.length / recordsPerPage);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const nextPage = () => currentPage < nPage && setCurrentPage(currentPage + 1);

  return (
    <div className="w-full border rounded-xl shadow-md bg-white">
      {/* Header */}
      <div className="border-b py-3  flex justify-between px-4 rounded-t-xl shadow bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${headerBg})` }}>
        <span className="text-lg font-semibold text-white">Monthly LeaderBoard</span>
        <span className="text-lg font-semibold text-white">February</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 pl-8 font-semibold">Name</th>
              <th className="py-3 font-semibold">Active Clients</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-100 transition">
                <td className="flex items-center space-x-4 py-3 pl-8">
                  <img src={item.photo} alt="Profile" className="w-10 h-10 rounded-full" />
                  <span>{item.name}</span>
                </td>
                <td className="py-3">{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center border-t p-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-bold uppercase transition ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          Previous
        </button>

        <span className="text-sm font-medium">
          Page {currentPage} of {nPage}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === nPage}
          className={`px-4 py-2 text-sm font-bold uppercase transition ${
            currentPage === nPage ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableLeaderBoard;
