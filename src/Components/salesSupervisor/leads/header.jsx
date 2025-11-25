import React, { useState } from 'react';
import ByTellecaller from './ByTellecaller';
import ByMr from './ByMr';
import headerBg from "../../../assets/devbackground.png";



const Header = () => {
    const [activeComponent, setActiveComponent] = useState("Mr");
    

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Mr':
                return <ByMr />;
            case 'ByTeller':
                return <ByTellecaller />;
            default:
                return <ByMr />;
        }
    };
    return (
        <div>
            <div className="mb-4 ">
                <div className="text-xl font-bold rounded-lg shadow-lg p-4 text-white  bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}>
                    <h2 className="text-lg font-bold">Client Leads</h2>
                </div>
            </div>

            <div className="flex items-start p-0 border-b-2 rounded-t mt-4 gap-1">
                <h3
                    className={`text-md flex justify-center items-center cursor-pointer p-2 rounded hover:border-blue-500 hover:text-blue-500 ${activeComponent === "Mr"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : ""
                        }`}
                    onClick={() => setActiveComponent("Mr")}
                >
                    By MRs
                </h3>
                <h3
                    className={`flex justify-center items-center text-md cursor-pointer p-2 rounded hover:border-blue-500 hover:text-blue-500 ${activeComponent === "ByTeller"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : ""
                        }`}
                    onClick={() => setActiveComponent("ByTeller")}
                >
                    By Telecaller
                </h3>

            </div>
            <div>{renderComponent()}</div>
        </div>

    )
}

export default Header