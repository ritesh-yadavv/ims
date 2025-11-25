import React from 'react'
import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CreatePassword = () => {
  const [state, setState] = useState();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email ID is required').email('Invalid email address'),
      password: Yup.string().required('Password is required').min(8, 'Password Length should be 8 character')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
      confirmPassword: Yup.string().required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }

    ),
    onSubmit: values => {
      console.log(values);
      console.log(values.password, values.confirmPassword);
      // Add your sign-in logic here
    }
  })


  return (

    <div className="flex-1 flex items-center justify-center bg-custom-bg bg-cover w-full h-full">
      <div className="bg-[#8f9cb4] rounded-[15px] p-5 md:p-20 w-full max-w-md max-[766px]:p-15 m-3 bg-opacity-30">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full bg-white rounded border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-rose-600"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="w-full bg-white rounded border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-rose-600"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="w-full bg-white rounded border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-rose-600"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-600 text-sm">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-[#14509F] text-white border-0 py-2 px-8 focus:outline-none rounded text-lg"
          >
            Save Password
          </button>
        </form>

      </div>
    </div>

  );
}

export default CreatePassword