import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from "../../../../commonComponent/loader"
import toast, { Toaster } from 'react-hot-toast';
import { 
  FaIdCard, 
  FaFileInvoiceDollar, 
  FaGraduationCap, 
  FaBriefcase,
  FaFileUpload,
  FaFilePdf,
  FaUniversity,
  FaCalendarAlt,
  FaAward
} from 'react-icons/fa';

const Verification = ({ nextStep }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      aadharCard: null,
      panCard: null,
      highestQualification: '',
      highestQualificationPassingYear: '',
      highestQualificationCollege: '',
      qualificationMarksheet: null,
      experienceLetter: null,
      pastPaySlips: null,
    },
    validationSchema: Yup.object({
      aadharCard: Yup.mixed().required('Aadhar Card is required')
        .test(
          'fileSize',
          'File size must be less than 500KB',
          (value) => !value || (value && value.size <= 500 * 1024) // Make optional for static data
        ),
      panCard: Yup.mixed().required('PAN Card is required')
        .test(
          'fileSize',
          'File size must be less than 500KB',
          (value) => !value || (value && value.size <= 500 * 1024) // Make optional for static data
        ),
      highestQualification: Yup.string().required('Highest Qualification is required'),
      highestQualificationPassingYear: Yup.string().required('Passing Year is required'),
      highestQualificationCollege: Yup.string().required('College is required'),
      qualificationMarksheet: Yup.mixed().required('Qualification Marksheet is required')
        .test(
          'fileSize',
          'File size must be less than 500KB',
          (value) => !value || (value && value.size <= 500 * 1024) // Make optional for static data
        ),
      experienceLetter: Yup.mixed().nullable()
        .test(
          'fileSize',
          'File size must be less than 500KB',
          (value) => !value || (value && value.size <= 500 * 1024)
        ),
      pastPaySlips: Yup.mixed().nullable()
        .test(
          'fileSize',
          'File size must be less than 500KB',
          (value) => !value || (value && value.size <= 500 * 1024)
        ),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Static data processing for file uploads
        const uploadedFiles = {};
        const filesToProcess = [
          { key: 'aadharCard', file: values.aadharCard },
          { key: 'panCard', file: values.panCard },
          { key: 'qualificationMarksheet', file: values.qualificationMarksheet },
          { key: 'experienceLetter', file: values.experienceLetter },
          { key: 'pastPaySlips', file: values.pastPaySlips },
        ];

        // Process each file
        filesToProcess.forEach(({ key, file }) => {
          if (file) {
            uploadedFiles[key] = URL.createObjectURL(file);
          } else {
            // Fallback URLs for static data
            uploadedFiles[key] = `https://example.com/documents/${key}.pdf`;
          }
        });

        // Combine uploaded file URLs with other form fields
        const employeeData = {
          ...values,
          ...uploadedFiles,
          aadharNumber: '1234 5678 9012',
          panNumber: 'ABCDE1234F',
          verificationStatus: 'Pending'
        };

        console.log("Verification data submitted:", employeeData);
        
        // Store in localStorage (simulating Redux state)
        localStorage.setItem('employeeVerificationData', JSON.stringify(employeeData));
        
        toast.success('Verification documents uploaded successfully!');
        
        // Move to the next step
        nextStep();
      } catch (error) {
        toast.error('Failed to upload documents. Please try again.');
        console.error('File upload failed:', error);
      }
      setLoading(false);
    },
  });

  const handleFileChange = (fieldName, event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue(fieldName, file);
    
    // You could add file preview logic here
    if (file) {
      console.log(`File selected for ${fieldName}:`, file.name);
    }
  };

  const fillSampleData = () => {
    const sampleData = {
      highestQualification: 'bachelor',
      highestQualificationPassingYear: '2020',
      highestQualificationCollege: 'University of Technology'
    };
    
    formik.setValues({
      ...formik.values,
      ...sampleData
    });
  };

  const documentFields = [
    {
      name: 'Aadhar Card',
      id: 'aadharCardInput',
      field: 'aadharCard',
      icon: <FaIdCard className="w-5 h-5 text-blue-600" />,
      description: 'Identity Verification Document'
    },
    {
      name: 'PAN Card',
      id: 'panCardInput',
      field: 'panCard',
      icon: <FaIdCard className="w-5 h-5 text-yellow-600" />,
      description: 'Tax Identification Document'
    },
    {
      name: 'Qualification Marksheet',
      id: 'qualificationMarksheetInput',
      field: 'qualificationMarksheet',
      icon: <FaGraduationCap className="w-5 h-5 text-red-600" />,
      description: 'Educational Qualification Proof'
    },
    {
      name: 'Experience Letter',
      id: 'experienceLetterInput',
      field: 'experienceLetter',
      icon: <FaBriefcase className="w-5 h-5 text-purple-600" />,
      description: 'Previous Employment Proof'
    },
    {
      name: 'Past 3 Month Payslips',
      id: 'pastPaySlipsInput',
      field: 'pastPaySlips',
      icon: <FaFileInvoiceDollar className="w-5 h-5 text-green-600" />,
      description: 'Salary History Document'
    }
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <Toaster/>
      <div className="w-full mx-auto p-6 font-jakarta">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
            <FaAward className="mr-3 text-green-600" />
            Verification Documents
          </h2>
          <p className="text-gray-600">Upload required documents for employee verification</p>
        </div>

        {/* Document Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {documentFields.map((doc) => (
            <div key={doc.id} className="flex flex-col space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-900">
                {doc.icon}
                <span className="ml-2">{doc.name}</span>
              </label>
              <div className="flex items-center justify-between border-2 border-dashed border-gray-300 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="bg-white p-2 rounded-lg">
                    <FaFileUpload className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm">{doc.description}</p>
                    <p className="text-gray-500 text-xs">Supported: PDF, JPEG, PNG (Max 500KB)</p>
                    {formik.values[doc.field] && (
                      <p className="text-green-600 text-xs mt-1">
                        ✓ {formik.values[doc.field].name}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => document.getElementById(doc.id).click()}
                  className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
                >
                  <FaFileUpload className="w-3 h-3" />
                  Choose
                </button>
                <input
                  type="file"
                  className="hidden"
                  id={doc.id}
                  name={doc.field}
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(event) => handleFileChange(doc.field, event)}
                />
              </div>
              {formik.touched[doc.field] && formik.errors[doc.field] ? (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors[doc.field]}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Educational Qualifications Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FaGraduationCap className="mr-2 text-blue-600" />
            Educational Qualifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Highest Qualification */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-900">
                <FaAward className="mr-2 text-purple-500" />
                Highest Qualification
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                name="highestQualification"
                value={formik.values.highestQualification}
                onChange={formik.handleChange}
              >
                <option value="">Select Degree</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="diploma">Diploma</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.highestQualification && formik.errors.highestQualification ? (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.highestQualification}
                </div>
              ) : null}
            </div>

            {/* Passing Year */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-900">
                <FaCalendarAlt className="mr-2 text-green-500" />
                Passing Year
              </label>
              <input
                type="text"
                placeholder="e.g., 2020"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                name="highestQualificationPassingYear"
                value={formik.values.highestQualificationPassingYear}
                onChange={formik.handleChange}
              />
              {formik.touched.highestQualificationPassingYear && formik.errors.highestQualificationPassingYear ? (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.highestQualificationPassingYear}
                </div>
              ) : null}
            </div>

            {/* College */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-900">
                <FaUniversity className="mr-2 text-blue-500" />
                College/University
              </label>
              <input
                type="text"
                placeholder="College Name"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                name="highestQualificationCollege"
                value={formik.values.highestQualificationCollege}
                onChange={formik.handleChange}
              />
              {formik.touched.highestQualificationCollege && formik.errors.highestQualificationCollege ? (
                <div className="text-red-600 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {formik.errors.highestQualificationCollege}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={fillSampleData}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
            >
              Fill Sample Data
            </button>
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center gap-2"
            >
              {loading ? <Loader /> : "Save & Continue"}
            </button>
          </div>
        </div>

        {/* Information Note */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-700 text-sm flex items-center">
            <span className="mr-2">ℹ️</span>
            All documents will be verified for authenticity. Please ensure files are clear and readable.
          </p>
        </div>
      </div>
    </form>
  );
};

export default Verification;