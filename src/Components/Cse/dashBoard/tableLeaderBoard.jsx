import React, { useState } from "react";
import profile from "../../../assets/Avatar.png";
import headerBg from "../../../assets/BackgroundImageCalender.png";
const array = [
  { photo: profile, name: "Kamilia klkDugala", age: 20 },
  { photo: profile, name: "Kamilia Dugala", age: 32 },
  { photo: profile, name: "Kam;lkkmilia Dugala", age: 39 },
  { photo: profile, name: "Kamilia Dugala", age: 82 },
  { photo: profile, name: "Kamilia Dugala", age: 87 },
  { photo: profile, name: "Kamilia Dugala", age: 92 },
  { photo: profile, name: "Kamilia Dugala", age: 45 },
  { photo: profile, name: "Kamilia Dugala", age: 30 },
  { photo: profile, name: "Kamilia Dugala", age: 12 },
  { photo: profile, name: "Kamilia Dugala", age: 13 },
  { photo: profile, name: "Kamilia Dugala", age: 33 },
  { photo: profile, name: "Kamilia Dugala", age: 72 },
];

const TableLeaderBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = array.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(array.length / recordsPerPage);

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < nPage) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="max-w-3xl mx-auto my-6  rounded-lg shadow-lg font-jakarta">
      <div className="border-b py-3  flex justify-between px-4 shadow bg-cover bg-center bg-no-repeat  "
          style={{ backgroundImage: `url(${headerBg})` }} >
        <span className="text-lg font-extrabold text-white">Monthly LeaderBoard</span>
        <span className="text-lg font-medium text-white">February</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 pl-8">Name</th>
              <th className="py-3">Active Clients</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b hover:bg-gray-100 transition"
              >
                <td className="flex items-center space-x-4 py-3 pl-8">
                  <img
                    src={item.photo}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{item.name}</span>
                </td>
                <td className="py-3">{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center border-t p-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-bold uppercase transition ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {nPage}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === nPage}
          className={`px-4 py-2 text-sm font-bold uppercase transition ${
            currentPage === nPage ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableLeaderBoard;
