import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../commonComponent/loader";

const AdminLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔹 Static Admin Data (Replace with your desired values)
  const staticAdmin = {
    email: "admin@example.com",
    password: "Admin@123",
    role: "ADMIN",
    token: "static-token-123456",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email ID is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      setTimeout(() => {
        // 🔹 Validate credentials using static data
        if (
          values.email === staticAdmin.email &&
          values.password === staticAdmin.password
        ) {
          toast.success("Login successful!");

          // Store credentials
          localStorage.setItem("token", staticAdmin.token);
          localStorage.setItem("User-Role", staticAdmin.role);

          navigate("/admin-dashboard");
        } else {
          toast.error("Invalid email or password!");
        }

        setLoading(false);
      }, 1200);
    },
  });

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <Toaster />

      <div className="grid md:grid-cols-2 w-full h-full">
        {/* LEFT SIDE */}
        <div className="flex justify-center items-center col-span-1">
          <img
            src="https://d2sv8898xch8nu.cloudfront.net/MediaFiles/image11.png"
            alt="Logo"
            className="w-[413px]"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center items-center col-span-1 bg-custom-bg w-full bg-cover">
          <div className="bg-[#8E9AAB] rounded-[15px] p-5 md:p-20 w-full max-w-md m-3 bg-opacity-30">

            <h4 className="text-white text-xl mb-3 font-semibold">
              Admin Login
            </h4>

            <form onSubmit={formik.handleSubmit}>
              {/* EMAIL */}
              <div className="mb-4">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full bg-white rounded border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-600 text-sm">{formik.errors.email}</p>
                ) : null}
              </div>

              {/* PASSWORD */}
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="w-full bg-white rounded border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {/* PASSWORD TOGGLE */}
                {showPassword ? (
                  <BiHide
                    className="absolute right-[20px] top-[12px] cursor-pointer text-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <BiShow
                    className="absolute right-[20px] top-[12px] cursor-pointer text-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}

                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-600 text-sm">{formik.errors.password}</p>
                ) : null}
              </div>

              {/* FORGOT PASSWORD */}
              <Link
                to="/forgetPassword"
                className="flex text-md mb-[17px] justify-end text-white hover:underline"
              >
                Forgot Password?
              </Link>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white py-2 px-8 rounded text-lg font-semibold transition 
                ${loading ? "bg-gray-400 cursor-not-allowed opacity-60" : "bg-[#14509F] hover:bg-[#0f3f7b]"}`}
              >
                {loading ? <Loader /> : "Sign in"}
              </button>
            </form>

            {/* EMPLOYEE LOGIN */}
            <div className="mt-4 text-center">
              <Link to="/" className="text-white hover:underline">
                Employee Login
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
