import React, { useState } from "react";
import PersonalDetails from "../step/personalDetails";
import Account from "../step/account";
import Verification from "../step/verification";
import BankInformation from "../step/bankInformation";

import {
  FaUser,
  FaCheckCircle,
  FaUniversity,
  FaLock,
} from "react-icons/fa";

const Header = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const renderComponent = () => {
    switch (step) {
      case 1:
        return <PersonalDetails nextStep={nextStep} />;
      case 2:
        return <Verification nextStep={nextStep} />;
      case 3:
        return <BankInformation nextStep={nextStep} />;
      case 4:
        return <Account />;
      default:
        return <PersonalDetails nextStep={nextStep} />;
    }
  };

  const stepItems = [
    { id: 1, label: "Profile Information", icon: <FaUser /> },
    { id: 2, label: "Verification", icon: <FaCheckCircle /> },
    { id: 3, label: "Bank Information", icon: <FaUniversity /> },
    { id: 4, label: "Account Access", icon: <FaLock /> },
  ];

  return (
    <>
      {/* HEADER TITLE */}
      <h1 className="max-md:text-sm max-md:text-center mt-1 text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-green-400 p-3 rounded-t-md border border-gray-300">
        New Employee Registration
      </h1>

      {/* STEP NAVIGATION */}
      <div className="flex items-start justify-between p-0 border-b-4 rounded-t mt-4">

        {stepItems.map((item) => (
          <div
            key={item.id}
            onClick={() => goToStep(item.id)}
            className={`text-md flex justify-center items-center cursor-pointer p-2 rounded 
            transition-all duration-200 
            ${
              step === item.id
                ? "bg-blue-500 text-white shadow-md scale-105"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            <span className="hidden md:block">{item.label}</span>
          </div>
        ))}

      </div>

      {/* STEP COMPONENT RENDER */}
      <div className="mt-4">{renderComponent()}</div>
    </>
  );
};

export default Header;
