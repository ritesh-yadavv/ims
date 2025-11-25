import React from "react";
import ProjectBg from "../../../../../assets/Project_Card_bg.svg";
import Image1 from "../../../../../assets/8.png";
import Image2 from "../../../../../assets/1.png";
import Image3 from "../../../../../assets/2.png";
import Image4 from "../../../../../assets/3.png";
import Image5 from "../../../../../assets/4.png";

const teamMembers = [
    { name: " You Ritesh", role: "Backend Developer", image: Image1 },
    { name: "Rajnish Kumar", role: "Frontend Developer", image: Image2 },
    { name: "Nishant Kumar", role: "App Developer", image: Image3 },
    { name: "Rahul", role: "DevOps Engineer", image: Image4 },
    { name: "Kundan Kumar", role: "UI/UX Designer", image: Image5 },
    { name: " You Ritesh", role: "Backend Developer", image: Image1 },
    { name: "Rajnish Kumar", role: "Frontend Developer", image: Image2 },
    { name: "Nishant Kumar", role: "App Developer", image: Image3 },
    { name: "Rahul", role: "DevOps Engineer", image: Image4 },
    { name: "Kundan Kumar", role: "UI/UX Designer", image: Image5 },
    { name: " You Ritesh", role: "Backend Developer", image: Image1 },
    { name: "Rajnish Kumar", role: "Frontend Developer", image: Image2 },
    { name: "Nishant Kumar", role: "App Developer", image: Image3 },
    { name: "Rahul", role: "DevOps Engineer", image: Image4 },
    { name: "Kundan Kumar", role: "UI/UX Designer", image: Image5 },
];

// Simulate current logged-in user
const loggedInUserName = " You Ritesh";

const TeamMembers = () => {
    return (
        <div className="  bg-[#ECECEC] h-auto">
            <div className="max-h-[365px] overflow-y-scroll hide-scrollbar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 font-jakarta">
                {teamMembers.map((member, index) => {
                    const isCurrentUser = loggedInUserName === member.name;

                    return (
                        <div
                            key={index}
                            className={`flex items-center p-4 h-[91px] rounded-lg text-base font-semibold    ${isCurrentUser ? "bg-[#14509F] text-white shadow-black/40 shadow-lg  transition-all duration-300 " : "text-black bg-cover bg-center"
                                }`}
                            style={!isCurrentUser ? { backgroundImage: `url(${ProjectBg})` } : {}}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-16 h-16 rounded-full object-cover border border-white mr-4"
                            />
                            <div>
                                <p className="font-semibold text-base">{member.name}</p>
                                <p className={`text-xs font-normal ${isCurrentUser ? "text-white/70" : "text-black/70"}`}>
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamMembers;
