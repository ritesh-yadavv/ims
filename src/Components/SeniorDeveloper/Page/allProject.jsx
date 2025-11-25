import React from "react";
import SrSideBar from "../widgets/srSidebar";
import ProjectCard from "./allProjectCard";
import Image1 from "../../../assets/1.png";
import Image2 from "../../../assets/2.png";
import Image3 from "../../../assets/3.png";
import Image4 from "../../../assets/4.png";


// Sample project data with image-based members
const projects = [
  {
    name: "Internal Management System (IMS)",
    description: "A system to manage internal processes efficiently.",
    status: "Active",
    progress: 75,
    members: [
      { name: "Ritesh", image: Image1 },
      { name: "Rajnish", image: Image2 },
      { name: "Nishant", image: Image3 },
      { name: "Hrithik", image: Image4 },
    ],
  },
  {
    name: "Reshita Official Website",
    description: "The official website for Reshita.",
    status: "Complete",
    progress: 100,
    members: [
      { name: "Ritesh", image: Image1 },
      { name: "Rajnish", image: Image2 },
      { name: "Nishant", image: Image3 },
      { name: "Hrithik", image: Image4 },
    ],
  },
  {
    name: "DOC-AID",
    description: "A healthcare management platform.",
    status: "Active",
    progress: 75,
    members: [
      { name: "Ritesh", image: Image1 },
      { name: "Rajnish", image: Image2 },
      { name: "Nishant", image: Image3 },
      
    ],
  },
  {
    name: "Reshita Official Website",
    description: "The official website for Reshita.",
    status: "Complete",
    progress: 100,
    members: [
      { name: "Ritesh", image: Image1 },
      { name: "Rajnish", image: Image2 },
      { name: "Nishant", image: Image3 },
      { name: "Hrithik", image: Image4 },
    ],
  },
  {
    name: "Reshita Official Website",
    description: "The official website for Reshita.",
    status: "Complete",
    progress: 100,
    members: [
      { name: "Ritesh", image: Image1 },
      { name: "Rajnish", image: Image2 },
      { name: "Nishant", image: Image3 },
      { name: "Hrithik", image: Image4 },
    ],
  },
  {
    name: "Reshita Official Website",
    description: "The official website for Reshita.",
    status: "Complete",
    progress: 100,
    members: [
      { name: "Ritesh", image: Image1 },
      { name: "Rajnish", image: Image2 },
      { name: "Nishant", image: Image3 },
      { name: "Hrithik", image: Image4 },
    ],
  },
  {
    name: "Reshita Official Website",
    description: "The official website for Reshita.",
    status: "Complete",
    progress: 100,
    members: [
      { name: "Ritesh", image: Image1 },
      { name: "Rajnish", image: Image2 },
      { name: "Nishant", image: Image3 },
      { name: "Hrithik", image: Image4 },
    ],
  },

];

// overflow-y-scroll space-y-6 scrollbar-hide

const AllProject = () => {
  return (
    <div className="flex min-h-screen   bg-[#ECECEC] font-jakarta">
      {/* Sidebar */}
      <SrSideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto  space-y-6">
        <h2 className="text-2xl font-semibold bg-[#F6F6F6] rounded-lg shadow-lg p-4 text-[#14509F] mb-4">
          Projects
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-4">All Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 font-jakarta  h-[540px] overflow-y-auto hide-scrollbar ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProject;
