import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const sidebarItems = [
  "Home",
  "001 Integrate Gateway...",
  "002", "003", "004", "005", "006", "007", "008", "009", "010",
];

//Each member has tasks and active task index
const teamMembers = [
  {
    role: "Backend",
    name: "You",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    tasks: ["Not Started Yet", "In Progress", "Completed"],
    activeTaskIndex: 0,
  },
  {
    role: "UI/UX",
    name: "Kundan Kumar",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    tasks: ["Not Started Yet", "In Progress", "Completed"],
    activeTaskIndex: 2,
  },
  {
    role: "Frontend",
    name: "Rajnish Kumar",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    tasks: ["Not Started Yet", "In Progress", "Completed"],
    activeTaskIndex: 1,
  },
  {
    role: "App. Developer",
    name: "Nishant Kumar",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    tasks: ["Not Started Yet", "In Progress", "Completed"],
    activeTaskIndex: 2,
  },
  {
    role: "Deployment",
    name: "Hrithik Roshan",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    tasks: ["Not Started Yet", "In Progress", "Completed"],
    activeTaskIndex: 1,
  },
   {
    role: "Frontend",
    name: "Rajnish Kumar",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    tasks: ["Not Started Yet", "In Progress", "Completed"],
    activeTaskIndex: 1,
  },
  {
    role: "App. Developer",
    name: "Nishant Kumar",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    tasks: ["Not Started Yet", "In Progress", "Completed"],
    activeTaskIndex: 2,
  },
  {
    role: "Deployment",
    name: "Hrithik Roshan",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    tasks: ["Not Started Yet", "In Progress", "Completed"],
    activeTaskIndex: 1,
  },
];

//  Dynamic styling only for active status
const getStatusStyle = (task, activeTask, isYou, memberName) => {
  const isActive = task === activeTask;
  if (isYou) {
    if (task === "Not Started Yet" && isActive) return "bg-[#FFD7AB] text-[#E57A06]";
    return isActive ? "border text-[#444]" : "text-gray-400 border border-dashed";
  } else {
    if (!isActive) return "text-gray-400 border border-dashed";
    if (task === "Not Started Yet") return "border";
    if (task === "In Progress") return "bg-[#C0C2D0] text-[#14509F]";
    if (task === "Completed") return "bg-[#C1F6C0] text-[#005F03]";
  }
};

const ExecutionStatus = () => {
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);

  return (
    <div className="flex h-auto bg-[#F6F6F6] font-jakarta mt-2">
      {/* Sidebar */}
      <aside className="w-1/5 h-[380px] border-r-2 border-[#00000040] p-4 rounded-l flex flex-col">
        <h2 className="text-base font-semibold mb-4 text-[#14509F]">Sales Support</h2>
        <div className="flex-1 overflow-y-auto font-jakarta hide-scrollbar">
          <ul>
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedItem(item)}
                className={`p-2 rounded-md mb-2 cursor-pointer ${selectedItem === item
                  ? "bg-[#B9C0F2] font-medium text-base"
                  : "text-black/50 text-sm hover:bg-[#E1E9FF]"
                  }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 bg-[#B9C0F2] p-2 rounded-md">
          <h3 className="text-base font-medium text-[#2B2E40]">Notifications</h3>
        </div>
      </aside>

      {/* Main Content */}
      <main className="overflow-y-auto p-4 bg-gray-100 h-[380px] w-full font-jakarta hide-scrollbar">
        <div className="grid grid-cols-5 gap-4">
          {teamMembers.map((member, idx) => {
            const isYou = member.name === "You";
            const activeTask = member.tasks[member.activeTaskIndex];

            return (
              <div
                key={idx}
                className="bg-[#F6F6F6] rounded-lg border shadow-md p-2 flex flex-col items-center min-w-[200px]"
              >
                {/* Header */}
                <div
                  className={`flex items-center gap-2 p-2 rounded-md w-full ${isYou
                    ? "bg-[#14509F] text-white"
                    : "bg-[#D9D9D9] text-black"
                    }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-semibold">{member.role}</div>
                    <div className="text-xs">{member.name}</div>
                  </div>
                </div>

                {/* Task List */}
                <div className="w-full mt-3 space-y-2 font-jakarta">
                  {member.tasks.map((task, taskIdx) => (
                    <div
                      key={taskIdx}
                      className={`relative text-center rounded-md py-3 px-2 text-sm font-medium ${getStatusStyle(task, activeTask, isYou, member.name)}`}
                    >
                      {task}
                      {member.name === "Rajnish Kumar" && task === "In Progress" && (
                        <FaExclamationCircle className="text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2 text-xs" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ExecutionStatus;
