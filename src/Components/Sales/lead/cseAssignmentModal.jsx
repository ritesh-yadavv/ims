import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../commonComponent/loader";
import { FaTimes, FaCalendarAlt, FaUserCheck, FaMapMarkerAlt } from "react-icons/fa";

const CseAssignmentModal = ({ onClose, client }) => {
  const [customerSupportList, setCustomerSupportList] = useState([]);
  const [selectedCustomerSupport, setSelectedCustomerSupport] = useState(null);
  const [installationDate, setInstallationDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Static data for customer support executives
  const staticCseData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      phone: "+91 98765 43210",
      locality: "Downtown",
      specialization: "Hardware Installation",
      experience: "3 years",
      currentWorkload: 12,
      maxWorkload: 20,
      rating: 4.5
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@company.com",
      phone: "+91 87654 32109",
      locality: "Uptown",
      specialization: "Software Setup",
      experience: "2 years",
      currentWorkload: 8,
      maxWorkload: 15,
      rating: 4.8
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@company.com",
      phone: "+91 76543 21098",
      locality: "Midtown",
      specialization: "Network Configuration",
      experience: "4 years",
      currentWorkload: 18,
      maxWorkload: 25,
      rating: 4.3
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.reddy@company.com",
      phone: "+91 65432 10987",
      locality: "Downtown",
      specialization: "System Integration",
      experience: "3.5 years",
      currentWorkload: 10,
      maxWorkload: 18,
      rating: 4.7
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.singh@company.com",
      phone: "+91 54321 09876",
      locality: "Uptown",
      specialization: "Training & Support",
      experience: "2.5 years",
      currentWorkload: 14,
      maxWorkload: 22,
      rating: 4.6
    }
  ];

  // Static sales profile data
  const staticSalesProfile = {
    id: 101,
    name: "John Salesman",
    email: "john.sales@company.com",
    role: "Senior Sales Executive"
  };

  // Static client data if not provided
  const staticClient = client || {
    id: 1001,
    name: "Dr. Sharma Clinic",
    locality: "Downtown",
    address: "123 Medical Street, Healthcare District",
    city: "Mumbai"
  };

  const fetchAllCseWithOfficeLocation = async () => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Filter CSEs by client locality
      const filteredCseList = staticCseData.filter(
        cse => cse.locality === staticClient.locality
      );
      
      setCustomerSupportList(filteredCseList);
      
      if (filteredCseList.length === 0) {
        toast.error(`No CSEs available in ${staticClient.locality} area.`);
      }
    } catch (error) {
      toast.error("Failed to load customer support data.");
      console.error("Error loading CSE data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCseWithOfficeLocation();
  }, []);

  const getWorkloadPercentage = (cse) => {
    return (cse.currentWorkload / cse.maxWorkload) * 100;
  };

  const getWorkloadColor = (percentage) => {
    if (percentage < 60) return "bg-green-500";
    if (percentage < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  const handleConfirm = async () => {
    if (!selectedCustomerSupport) {
      toast.error("Please select a Customer Support Executive.");
      return;
    }

    if (!installationDate) {
      toast.error("Please select an installation date.");
      return;
    }

    // Validate date is not in the past
    const selectedDate = new Date(installationDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      toast.error("Installation date cannot be in the past.");
      return;
    }

    const formatTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    };

    const assignmentData = {
      clientId: staticClient.id,
      clientName: staticClient.name,
      cseId: selectedCustomerSupport.id,
      cseName: selectedCustomerSupport.name,
      visitDate: installationDate,
      purpose: "INSTALLATION",
      visitTime: formatTime(),
      assignerId: staticSalesProfile.id,
      assignerName: staticSalesProfile.name,
      status: "SCHEDULED"
    };

    console.log("Assignment Data:", assignmentData);

    try {
      setSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success response
      const mockResponse = {
        statusCode: 201,
        message: "CSE assigned successfully!",
        assignmentId: "ASS" + Math.random().toString(36).substr(2, 9).toUpperCase()
      };

      toast.success(mockResponse.message);
      console.log("Assignment successful:", mockResponse);
      
      setTimeout(() => {
        onClose();
      }, 1500);
      
    } catch (error) {
      toast.error(error.message || "Failed to assign CSE. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-t-xl p-6 text-white">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold flex items-center">
                <FaUserCheck className="mr-2" />
                Assign Installation
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
              >
                <FaTimes size={18} />
              </button>
            </div>
            <p className="text-blue-100 text-sm">
              Assign a Customer Support Executive for installation
            </p>
          </div>

          {/* Client Info */}
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FaMapMarkerAlt className="text-blue-600 text-sm" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{staticClient.name}</h3>
                <p className="text-sm text-gray-600">{staticClient.address}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Locality: <span className="font-medium">{staticClient.locality}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <Loader />
                <p className="text-gray-500 mt-3">Loading available CSEs...</p>
              </div>
            ) : (
              <>
                {/* Customer Support Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FaUserCheck className="mr-2 text-blue-500" />
                    Select Customer Support Executive *
                  </label>
                  
                  {customerSupportList.length === 0 ? (
                    <div className="text-center py-4 text-gray-500 bg-gray-50 rounded-lg">
                      <p>No CSEs available in this locality.</p>
                      <p className="text-sm mt-1">Please try a different area.</p>
                    </div>
                  ) : (
                    <select
                      value={selectedCustomerSupport?.id || ""}
                      onChange={(e) => {
                        const selectedId = parseInt(e.target.value);
                        const selectedCse = customerSupportList.find(cs => cs.id === selectedId);
                        setSelectedCustomerSupport(selectedCse);
                      }}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                    >
                      <option value="" disabled>
                        Choose a CSE...
                      </option>
                      {customerSupportList.map((cse) => {
                        const workloadPercent = getWorkloadPercentage(cse);
                        return (
                          <option key={cse.id} value={cse.id}>
                            {cse.name} • {cse.specialization} • {cse.currentWorkload}/{cse.maxWorkload} clients
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>

                {/* Selected CSE Details */}
                {selectedCustomerSupport && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Selected CSE:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">{selectedCustomerSupport.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Specialization:</span>
                        <span className="font-medium">{selectedCustomerSupport.specialization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience:</span>
                        <span className="font-medium">{selectedCustomerSupport.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Workload:</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getWorkloadColor(getWorkloadPercentage(selectedCustomerSupport))}`}
                              style={{ width: `${getWorkloadPercentage(selectedCustomerSupport)}%` }}
                            ></div>
                          </div>
                          <span className="font-medium text-xs">
                            {selectedCustomerSupport.currentWorkload}/{selectedCustomerSupport.maxWorkload}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-medium text-yellow-600">
                          ⭐ {selectedCustomerSupport.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Installation Date */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FaCalendarAlt className="mr-2 text-green-500" />
                    Installation Date *
                  </label>
                  <input
                    type="date"
                    value={installationDate}
                    onChange={(e) => setInstallationDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Select a future date for the installation
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={onClose}
                    disabled={submitting}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirm}
                    disabled={!selectedCustomerSupport || !installationDate || submitting}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {submitting ? (
                      <>
                        <Loader size="small" />
                        <span className="ml-2">Assigning...</span>
                      </>
                    ) : (
                      "Confirm Assignment"
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CseAssignmentModal;