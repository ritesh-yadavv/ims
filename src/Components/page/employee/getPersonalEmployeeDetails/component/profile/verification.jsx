import React from 'react';
import { Eye, Download } from 'lucide-react';

const Verification = () => {
  // Static employee data
  const Employee = {
    aadharCard: "https://example.com/aadhar.pdf",
    panCard: "https://example.com/pan.pdf",
    pastPaySlips: "https://example.com/payslips.pdf",
    experienceLetter: "https://example.com/experience.pdf",
    qualificationMarksheet: "https://example.com/marksheet.pdf",
    highestQualification: "Master of Business Administration",
    highestQualificationPassingYear: "2018",
    highestQualificationCollege: "Indian Institute of Management, Bangalore"
  };

  const documents = [
    { name: 'Aadhar Card', key: 'aadharCard' },
    { name: 'PAN Card', key: 'panCard' },
    { name: '3 Month Payslip', key: 'pastPaySlips' },
    { name: 'Experience Letter', key: 'experienceLetter' },
    { name: 'Qualification Marksheet', key: 'qualificationMarksheet' },
  ];

  const viewPdf = (key) => {
    if (Employee[key]) {
      window.open(Employee[key], '_blank');
    }
  };

  const downloadPdf = (key, name) => {
    if (Employee[key]) {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = Employee[key];
      link.download = `${name.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="p-3 bg-white mx-auto font-jakarta">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {documents.map((doc, index) => (
          <div key={index} className="flex justify-between items-center border p-3 rounded-md hover:bg-gray-50 transition-colors">
            <span className="font-medium text-gray-700">{doc.name}</span>
            <div className="flex space-x-3">
              <Eye 
                size={20} 
                className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors" 
                onClick={() => viewPdf(doc.key)} 
                title={`View ${doc.name}`}
              />
              <Download 
                size={20} 
                className="cursor-pointer text-gray-600 hover:text-green-600 transition-colors" 
                onClick={() => downloadPdf(doc.key, doc.name)}
                title={`Download ${doc.name}`}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col mb-4">
          <h2 className="font-semibold text-gray-900 mb-2">Highest Qualification</h2>
          <p className="text-gray-700">{Employee.highestQualification}</p>
        </div>
        <div className="flex flex-col mb-4">
          <h2 className="font-semibold text-gray-900 mb-2">Year</h2>
          <p className="text-gray-700">{Employee.highestQualificationPassingYear}</p>
        </div>
        <div className="flex flex-col mb-4">
          <h2 className="font-semibold text-gray-900 mb-2">College</h2>
          <p className="text-gray-700">{Employee.highestQualificationCollege}</p>
        </div>
      </div>
    </div>
  );
};

export default Verification;