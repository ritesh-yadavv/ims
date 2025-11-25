import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowUpRight } from "../../../assets/ArrowUp.svg";

const AllProjectCard = ({ project }) => {
    const navigate = useNavigate();

    const handleStatusClick = () => {
        navigate("/sr/dev/project/team");
    };

    return (
        <>
            <div
                onClick={handleStatusClick}
                className="group bg-[#F6F6F6] p-5 border border-transparent hover:border-[#14509F] transition-all duration-500 ease-in-out rounded-md shadow-lg flex flex-col w-full relative cursor-pointer"
            >
                {/* Project Title & Status */}
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#000000]">{project.name}</h3>
                    <button
                        className={`px-3 py-1 text-sm font-medium rounded-lg text-white ${project.status === "Complete" ? "bg-[#058800]" : "bg-[#14509F]"
                            }`}
                    >
                        {project.status}
                    </button>
                </div>

                {/* Project Description */}
                <p className="text-black/70 text-sm font-jakarta font-normal mt-1">
                    {project.description}
                </p>

                {/* Project Members & Progress Bar */}
                <div className="flex items-center justify-between w-full mt-6">
                    {/* Project Members */}
                    <div className="flex -space-x-4">
                        {project.members.map((member, index) => (
                            <img
                                key={index}
                                src={member.image}
                                alt={member.name}
                                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                            />
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="flex items-center space-x-4 ml-8 w-full font-jakarta">
                        <div className="relative w-full">
                            <div className="w-full bg-gray-300 rounded-full h-2.5 overflow-hidden">
                                <div
                                    className="h-2.5 rounded-full"
                                    style={{
                                        width: `${project.progress}%`,
                                        background: 'linear-gradient(to right, #B9C0F2, #14509F)'
                                    }}
                                ></div>
                            </div>
                            <div
                                className="absolute top-0 -mt-1 h-4 w-4 border rounded-full"
                                style={{
                                    left: `calc(${project.progress}% - 8px)`,
                                    background: 'linear-gradient(to right, #B9C0F2, #14509F)'
                                }}
                            ></div>
                        </div>

                        <span className="text-[#14509F] text-sm font-semibold">
                            {project.progress}%
                        </span>

                        {/* Rotating Arrow on Hover */}
                        <div className="flex justify-end rounded-full border border-black p-1 ">
                            <ArrowUpRight className="text-black w-7 h-7 p-1 font-light transition-transform duration-500 group-hover:rotate-45" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProjectCard;
