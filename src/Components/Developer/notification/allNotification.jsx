import React from "react";
import calendarIcon from "../../../assets/Avatar.png";
import notificationIcon from "../../../assets/notificationAvatar.png";

const notifications = [
  {
    icon: calendarIcon,
    message:
      "The software will go under update during 12:30 to 1:30 on March 07, 2024",
    date: "March 1, 2024",
  },
  {
    icon: notificationIcon,
    message:
      "Your leave from March 20 - March 24, 2024 has been approved",
    date: "March 1, 2024",
  },
  {
    icon: notificationIcon,
    message:
      "Holiday coming up. Holi on 23rd March",
    date: "March 1, 2024",
  },
  {
    icon: notificationIcon,
    message:
      "New Client activation appointed by Aayush Agarwal",
    date: "Feb 29, 2024",
  },
];

const AllNotification = () => {
  return (
    <div>
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`w-full border-b p-3 flex items-center ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={notification.icon}
            alt="icon"
          />
          <div className="text-sm flex-1">
            <p className="text-[#222222] w-[90%]">{notification.message}</p>
            <span className="text-[8px] text-[#717171]">{notification.date}</span>
          </div>
          <button className="text-[#222222] hover:text-red-500">X</button>
        </div>
      ))}
    </div>
  );
};

export default AllNotification;
