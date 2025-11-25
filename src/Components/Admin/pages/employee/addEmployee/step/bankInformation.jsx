import React, { useState } from 'react';
import uploadIcon from "../../../../../../assets/Button.png";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from "../../../../../commonComponent/loader";

const BankInformation = ({ nextStep }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      cancelledBankCheque: null,
      bankName: '',
      accountHolderName: '',
      monthlySalary: '',
      bankAccountNumber: '',
      ifsc: '',
      ctc: '',
      branchName: '',
      incentive: '',
      allowance: '',
    },

    validationSchema: Yup.object({
      cancelledBankCheque: Yup.mixed().required("Cancelled Bank Cheque is required"),
      bankName: Yup.string().required('Bank Name is required'),
      accountHolderName: Yup.string().required('Account Holder Name is required'),
      monthlySalary: Yup.string().required('Monthly Salary is required'),
      bankAccountNumber: Yup.string().required('Account Number is required'),
      ifsc: Yup.string().required('IFSC Code is required'),
      ctc: Yup.string().required('CTC is required'),
      branchName: Yup.string().required('Branch Name is required'),
      incentive: Yup.string().required('Incentive is required'),
      allowance: Yup.string().required('Allowance is required'),
    }),

    onSubmit: async (values) => {
      setLoading(true);

      // --- STATIC: No backend, no Redux, no API ---
      console.log("Static Submitted Data:", values);

      setTimeout(() => {
        setLoading(false);
        nextStep(); // Move to next step
      }, 400);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-6 space-y-6 flex">
        <div className="w-full">

          <div className="grid grid-cols-6 gap-6">

            {/* Bank Name */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                value={formik.values.bankName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="SBI"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
              {formik.touched.bankName && formik.errors.bankName && (
                <div className="text-red-600 text-sm">{formik.errors.bankName}</div>
              )}
            </div>

            {/* Upload Cheque */}
            <div className="col-span-6 sm:col-span-3">
              <label>Cancelled Bank Cheque</label>
              <div className="flex items-center justify-evenly border-2 border-dashed border-gray-300 p-6 rounded-md">
                <button
                  type="button"
                  onClick={() => document.getElementById('cancelledCheque').click()}
                  className="p-2 hover:bg-gray-400 rounded"
                >
                  <img src={uploadIcon} alt="Upload" />
                </button>

                <div>
                  <p className="text-gray-400">Drag & Drop or choose file</p>
                  <p className="text-gray-400">Supported: JPEG, PDF</p>
                </div>

                <input
                  type="file"
                  id="cancelledCheque"
                  className="hidden"
                  onChange={(e) =>
                    formik.setFieldValue('cancelledBankCheque', e.target.files[0])
                  }
                />
              </div>

              {formik.touched.cancelledBankCheque && formik.errors.cancelledBankCheque && (
                <div className="text-red-600 text-sm">{formik.errors.cancelledBankCheque}</div>
              )}
            </div>

            {/* Account Holder Name */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Account Holder Name</label>
              <input
                type="text"
                name="accountHolderName"
                placeholder="Name"
                value={formik.values.accountHolderName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
              />
              {formik.touched.accountHolderName && formik.errors.accountHolderName && (
                <div className="text-red-600 text-sm">{formik.errors.accountHolderName}</div>
              )}
            </div>

            {/* Monthly Salary */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Monthly Salary</label>
              <input
                type="number"
                name="monthlySalary"
                placeholder="INR"
                value={formik.values.monthlySalary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
              />
              {formik.touched.monthlySalary && formik.errors.monthlySalary && (
                <div className="text-red-600 text-sm">{formik.errors.monthlySalary}</div>
              )}
            </div>

            {/* Account Number */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Account Number</label>
              <input
                type="text"
                name="bankAccountNumber"
                placeholder="123456789"
                value={formik.values.bankAccountNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
              />
              {formik.touched.bankAccountNumber && formik.errors.bankAccountNumber && (
                <div className="text-red-600 text-sm">{formik.errors.bankAccountNumber}</div>
              )}
            </div>

            {/* IFSC */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">IFSC Code</label>
              <input
                type="text"
                name="ifsc"
                placeholder="SBIN000123"
                value={formik.values.ifsc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
              />
              {formik.touched.ifsc && formik.errors.ifsc && (
                <div className="text-red-600 text-sm">{formik.errors.ifsc}</div>
              )}
            </div>

            {/* CTC */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">CTC</label>
              <input
                type="text"
                name="ctc"
                placeholder="INR"
                value={formik.values.ctc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
              />
              {formik.touched.ctc && formik.errors.ctc && (
                <div className="text-red-600 text-sm">{formik.errors.ctc}</div>
              )}
            </div>

            {/* Branch Name */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Branch Name</label>
              <input
                type="text"
                name="branchName"
                placeholder="Boring Road"
                value={formik.values.branchName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
              />
              {formik.touched.branchName && formik.errors.branchName && (
                <div className="text-red-600 text-sm">{formik.errors.branchName}</div>
              )}
            </div>

            {/* Incentive */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Incentive</label>
              <input
                type="text"
                name="incentive"
                placeholder="INR"
                value={formik.values.incentive}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
              />
              {formik.touched.incentive && formik.errors.incentive && (
                <div className="text-red-600 text-sm">{formik.errors.incentive}</div>
              )}
            </div>

            {/* Allowance */}
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium">Allowance</label>
              <input
                type="text"
                name="allowance"
                placeholder="INR"
                value={formik.values.allowance}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
              />
              {formik.touched.allowance && formik.errors.allowance && (
                <div className="text-red-600 text-sm">{formik.errors.allowance}</div>
              )}
            </div>

          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              {loading ? <Loader /> : "Next"}
            </button>
          </div>

        </div>
      </div>
    </form>
  );
};

export default BankInformation;
