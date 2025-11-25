import React from 'react';
import { 
  FaEye, 
  FaDownload, 
  FaBuilding, 
  FaCreditCard, 
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUser,
  FaCode,
  FaFileInvoiceDollar,
  FaFilePdf,
  FaRupeeSign
} from 'react-icons/fa';

const BankInformation = () => {
  // Static employee bank data
  const staticEmployeeData = {
    bankName: "State Bank of India",
    bankAccountNumber: "12345678901",
    branchName: "Main Branch, Downtown",
    monthlySalary: "₹75,000",
    incentive: "₹5,000",
    accountHolderName: "John Doe",
    ifsc: "SBIN0000123",
    ctc: "₹12,00,000",
    allowance: "₹15,000",
    cancelledBankCheque: "https://example.com/documents/cancelled-cheque.pdf",
    accountType: "Savings Account",
    panNumber: "ABCDE1234F",
    pfAccountNumber: "MH/12345/1234567",
    uanNumber: "123456789012"
  };

  const Employee = staticEmployeeData;

  const viewCancelledCheque = () => {
    if (Employee.cancelledBankCheque) {
      window.open(Employee.cancelledBankCheque, '_blank');
    } else {
      alert('Cancelled cheque document is not available');
    }
  };

  const downloadCancelledCheque = () => {
    if (Employee.cancelledBankCheque) {
      const link = document.createElement('a');
      link.href = Employee.cancelledBankCheque;
      link.download = 'Cancelled_Cheque.pdf';
      link.click();
    } else {
      alert('Cancelled cheque document is not available for download');
    }
  };

  // Format account number for security
  const formatAccountNumber = (accountNumber) => {
    if (!accountNumber) return 'Not provided';
    return `XXXXXXX${accountNumber.slice(-4)}`;
  };

  return (
    <div className="p-6 bg-white font-jakarta mx-auto w-full rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
        <FaCreditCard className="mr-3 text-green-600" />
        Bank & Salary Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Bank Details */}
        <div className="space-y-4">
          {/* Bank Name */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaBuilding className="mr-2 text-blue-500" />
              Bank Name
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{Employee.bankName}</p>
            </div>
          </div>

          {/* Account Number */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaCreditCard className="mr-2 text-purple-500" />
              Account Number
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-mono font-medium">
                {formatAccountNumber(Employee.bankAccountNumber)}
              </p>
            </div>
          </div>

          {/* Branch Name */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              Branch Name
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{Employee.branchName}</p>
            </div>
          </div>

          {/* Account Type */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaCreditCard className="mr-2 text-cyan-500" />
              Account Type
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{Employee.accountType}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Account Holder & Salary */}
        <div className="space-y-4">
          {/* Account Holder Name */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaUser className="mr-2 text-green-500" />
              Account Holder Name
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-medium">{Employee.accountHolderName}</p>
            </div>
          </div>

          {/* IFSC Code */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaCode className="mr-2 text-orange-500" />
              IFSC Code
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-mono font-medium">{Employee.ifsc}</p>
            </div>
          </div>

          {/* PAN Number */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaCreditCard className="mr-2 text-pink-500" />
              PAN Number
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <p className="text-gray-900 font-mono font-medium">{Employee.panNumber}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Salary Information */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
          <FaMoneyBillWave className="mr-2 text-green-600" />
          Salary Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Monthly Salary */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaRupeeSign className="mr-2 text-green-500" />
              Monthly Salary
            </label>
            <div className="bg-green-50 border border-green-300 rounded-lg p-3 hover:bg-green-100 transition-colors">
              <p className="text-green-800 font-semibold">{Employee.monthlySalary}</p>
            </div>
          </div>

          {/* Incentive */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaMoneyBillWave className="mr-2 text-blue-500" />
              Incentive
            </label>
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-3 hover:bg-blue-100 transition-colors">
              <p className="text-blue-800 font-medium">{Employee.incentive}</p>
            </div>
          </div>

          {/* CTC */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaFileInvoiceDollar className="mr-2 text-purple-500" />
              Cost to Company
            </label>
            <div className="bg-purple-50 border border-purple-300 rounded-lg p-3 hover:bg-purple-100 transition-colors">
              <p className="text-purple-800 font-semibold">{Employee.ctc}</p>
            </div>
          </div>

          {/* Allowance */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaMoneyBillWave className="mr-2 text-yellow-500" />
              Allowance
            </label>
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 hover:bg-yellow-100 transition-colors">
              <p className="text-yellow-800 font-medium">{Employee.allowance}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cancelled Cheque Section */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <label className="flex items-center text-sm font-medium text-gray-700 mb-4">
          <FaFilePdf className="mr-2 text-red-500" />
          Cancelled Cheque Document
        </label>
        <div className="flex justify-between items-center border-2 border-dashed border-gray-300 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <FaFilePdf className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <span className="text-gray-900 font-medium block">Cancelled_Cheque.pdf</span>
              <p className="text-gray-500 text-sm">Bank verification document</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={viewCancelledCheque}
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center"
              title="View Cancelled Cheque"
            >
              <FaEye className="w-4 h-4" />
            </button>
            <button
              onClick={downloadCancelledCheque}
              className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center"
              title="Download Cancelled Cheque"
            >
              <FaDownload className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {!Employee.cancelledBankCheque && (
          <p className="text-sm text-yellow-600 mt-2 flex items-center">
            <span className="mr-2">⚠️</span>
            Cancelled cheque document is not available.
          </p>
        )}
      </div>

      {/* Additional Financial Information */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Additional Financial Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700">PF Account Number</span>
            <span className="text-gray-900 font-mono font-medium">{Employee.pfAccountNumber}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700">UAN Number</span>
            <span className="text-gray-900 font-mono font-medium">{Employee.uanNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankInformation;