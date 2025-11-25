import React, { useEffect, useState } from 'react';
import { Check, X, Eye, Calendar, Clock } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import LeaveApproveModal from './LeaveApproveModal';

const LeaveApproval = () => {
    const [leave, setLeave] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNo, setPageNo] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [leaveData, setLeaveData] = useState(null);

    // Static leave data
    const staticLeaveData = [
        {
            id: '1',
            name: 'John Doe',
            profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            startDate: '2024-01-15',
            endDate: '2024-01-17',
            type: 'Sick Leave',
            reason: 'Medical appointment and recovery from flu symptoms that require rest',
            leaveStatus: 'PENDING',
            department: 'Engineering',
            designation: 'Senior Developer',
            appliedOn: '2024-01-10'
        },
        {
            id: '2',
            name: 'Jane Smith',
            profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
            startDate: '2024-01-20',
            endDate: '2024-01-25',
            type: 'Vacation',
            reason: 'Family vacation to visit relatives abroad',
            leaveStatus: 'APPROVED',
            department: 'Marketing',
            designation: 'Marketing Manager',
            appliedOn: '2024-01-05'
        },
        {
            id: '3',
            name: 'Mike Johnson',
            profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            startDate: '2024-01-18',
            endDate: '2024-01-18',
            type: 'Personal Leave',
            reason: 'Personal work at home',
            leaveStatus: 'REJECTED',
            department: 'HR',
            designation: 'HR Specialist',
            appliedOn: '2024-01-12'
        },
        {
            id: '4',
            name: 'Sarah Wilson',
            profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            startDate: '2024-02-01',
            endDate: '2024-02-05',
            type: 'Maternity Leave',
            reason: 'Maternity leave as per company policy for childbirth and recovery',
            leaveStatus: 'PENDING',
            department: 'Design',
            designation: 'UI/UX Designer',
            appliedOn: '2024-01-20'
        }
    ];

    const toggleModal = (employee) => {
        setOpenModal(true);
        setLeaveData(employee);
    };

    const getAllLeaves = async () => {
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 500));
            setLeave(staticLeaveData);
        } catch (error) {
            toast.error("Failed to fetch leave data.");
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await getAllLeaves();
            setLoading(false);
        };
        fetchData();
    }, [pageNo]);

    const updateLeaveStatus = async (id, status, data) => {
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const newStatus = status === 'APPROVED' ? 'APPROVED' : 'REJECTED';

            // Update the state directly
            setLeave((prevLeave) =>
                prevLeave.map((leaveItem) =>
                    leaveItem.id === id
                        ? { ...leaveItem, leaveStatus: newStatus }
                        : leaveItem
                )
            );

            if (newStatus === "APPROVED") {
                toast.success("Leave Approved Successfully!");
            } else if (newStatus === "REJECTED") {
                toast.success("Leave Rejected!");
            }
            
            setOpenModal(false);
        } catch (error) {
            toast.error("Failed to update leave status.");
            console.error(error);
        }
    };

    const handlePageChange = (newPage) => {
        setPageNo(newPage);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'APPROVED':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'REJECTED':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'PENDING':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'Sick Leave':
                return 'bg-blue-100 text-blue-800';
            case 'Vacation':
                return 'bg-purple-100 text-purple-800';
            case 'Personal Leave':
                return 'bg-orange-100 text-orange-800';
            case 'Maternity Leave':
                return 'bg-pink-100 text-pink-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className='flex font-jakarta'>
            <div className="flex-1 p-6">
                <Toaster />
                
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Leave Approval</h1>
                    <p className="text-gray-600 mt-2">Review and manage employee leave requests</p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center mt-32">
                        <div className="flex flex-col items-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                            <p className="text-gray-600">Loading leave requests...</p>
                        </div>
                    </div>
                ) : leave.length === 0 ? (
                    <div className="mt-32 text-center text-gray-500">
                        <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-lg font-medium">No leave requests available</p>
                        <p className="text-sm">All leave requests have been processed</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        Employee
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        Date Range
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        Reason
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {leave.map((employee) => (
                                    <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                                                    <img
                                                        src={employee.profilePicture}
                                                        alt={`${employee.name}'s profile`}
                                                        className="h-10 w-10 object-cover"
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {employee.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {employee.department}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {formatDate(employee.startDate)}
                                            </div>
                                            <div className="text-sm text-gray-500 flex items-center">
                                                <Clock className="h-3 w-3 mr-1" />
                                                to {formatDate(employee.endDate)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(employee.type)}`}>
                                                {employee.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-600 max-w-xs">
                                                {employee.reason.length > 50
                                                    ? `${employee.reason.substring(0, 50)}...`
                                                    : employee.reason}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(employee.leaveStatus)}`}>
                                                {employee.leaveStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <div className="flex justify-center space-x-2">
                                                <button
                                                    onClick={() => toggleModal(employee)}
                                                    className="p-2 text-blue-500 rounded-full hover:bg-blue-50 transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => handlePageChange(pageNo - 1)}
                                    disabled={pageNo === 0}
                                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                >
                                    Previous
                                </button>
                                <div className="text-sm text-gray-700">
                                    Page <span className="font-medium">{pageNo + 1}</span>
                                </div>
                                <button
                                    onClick={() => handlePageChange(pageNo + 1)}
                                    disabled={leave.length < 5}
                                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Leave Approve Modal */}
                {openModal && (
                    <LeaveApproveModal 
                        setIsOpen={setOpenModal} 
                        data={leaveData} 
                        updateLeaveStatus={updateLeaveStatus} 
                    />
                )}
            </div>
        </div>
    );
};

export default LeaveApproval;