import React, { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

const sidebarItems = ["Home", "001 Integrate Gateway...", "002", "003", "004", "005", "006", "007", "008", "009", "010"];
const statuses = [
  { label: "Not Started", icon: "❌" },
  { label: "In Progress", icon: "📈" },
  { label: "Completed", icon: "✔️" },
  { label: "Deployed", icon: "☁️" }
];

const ExecutionStatus = () => {
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);
  const [currentStatus, setCurrentStatus] = useState(statuses[1].label);
  const [comments, setComments] = useState([
    {
      name: "Nishant Kumar",
      role: "App Developer",
      time: "Today 12:14 am",
      text: "Rerum eum aut. Fugiat amet porro numquam quaerat voluptatem. Exesse ut @Niari Kumar Singh.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Niarj Kumar Singh",
      role: "Backend Developer",
      time: "Today 4:36 pm",
      text: "Backend for this is done from my side... I have sent the API to @Rajnish Kumar. Kindly integrate.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Nishant Kumar",
      role: "App Developer",
      time: "Today 12:14 am",
      text: "Rerum eum aut. Fugiat amet porro numquam quaerat voluptatem. Exesse ut @Niari Kumar Singh.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Niarj Kumar Singh",
      role: "Backend Developer",
      time: "Today 4:36 pm",
      text: "Backend for this is done from my side... I have sent the API to @Rajnish Kumar. Kindly integrate.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Nishant Kumar",
      role: "App Developer",
      time: "Today 12:14 am",
      text: "Rerum eum aut. Fugiat amet porro numquam quaerat voluptatem. Exesse ut @Niari Kumar Singh.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Niarj Kumar Singh",
      role: "Backend Developer",
      time: "Today 4:36 pm",
      text: "Backend for this is done from my side... I have sent the API to @Rajnish Kumar. Kindly integrate.",
      avatar: "https://via.placeholder.com/40"
    }
  ]);

  return (
    <div className="flex h-auto bg-[#F6F6F6] font-jakarta mt-2">
      {/* Sidebar */}
      <div className="w-1/5 h-[380px] border-r-2 border-[#00000040] p-4 rounded-l font-jakarta flex flex-col">
        <h2 className="text-base font-semibold mb-4 text-[#14509F]">Sales Support</h2>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <ul>
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`p-2 rounded-md mb-2 cursor-pointer font-jakarta ${selectedItem === item
                  ? "bg-[#B9C0F2] font-medium text-base"
                  : "text-black/50 text-sm hover:bg-[#E1E9FF]"
                  }`}
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Fixed Bottom Notifications */}
        <div className="mt-2 bg-[#B9C0F2] p-2 rounded-md">
          <h3 className="text-base font-medium text-[#2B2E40]">Notifications</h3>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 p-4 bg-[#F6F6F6] font-jakarta">
        <h2 className="text-base font-semibold text-black">Payment Feature</h2>

        {/* Status Buttons */}
        <div className="flex space-x-4 py-4">
          {statuses.map((status, index) => (
            <button
              key={index}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md border transition-all ${currentStatus === status.label ? "bg-yellow-300" : "bg-gray-200"
                }`}
              onClick={() => setCurrentStatus(status.label)}
            >
              <span>{status.icon}</span>
              <span>{status.label}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Comments Section */}
        <div className="p-4 border h-[253px] border-[#00000080] rounded-lg shadow-md max-h-[300px] overflow-y-auto hide-scrollbar">
          {comments.map((comment, index) => (
            <div key={index} className="pb-4 mb-4 border-b flex space-x-4 items-start">
              <img src={comment.avatar} alt="avatar" className="w-10 h-10 rounded-full" />

              <div className="flex-1 font-jakarta">
                {/* First Row: name, role, time */}
                <div className="flex flex-wrap space-x-6 items-center">
                  {/* Name and Role */}
                  <p className="font-medium text-black text-sm">
                    {comment.name}, <span className="text-gray-500 font-medium text-xs">{comment.role}</span>
                  </p>

                  {/* Dot + Time */}
                  <p className="text-xs text-gray-600 flex items-center">
                    <span className="text-gray-500 text-lg leading-none mr-1">•</span> {comment.time}
                  </p>
                </div>
                {/* Second Row: Comment text */}
                <p className="mt-1 text-gray-700"> {comment.text}</p>
              </div>

              <div className="flex space-x-2 text-gray-500 text-lg">
                <FaEdit className="cursor-pointer hover:text-blue-500" />
                <FaTrash className="cursor-pointer hover:text-red-500" />
                <FaCheck className="cursor-pointer hover:text-green-500" />
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default ExecutionStatus;
