import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../commonComponent/loader";

const BusinessRegister = () => {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [savedEmail, setSavedEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // STATIC EMAIL VALIDATION + OTP SEND
  // -----------------------------
  const emailFormik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Business Email is required"),
    }),

    onSubmit: (values) => {
      setLoading(true);

      setTimeout(() => {
        toast.success("OTP sent successfully (static demo)");
        setSavedEmail(values.email);
        setOtpSent(true);
        setLoading(false);
      }, 800);
    },
  });

  // -----------------------------
  // STATIC OTP CHECK (1234)
  // -----------------------------
  const otpFormik = useFormik({
    initialValues: {
      otp: "",
    },

    validationSchema: Yup.object({
      otp: Yup.string()
        .required("OTP is required")
        .length(4, "OTP must be 4 digits"),
    }),

    onSubmit: (values) => {
      setLoading(true);

      setTimeout(() => {
        if (values.otp === "1234") {
          toast.success("OTP Verified (static)");

          navigate("/admin-signup", {
            state: { email: savedEmail || "staticcompany@example.com" },
          });
        } else {
          toast.error("Invalid OTP (Static)");
        }

        setLoading(false);
      }, 800);
    },
  });

  return (
    <div className="flex-1 flex items-center justify-center bg-custom-bg bg-cover w-full h-full">
      <Toaster />

      <div className="bg-[#8f9cb4] bg-opacity-30 rounded-[15px] p-5 md:p-20 w-full max-w-md m-3">

        {/* -------------------------
            EMAIL SCREEN
        ------------------------- */}
        {!otpSent ? (
          <form onSubmit={emailFormik.handleSubmit}>
            <div className="relative mb-4">
              <input
                id="email"
                name="email"
                type="email"
                className={`peer w-full bg-white rounded placeholder-transparent ring-2 py-2 px-4 
                  focus:ring-sky-600 focus:outline-none
                  ${
                    emailFormik.touched.email && emailFormik.errors.email
                      ? "border-rose-600"
                      : "focus:border-sky-600"
                  }`}
                placeholder="Your Email"
                onChange={emailFormik.handleChange}
                onBlur={emailFormik.handleBlur}
                value={emailFormik.values.email}
              />

              <label
                htmlFor="email"
                className="absolute cursor-text left-0 -top-3 text-md bg-inherit
                mx-1 px-1 peer-placeholder-shown:text-base 
                peer-placeholder-shown:top-2 peer-focus:-top-3 
                peer-focus:text-md transition-all"
              >
                Business Email
              </label>

              {emailFormik.touched.email && emailFormik.errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {emailFormik.errors.email}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#14509F] py-2 px-8 rounded text-lg"
            >
              {loading ? <Loader /> : "Send OTP"}
            </button>
          </form>
        ) : (
          /* -------------------------
            OTP SCREEN
          -------------------------- */
          <form onSubmit={otpFormik.handleSubmit}>
            <div className="relative mb-4">
              <input
                id="otp"
                name="otp"
                type="text"
                maxLength={4}
                className={`peer w-full bg-white rounded placeholder-transparent ring-2 py-2 px-4 
                focus:ring-sky-600 focus:outline-none 
                ${
                  otpFormik.touched.otp && otpFormik.errors.otp
                    ? "border-rose-600"
                    : "focus:border-sky-600"
                }`}
                placeholder="Enter OTP"
                onChange={otpFormik.handleChange}
                onBlur={otpFormik.handleBlur}
                value={otpFormik.values.otp}
              />

              <label
                htmlFor="otp"
                className="absolute cursor-text left-0 -top-3 text-md bg-inherit
                mx-1 px-1 peer-placeholder-shown:text-base 
                peer-placeholder-shown:top-2 peer-focus:-top-3 
                peer-focus:text-md transition-all"
              >
                Enter OTP
              </label>

              {otpFormik.touched.otp && otpFormik.errors.otp && (
                <p className="text-red-600 text-sm mt-1">
                  {otpFormik.errors.otp}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#14509F] py-2 px-8 rounded text-lg"
            >
              {loading ? <Loader /> : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BusinessRegister;
