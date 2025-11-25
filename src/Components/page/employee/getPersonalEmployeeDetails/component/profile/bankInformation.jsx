import React from 'react';
import { Eye, Download } from 'lucide-react';

const BankInformation = () => {
  // Static data
  const bankData = {
    bankName: "State Bank of India",
    bankAccountNumber: "12345678901",
    branchName: "Main Branch, Mumbai",
    monthlySalary: "₹75,000",
    incentive: "₹5,000",
    accountHolderName: "John Doe",
    ifsc: "SBIN0000123",
    ctc: "₹12,00,000",
    allowance: "₹15,000",
    cancelledBankCheque: "https://example.com/cancelled-cheque.pdf"
  };

  const viewCancelledCheque = () => {
    if (bankData.cancelledBankCheque) {
      window.open(bankData.cancelledBankCheque, '_blank');
    }
  };

  const downloadCancelledCheque = () => {
    if (bankData.cancelledBankCheque) {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = bankData.cancelledBankCheque;
      link.download = 'cancelled-cheque.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="p-3 bg-white mx-auto w-full font-jakarta">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <h2 className="font-semibold">Bank Name</h2>
            <p>{bankData.bankName}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Account Number</h2>
            <p>{bankData.bankAccountNumber}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Branch Name</h2>
            <p>{bankData.branchName}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Monthly Salary</h2>
            <p>{bankData.monthlySalary}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Incentive</h2>
            <p>{bankData.incentive}</p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h2 className="font-semibold">Account Holder Name</h2>
            <p>{bankData.accountHolderName}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">IFSC Code</h2>
            <p>{bankData.ifsc}</p>
          </div>

          <div className="mb-2">
            <h2 className="font-semibold">Cancelled Cheque</h2>
            <div className="flex justify-between items-center border p-2 rounded-md">
              <span>Cancelled Cheque</span>
              <div className="flex space-x-2">
                <Eye 
                  size={20} 
                  className="cursor-pointer text-gray-600 hover:text-blue-600" 
                  onClick={viewCancelledCheque} 
                />
                <Download 
                  size={20} 
                  className="cursor-pointer text-gray-600 hover:text-green-600" 
                  onClick={downloadCancelledCheque}
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">CTC</h2>
            <p>{bankData.ctc}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Allowance</h2>
            <p>{bankData.allowance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankInformation;