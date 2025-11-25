import React, { useState } from "react";
import SrSidebar from "../widgets/srSidebar";
import AllNotification from "./allNotification";
import UnreadNotification from "./unreadNotification";


const Notification = () => {
  const [unread, setUnread] = useState(false)
  const [all, setAll] = useState(true)

  const handleUnread = () => {
    setUnread(true);
    setAll(false);
  }
  const handleAll = () => {
    setUnread(false);
    setAll(true);
  }
  return (
    <>
      <div className="flex  min-h-screen bg-[#ECECEC] font-jakarta">
        <SrSidebar />
        <div className="flex-1 p-6 overflow-auto space-y-6">
          <h2 className="text-2xl font-semibold bg-[#F6F6F6]  rounded-lg shadow-lg p-4 text-[#14509F] mb-4">
            Notifications
          </h2>
          {/* main */}
          <div className="bg-[#F6F6F6]  w-[420px] h-full font-jakarta">
            <div className="px-2 min-h-full">
              <div>
                <div className="p-2 xl:pt-1  ">
                  <div className="relative overflow-x-auto  rounded-lg font-jakarta bg-[#F8F8F8]">
                    <button
                      type="button"
                      className={`px-4 py-3 ${unread ? 'bg-white border border-gray-400 rounded-t-lg text-[#14509F] font-bold text-xs' : ''}`}
                      onClick={handleUnread}
                    >
                      Unread <span className="ml-3 text-right aboslute justify-center  bg-red-500  px-1  rounded-full text-xs text-[#222222]">3</span>
                    </button>
                    <button
                      type="button"
                      className={`${all ? 'bg-white rounded-t-lg border border-gray-400 text-[#14509F] font-bold  text-xs' : ''}  px-10 py-3 mr-7`}
                      onClick={handleAll}
                    >
                      All
                    </button>
                    <span className="ml-14 mt-4 text-blue-500  text-[8px] cursor-pointer"> Mark all as read</span>

                    {all && <AllNotification />}
                    {unread && <UnreadNotification />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
