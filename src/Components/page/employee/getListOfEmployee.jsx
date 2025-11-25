import React, { useState } from 'react';
import SideNavBar from "../../widgets/sideNavBar";
import { FaSearch, FaUserPlus, FaFilter, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import DeleteModal from './deleteModal';

const GetListOfEmployee = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Static employee data
    const staticEmployees = [
        {
            id: '1',
            employeeId: 'EMP001',
            name: 'John Doe',
            profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            department: 'Engineering',
            designation: 'Senior Software Engineer',
            typeOfEmployment: 'Full-time',
            status: 'Active'
        },
        {
            id: '2',
            employeeId: 'EMP002',
            name: 'Jane Smith',
            profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
            department: 'Marketing',
            designation: 'Marketing Manager',
            typeOfEmployment: 'Full-time',
            status: 'Active'
        },
        {
            id: '3',
            employeeId: 'EMP003',
            name: 'Mike Johnson',
            profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            department: 'HR',
            designation: 'HR Specialist',
            typeOfEmployment: 'Full-time',
            status: 'Active'
        },
        {
            id: '4',
            employeeId: 'EMP004',
            name: 'Sarah Wilson',
            profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            department: 'Design',
            designation: 'UI/UX Designer',
            typeOfEmployment: 'Contract',
            status: 'Active'
        },
        {
            id: '5',
            employeeId: 'EMP005',
            name: 'David Brown',
            profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            department: 'Engineering',
            designation: 'Frontend Developer',
            typeOfEmployment: 'Full-time',
            status: 'Active'
        }
    ];

    React.useEffect(() => {
        // Simulate API call to fetch employees
        const fetchAllEmployee = async () => {
            try {
                setLoading(true);
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                setEmployees(staticEmployees);
            } catch (error) {
                console.error('Error fetching employees:', error);
                toast.error('Failed to load employees');
            }
            setLoading(false);
        };

        fetchAllEmployee();
    }, []);

    const handleClick = (id) => {
        navigate(`/profile/${id}`);
    };

    const handleDeleteEmployee = async () => {
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Remove the deleted employee from the state
            setEmployees(prevEmployees => 
                prevEmployees.filter(employee => employee.id !== selectedEmployeeId)
            );
            
            toast.success('Employee deleted successfully!');
            setIsModalOpen(false);
        } catch (error) {
            toast.error('Failed to delete employee');
            console.log(error);
        }
    };

    const openDeleteModal = (id) => {
        setSelectedEmployeeId(id);
        setIsModalOpen(true);
    };

    // Filter employees based on search term
    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.designation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-800';
            case 'Inactive':
                return 'bg-red-100 text-red-800';
            case 'On Leave':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getEmploymentTypeColor = (type) => {
        switch (type) {
            case 'Full-time':
                return 'bg-blue-100 text-blue-800';
            case 'Part-time':
                return 'bg-purple-100 text-purple-800';
            case 'Contract':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="flex h-[100vh] font-jakarta">
            <SideNavBar />
            <Toaster />
            <div className="flex flex-col w-full overflow-auto p-4 max-md:ml-0 mr-1">
                {/* Header */}
                <h1 className="max-md:text-sm max-md:text-center text-xl font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-3 rounded-t-md border border-gray-300">
                    All Employee Details
                </h1>
                
                {/* Search and Action Bar */}
                <div className="flex sm:flex-row justify-between items-center p-3 bg-gray-100 border border-gray-300 rounded-b-md">
                    <div className="relative w-full sm:w-auto mb-2 sm:mb-0">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-4 py-2 pl-10 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search employees..."
                        />
                        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-4 text-gray-400" />
                    </div>
                    <div className="flex space-x-2 w-full sm:w-auto justify-end">
                        <button 
                            onClick={() => navigate("/add-employee")} 
                            className="bg-blue-500 text-white px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-md flex items-center space-x-2 hover:bg-blue-600 transition-colors"
                        >
                            <FaUserPlus />
                            <span className='max-md:hidden'>Add New Employee</span>
                        </button>
                        <button className="bg-gray-300 text-black px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-md flex items-center space-x-2 hover:bg-gray-400 transition-colors">
                            <FaFilter />
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                {/* Employee Table */}
                {loading ? (
                    <div className='flex justify-center items-center h-64'>
                        <div className="flex flex-col items-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                            <p className="text-gray-600">Loading employees...</p>
                        </div>
                    </div>
                ) : (
                    <div className="overflow-x-auto mt-5 bg-white rounded-lg shadow">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Employee Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Employee ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Department
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Designation
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Employment Type
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredEmployees.length > 0 ? (
                                    filteredEmployees.map((employee) => (
                                        <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div 
                                                    onClick={() => handleClick(employee.id)} 
                                                    className="flex items-center cursor-pointer group"
                                                >
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img
                                                            className="h-10 w-10 rounded-full border-2 border-gray-200 group-hover:border-blue-500 transition-colors"
                                                            src={employee.profilePicture}
                                                            alt={employee.name}
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                                            {employee.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {employee.status}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 font-mono">
                                                    {employee.employeeId}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(employee.status)}`}>
                                                    {employee.department}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                    {employee.designation}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getEmploymentTypeColor(employee.typeOfEmployment)}`}>
                                                    {employee.typeOfEmployment}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                                <div className="flex justify-center items-center space-x-3">
                                                    <button
                                                        onClick={() => openDeleteModal(employee.id)}
                                                        className="text-red-600 hover:text-red-800 transition-colors p-2 rounded-full hover:bg-red-50"
                                                        title="Delete Employee"
                                                    >
                                                        <FaTrash size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center">
                                            <div className="flex flex-col items-center justify-center text-gray-500">
                                                <FaSearch size={48} className="mb-4 text-gray-300" />
                                                <p className="text-lg font-medium">No employees found</p>
                                                <p className="text-sm">Try adjusting your search criteria</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Employee Count */}
                {!loading && filteredEmployees.length > 0 && (
                    <div className="mt-4 text-sm text-gray-600">
                        Showing {filteredEmployees.length} of {employees.length} employees
                    </div>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {isModalOpen && (
                <DeleteModal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    handleDelete={handleDeleteEmployee}
                />
            )}
        </div>
    );
};

export default GetListOfEmployee;