import React from 'react';
import { 
  FaEye, 
  FaDownload, 
  FaIdCard, 
  FaFileInvoiceDollar, 
  FaGraduationCap, 
  FaBriefcase,
  FaFilePdf,
  FaUniversity,
  FaCalendarAlt,
  FaAward
} from 'react-icons/fa';

const Verification = () => {
  // Static employee verification data
  const staticEmployeeData = {
    aadharCard: "https://example.com/documents/aadhar-sample.pdf",
    panCard: "https://example.com/documents/pan-sample.pdf",
    pastPaySlips: "https://example.com/documents/payslip-sample.pdf",
    experienceLetter: "https://example.com/documents/experience-letter-sample.pdf",
    qualificationMarksheet: "https://example.com/documents/marksheet-sample.pdf",
    highestQualification: "Bachelor of Technology in Computer Science",
    highestQualificationPassingYear: "2018",
    highestQualificationCollege: "Indian Institute of Technology, Delhi",
    panNumber: "ABCDE1234F",
    aadharNumber: "1234 5678 9012"
  };

  const Employee = staticEmployeeData;

  const documents = [
    { 
      name: 'Aadhar Card', 
      key: 'aadharCard',
      icon: <FaIdCard className="w-5 h-5 text-blue-600" />,
      description: 'Identity Verification Document'
    },
    { 
      name: 'PAN Card', 
      key: 'panCard',
      icon: <FaIdCard className="w-5 h-5 text-yellow-600" />,
      description: 'Tax Identification Document'
    },
    { 
      name: '3 Month Payslip', 
      key: 'pastPaySlips',
      icon: <FaFileInvoiceDollar className="w-5 h-5 text-green-600" />,
      description: 'Salary History Document'
    },
    { 
      name: 'Experience Letter', 
      key: 'experienceLetter',
      icon: <FaBriefcase className="w-5 h-5 text-purple-600" />,
      description: 'Previous Employment Proof'
    },
    { 
      name: 'Qualification Marksheet', 
      key: 'qualificationMarksheet',
      icon: <FaGraduationCap className="w-5 h-5 text-red-600" />,
      description: 'Educational Qualification Proof'
    },
  ];

  const viewPdf = (name) => {
    const docMap = {
      'Aadhar Card': Employee.aadharCard,
      'PAN Card': Employee.panCard,
      '3 Month Payslip': Employee.pastPaySlips,
      'Experience Letter': Employee.experienceLetter,
      'Qualification Marksheet': Employee.qualificationMarksheet,
    };

    const documentUrl = docMap[name];
    if (documentUrl && documentUrl !== "#") {
      window.open(documentUrl, '_blank');
    } else {
      alert(`${name} document is not available`);
    }
  };

  const downloadPdf = (name) => {
    const docMap = {
      'Aadhar Card': Employee.aadharCard,
      'PAN Card': Employee.panCard,
      '3 Month Payslip': Employee.pastPaySlips,
      'Experience Letter': Employee.experienceLetter,
      'Qualification Marksheet': Employee.qualificationMarksheet,
    };

    const documentUrl = docMap[name];
    if (documentUrl && documentUrl !== "#") {
      const link = document.createElement('a');
      link.href = documentUrl;
      link.download = `${name.replace(/\s+/g, '_')}.pdf`;
      link.click();
    } else {
      alert(`${name} document is not available for download`);
    }
  };

  return (
    <div className="p-6 bg-white mx-auto rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
        <FaAward className="mr-3 text-green-600" />
        Verification Documents & Qualifications
      </h2>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {documents.map((doc, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center border-2 border-dashed border-gray-300 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                {doc.icon}
              </div>
              <div>
                <span className="font-medium text-gray-900 block">{doc.name}</span>
                <span className="text-gray-500 text-xs">{doc.description}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => viewPdf(doc.name)}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center"
                title={`View ${doc.name}`}
              >
                <FaEye className="w-4 h-4" />
              </button>
              <button
                onClick={() => downloadPdf(doc.name)}
                className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center"
                title={`Download ${doc.name}`}
              >
                <FaDownload className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Qualifications Section */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <FaGraduationCap className="mr-2 text-blue-600" />
          Educational Qualifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Highest Qualification */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaAward className="mr-2 text-purple-500" />
              Highest Qualification
            </label>
            <div className="bg-purple-50 border border-purple-300 rounded-lg p-3 hover:bg-purple-100 transition-colors">
              <p className="text-purple-900 font-medium">
                {Employee.highestQualification}
              </p>
            </div>
          </div>

          {/* Passing Year */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaCalendarAlt className="mr-2 text-green-500" />
              Passing Year
            </label>
            <div className="bg-green-50 border border-green-300 rounded-lg p-3 hover:bg-green-100 transition-colors">
              <p className="text-green-900 font-medium">
                {Employee.highestQualificationPassingYear}
              </p>
            </div>
          </div>

          {/* College */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FaUniversity className="mr-2 text-blue-500" />
              College/University
            </label>
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-3 hover:bg-blue-100 transition-colors">
              <p className="text-blue-900 font-medium">
                {Employee.highestQualificationCollege}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Verification Information */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Additional Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700">PAN Number</span>
            <span className="text-gray-900 font-mono font-medium">{Employee.panNumber}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700">Aadhar Number</span>
            <span className="text-gray-900 font-mono font-medium">{Employee.aadharNumber}</span>
          </div>
        </div>
      </div>

      {/* Verification Status */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Verification Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700">Document Verification</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Verified
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700">Background Check</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Completed
            </span>
          </div>
        </div>
      </div>

      {/* Document Availability Notice */}
      {(!Employee.aadharCard || !Employee.panCard) && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-700 text-sm flex items-center">
            <span className="mr-2">⚠️</span>
            Some verification documents are pending upload. Please contact the employee.
          </p>
        </div>
      )}
    </div>
  );
};

export default Verification;