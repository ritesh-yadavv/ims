import React from "react";
import SrSideBar from "../widgets/srSidebar";
import ProjectHeader from "../../SeniorDeveloper/Page/project/Header/header";
import AddLink from "../../SeniorDeveloper/Page/project/AddLink/addLink";
import TeamSection from "../../SeniorDeveloper/Page/project/TeamMember/TeamSection";

const Index = () => {
  return (
    <div className="flex bg-[#ECECEC] min-h-screen  overflow-y-auto">
      <SrSideBar />
      <div className="flex-1 p-6  overflow-auto h-screen">
        <ProjectHeader />
        <AddLink />
        <TeamSection />
      </div>
    </div>
  );
};

export default Index;