import React, { useState } from 'react';
import { Upload, FileText, CheckCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Verification = ({ nextStep }) => {
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({});

  // States for each file field
  const [aadharCard, setAadharCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [qualificationMarksheet, setQualificationMarksheet] = useState(null);
  const [experienceLetter, setExperienceLetter] = useState(null);
  const [pastPaySlips, setPastPaySlips] = useState(null);
  const [cancelledBankCheque, setCancelledBankCheque] = useState(null);
  const [appointmentLetter, setAppointmentLetter] = useState(null);

  // File size validation function (Max 500KB)
  const validateFile = (file) => {
    if (!file) return false;
    
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      toast.error('File must be JPEG, PNG, or PDF');
      return false;
    }
    
    return file.size <= 500 * 1024; // 500KB limit
  };

  const handleUpdateFile = async (file, fieldName, label) => {
    if (!file) {
      toast.error(`Please select a valid ${label}`);
      return;
    }

    if (!validateFile(file)) {
      toast.error(`${label} must be less than 500KB and in JPEG, PNG, or PDF format`);
      return;
    }

    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful upload
      console.log(`Uploading ${label}:`, file.name);
      
      // Update uploaded files state
      setUploadedFiles(prev => ({
        ...prev,
        [fieldName]: {
          name: file.name,
          url: URL.createObjectURL(file),
          uploadedAt: new Date().toISOString()
        }
      }));

      toast.success(`${label} uploaded successfully!`);
      
      // Reset file input
      switch (fieldName) {
        case 'aadharCard':
          setAadharCard(null);
          break;
        case 'panCard':
          setPanCard(null);
          break;
        case 'qualificationMarksheet':
          setQualificationMarksheet(null);
          break;
        case 'experienceLetter':
          setExperienceLetter(null);
          break;
        case 'pastPaySlips':
          setPastPaySlips(null);
          break;
        case 'cancelledBankCheque':
          setCancelledBankCheque(null);
          break;
        case 'appointmentLetter':
          setAppointmentLetter(null);
          break;
        default:
          break;
      }

      // If nextStep prop is provided and all files are uploaded, navigate to next step
      if (nextStep && Object.keys(uploadedFiles).length >= 6) {
        nextStep();
      }

    } catch (error) {
      toast.error(`Error uploading ${label}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // File Upload Component
  const FileUpload = ({ label, file, setFile, fieldName, handleUpload }) => (
    <div className="flex flex-col p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
      <label className="text-sm font-medium text-gray-900 block mb-3 flex items-center">
        <FileText size={16} className="mr-2" />
        {label}
        {uploadedFiles[fieldName] && (
          <CheckCircle size={16} className="ml-2 text-green-500" />
        )}
      </label>
      
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-md bg-gray-50">
        <button
          type="button"
          onClick={() => document.getElementById(`${fieldName}Input`).click()}
          className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors mb-3"
        >
          <Upload size={24} className="text-blue-600" />
        </button>
        
        <div className="text-center">
          {file ? (
            <div className="text-center">
              <p className="text-gray-700 text-sm font-medium">{file.name}</p>
              <p className="text-gray-500 text-xs mt-1">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          ) : uploadedFiles[fieldName] ? (
            <div className="text-center">
              <p className="text-green-600 text-sm font-medium">✓ Uploaded</p>
              <p className="text-gray-500 text-xs mt-1">
                {uploadedFiles[fieldName].name}
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 text-sm">Choose file to upload</p>
              <p className="text-gray-400 text-xs mt-1">JPEG, PNG, PDF (Max 500KB)</p>
            </>
          )}
        </div>
        
        <input
          type="file"
          className="hidden"
          id={`${fieldName}Input`}
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={(event) => setFile(event.target.files[0])}
        />
      </div>
      
      {file && !uploadedFiles[fieldName] && (
        <button
          onClick={() => handleUpload(file, fieldName, label)}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-600 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Uploading...
            </div>
          ) : (
            <>
              <Upload size={16} className="mr-2" />
              Upload {label}
            </>
          )}
        </button>
      )}
      
      {uploadedFiles[fieldName] && (
        <div className="flex space-x-2 mt-3">
          <button
            onClick={() => window.open(uploadedFiles[fieldName].url, '_blank')}
            className="flex-1 bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors"
          >
            View
          </button>
          <button
            onClick={() => document.getElementById(`${fieldName}Input`).click()}
            className="flex-1 bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
          >
            Replace
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full mx-auto p-6 font-jakarta">
      <Toaster />
      
      {/* Upload Progress */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-blue-900">
            Document Upload Progress
          </span>
          <span className="text-sm text-blue-700">
            {Object.keys(uploadedFiles).length} of 7 documents uploaded
          </span>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(Object.keys(uploadedFiles).length / 7) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aadhar Card */}
        <FileUpload
          label="Aadhar Card"
          file={aadharCard}
          setFile={setAadharCard}
          fieldName="aadharCard"
          handleUpload={handleUpdateFile}
        />

        {/* Pan Card */}
        <FileUpload
          label="PAN Card"
          file={panCard}
          setFile={setPanCard}
          fieldName="panCard"
          handleUpload={handleUpdateFile}
        />

        {/* Qualification Marksheet */}
        <FileUpload
          label="Qualification Marksheet"
          file={qualificationMarksheet}
          setFile={setQualificationMarksheet}
          fieldName="qualificationMarksheet"
          handleUpload={handleUpdateFile}
        />

        {/* Experience Letter */}
        <FileUpload
          label="Experience Letter"
          file={experienceLetter}
          setFile={setExperienceLetter}
          fieldName="experienceLetter"
          handleUpload={handleUpdateFile}
        />

        {/* Past Pay Slips */}
        <FileUpload
          label="Past 3 Months Pay Slips"
          file={pastPaySlips}
          setFile={setPastPaySlips}
          fieldName="pastPaySlips"
          handleUpload={handleUpdateFile}
        />

        {/* Cancelled Bank Cheque */}
        <FileUpload
          label="Cancelled Bank Cheque"
          file={cancelledBankCheque}
          setFile={setCancelledBankCheque}
          fieldName="cancelledBankCheque"
          handleUpload={handleUpdateFile}
        />

        {/* Appointment Letter */}
        <FileUpload
          label="Appointment Letter"
          file={appointmentLetter}
          setFile={setAppointmentLetter}
          fieldName="appointmentLetter"
          handleUpload={handleUpdateFile}
        />
      </div>

      {/* Summary Section */}
      {Object.keys(uploadedFiles).length > 0 && (
        <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
            <CheckCircle size={20} className="mr-2" />
            Upload Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(uploadedFiles).map(([fieldName, fileInfo]) => (
              <div key={fieldName} className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center">
                  <FileText size={16} className="text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">
                    {fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </span>
                </div>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                  Uploaded
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Verification;