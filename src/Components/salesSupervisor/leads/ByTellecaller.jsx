import React from 'react'
import { useNavigate } from 'react-router-dom';
const data = [
  {
    mrName: "Dugal",
    client: "Dr. Shukla",
    address: "128, Shashi Arcade, Gandhi Maid...",
    city: "West Bengal",
    time: "14:47",
  },
  // Repeating data to simulate rows as seen in the image
  {
    mrName: "Kamini Dugal",
    client: "Dr. Shukla",
    address: "128, Shashi Arcade, Gandhi Maid...",
    city: "Patna",
    time: "14:47",
  },
  {
    mrName: "Kamini Dugal",
    client: "Dr. Shukla",
    address: "128, Shashi Arcade, Gandhi Maid...",
    city: "Patna",
    time: "14:47",
  },
  {
    mrName: "Kamini Dugal",
    client: "Dr. Shukla",
    address: "128, Shashi Arcade, Gandhi Maid...",
    city: "Patna",
    time: "14:47",
  },
  {
    mrName: "Kamini Dugal",
    client: "Dr. Shukla",
    address: "128, Shashi Arcade, Gandhi Maid...",
    city: "Patna",
    time: "14:47",
  },
  {
    mrName: "Kamini Dugal",
    client: "Dr. Shukla",
    address: "128, Shashi Arcade, Gandhi Maid...",
    city: "Patna",
    time: "14:47",
  },
];

const ByTellecaller = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto mt-1">
      <div className="border rounded-lg overflow-hidden shadow-md">
        <table className="w-full table-fixed text-sm">
          <thead>
            <tr className="bg-[#F6F6F6] text-gray-700">
              <th className="py-3 px-4 text-left w-1/5">MR Name</th>
              <th className="py-3 px-4 text-left w-1/5">Client</th>
              <th className="py-3 px-4 text-left w-2/5">Address</th>
              <th className="py-3 px-6 text-left w-1/5">City</th>
              <th className="py-3 px-4 text-left w-1/5">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                onClick={() => navigate("/super-visor-lead/telecallerProfile")}
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
              >
                <td className="py-3 px-4 text-gray-700">{item.mrName}</td>
                <td className="py-3 px-4 text-gray-700">{item.client}</td>
                <td className="py-3 px-4 text-gray-700 truncate">{item.address}</td>
                <td className="py-3 px-6 text-gray-700">{item.city}</td>
                <td className="py-3 px-4 text-gray-700">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ByTellecaller