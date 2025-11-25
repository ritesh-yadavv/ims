import React, { useState } from 'react';
import PersonalDetails from '../step/personalDetails';
import Account from '../step/account';
import Verification from '../step/verification';
import BankInformation from '../step/bankInformation';
import { FaUser, FaCheckCircle, FaUniversity, FaLock } from 'react-icons/fa';

const Header = () => {
  const [nextState, setNextState] = useState({ step: 1 });

  const handleStepChange = (step) => {
    setNextState({ step });
  };

  const renderComponent = () => {
    switch (nextState.step) {
      case 1:
        return <PersonalDetails nextStep={() => handleStepChange(2)} />;
      case 2:
        return <Verification nextStep={() => handleStepChange(3)} />;
      case 3:
        return <BankInformation nextStep={() => handleStepChange(4)} />;
      case 4:
        return <Account />;
      default:
        return <PersonalDetails nextStep={() => handleStepChange(2)} />;
    }
  };

  return (
    <>
      <div className="flex items-start justify-between p-0 border-b-4 rounded-t mt-4">
        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded ${nextState.step === 1 ? 'bg-blue-500 text-white' : ''
            }`}
          onClick={() => handleStepChange(1)}
        >
          <FaUser className="md:mr-2" />
        </h3>
        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded ${nextState.step === 2 ? 'bg-blue-500 text-white' : ''
            }`}
          onClick={() => handleStepChange(2)}
        >
          <FaCheckCircle className="md:mr-2" />
        </h3>
        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded ${nextState.step === 3 ? 'bg-blue-500 text-white' : ''
            }`}
          onClick={() => handleStepChange(3)}
        >
          <FaUniversity className="mr-2" />
        </h3>
        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded ${nextState.step === 4 ? 'bg-blue-500 text-white' : ''
            }`}
          onClick={() => handleStepChange(4)}
        >
          <FaLock className="mr-2" />
        </h3>
      </div>
      <div>{renderComponent()}</div>
    </>
  );
};

export default Header;
