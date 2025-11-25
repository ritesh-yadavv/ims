import React, { useState } from 'react';
import VerifyEmail from "./verifyEmail";
import VerifyOtp from "./verifyOtp";
import CreatePassword from "./createPassword";

const Index = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const submitForm = () => {
    alert('Form submitted');
    // Handle form submission here
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <VerifyEmail nextStep={nextStep} />;
      case 2:
        return <VerifyOtp nextStep={nextStep} />;
      case 3:
        return <CreatePassword submitForm={submitForm} />;
      default:
        return <VerifyEmail nextStep={nextStep} />;
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="grid md:grid-cols-2 w-full h-full">
        <div className="flex justify-center items-center col-span-1">
          <img src="https://d2sv8898xch8nu.cloudfront.net/MediaFiles/image11.png" alt="Logo" className="w-[413px]" />
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default Index;
