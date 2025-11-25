import React from 'react';
import FaEye from "../../../../../../../assets/view.png"
import FaDownload from "../../../../../../../assets/download 01.png"

const BankInformation = () => {
  // Static employee bank data
  const staticEmployeeData = {
    id: 1,
    name: 'John Doe',
    employeeId: 'EMP001',
    
    // Bank Information
    bankName: 'State Bank of India',
    bankAccountNumber: '12345678901',
    branchName: 'Main Branch, Downtown',
    monthlySalary: '₹75,000',
    incentive: '₹5,000',
    accountHolderName: 'John Doe',
    ifsc: 'SBIN0000123',
    ctc: '₹12,00,000',
    allowance: '₹15,000',
    cancelledBankCheque: 'https://example.com/documents/cancelled-cheque.pdf',
    
    // Additional bank details
    accountType: 'Savings Account',
    micrCode: '400002013',
    panNumber: 'ABCDE1234F',
    pfAccountNumber: 'MH/12345/1234567',
    uanNumber: '123456789012'
  };

  // Use static data instead of Redux
  const Employee = staticEmployeeData;

  const viewCancelledCheque = () => {
    if (Employee.cancelledBankCheque) {
      window.open(Employee.cancelledBankCheque, '_blank');
    } else {
      alert('Cancelled cheque document not available');
    }
  };

  const downloadCancelledCheque = () => {
    if (Employee.cancelledBankCheque) {
      const link = document.createElement('a');
      link.href = Employee.cancelledBankCheque;
      link.download = 'Cancelled_Cheque.pdf';
      link.click();
    } else {
      alert('Cancelled cheque document not available for download');
    }
  };

  // Format account number for security
  const formatAccountNumber = (accountNumber) => {
    if (!accountNumber) return 'Not provided';
    return `XXXXXXX${accountNumber.slice(-4)}`;
  };

  return (
    <div className="p-6 bg-white mx-auto w-full rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        Bank & Salary Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Bank Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank Name
            </label>
            <div className="bg-gray-50 px-3 py-2 rounded-md border border-gray-300">
              <p className="text-gray-900">{Employee.bankName || 'Not provided'}</p>
            </div>
          </div>

          {/* Account Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Number
            </label>
            <div className="bg-gray-50 px-3 py-2 rounded-md border border-gray-300">
              <p className="text-gray-900 font-mono">
                {formatAccountNumber(Employee.bankAccountNumber)}
              </p>
            </div>
          </div>

          {/* Branch Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Branch Name
            </label>
            <div className="bg-gray-50 px-3 py-2 rounded-md border border-gray-300">
              <p className="text-gray-900">{Employee.branchName || 'Not provided'}</p>
            </div>
          </div>

          {/* Monthly Salary */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Salary
            </label>
            <div className="bg-green-50 px-3 py-2 rounded-md border border-green-300">
              <p className="text-green-800 font-semibold">{Employee.monthlySalary || 'Not specified'}</p>
            </div>
          </div>

          {/* Incentive */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Incentive
            </label>
            <div className="bg-blue-50 px-3 py-2 rounded-md border border-blue-300">
              <p className="text-blue-800">{Employee.incentive || 'Not applicable'}</p>
            </div>
          </div>

          {/* Account Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Type
            </label>
            <div className="bg-gray-50 px-3 py-2 rounded-md border border-gray-300">
              <p className="text-gray-900">{Employee.accountType || 'Not specified'}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Account Holder Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Holder Name
            </label>
            <div className="bg-gray-50 px-3 py-2 rounded-md border border-gray-300">
              <p className="text-gray-900">{Employee.accountHolderName || 'Not provided'}</p>
            </div>
          </div>

          {/* IFSC Code */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              IFSC Code
            </label>
            <div className="bg-gray-50 px-3 py-2 rounded-md border border-gray-300">
              <p className="text-gray-900 font-mono">{Employee.ifsc || 'Not provided'}</p>
            </div>
          </div>

          {/* MICR Code */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              MICR Code
            </label>
            <div className="bg-gray-50 px-3 py-2 rounded-md border border-gray-300">
              <p className="text-gray-900 font-mono">{Employee.micrCode || 'Not provided'}</p>
            </div>
          </div>

          {/* CTC */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cost to Company (CTC)
            </label>
            <div className="bg-purple-50 px-3 py-2 rounded-md border border-purple-300">
              <p className="text-purple-800 font-semibold">{Employee.ctc || 'Not specified'}</p>
            </div>
          </div>

          {/* Allowance */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Allowance
            </label>
            <div className="bg-yellow-50 px-3 py-2 rounded-md border border-yellow-300">
              <p className="text-yellow-800">{Employee.allowance || 'Not applicable'}</p>
            </div>
          </div>

          {/* PAN Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PAN Number
            </label>
            <div className="bg-gray-50 px-3 py-2 rounded-md border border-gray-300">
              <p className="text-gray-900 font-mono">{Employee.panNumber || 'Not provided'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cancelled Cheque Section */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Cancelled Cheque Document
        </label>
        <div className="flex justify-between items-center border-2 border-dashed border-gray-300 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <span className="text-gray-900 font-medium">Cancelled_Cheque.pdf</span>
              <p className="text-sm text-gray-500">Bank verification document</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={viewCancelledCheque}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center"
              title="View Cancelled Cheque"
            >
              <img
                src={FaEye}
                className="w-5 h-5"
                alt="View Cancelled Cheque"
              />
            </button>
            <button
              onClick={downloadCancelledCheque}
              className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center"
              title="Download Cancelled Cheque"
            >
              <img
                src={FaDownload}
                className="w-5 h-5"
                alt="Download Cancelled Cheque"
              />
            </button>
          </div>
        </div>
        
        {!Employee.cancelledBankCheque && (
          <p className="text-sm text-yellow-600 mt-2">
            Cancelled cheque document is not available.
          </p>
        )}
      </div>

      {/* Additional Financial Information */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Additional Financial Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">PF Account Number</span>
            <span className="text-gray-900 font-mono">{Employee.pfAccountNumber || 'Not provided'}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">UAN Number</span>
            <span className="text-gray-900 font-mono">{Employee.uanNumber || 'Not provided'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankInformation;