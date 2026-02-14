import React from 'react';
import Logo from "../../../assets/Logo.png";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen">

      {/* LEFT SIDE (1/3) */}
      <div className="md:col-span-1 flex flex-col justify-center items-center bg-custom-bg bg-cover bg-no-repeat bg-center relative text-white">

        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="absolute top-8 left-8 w-28 h-auto"
        />

        {/* Title */}
        <h1 className="text-2xl font-bold mb-10 text-start px-4">
          Create your account in <br /> just a few steps
        </h1>

        {/* Stepper */}
        <div className="flex flex-col items-center gap-10 mt-4">

          {/* STEP 1 */}
          <div className="relative flex flex-col items-center">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold">
              1
            </div>
            <p className="mt-2 text-sm">Sign Up</p>
            {/* Vertical Line */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[2px] h-16 bg-white/60"></div>
          </div>

          {/* STEP 2 */}
          <div className="relative flex flex-col items-center">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold">
              2
            </div>
            <p className="mt-2 text-sm">Company Details</p>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[2px] h-16 bg-white/60"></div>
          </div>

          {/* STEP 3 */}
          <div className="relative flex flex-col items-center">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold">
              3
            </div>
            <p className="mt-2 text-sm">Confirm</p>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE (2/3) */}
      <div className="md:col-span-2 flex flex-col justify-center items-center px-6 md:px-10 py-4">

        {/* Login Link */}
        <div className="w-full flex justify-end mb-6">
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 underline">
              Log in
            </Link>
          </p>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-3 text-center">
          Welcome to Reshita! 👋
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Let's admit it — managing teams is hard.<br />
          Reshita makes it easier!
        </p>

        {/* FORM */}
        <form className="w-full max-w-[550px] space-y-5">

          <div>
            <label className="block text-gray-700 mb-1">Full Legal Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              placeholder="Full name as it appears on legal document"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Company Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              placeholder="you@companyemail.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Create Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              placeholder="Password"
            />
            <p className="text-sm text-gray-500 mt-2 grid grid-cols-2">
              <span>• 12 characters min<br />• Numbers</span>
              <span className="text-right">• Uppercase<br />• Special character</span>
            </p>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-all duration-300"
          >
            Sign up for free
          </button>

        </form>

        {/* Footer Links */}
        <div className="mt-6 text-sm text-gray-500 text-center">
          <Link href="#" className="text-blue-600">Privacy Policy</Link> &nbsp;and&nbsp;
          <Link href="#" className="text-blue-600">Terms & Conditions</Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
