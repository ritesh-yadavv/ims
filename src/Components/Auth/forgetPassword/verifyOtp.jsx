import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const VerifyOtp = ({ nextStep }) => {
  const [timer, setTimer] = useState(120); // 2 minutes = 120 seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const formik = useFormik({
    initialValues: {
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
    },
    validationSchema: Yup.object({
      otp1: Yup.string()
        .required('Required')
        .matches(/^[0-9]$/, 'Must be a digit'),
      otp2: Yup.string()
        .required('Required')
        .matches(/^[0-9]$/, 'Must be a digit'),
      otp3: Yup.string()
        .required('Required')
        .matches(/^[0-9]$/, 'Must be a digit'),
      otp4: Yup.string()
        .required('Required')
        .matches(/^[0-9]$/, 'Must be a digit'),
    }),
    onSubmit: (values) => {
      const otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
      console.log('OTP:', otp);
      nextStep();
    },
  });

  useEffect(() => {
    let interval = null;

    if (isResendDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
      if (interval !== null) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isResendDisabled, timer]);

  const handleResendOTP = () => {
    console.log('OTP Resent');
    // Reset the timer
    setTimer(120);
    setIsResendDisabled(true);
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-custom-bg bg-cover w-full h-full">
      <div className="bg-[#8f9cb4] rounded-[15px] p-5 md:p-20 w-full max-w-md max-[766px]:p-15 m-3 bg-opacity-30">
        <form onSubmit={formik.handleSubmit}>
          <div className="relative mb-4">
            <div className="grid grid-cols-4 gap-5">  
              <input
                type="text"
                name="otp1"
                maxLength={1}
                placeholder="*"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otp1}
                className="p-2 rounded text-center focus:outline-0"
              />
              <input
                type="text"
                name="otp2"
                maxLength={1}
                placeholder="*"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otp2}
                className="p-2 rounded text-center focus:outline-0"
              />
              <input
                type="text"
                name="otp3"
                maxLength={1}
                placeholder="*"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otp3}
                className="p-2 rounded text-center focus:outline-0"
              />
              <input
                type="text"
                name="otp4"
                maxLength={1}
                placeholder="*"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otp4}
                className="p-2 rounded text-center focus:outline-0"
              />
            </div>

            {formik.touched.otp1 && formik.errors.otp1 ? (
              <div className="text-red-600 text-sm mt-1">{formik.errors.otp1}</div>
            ) : null}
            
          </div>

          <p className="mt-2 mb-2">
            Resend OTP in
            <span className="text-red-600"> {Math.floor(timer / 60)}:{(timer % 60).toString()}</span>
          </p>
          <button
            type="submit"
            className="w-full text-white bg-[#14509F] border-0 py-2 px-8 focus:outline-none rounded text-lg"
          >
            Verify OTP
          </button>
        </form>

        {!isResendDisabled && (
          <button
            onClick={handleResendOTP}
            className="w-full text-white bg-[#14509F] border-0 py-2 px-8 focus:outline-none rounded text-lg mt-3"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default VerifyOtp;
