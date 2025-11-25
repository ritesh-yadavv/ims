import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../commonComponent/loader";
import { FiX, FiCalendar, FiUser, FiClock, FiMapPin, FiAward } from "react-icons/fi";

const ScheduleDemoModalPage = ({ onCloseDemo, client }) => {
  const [customerSupportList, setCustomerSupportList] = useState([]);
  const [selectedCustomerSupport, setSelectedCustomerSupport] = useState(null);
  const [demoDate, setDemoDate] = useState("");
  const [demoTime, setDemoTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
    city: "Mumbai",
    specialization: "Cardiologist"
  };

  // Static CSE data
  const staticCseData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      phone: "+91 98765 43210",
      locality: "Downtown",
      specialization: "Product Demo Specialist",
      experience: "3 years",
      currentWorkload: 8,
      maxWorkload: 15,
      rating: 4.7,
      demoSuccessRate: "92%"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@company.com",
      phone: "+91 87654 32109",
      locality: "Uptown",
      specialization: "Software Demo Expert",
      experience: "2 years",
      currentWorkload: 6,
      maxWorkload: 12,
      rating: 4.8,
      demoSuccessRate: "95%"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@company.com",
      phone: "+91 76543 21098",
      locality: "Downtown",
      specialization: "Technical Demo Specialist",
      experience: "4 years",
      currentWorkload: 10,
      maxWorkload: 18,
      rating: 4.5,
      demoSuccessRate: "88%"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.reddy@company.com",
      phone: "+91 65432 10987",
      locality: "Midtown",
      specialization: "Clinical Demo Expert",
      experience: "3.5 years",
      currentWorkload: 7,
      maxWorkload: 14,
      rating: 4.9,
      demoSuccessRate: "96%"
    }
  ];

  const fetchAllCseWithOfficeLocation = async () => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Filter CSEs by client locality and specialization in demos
      const filteredCseList = staticCseData.filter(
        cse => cse.locality === staticClient.locality
      );
      
      setCustomerSupportList(filteredCseList);
      
      if (filteredCseList.length === 0) {
        toast.error(`No demo specialists available in ${staticClient.locality} area.`);
      }
    } catch (error) {
      toast.error("Failed to load demo specialists.");
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
      toast.error("Please select a Demo Specialist.");
      return;
    }

    if (!demoDate) {
      toast.error("Please select a demo date.");
      return;
    }

    if (!demoTime) {
      toast.error("Please select a demo time.");
      return;
    }

    // Validate date is not in the past
    const selectedDate = new Date(demoDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      toast.error("Demo date cannot be in the past.");
      return;
    }

    const demoData = {
      clientId: staticClient.id,
      clientName: staticClient.name,
      cseId: selectedCustomerSupport.id,
      cseName: selectedCustomerSupport.name,
      visitDate: demoDate,
      visitTime: demoTime,
      purpose: "DEMO",
      assignerId: staticSalesProfile.id,
      assignerName: staticSalesProfile.name,
      status: "SCHEDULED",
      type: "PRODUCT_DEMO"
    };

    console.log("Demo Scheduling Data:", demoData);

    try {
      setSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success response
      const mockResponse = {
        statusCode: 201,
        message: "Demo scheduled successfully!",
        scheduleId: "DEM" + Math.random().toString(36).substr(2, 9).toUpperCase(),
        meetingLink: "https://meet.company.com/demo-" + Math.random().toString(36).substr(2, 6)
      };

      toast.success(mockResponse.message);
      console.log("Demo scheduling successful:", mockResponse);
      
      setTimeout(() => {
        onCloseDemo();
      }, 1500);
      
    } catch (error) {
      toast.error(error.message || "Failed to schedule demo. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const getNextBusinessDay = () => {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    // Skip weekends
    while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
      nextDay.setDate(nextDay.getDate() + 1);
    }
    return nextDay.toISOString().split('T')[0];
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-t-xl p-6 text-white">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-3">
                <FiCalendar className="text-xl" />
                <h2 className="text-xl font-bold">Schedule Product Demo</h2>
              </div>
              <button
                onClick={onCloseDemo}
                className="text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
              >
                <FiX size={24} />
              </button>
            </div>
            <p className="text-purple-100 text-sm">
              Schedule a product demonstration for the client
            </p>
          </div>

          {/* Client Info */}
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FiUser className="text-purple-600 text-sm" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{staticClient.name}</h3>
                <p className="text-sm text-gray-600">{staticClient.specialization}</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center">
                  <FiMapPin className="mr-1" />
                  {staticClient.address}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <Loader />
                <p className="text-gray-500 mt-3">Loading demo specialists...</p>
              </div>
            ) : (
              <>
                {/* Demo Specialist Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FiUser className="mr-2 text-blue-500" />
                    Select Demo Specialist *
                  </label>
                  
                  {customerSupportList.length === 0 ? (
                    <div className="text-center py-4 text-gray-500 bg-gray-50 rounded-lg">
                      <p>No demo specialists available in this locality.</p>
                      <p className="text-sm mt-1">Please try a different area or contact support.</p>
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
                        Choose a demo specialist...
                      </option>
                      {customerSupportList.map((cse) => {
                        const workloadPercent = getWorkloadPercentage(cse);
                        return (
                          <option key={cse.id} value={cse.id}>
                            {cse.name} • {cse.specialization} • {cse.demoSuccessRate} success rate
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>

                {/* Selected CSE Details */}
                {selectedCustomerSupport && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Selected Specialist:</h4>
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
                        <span className="text-gray-600">Success Rate:</span>
                        <span className="font-medium text-green-600">{selectedCustomerSupport.demoSuccessRate}</span>
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
                    </div>
                  </div>
                )}

                {/* Demo Date */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FiCalendar className="mr-2 text-green-500" />
                    Demo Date *
                  </label>
                  <input
                    type="date"
                    value={demoDate}
                    onChange={(e) => setDemoDate(e.target.value)}
                    min={getNextBusinessDay()}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Select a future date for the demo session
                  </p>
                </div>

                {/* Demo Time */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FiClock className="mr-2 text-purple-500" />
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    value={demoTime}
                    onChange={(e) => setDemoTime(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Recommended: 10:00 AM - 4:00 PM (2 hours duration)
                  </p>
                </div>

                {/* Demo Guidelines */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                    <FiAward className="mr-2" />
                    Demo Guidelines
                  </h4>
                  <ul className="text-xs text-yellow-700 space-y-1">
                    <li>• Ensure stable internet connection for online demo</li>
                    <li>• Prepare all necessary documents and credentials</li>
                    <li>• Allocate 2 hours for complete product walkthrough</li>
                    <li>• Have key decision-makers present during the demo</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={onCloseDemo}
                    disabled={submitting}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirm}
                    disabled={!selectedCustomerSupport || !demoDate || !demoTime || submitting}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Scheduling...
                      </>
                    ) : (
                      "Schedule Demo"
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

export default ScheduleDemoModalPage;