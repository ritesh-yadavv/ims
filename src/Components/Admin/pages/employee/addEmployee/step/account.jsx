import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../../../../commonComponent/loader";
import toast, { Toaster } from "react-hot-toast";

const Account = () => {
  const [loading, setLoading] = useState(false);

  // STATIC DEPARTMENT + DESIGNATION DATA
  const departmentDesignationMap = {
    ADMIN: ["FOUNDER", "DIRECTOR", "ACCOUNTS"],
    HR: ["HR MANAGER", "OTHER OFFICE STAFF"],
    MARKETING: [
      "BUSINESS DEVELOPMENT MANAGER",
      "BUSINESS DEVELOPMENT EXECUTIVE",
      "CUSTOMER SUPPORT EXECUTIVE",
      "TELECALLER EXECUTIVE",
      "DIGITAL MARKETING",
      "MARKETING MANAGER",
    ],
    DEVELOPER: [
      "CTO",
      "BACKEND DEVELOPER",
      "FRONTEND DEVELOPER",
      "INTERNS",
      "TESTER",
      "DEVOPS",
      "UI/UX DESIGNER",
      "APP DEVELOPER",
    ],
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    formik.setFieldValue("department", selectedDepartment);
    formik.setFieldValue("designation", "");
  };

  // STATIC MODE FORM
  const formik = useFormik({
    initialValues: {
      appointmentLetter: null,
      department: "",
      designation: "",
      joiningDate: "",
      officeLocation: "",
      typeOfEmployment: "",
      password: "",
    },

    validationSchema: Yup.object({
      appointmentLetter: Yup.mixed()
        .required("Appointment Letter is required")
        .test(
          "fileSize",
          "File size must be less than 500KB",
          (value) => value && value.size <= 500 * 1024
        ),

      department: Yup.string().required("Department required"),
      designation: Yup.string().required("Designation is required"),
      joiningDate: Yup.date().required("Joining Date is required"),
      officeLocation: Yup.string().required("Office Location is required"),
      typeOfEmployment: Yup.string().required("Type of Employment is required"),

      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      setLoading(true);

      // 🔥 STATIC MODE – NO BACKEND
      console.log("STATIC EMPLOYEE DATA => ", values);

      toast.success("Employee created successfully (Static Mode)");

      setLoading(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Toaster />
      <div className="p-6 space-y-6 flex">
        <div className="w-full">
          <div className="grid grid-cols-6 gap-6">

            {/* Department */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Department</label>
              <select
                name="department"
                value={formik.values.department}
                onChange={handleDepartmentChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full"
              >
                <option value="">Select Department</option>
                {Object.keys(departmentDesignationMap).map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              {formik.touched.department && formik.errors.department && (
                <p className="text-red-600 text-sm">{formik.errors.department}</p>
              )}
            </div>

            {/* Designation */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Designation</label>
              <select
                name="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={!formik.values.department}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full"
              >
                <option value="">Select Designation</option>
                {departmentDesignationMap[formik.values.department]?.map(
                  (desig, index) => (
                    <option key={index} value={desig}>
                      {desig}
                    </option>
                  )
                )}
              </select>
              {formik.touched.designation && formik.errors.designation && (
                <p className="text-red-600 text-sm">{formik.errors.designation}</p>
              )}
            </div>

            {/* Joining Date */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Joining Date</label>
              <input
                type="date"
                name="joiningDate"
                value={formik.values.joiningDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full"
              />
              {formik.touched.joiningDate && formik.errors.joiningDate && (
                <p className="text-red-600 text-sm">{formik.errors.joiningDate}</p>
              )}
            </div>

            {/* Office Location */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Office Location</label>
              <input
                type="text"
                name="officeLocation"
                value={formik.values.officeLocation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full"
              />
              {formik.touched.officeLocation &&
                formik.errors.officeLocation && (
                  <p className="text-red-600 text-sm">
                    {formik.errors.officeLocation}
                  </p>
                )}
            </div>

            {/* Type of Employment */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Type of Employment</label>
              <select
                name="typeOfEmployment"
                value={formik.values.typeOfEmployment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full"
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-Time</option>
                <option value="Part-time">Part-Time</option>
                <option value="Contract">Contract</option>
              </select>
              {formik.touched.typeOfEmployment &&
                formik.errors.typeOfEmployment && (
                  <p className="text-red-600 text-sm">
                    {formik.errors.typeOfEmployment}
                  </p>
                )}
            </div>

            {/* Password */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-600 text-sm">{formik.errors.password}</p>
              )}
            </div>

            {/* Appointment Letter Upload */}
            <div className="col-span-6 sm:col-span-3">
              <label>Appointment Letter</label>
              <div className="flex items-center justify-evenly border-2 border-dashed border-gray-300 p-6 rounded-md">
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("appointmentLetter")?.click()
                  }
                  className="p-1 hover:bg-gray-400"
                >
                  <img
                    src="https://d2sv8898xch8nu.cloudfront.net/MediaFiles/button.png"
                    alt="Upload"
                  />
                </button>
                <div>
                  <p className="text-gray-400">
                    Drag & Drop or choose file to upload
                  </p>
                  <p className="text-gray-400">Supported: JPG, PDF</p>
                </div>

                <input
                  type="file"
                  className="hidden"
                  id="appointmentLetter"
                  name="appointmentLetter"
                  onChange={(e) =>
                    formik.setFieldValue(
                      "appointmentLetter",
                      e.target.files?.[0] || null
                    )
                  }
                />
              </div>

              {formik.touched.appointmentLetter &&
                formik.errors.appointmentLetter && (
                  <p className="text-red-600 text-sm">
                    {formik.errors.appointmentLetter}
                  </p>
                )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              {loading ? <Loader /> : "Create"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Account;
