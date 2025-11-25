import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import reshitaLogo from "../../../assets/reshita.jpg";
import Loader from "../../commonComponent/loader";

const AdminRegister = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // STATIC EMAIL
  const email = "staticcompany@example.com";

  // ✔ STATIC PREFILLED FORM
  const formik = useFormik({
    initialValues: {
      companyLogoURL: null,
      companyName: "Static Company Pvt Ltd",
      businessEmail: email,
      gstIN: "22AAAAA0000A1Z5",
      pan: "ABCDE1234F",
      businessPhone: "9876543210",
      address1: "Static Address Line 1",
      address2: "Static Address Line 2",
      city: "Static City",
      state: "Static State",
      pincode: "462001",
      adminEmail: "admin@static.com",
      adminPassword: "Static@123",
      confirmPassword: "Static@123",
    },

    validationSchema: Yup.object({
      companyLogoURL: Yup.mixed().required("Company logo is required"),
      companyName: Yup.string().required("Company Name is required"),
      businessEmail: Yup.string().email().required(),
      gstIN: Yup.string().length(15).required(),
      pan: Yup.string().length(10).required(),
      businessPhone: Yup.string().min(10).max(12).required(),
      address1: Yup.string().required(),
      address2: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      pincode: Yup.string().length(6).required(),
      adminEmail: Yup.string().email().required(),
      adminPassword: Yup.string().required(),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("adminPassword")], "Passwords do not match")
        .required(),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      console.log("STATIC FORM DATA SUBMITTED:", values);

      setTimeout(() => {
        setLoading(false);
        alert("Static data submitted successfully!");
      }, 1000);
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files?.[0] || null;
    formik.setFieldValue("companyLogoURL", file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen relative">
      <img
        src={reshitaLogo}
        alt="Logo"
        className="absolute top-0 left-0 m-2 w-20"
      />

      <form onSubmit={formik.handleSubmit} className="relative pt-5">
        <div className="p-6 space-y-6 flex flex-col md:flex-row">
          {/* IMAGE UPLOAD */}
          <div className="flex flex-col items-center mt-20 md:w-1/3 w-full">
            <div className="h-40 w-40 bg-gray-100 p-3 rounded flex flex-col items-center justify-center">
              <input
                type="file"
                accept="image/*"
                id="companyLogoURL"
                name="companyLogoURL"
                className="hidden"
                onChange={handleImageChange}
              />

              {imagePreview ? (
                <img
                  src={imagePreview}
                  className="h-full w-full rounded object-cover"
                  alt="Preview"
                />
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("companyLogoURL").click()
                  }
                  className="p-2 text-sm"
                >
                  Upload Logo
                </button>
              )}
            </div>

            {/* Error */}
            {formik.touched.companyLogoURL && formik.errors.companyLogoURL && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.companyLogoURL}
              </p>
            )}
          </div>

          {/* FORM FIELDS */}
          <div className="md:w-2/3 w-full">

            {/* Company Name + Email */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">
                  Business Email
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.businessEmail}
                  readOnly
                />
              </div>
            </div>

            {/* More static fields */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">GSTIN</label>
                <input
                  type="text"
                  id="gstIN"
                  name="gstIN"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.gstIN}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">PAN</label>
                <input
                  type="text"
                  id="pan"
                  name="pan"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.pan}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/* Address + City */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">Address 1</label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.address1}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">Address 2</label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.address2}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/* City + State */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/* PINCODE + ADMIN EMAIL */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">PIN Code</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.pincode}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">Admin Email</label>
                <input
                  type="email"
                  id="adminEmail"
                  name="adminEmail"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.adminEmail}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/* Password Section */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">
                  Admin Password
                </label>
                <input
                  type="password"
                  id="adminPassword"
                  name="adminPassword"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.adminPassword}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="text-xs font-semibold px-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full pl-3 pr-3 py-2 border rounded"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              {loading ? <Loader /> : "Submit Static Data"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminRegister;
