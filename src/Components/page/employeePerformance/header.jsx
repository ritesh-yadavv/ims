import React, { useState } from 'react';
import SalesTeam from './salesTeam';
import DeveloperTeam from './developerTeam';


const Header = () => {
    const [activeComponent, setActiveComponent] = useState("SalesTeam");

    const renderComponent = () => {
        switch (activeComponent) {
            case 'SalesTeam':
                return <SalesTeam />;
            case 'DeveloperTeam':
                return <DeveloperTeam />;
            default:
                return <SalesTeam />;
        }
    };
    return (
        <div>
            <div className="mb-4">
                <h1 className="max-md:text-sm max-md:text-center text-xl font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-3 rounded-t-md border border-gray-300">
                    Employee Performance
                </h1>
            </div>

            <div className="flex items-start  p-0 border-b-4 rounded-t mt-4 gap-1">
                <h3
                    className={`flex justify-center items-center text-md cursor-pointer p-2 rounded hover:border-blue-500 hover:text-blue-500
                         ${activeComponent === "SalesTeam" && "border-b-2 border-blue-500 text-blue-500"}`}
                    onClick={() => setActiveComponent('SalesTeam')}
                >
                    Sales Team
                </h3>
                <h3
                    className={`text-md flex justify-center items-center cursor-pointer p-2 rounded hover:border-blue-500 hover:text-blue-500 
                        ${activeComponent === "DeveloperTeam" && "border-b-2 border-blue-500 text-blue-500"}`}
                    onClick={() => setActiveComponent('DeveloperTeam')}
                >
                    Developer Team
                </h3>

            </div>
            <div>
                {renderComponent()}
            </div>
        </div>
    )
}

export default Header