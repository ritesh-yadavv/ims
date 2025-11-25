import React from "react";
import Logo from "../../../assets/Logo.png";
import BusinessRegister from "./businessRegister";

const Index = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="grid md:grid-cols-2 w-full h-full">

        {/* LEFT SECTION — Logo */}
        <div className="hidden md:flex justify-center items-center bg-white">
          <img
            src={Logo}
            alt="Logo"
            className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[460px]"
          />
        </div>

        {/* RIGHT SECTION — Business Register Form */}
        <div className="flex justify-center items-center">
          <BusinessRegister />
        </div>

      </div>
    </div>
  );
};

export default Index;
