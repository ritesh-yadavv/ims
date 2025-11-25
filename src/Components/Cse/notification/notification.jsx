import React, { useState } from "react";
import CseSideBar from "../widgets/CseSideBar";
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
      <div

        id="container"
        tabIndex="-1"
        className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full  flex"
      >
        <CseSideBar />
        <div className="bg-gray-200  w-[420px] h-full">
          <div className="px-2 min-h-full">
            <div className="  ">
              <div className="flex items-center justify-between xl:pt-5 p-4 md:p-5  rounded-t ">
                <h3 className="text-3xl font-bold text-gray-900 ">
                  Notifications
                </h3>
              </div>
              
              <div className="p-2 xl:pt-1  ">
                <div className="relative overflow-x-auto  rounded-lg">
                  <button
                    type="button"
                    className={`px-4 py-3 ${unread ? 'bg-white border border-gray-400 rounded-t-lg text-blue-800 font-semibold' : ''}`}
                    onClick={handleUnread}
                  >
                    Unread <span className="ml-3 text-right aboslute justify-center  bg-red-500  px-1  rounded-full text-[14px] text-white">3</span>
                  </button>


                  <button
                    type="button"
                    className={`${all ? 'bg-white rounded-t-lg border border-gray-400 text-blue-800 font-semibold' : ''}  px-10 py-3 mr-7`}
                    onClick={handleAll}
                  >
                    All
                  </button>
                  <span className="ml-14 mt-4 text-blue-800  text-[10px] cursor-pointer"> Mark all as read</span>

                  {all && <AllNotification />}
                  {unread && <UnreadNotification />}
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
