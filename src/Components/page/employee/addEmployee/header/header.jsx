import React, { useState } from 'react';
import PersonalDetails from '../step/personalDetails';
import Account from '../step/account';
import Verification from '../step/verification';
import BankInformation from '../step/bankInformation';
import { FiArrowLeft } from "react-icons/fi";
import { FaUser, FaCheckCircle, FaUniversity, FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [nextState, setNextState] = useState({ step: 1 });
  let navigate = useNavigate();

  const nextStep = () => {
    setNextState((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  const renderComponent = () => {
    switch (nextState.step) {
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

  return (
    <>
      <h3 className=" font-jakarta max-md:text-sm max-md:text-center mt-1 text-md font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-3 rounded-t-md border border-gray-300">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mr-2"
        >
          <FiArrowLeft className="mr-2" />New Employee Registration
        </button>
      </h3>

      <div className="flex items-start justify-between p-0 border-b-4 rounded-t mt-4">
        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded ${(nextState.step === 1) ? 'bg-blue-500 text-white' : ''}`}

        >
          <FaUser className="md:mr-2" />
          <span className="hidden md:block">Profile Information</span>
        </h3>

        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded ${(nextState.step === 2) ? 'bg-blue-500 text-white' : ''}`}

        >
          <FaCheckCircle className="md:mr-2" />
          <span className="hidden md:block">Verification</span>
        </h3>

        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded ${(nextState.step === 3) ? 'bg-blue-500 text-white' : ''}`}

        >
          <FaUniversity className="mr-2" />
          <span className="hidden md:block">Bank Information</span>
        </h3>

        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded ${(nextState.step === 4) ? 'bg-blue-500 text-white' : ''}`}

        >
          <FaLock className="mr-2" />
          <span className="hidden md:block">Account Access</span>
        </h3>
      </div>
      <div>
        {renderComponent()}
      </div>
    </>
  );
};

export default Header;
