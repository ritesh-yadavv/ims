import React from "react";
import calendarIcon from "../../../assets/Avatar.png";
import notificationIcon from "../../../assets/notificationAvatar.png";

const unreadNotifications = [
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
];

const UnreadNotification = () => {
  return (
    <div >
      {unreadNotifications.map((notification, index) => (
        <div
          key={index}
          className="w-full border-b p-3 flex items-center bg-[#F6F6F6]"
        >
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={notification.icon}
            alt="icon"
          />
          <div className="text-sm flex-1 ">
            <p className="text-[#222222] w-[90%]">{notification.message}</p>
            <span className="text-[8px] text-[#717171]">{notification.date}</span>
          </div>
          <button className="text-[#222222] hover:text-red-500">X</button>
        </div>
      ))}
    </div>
  );
};

export default UnreadNotification;
