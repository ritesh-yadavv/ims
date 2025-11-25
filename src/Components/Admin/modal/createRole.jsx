import React, { useState } from 'react';
import Loader from "../../commonComponent/loader";
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CreateRole = ({ isOpen, setIsOpen, onRoleCreated }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      role: "",
    },
    validationSchema: Yup.object({
      role: Yup.string().required("Role is required"),
    }),

    onSubmit: async (values) => {
      setLoading(true);

      try {
        // ⏳ Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // 🎯 Static Success Response
        const response = {
          statusCode: 201,
          data: { role: values.role },
          message: "New role created successfully!",
        };

        if (response.statusCode === 201) {
          toast.success(response.message);

          // Notify parent (if needed)
          onRoleCreated && onRoleCreated(values.role);

          setTimeout(() => {
            setIsOpen(false);
          }, 900);
        } else {
          toast.error("Failed to create a new role. Please try again.");
        }
      } catch (error) {
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <Toaster />
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <h2 className="text-xl font-semibold mb-6 text-center">Create New Role</h2>

        {/* Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Type New Role..."
            id="role"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
          />

          {formik.touched.role && formik.errors.role && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.role}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
            onClick={closeModal}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
            disabled={loading}
          >
            {loading ? <Loader /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRole;
