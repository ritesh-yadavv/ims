import React, { useState } from 'react';
import AccountAccess from "../component/profile/accountAccess";
import BankInformation from "../component/profile/bankInformation";
import Verification from "../component/profile/verification";
import PersonalInformation from '../component/profile/personalInformation';
import { FaUser, FaCheckCircle, FaUniversity, FaLock } from 'react-icons/fa';

const Header = () => {
  const [activeComponent, setActiveComponent] = useState("PersonalInformation");

  const renderComponent = () => {
    switch (activeComponent) {
      case 'PersonalInformation':
        return <PersonalInformation />;
      case 'Verification':
        return <Verification />;
      case 'BankInformation':
        return <BankInformation />;
      case 'AccountAccess':
        return <AccountAccess />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div>
      <div className="flex items-start justify-between p-0 border-b-4 rounded-t">
        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded hover:bg-blue-500 hover:text-white ${activeComponent === 'PersonalInformation' && 'bg-blue-500 text-white'}`}
          onClick={() => setActiveComponent('PersonalInformation')}
        >
          <FaUser className="mr-2" />
          <span className="hidden md:block">Profile Information</span>
        </h3>
        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded hover:bg-blue-500 hover:text-white ${activeComponent === 'Verification' && 'bg-blue-500 text-white'}`}
          onClick={() => setActiveComponent('Verification')}
        >
          <FaCheckCircle className="mr-2" />
          <span className="hidden md:block">Verification</span>
        </h3>
        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded hover:bg-blue-500 hover:text-white ${activeComponent === 'BankInformation' && 'bg-blue-500 text-white'}`}
          onClick={() => setActiveComponent('BankInformation')}
        >
          <FaUniversity className="mr-2" />
          <span className="hidden md:block"> Bank Information</span>
        </h3>
        <h3
          className={`text-md flex justify-center items-center cursor-pointer p-2 rounded hover:bg-blue-500 hover:text-white ${activeComponent === 'AccountAccess' && 'bg-blue-500 text-white'}`}
          onClick={() => setActiveComponent('AccountAccess')}
        >
          <FaLock className="mr-2" />
          <span className="hidden md:block">Account Access</span>
        </h3>
      </div>
      <div>
        {renderComponent()}
      </div>
    </div>
  );
}



export default Header;
