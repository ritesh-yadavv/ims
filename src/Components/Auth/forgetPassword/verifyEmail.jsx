import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const VerifyEmail = ({ nextStep }) => {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required')
        }),
        onSubmit: (values) => {
            // handle form submission
            console.log(values);
            nextStep();
        },
    });

    return (
        <div className='flex-1 flex items-center justify-center bg-custom-bg bg-cover w-full h-full'>
            <div className="bg-[#8f9cb4] rounded-[15px] p-5 md:p-20 w-full max-w-md max-[766px]:p-15 m-3 bg-opacity-30">
                <form onSubmit={formik.handleSubmit}>
                    <div className=" mb-4">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full bg-white rounded border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />

                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-600 text-sm mt-1"> {formik.errors.email} </div>
                        ) : null}
                    </div>
                    <button type="submit" className="w-full text-white bg-[#14509F] border-0 py-2 px-8 focus:outline-none rounded text-lg">
                        Send Otp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;
