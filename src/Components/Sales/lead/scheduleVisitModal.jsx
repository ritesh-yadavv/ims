import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../commonComponent/loader";
import { FiX, FiCalendar, FiUser, FiMapPin, FiClock, FiBook, FiTarget } from "react-icons/fi";

const ScheduleVisitDemoModalPage = ({ onCloseScheduleVisit, client }) => {
    const [customerSupportList, setCustomerSupportList] = useState([]);
    const [selectedCustomerSupport, setSelectedCustomerSupport] = useState(null);
    const [visitDate, setVisitDate] = useState("");
    const [visitTime, setVisitTime] = useState("");
    const [trainingType, setTrainingType] = useState("");
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

    // Static CSE data for training specialists
    const staticTrainingSpecialists = [
        {
            id: 1,
            name: "Dr. Anjali Mehta",
            email: "anjali.mehta@company.com",
            phone: "+91 98765 43210",
            locality: "Downtown",
            specialization: "Clinical Training Specialist",
            experience: "5 years",
            expertise: ["Software Training", "Clinical Workflows", "Staff Onboarding"],
            currentWorkload: 6,
            maxWorkload: 12,
            rating: 4.8,
            trainingSuccessRate: "94%"
        },
        {
            id: 2,
            name: "Rahul Verma",
            email: "rahul.verma@company.com",
            phone: "+91 87654 32109",
            locality: "Uptown",
            specialization: "Technical Training Expert",
            experience: "4 years",
            expertise: ["System Configuration", "Troubleshooting", "Advanced Features"],
            currentWorkload: 8,
            maxWorkload: 15,
            rating: 4.6,
            trainingSuccessRate: "91%"
        },
        {
            id: 3,
            name: "Dr. Neha Singh",
            email: "neha.singh@company.com",
            phone: "+91 76543 21098",
            locality: "Downtown",
            specialization: "Medical Process Trainer",
            experience: "6 years",
            expertise: ["Medical Protocols", "Compliance Training", "Best Practices"],
            currentWorkload: 4,
            maxWorkload: 10,
            rating: 4.9,
            trainingSuccessRate: "97%"
        },
        {
            id: 4,
            name: "Sanjay Patel",
            email: "sanjay.patel@company.com",
            phone: "+91 65432 10987",
            locality: "Midtown",
            specialization: "Implementation Specialist",
            experience: "3 years",
            expertise: ["System Setup", "Data Migration", "User Training"],
            currentWorkload: 9,
            maxWorkload: 16,
            rating: 4.5,
            trainingSuccessRate: "89%"
        }
    ];

    // Training types
    const trainingTypes = [
        "Initial System Training",
        "Advanced Feature Training",
        "Staff Onboarding",
        "Compliance & Protocol Training",
        "Troubleshooting Workshop",
        "Custom Workflow Setup"
    ];

    const fetchAllCseWithOfficeLocation = async () => {
        setLoading(true);
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1200));
            
            // Filter training specialists by client locality
            const filteredSpecialists = staticTrainingSpecialists.filter(
                specialist => specialist.locality === staticClient.locality
            );
            
            setCustomerSupportList(filteredSpecialists);
            
            if (filteredSpecialists.length === 0) {
                toast.error(`No training specialists available in ${staticClient.locality} area.`);
            }
        } catch (error) {
            toast.error("Failed to load training specialists.");
            console.error("Error loading training specialists:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllCseWithOfficeLocation();
    }, []);

    const getWorkloadPercentage = (specialist) => {
        return (specialist.currentWorkload / specialist.maxWorkload) * 100;
    };

    const getWorkloadColor = (percentage) => {
        if (percentage < 60) return "bg-green-500";
        if (percentage < 80) return "bg-yellow-500";
        return "bg-red-500";
    };

    const handleConfirm = async () => {
        if (!selectedCustomerSupport) {
            toast.error("Please select a Training Specialist.");
            return;
        }

        if (!visitDate) {
            toast.error("Please select a visit date.");
            return;
        }

        if (!visitTime) {
            toast.error("Please select a visit time.");
            return;
        }

        if (!trainingType) {
            toast.error("Please select a training type.");
            return;
        }

        // Validate date is not in the past
        const selectedDate = new Date(visitDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            toast.error("Visit date cannot be in the past.");
            return;
        }

        const trainingData = {
            clientId: staticClient.id,
            clientName: staticClient.name,
            cseId: selectedCustomerSupport.id,
            cseName: selectedCustomerSupport.name,
            visitDate: visitDate,
            visitTime: visitTime,
            purpose: "TRAINING",
            trainingType: trainingType,
            assignerId: staticSalesProfile.id,
            assignerName: staticSalesProfile.name,
            status: "SCHEDULED",
            duration: "3 hours", // Standard training duration
            location: staticClient.address
        };

        console.log("Training Visit Data:", trainingData);

        try {
            setSubmitting(true);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Mock success response
            const mockResponse = {
                statusCode: 201,
                message: "Training visit scheduled successfully!",
                scheduleId: "TRN" + Math.random().toString(36).substr(2, 9).toUpperCase(),
                trainingMaterials: "https://drive.company.com/training-" + Math.random().toString(36).substr(2, 6)
            };

            toast.success(mockResponse.message);
            console.log("Training scheduling successful:", mockResponse);
            
            setTimeout(() => {
                onCloseScheduleVisit();
            }, 1500);
            
        } catch (error) {
            toast.error(error.message || "Failed to schedule training visit. Please try again.");
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
                    <div className="bg-gradient-to-r from-green-600 to-teal-500 rounded-t-xl p-6 text-white">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center space-x-3">
                                <FiBook className="text-xl" />
                                <h2 className="text-xl font-bold">Schedule Training Visit</h2>
                            </div>
                            <button
                                onClick={onCloseScheduleVisit}
                                className="text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
                            >
                                <FiX size={24} />
                            </button>
                        </div>
                        <p className="text-green-100 text-sm">
                            Schedule a training session for the client
                        </p>
                    </div>

                    {/* Client Info */}
                    <div className="p-6 border-b border-gray-200 bg-gray-50">
                        <div className="flex items-start space-x-3">
                            <div className="bg-green-100 p-2 rounded-lg">
                                <FiUser className="text-green-600 text-sm" />
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
                                <p className="text-gray-500 mt-3">Loading training specialists...</p>
                            </div>
                        ) : (
                            <>
                                {/* Training Specialist Selection */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                        <FiUser className="mr-2 text-green-500" />
                                        Select Training Specialist *
                                    </label>
                                    
                                    {customerSupportList.length === 0 ? (
                                        <div className="text-center py-4 text-gray-500 bg-gray-50 rounded-lg">
                                            <p>No training specialists available in this locality.</p>
                                            <p className="text-sm mt-1">Please try a different area or contact support.</p>
                                        </div>
                                    ) : (
                                        <select
                                            value={selectedCustomerSupport?.id || ""}
                                            onChange={(e) => {
                                                const selectedId = parseInt(e.target.value);
                                                const selectedSpecialist = customerSupportList.find(cs => cs.id === selectedId);
                                                setSelectedCustomerSupport(selectedSpecialist);
                                            }}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-white"
                                        >
                                            <option value="" disabled>
                                                Choose a training specialist...
                                            </option>
                                            {customerSupportList.map((specialist) => {
                                                const workloadPercent = getWorkloadPercentage(specialist);
                                                return (
                                                    <option key={specialist.id} value={specialist.id}>
                                                        {specialist.name} • {specialist.specialization} • {specialist.trainingSuccessRate} success rate
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    )}
                                </div>

                                {/* Selected Specialist Details */}
                                {selectedCustomerSupport && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <h4 className="font-semibold text-green-800 mb-2">Selected Specialist:</h4>
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
                                                <span className="font-medium text-green-600">{selectedCustomerSupport.trainingSuccessRate}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Expertise:</span>
                                                <span className="font-medium text-xs text-right max-w-xs">
                                                    {selectedCustomerSupport.expertise.slice(0, 2).join(", ")}
                                                </span>
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

                                {/* Training Type */}
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                        <FiTarget className="mr-2 text-blue-500" />
                                        Training Type *
                                    </label>
                                    <select
                                        value={trainingType}
                                        onChange={(e) => setTrainingType(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    >
                                        <option value="" disabled>Select training type...</option>
                                        {trainingTypes.map((type, index) => (
                                            <option key={index} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Visit Date */}
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                        <FiCalendar className="mr-2 text-purple-500" />
                                        Visit Date *
                                    </label>
                                    <input
                                        type="date"
                                        value={visitDate}
                                        onChange={(e) => setVisitDate(e.target.value)}
                                        min={getNextBusinessDay()}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                                    />
                                </div>

                                {/* Visit Time */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                        <FiClock className="mr-2 text-teal-500" />
                                        Preferred Time *
                                    </label>
                                    <input
                                        type="time"
                                        value={visitTime}
                                        onChange={(e) => setVisitTime(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                                    />
                                    <p className="text-xs text-gray-500 mt-2">
                                        Recommended: 9:00 AM - 5:00 PM (3 hours duration)
                                    </p>
                                </div>

                                {/* Training Notes */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                    <h4 className="font-semibold text-blue-800 mb-2">Training Preparation</h4>
                                    <ul className="text-xs text-blue-700 space-y-1">
                                        <li>• Ensure all staff members are available</li>
                                        <li>• Prepare any existing system data for migration</li>
                                        <li>• Have relevant medical protocols ready</li>
                                        <li>• Allocate 3 hours for comprehensive training</li>
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3">
                                    <button
                                        onClick={onCloseScheduleVisit}
                                        disabled={submitting}
                                        className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium disabled:opacity-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleConfirm}
                                        disabled={!selectedCustomerSupport || !visitDate || !visitTime || !trainingType || submitting}
                                        className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-lg hover:from-green-700 hover:to-teal-600 transition-all duration-200 font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {submitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Scheduling...
                                            </>
                                        ) : (
                                            "Schedule Training"
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

export default ScheduleVisitDemoModalPage;