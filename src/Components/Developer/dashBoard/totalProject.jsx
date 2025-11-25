import React from "react";
import BackgroundImage from "../../../assets/devbackground.png";
import BackgroundIcon from "../../../assets/devbackgroundIcon.png";

const TotalProject = () => {
    const projects = [
        { id: 1, name: 'Project 1 Name', progress: 75 },
        { id: 2, name: 'Project 2 Name', progress: 50 },
        { id: 3, name: 'Project 1 Name', progress: 80 },
        { id: 4, name: 'Project 2 Name', progress: 65 },
        { id: 5, name: 'Project 3 Name', progress: 20 }
    ];

    return (
        <div className="bg-[#ECECEC] font-jakarta" >
            <div
                className="relative overflow-hidden bg-cover text-white rounded-lg shadow-md p-6 flex items-center"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <img
                    src={BackgroundIcon}
                    alt="Icon"
                    className="absolute top-4 left-4 w-20 h-20"
                />
                <div className="ml-20 font-jakarta">
                    <h3 className="text-sm font-normal">Total Projects</h3>
                    <p className="text-4xl font-bold">{projects.length}</p>
                </div>
            </div>

            {/* Project Overview Title */}
            <h2 className="text-xl font-jakarta font-semibold text-[#000000] mt-8">
                Project Overview
            </h2>

            <div className="bg-[#F6F6F6] rounded-lg shadow-md p-4 mt-4 font-jakarta">
                <div className="grid grid-cols-2 font-normal text-xs border-b pb-2 mb-4 text-black/70">
                    <span className="">Projects</span>
                    <span className="text-left">Progress</span>
                </div>
                <div className="space-y-4">
                    {projects.map(({ id, name, progress }) => (
                       <div
                       key={id}
                       style={{ borderWidth: "0.25px" }}
                       className="bg-[#F6F6F6] border border-[#a8f3e6]  rounded-lg p-3 flex items-center justify-between space-x-4 font-jakarta"
                     >
                     
                            <div className="flex items-center text-sm space-x-2 text-[#000000] font-semibold">
                                <span >{id}.</span>
                                <span >{name}</span>
                            </div>
                            <div className="flex items-center space-x-2 w-1/2">
                                <div className="relative w-full">
                                    <div className="w-full bg-gray-300 rounded-full h-2.5 overflow-hidden">
                                        <div
                                            className="h-2.5 rounded-full"
                                            style={{
                                                width: `${progress}%`,
                                                background: 'linear-gradient(to right, #B9C0F2, #14509F)'
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className="absolute top-0 -mt-1 h-4 w-4  border rounded-full"
                                        style={{ left: `calc(${progress}% - 8px)`,
                                        background: 'linear-gradient(to right, #B9C0F2, #14509F)'
                                     }}
                                    ></div>
                                </div>
                                <span className="text-[#14509F] text-sm font-semibold">{progress}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TotalProject;
