import React from "react";
import DevSideBar from "../widgets/deveSidebar";
import ProjectHeader from "../../Developer/Devprojects/projectHeader/projectHeader";
import TeamSection from "../../Developer/Devprojects/TeamMumbers/TeamSection";
import AddLink from "../../Developer/Devprojects/AddLink/AddLinkComponent";

const ProjectsTeamDashboard = () => {
  return (
    <div className="flex bg-[#ECECEC] min-h-screen  overflow-y-auto">
      <DevSideBar />
      <div className="flex-1 p-6  overflow-auto h-screen">
        <ProjectHeader />
        <AddLink />
        <TeamSection />
      </div>
    </div>
  );
};

export default ProjectsTeamDashboard;