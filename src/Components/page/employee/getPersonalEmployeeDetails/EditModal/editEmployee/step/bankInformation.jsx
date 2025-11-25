import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const BankInformation = ({ nextStep }) => {
  const [loading, setLoading] = useState(false);
  
  // Static employee data
  const allEmployee = {
    bankName: 'State Bank of India',
    accountHolderName: 'John Doe',
    monthlySalary: '75000',
    bankAccountNumber: '12345678901',
    ifsc: 'SBIN0000123',
    ctc: '1200000',
    branchName: 'Main Branch, Mumbai',
    incentive: '5000',
    allowance: '15000',
    highestQualification: 'master',
    highestQualificationPassingYear: '2018',
    highestQualificationCollege: 'Indian Institute of Management, Bangalore'
  };

  const formik = useFormik({
    initialValues: {
      bankName: allEmployee?.bankName || '',
      accountHolderName: allEmployee?.accountHolderName || '',
      monthlySalary: allEmployee?.monthlySalary || '',
      bankAccountNumber: allEmployee?.bankAccountNumber || '',
      ifsc: allEmployee?.ifsc || '',
      ctc: allEmployee?.ctc || '',
      branchName: allEmployee?.branchName || '',
      incentive: allEmployee?.incentive || '',
      allowance: allEmployee?.allowance || '',
      highestQualification: allEmployee?.highestQualification || '',
      highestQualificationPassingYear: allEmployee?.highestQualificationPassingYear || '',
      highestQualificationCollege: allEmployee?.highestQualificationCollege || '',
    },

    validationSchema: Yup.object({
      bankName: Yup.string().required('Bank name is required'),
      accountHolderName: Yup.string().required('Account holder name is required'),
      monthlySalary: Yup.number().required('Monthly salary is required'),
      bankAccountNumber: Yup.string().required('Account number is required'),
      ifsc: Yup.string().required('IFSC code is required'),
      ctc: Yup.string().required('CTC is required'),
      branchName: Yup.string().required('Branch name is required'),
      incentive: Yup.number().required('Incentive is required'),
      allowance: Yup.number().required('Allowance is required'),
      highestQualification: Yup.string().required('Highest qualification is required'),
      highestQualificationPassingYear: Yup.string().required('Passing year is required'),
      highestQualificationCollege: Yup.string().required('College name is required'),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      try {
        // Simulate successful update
        console.log('Bank information submitted:', values);
        toast.success('Bank information updated successfully!');
        
        // If nextStep prop is provided, navigate to next step
        if (nextStep) {
          nextStep();
        }
        
      } catch (error) {
        toast.error("Something went wrong while updating bank information");
        console.error('Error updating bank information:', error);
      }
      setLoading(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Toaster />
      <div className="p-6 space-y-6 flex font-jakarta">
        <div className="w-full">
          <div className="grid grid-cols-6 gap-6">

            {/* Bank Name */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="bankName"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="SBI"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bankName}
              />
              {formik.touched.bankName && formik.errors.bankName ? (
                <div className="text-red-600 text-sm">{formik.errors.bankName}</div>
              ) : null}
            </div>

            {/* Account Holder Name */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="accountHolderName"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Account Holder Name
              </label>
              <input
                type="text"
                name="accountHolderName"
                id="accountHolderName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.accountHolderName}
              />
              {formik.touched.accountHolderName && formik.errors.accountHolderName ? (
                <div className="text-red-600 text-sm">{formik.errors.accountHolderName}</div>
              ) : null}
            </div>

            {/* Monthly Salary */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="monthlySalary"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Monthly Salary
              </label>
              <input
                type="number"
                name="monthlySalary"
                id="monthlySalary"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="INR"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.monthlySalary}
              />
              {formik.touched.monthlySalary && formik.errors.monthlySalary ? (
                <div className="text-red-600 text-sm">{formik.errors.monthlySalary}</div>
              ) : null}
            </div>

            {/* Account Number */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="bankAccountNumber"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Account Number
              </label>
              <input
                type="text"
                name="bankAccountNumber"
                id="bankAccountNumber"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="12345679898"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bankAccountNumber}
              />
              {formik.touched.bankAccountNumber && formik.errors.bankAccountNumber ? (
                <div className="text-red-600 text-sm">{formik.errors.bankAccountNumber}</div>
              ) : null}
            </div>

            {/* IFSC Code */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="ifsc"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                IFSC Code
              </label>
              <input
                type="text"
                name="ifsc"
                id="ifsc"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="SBIN123456"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ifsc}
              />
              {formik.touched.ifsc && formik.errors.ifsc ? (
                <div className="text-red-600 text-sm">{formik.errors.ifsc}</div>
              ) : null}
            </div>

            {/* CTC */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="ctc"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                CTC
              </label>
              <input
                type="text"
                name="ctc"
                id="ctc"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="INR"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ctc}
              />
              {formik.touched.ctc && formik.errors.ctc ? (
                <div className="text-red-600 text-sm">{formik.errors.ctc}</div>
              ) : null}
            </div>

            {/* Branch Name */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="branchName"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Branch Name
              </label>
              <input
                type="text"
                name="branchName"
                id="branchName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Boring Road"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.branchName}
              />
              {formik.touched.branchName && formik.errors.branchName ? (
                <div className="text-red-600 text-sm">{formik.errors.branchName}</div>
              ) : null}
            </div>

            {/* Incentive */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="incentive"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Incentive
              </label>
              <input
                type="text"
                name="incentive"
                id="incentive"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="INR"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.incentive}
              />
              {formik.touched.incentive && formik.errors.incentive ? (
                <div className="text-red-600 text-sm">{formik.errors.incentive}</div>
              ) : null}
            </div>

            {/* Allowance */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="allowance"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Allowance
              </label>
              <input
                type="text"
                name="allowance"
                id="allowance"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.allowance}
              />
              {formik.touched.allowance && formik.errors.allowance ? (
                <div className="text-red-600 text-sm">{formik.errors.allowance}</div>
              ) : null}
            </div>

            {/* Highest Qualification */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="highestQualification"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Highest Qualification
              </label>
              <select
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                name="highestQualification"
                value={formik.values.highestQualification}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Degree</option>
                <option value="bachelor">Bachelor's</option>
                <option value="master">Master's</option>
                <option value="phd">PhD</option>
                <option value="diploma">Diploma</option>
              </select>
              {formik.touched.highestQualification && formik.errors.highestQualification ? (
                <div className="text-red-600 text-sm">{formik.errors.highestQualification}</div>
              ) : null}
              
              <input
                type="text"
                placeholder="Passing Year"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mt-2"
                name="highestQualificationPassingYear"
                value={formik.values.highestQualificationPassingYear}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.highestQualificationPassingYear && formik.errors.highestQualificationPassingYear ? (
                <div className="text-red-600 text-sm">{formik.errors.highestQualificationPassingYear}</div>
              ) : null}
            </div>

            {/* College */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="highestQualificationCollege"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                College/University
              </label>
              <input
                type="text"
                placeholder="Highest Qualification College Name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                name="highestQualificationCollege"
                value={formik.values.highestQualificationCollege}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.highestQualificationCollege && formik.errors.highestQualificationCollege ? (
                <div className="text-red-600 text-sm">{formik.errors.highestQualificationCollege}</div>
              ) : null}
            </div>

          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 mt-6">
            <button 
              type='submit' 
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Updating...
                </div>
              ) : (
                "Update"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BankInformation;