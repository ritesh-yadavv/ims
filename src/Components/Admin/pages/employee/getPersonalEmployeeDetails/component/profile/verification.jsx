import React from 'react';
import FaEye from "../../../../../../../assets/view.png"
import FaDownload from "../../../../../../../assets/download 01.png"

const Verification = () => {
  // Static employee data
  const staticEmployeeData = {
    id: 1,
    name: 'John Doe',
    employeeId: 'EMP001',
    
    // Documents
    aadharCard: 'https://example.com/documents/aadhar-sample.pdf',
    panCard: 'https://example.com/documents/pan-sample.jpg',
    pastPaySlips: 'https://example.com/documents/payslip-sample.pdf',
    experienceLetter: 'https://example.com/documents/experience-letter-sample.pdf',
    qualificationMarksheet: 'https://example.com/documents/marksheet-sample.pdf',
    
    // Qualifications
    highestQualification: 'Bachelor of Science in Computer Science',
    highestQualificationPassingYear: '2012',
    highestQualificationCollege: 'Stanford University',
    
    // Additional verification data
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    department: 'Engineering',
    designation: 'Software Engineer'
  };

  // Use static data instead of Redux
  const Employee = staticEmployeeData;

  const documents = [
    { 
      name: 'Aadhar Card', 
      key: 'aadharCard',
      description: 'Identity Verification Document'
    },
    { 
      name: 'PAN Card', 
      key: 'panCard',
      description: 'Tax Identification Document'
    },
    { 
      name: '3 Month Payslip', 
      key: 'pastPaySlips',
      description: 'Salary History Document'
    },
    { 
      name: 'Experience Letter', 
      key: 'experienceLetter',
      description: 'Previous Employment Proof'
    },
    { 
      name: 'Qualification Marksheet', 
      key: 'qualificationMarksheet',
      description: 'Educational Qualification Proof'
    },
  ];

  const viewPdf = (name) => {
    const documentMap = {
      "Aadhar Card": Employee.aadharCard,
      "PAN Card": Employee.panCard,
      "3 Month Payslip": Employee.pastPaySlips,
      "Experience Letter": Employee.experienceLetter,
      "Qualification Marksheet": Employee.qualificationMarksheet
    };

    const documentUrl = documentMap[name];
    if (documentUrl) {
      window.open(documentUrl, '_blank');
    } else {
      alert(`${name} document is not available`);
    }
  };

  const downloadPdf = (name) => {
    const documentMap = {
      "Aadhar Card": Employee.aadharCard,
      "PAN Card": Employee.panCard,
      "3 Month Payslip": Employee.pastPaySlips,
      "Experience Letter": Employee.experienceLetter,
      "Qualification Marksheet": Employee.qualificationMarksheet
    };

    const documentUrl = documentMap[name];
    if (documentUrl) {
      const link = document.createElement('a');
      link.href = documentUrl;
      link.download = `${name.replace(/\s+/g, '_')}.pdf`;
      link.click();
    } else {
      alert(`${name} document is not available for download`);
    }
  };

  // Get document icon based on type
  const getDocumentIcon = (docName) => {
    if (docName.includes('Aadhar') || docName.includes('PAN')) {
      return '🆔';
    } else if (docName.includes('Payslip')) {
      return '💰';
    } else if (docName.includes('Experience')) {
      return '💼';
    } else if (docName.includes('Qualification')) {
      return '🎓';
    }
    return '📄';
  };

  return (
    <div className="p-6 bg-white mx-auto rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
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
              <div className="text-2xl">
                {getDocumentIcon(doc.name)}
              </div>
              <div>
                <span className="font-medium text-gray-900 block">{doc.name}</span>
                <span className="text-sm text-gray-500">{doc.description}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => viewPdf(doc.name)}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center"
                title={`View ${doc.name}`}
              >
                <img
                  src={FaEye}
                  className="w-4 h-4"
                  alt={`View ${doc.name}`}
                />
              </button>
              <button
                onClick={() => downloadPdf(doc.name)}
                className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center"
                title={`Download ${doc.name}`}
              >
                <img
                  src={FaDownload}
                  className="w-4 h-4"
                  alt={`Download ${doc.name}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Qualifications Section */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Educational Qualifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Highest Qualification */}
          <div className="flex flex-col p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="font-semibold text-blue-800 mb-2 flex items-center">
              <span className="mr-2">🎓</span>
              Highest Qualification
            </h2>
            <p className="text-gray-700">
              {Employee.highestQualification || 'Not specified'}
            </p>
          </div>

          {/* Passing Year */}
          <div className="flex flex-col p-4 bg-green-50 rounded-lg border border-green-200">
            <h2 className="font-semibold text-green-800 mb-2 flex items-center">
              <span className="mr-2">📅</span>
              Passing Year
            </h2>
            <p className="text-gray-700">
              {Employee.highestQualificationPassingYear || 'Not specified'}
            </p>
          </div>

          {/* College */}
          <div className="flex flex-col p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h2 className="font-semibold text-purple-800 mb-2 flex items-center">
              <span className="mr-2">🏫</span>
              College/University
            </h2>
            <p className="text-gray-700">
              {Employee.highestQualificationCollege || 'Not specified'}
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Verification Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Document Verification</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Verified</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Background Check</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Completed</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Education Verification</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Verified</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Employment History</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Verified</span>
          </div>
        </div>
      </div>

      {/* Document Availability Notice */}
      {!Employee.aadharCard && !Employee.panCard && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-700 text-sm">
            ⚠️ Some verification documents are not available. Please contact the employee to upload missing documents.
          </p>
        </div>
      )}
    </div>
  );
};

export default Verification;