import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from "../../../../commonComponent/loader"
import { 
  FaBuilding, 
  FaUser, 
  FaMoneyBillWave, 
  FaCreditCard, 
  FaCode,
  FaFileInvoiceDollar,
  FaMapMarkerAlt,
  FaFileUpload,
  FaFilePdf,
  FaRupeeSign
} from 'react-icons/fa';

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
      cancelledBankCheque: Yup.mixed()
        .required('Cancelled Bank Cheque is required')
        .test(
          'fileSize',
          'File size must be less than 500KB',
          (value) => !value || (value && value.size <= 500 * 1024) // Make optional for static data
        ),
      bankName: Yup.string()
        .required('Bank Name is required'),
      accountHolderName: Yup.string()
        .required('Account Holder Name is required'),
      monthlySalary: Yup.string()
        .required('Monthly Salary is required'),
      bankAccountNumber: Yup.string()
        .required('Account Number is required'),
      ifsc: Yup.string()
        .required('IFSC Code is required'),
      ctc: Yup.string()
        .required('CTC is required'),
      branchName: Yup.string()
        .required('Branch Name is required'),
      incentive: Yup.string()
        .required('Incentive is required'),
      allowance: Yup.string()
        .required('Allowance is required')
    }),

    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Static data processing
        const cancelledChequeUrl = values.cancelledBankCheque 
          ? URL.createObjectURL(values.cancelledBankCheque)
          : 'https://example.com/documents/cancelled-cheque.pdf';

        const bankData = {
          ...values,
          cancelledBankCheque: cancelledChequeUrl,
          accountType: 'Savings',
          panNumber: 'ABCDE1234F',
          pfAccountNumber: 'MH/12345/1234567',
          uanNumber: '123456789012'
        };

        console.log("Bank information submitted:", bankData);
        
        // Simulate storing data (in real app, this would be Redux/Context)
        localStorage.setItem('employeeBankData', JSON.stringify(bankData));
        
        // Move to next step
        nextStep();

      } catch (error) {
        console.error('Error processing bank information:', error);
        alert('Failed to save bank information. Please try again.');
      }
      setLoading(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-6 space-y-6 font-jakarta">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCreditCard className="mr-3 text-green-600" />
            Bank & Salary Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bank Name */}
            <div className="space-y-2">
              <label htmlFor="bankName" className="flex items-center text-sm font-medium text-gray-900">
                <FaBuilding className="mr-2 text-blue-500" />
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="State Bank of India"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bankName}
              />
              {formik.touched.bankName && formik.errors.bankName ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.bankName}
                </div>
              ) : null}
            </div>

            {/* Account Holder Name */}
            <div className="space-y-2">
              <label htmlFor="accountHolderName" className="flex items-center text-sm font-medium text-gray-900">
                <FaUser className="mr-2 text-green-500" />
                Account Holder Name
              </label>
              <input
                type="text"
                name="accountHolderName"
                id="accountHolderName"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="John Doe"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.accountHolderName}
              />
              {formik.touched.accountHolderName && formik.errors.accountHolderName ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.accountHolderName}
                </div>
              ) : null}
            </div>

            {/* Bank Account Number */}
            <div className="space-y-2">
              <label htmlFor="bankAccountNumber" className="flex items-center text-sm font-medium text-gray-900">
                <FaCreditCard className="mr-2 text-purple-500" />
                Account Number
              </label>
              <input
                type="text"
                name="bankAccountNumber"
                id="bankAccountNumber"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="12345678901"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bankAccountNumber}
              />
              {formik.touched.bankAccountNumber && formik.errors.bankAccountNumber ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.bankAccountNumber}
                </div>
              ) : null}
            </div>

            {/* IFSC Code */}
            <div className="space-y-2">
              <label htmlFor="ifsc" className="flex items-center text-sm font-medium text-gray-900">
                <FaCode className="mr-2 text-orange-500" />
                IFSC Code
              </label>
              <input
                type="text"
                name="ifsc"
                id="ifsc"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="SBIN0000123"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ifsc}
              />
              {formik.touched.ifsc && formik.errors.ifsc ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.ifsc}
                </div>
              ) : null}
            </div>

            {/* Branch Name */}
            <div className="space-y-2">
              <label htmlFor="branchName" className="flex items-center text-sm font-medium text-gray-900">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                Branch Name
              </label>
              <input
                type="text"
                name="branchName"
                id="branchName"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Main Branch, Downtown"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.branchName}
              />
              {formik.touched.branchName && formik.errors.branchName ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.branchName}
                </div>
              ) : null}
            </div>

            {/* Monthly Salary */}
            <div className="space-y-2">
              <label htmlFor="monthlySalary" className="flex items-center text-sm font-medium text-gray-900">
                <FaMoneyBillWave className="mr-2 text-green-500" />
                Monthly Salary
              </label>
              <div className="relative">
                <FaRupeeSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="number"
                  name="monthlySalary"
                  id="monthlySalary"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="75000"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.monthlySalary}
                />
              </div>
              {formik.touched.monthlySalary && formik.errors.monthlySalary ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.monthlySalary}
                </div>
              ) : null}
            </div>

            {/* CTC */}
            <div className="space-y-2">
              <label htmlFor="ctc" className="flex items-center text-sm font-medium text-gray-900">
                <FaFileInvoiceDollar className="mr-2 text-purple-500" />
                Cost to Company (CTC)
              </label>
              <div className="relative">
                <FaRupeeSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  name="ctc"
                  id="ctc"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="1200000"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ctc}
                />
              </div>
              {formik.touched.ctc && formik.errors.ctc ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.ctc}
                </div>
              ) : null}
            </div>

            {/* Incentive */}
            <div className="space-y-2">
              <label htmlFor="incentive" className="flex items-center text-sm font-medium text-gray-900">
                <FaMoneyBillWave className="mr-2 text-blue-500" />
                Incentive
              </label>
              <div className="relative">
                <FaRupeeSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  name="incentive"
                  id="incentive"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="5000"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.incentive}
                />
              </div>
              {formik.touched.incentive && formik.errors.incentive ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.incentive}
                </div>
              ) : null}
            </div>

            {/* Allowance */}
            <div className="space-y-2">
              <label htmlFor="allowance" className="flex items-center text-sm font-medium text-gray-900">
                <FaMoneyBillWave className="mr-2 text-yellow-500" />
                Allowance
              </label>
              <div className="relative">
                <FaRupeeSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  name="allowance"
                  id="allowance"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="15000"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.allowance}
                />
              </div>
              {formik.touched.allowance && formik.errors.allowance ? (
                <div className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.allowance}
                </div>
              ) : null}
            </div>
          </div>

          {/* Cancelled Bank Cheque Upload */}
          <div className="mt-6 space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-900">
              <FaFilePdf className="mr-2 text-red-500" />
              Cancelled Bank Cheque
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <FaFileUpload className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Upload Cancelled Cheque</p>
                    <p className="text-gray-500 text-sm">Supported formats: PDF, JPEG, PNG (Max 500KB)</p>
                    {formik.values.cancelledBankCheque && (
                      <p className="text-green-600 text-sm mt-1">
                        ✓ {formik.values.cancelledBankCheque.name}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => document.getElementById('cancelledChequeInput')?.click()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <FaFileUpload className="w-4 h-4" />
                  Choose File
                </button>
                <input
                  type="file"
                  className="hidden"
                  id="cancelledChequeInput"
                  name="cancelledBankCheque"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(event) => {
                    formik.setFieldValue('cancelledBankCheque', event.currentTarget.files[0]);
                  }}
                />
              </div>
            </div>
            {formik.touched.cancelledBankCheque && formik.errors.cancelledBankCheque ? (
              <div className="text-red-600 text-sm flex items-center mt-1">
                <span className="mr-1">⚠️</span>
                {formik.errors.cancelledBankCheque}
              </div>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center gap-2"
            >
              {loading ? <Loader /> : 'Save & Continue'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BankInformation;