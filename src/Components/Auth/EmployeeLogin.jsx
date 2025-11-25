import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../commonComponent/loader";
import Logo from "../../assets/Profession.png";

const EmployeeLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // -------------------------
  // STATIC EMPLOYEE LOGIN DATA
  // -------------------------
  const staticEmployees = [
    { email: "hr@example.com", password: "Hr@123", role: "HR MANAGER", token: "token-hr-manager", redirect: "/home" },
    { email: "bde@example.com", password: "Bde@123", role: "BUSINESS DEVELOPMENT EXECUTIVE", token: "token-bde", redirect: "/sales-dashboard" },
    { email: "tele@example.com", password: "Tele@123", role: "TELECALLER EXECUTIVE", token: "token-telecaller", redirect: "/telecaller" },
    { email: "bdm@example.com", password: "Bdm@123", role: "BUSINESS DEVELOPMENT MANAGER", token: "token-bdm", redirect: "/sales-super-visor" },
    { email: "cse@example.com", password: "Cse@123", role: "CUSTOMER SUPPORT EXECUTIVE", token: "token-cse", redirect: "/cse" },
    { email: "dev@example.com", password: "Dev@123", role: "FRONTEND DEVELOPER", token: "token-dev", redirect: "/dev/dashboard" },
  ];

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
        const user = staticEmployees.find(
          (emp) => emp.email === values.email && emp.password === values.password
        );

        if (user) {
          toast.success("Login successful!");
          localStorage.setItem("token", user.token);
          localStorage.setItem("Role", user.role);
          navigate(user.redirect);
        } else {
          toast.error("Invalid email or password!");
        }

        setLoading(false);
      }, 1000);
    },
  });

  return (
    <div className="w-full h-screen m-0 p-0 overflow-hidden">
      <Toaster />

      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full m-0 p-0 bg-slate-600">

        {/* LEFT IMAGE FULL WIDTH + FULL HEIGHT */}
        <div className="w-full h-full m-0 p-0">
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex justify-center items-center w-full h-full bg-custom-bg bg-cover m-0 p-4 md:p-0">
          <div className="bg-[#8E9AAB] rounded-[15px] p-6 md:p-10 w-full max-w-md bg-opacity-40 shadow-lg">

            <h4 className="text-white mb-4 text-2xl font-semibold text-center">
              Employee Login
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
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-600 text-sm">{formik.errors.email}</div>
                )}
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

                {showPassword ? (
                  <BiHide
                    className="absolute right-5 top-3 cursor-pointer text-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <BiShow
                    className="absolute right-5 top-3 cursor-pointer text-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}

                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-600 text-sm">{formik.errors.password}</div>
                )}
              </div>

              <Link
                to="/forgetPassword"
                className="flex text-md mb-4 justify-end text-white hover:underline"
              >
                Forgot Password?
              </Link>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white py-2 px-8 rounded text-lg font-semibold 
                  ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#14509F] hover:bg-[#0f3f7b]"}`}
              >
                {loading ? <Loader /> : "Sign in"}
              </button>

            </form>

            {/* ADMIN LOGIN LINK */}
            <div className="mt-4 text-center">
              <Link to="/admin/login" className="text-white hover:underline">
                Admin Login
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default EmployeeLogin;
