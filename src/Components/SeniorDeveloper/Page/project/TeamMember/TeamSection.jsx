import React, { useState } from "react";
import TeamMember from "./TeamPlan/teamMember";
import PlanAndDiscussions from "./TeamPlan/planAndDiscussions";
import ExecutionStatus from "./TeamPlan/executionStatus";


const tabs = ["Team Members", "Plan & Discussions", "Execution Status"];

const TeamSection = () => {
  const [selectedTab, setSelectedTab] = useState("Team Members");

  return (
    <>
      <div className=" bg-[#ECECEC] h-auto ">
        <div className="p-0 font-jakarta">
          <div className="flex space-x-6 space-y-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(tab)}
                className={`pb-2 font-medium transition-colors duration-300 hover:text-black ${selectedTab === tab ? "border-b-2 border-black text-black font-semibold text-base" : "text-black/70 text-base font-normal"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>


          {/* Team Members */}
          {selectedTab === "Team Members" && (
            <TeamMember />
          )}

          {/* Plan & Discussions */}
          {selectedTab === "Plan & Discussions" && (
            <PlanAndDiscussions />
          )}

          {/* Execution Status */}

          {selectedTab === "Execution Status" && (
            <ExecutionStatus />
          )}
        </div>
      </div>
    </>

  );
};

export default TeamSection;