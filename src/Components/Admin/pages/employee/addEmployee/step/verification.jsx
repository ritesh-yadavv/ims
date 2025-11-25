import React, { useState } from 'react';
import uploadIcon from "../../../../../../assets/Button.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setEmployeeData } from "../../../../../redux/slices/createEmployeeAdminSlice"
import Loader from "../../../../../commonComponent/loader"

const Verification = ({ nextStep }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Static file URLs for document uploads
  const staticDocumentUrls = {
    aadharCard: 'https://example.com/documents/aadhar-sample.pdf',
    panCard: 'https://example.com/documents/pan-sample.jpg',
    qualificationMarksheet: 'https://example.com/documents/marksheet-sample.pdf',
    experienceLetter: 'https://example.com/documents/experience-letter-sample.pdf',
    pastPaySlips: 'https://example.com/documents/payslip-sample.pdf'
  };

  // Static sample data for testing
  const sampleData = {
    highestQualification: 'bachelor',
    highestQualificationPassingYear: '2020',
    highestQualificationCollege: 'Sample University',
  };

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
      panCard: Yup.mixed().required('Pan Card is required')
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
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      try {
        // Generate URLs for uploaded files or use static URLs
        const uploadedFiles = {};
        
        // List of file fields
        const fileFields = [
          'aadharCard', 
          'panCard', 
          'qualificationMarksheet', 
          'experienceLetter', 
          'pastPaySlips'
        ];

        // Process each file field
        fileFields.forEach(fieldName => {
          if (values[fieldName]) {
            // If file is uploaded, create object URL
            uploadedFiles[fieldName] = URL.createObjectURL(values[fieldName]);
          } else {
            // Use static URL as fallback
            uploadedFiles[fieldName] = staticDocumentUrls[fieldName];
          }
        });

        // Combine uploaded file URLs with other form fields
        const employeeData = {
          ...values,
          ...uploadedFiles
        };

        console.log("Employee verification data:", employeeData);

        // Dispatch the combined data to Redux
        dispatch(setEmployeeData(employeeData));

        // Move to the next step
        nextStep();
      } catch (error) {
        console.error('Form submission failed:', error);
      }
      setLoading(false);
    },
  });

  // Function to fill form with sample data for testing
  const fillWithSampleData = () => {
    formik.setValues({
      ...formik.values,
      ...sampleData
    });
  };

  // Function to handle file input and show preview
  const handleFileChange = (fieldName, event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue(fieldName, file);
    
    // You could add file preview logic here if needed
    if (file) {
      console.log(`File selected for ${fieldName}:`, file.name);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full mx-auto p-6">
        {/* Sample Data Button */}
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={fillWithSampleData}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-sm"
          >
            Fill Sample Data
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Aadhar Card */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 block mb-2">Aadhar Card</label>
            <div className="flex items-center justify-evenly border-2 border-dashed border-gray-300 p-6 rounded-md">
              <button
                type="button"
                onClick={() => document.getElementById('aadharCardInput').click()}
                className="p-2 flex justify-center items-center hover:bg-gray-400 rounded"
              >
                <img src={uploadIcon} alt="upload icon" />
              </button>
              <div>
                <p className="text-gray-400">Drag & Drop or choose file to upload</p>
                <p className="text-gray-400">Supported format Jpeg Pdf</p>
              </div>
              <input
                type="file"
                className="hidden"
                id="aadharCardInput"
                name="aadharCard"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(event) => handleFileChange('aadharCard', event)}
              />
            </div>
            {formik.values.aadharCard && (
              <p className="text-green-600 text-sm mt-2">File selected: {formik.values.aadharCard.name}</p>
            )}
            {formik.touched.aadharCard && formik.errors.aadharCard ? (
              <div className="text-red-600 text-sm">{formik.errors.aadharCard}</div>
            ) : null}
          </div>

          {/* Pan Card */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 block mb-2">Pan Card</label>
            <div className="flex items-center justify-evenly border-2 border-dashed border-gray-300 p-6 rounded-md">
              <button
                type="button"
                onClick={() => document.getElementById('panCardInput').click()}
                className="p-2 flex justify-center items-center hover:bg-gray-400 rounded"
              >
                <img src={uploadIcon} alt="upload icon" />
              </button>
              <div>
                <p className="text-gray-400">Drag & Drop or choose file to upload</p>
                <p className="text-gray-400">Supported format Jpeg Pdf</p>
              </div>
              <input
                type="file"
                className="hidden"
                id="panCardInput"
                name="panCard"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(event) => handleFileChange('panCard', event)}
              />
            </div>
            {formik.values.panCard && (
              <p className="text-green-600 text-sm mt-2">File selected: {formik.values.panCard.name}</p>
            )}
            {formik.touched.panCard && formik.errors.panCard ? (
              <div className="text-red-600 text-sm">{formik.errors.panCard}</div>
            ) : null}
          </div>

          {/* Highest Qualifications */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 block mb-2">Highest Qualifications</label>
            <select
              className="border border-gray-300 p-2 rounded-md bg-gray-50"
              name="highestQualification"
              value={formik.values.highestQualification}
              onChange={formik.handleChange}
            >
              <option value="">Select Degree</option>
              <option value="bachelor">Bachelor's</option>
              <option value="master">Master's</option>
              <option value="phd">PhD</option>
              <option value="diploma">Diploma</option>
              <option value="other">Other</option>
            </select>
            {formik.touched.highestQualification && formik.errors.highestQualification ? (
              <div className="text-red-600 text-sm">{formik.errors.highestQualification}</div>
            ) : null}
            
            <input
              type="text"
              placeholder="Passing Year"
              className="border border-gray-300 p-2 mt-2 rounded-md bg-gray-50"
              name="highestQualificationPassingYear"
              value={formik.values.highestQualificationPassingYear}
              onChange={formik.handleChange}
            />
            {formik.touched.highestQualificationPassingYear && formik.errors.highestQualificationPassingYear ? (
              <div className="text-red-600 text-sm">{formik.errors.highestQualificationPassingYear}</div>
            ) : null}
          </div>

          {/* College */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 block mb-2">College</label>
            <input
              type="text"
              placeholder="Highest Qualification College Name"
              className="border border-gray-300 p-2 rounded-md bg-gray-50"
              name="highestQualificationCollege"
              value={formik.values.highestQualificationCollege}
              onChange={formik.handleChange}
            />
            {formik.touched.highestQualificationCollege && formik.errors.highestQualificationCollege ? (
              <div className="text-red-600 text-sm">{formik.errors.highestQualificationCollege}</div>
            ) : null}
          </div>

          {/* Qualification Marksheet */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 block mb-2">Qualification Marksheet</label>
            <div className="flex items-center justify-evenly border-2 border-dashed border-gray-300 p-6 rounded-md">
              <button
                type="button"
                onClick={() => document.getElementById('qualificationMarksheetInput').click()}
                className="p-2 flex justify-center items-center hover:bg-gray-400 rounded"
              >
                <img src={uploadIcon} alt="upload icon" />
              </button>
              <div>
                <p className="text-gray-400">Drag & Drop or choose file to upload</p>
                <p className="text-gray-400">Supported format Jpeg Pdf</p>
              </div>
              <input
                type="file"
                className="hidden"
                id="qualificationMarksheetInput"
                name="qualificationMarksheet"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(event) => handleFileChange('qualificationMarksheet', event)}
              />
            </div>
            {formik.values.qualificationMarksheet && (
              <p className="text-green-600 text-sm mt-2">File selected: {formik.values.qualificationMarksheet.name}</p>
            )}
            {formik.touched.qualificationMarksheet && formik.errors.qualificationMarksheet ? (
              <div className="text-red-600 text-sm">{formik.errors.qualificationMarksheet}</div>
            ) : null}
          </div>

          {/* Experience Letter */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 block mb-2">Experience Letter</label>
            <div className="flex items-center justify-evenly border-2 border-dashed border-gray-300 p-6 rounded-md">
              <button
                type="button"
                onClick={() => document.getElementById('experienceLetterInput').click()}
                className="p-2 flex justify-center items-center hover:bg-gray-400 rounded"
              >
                <img src={uploadIcon} alt="upload icon" />
              </button>
              <div>
                <p className="text-gray-400">Drag & Drop or choose file to upload</p>
                <p className="text-gray-400">Supported format Jpeg Pdf</p>
              </div>
              <input
                type="file"
                className="hidden"
                id="experienceLetterInput"
                name="experienceLetter"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(event) => handleFileChange('experienceLetter', event)}
              />
            </div>
            {formik.values.experienceLetter && (
              <p className="text-green-600 text-sm mt-2">File selected: {formik.values.experienceLetter.name}</p>
            )}
            {formik.touched.experienceLetter && formik.errors.experienceLetter ? (
              <div className="text-red-600 text-sm">{formik.errors.experienceLetter}</div>
            ) : null}
          </div>

          {/* Past Pay Slips */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 block mb-2">Past 3 Month Pay Slips</label>
            <div className="flex items-center justify-evenly border-2 border-dashed border-gray-300 p-6 rounded-md">
              <button
                type="button"
                onClick={() => document.getElementById('pastPaySlipsInput').click()}
                className="p-2 flex justify-center items-center hover:bg-gray-400 rounded"
              >
                <img src={uploadIcon} alt="upload icon" />
              </button>
              <div>
                <p className="text-gray-400">Drag & Drop or choose file to upload</p>
                <p className="text-gray-400">Supported format Jpeg Pdf</p>
              </div>
              <input
                type="file"
                className="hidden"
                id="pastPaySlipsInput"
                name="pastPaySlips"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(event) => handleFileChange('pastPaySlips', event)}
              />
            </div>
            {formik.values.pastPaySlips && (
              <p className="text-green-600 text-sm mt-2">File selected: {formik.values.pastPaySlips.name}</p>
            )}
            {formik.touched.pastPaySlips && formik.errors.pastPaySlips ? (
              <div className="text-red-600 text-sm">{formik.errors.pastPaySlips}</div>
            ) : null}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            {loading ? <Loader /> : "Next"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Verification;