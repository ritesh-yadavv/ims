import React, { useEffect, useState } from 'react';
import AdminSideBar from "../../widgets/adminSideBar"
import { FaSearch } from 'react-icons/fa';
import { AiOutlineUserAdd, AiOutlineFilter } from 'react-icons/ai';
import { Trash2 } from 'lucide-react'; // Import Lucide delete icon
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import DeleteModal from './deleteModal';
import Loader from '../../../commonComponent/loader';

const AdminEmployeeList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Static employee data
    const staticEmployees = [
        {
            id: 1,
            name: 'John Doe',
            employeeId: 'EMP001',
            department: 'Engineering',
            designation: 'Software Engineer',
            typeOfEmployment: 'Full Time',
            profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        },
        {
            id: 2,
            name: 'Jane Smith',
            employeeId: 'EMP002',
            department: 'Design',
            designation: 'UI/UX Designer',
            typeOfEmployment: 'Full Time',
            profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            employeeId: 'EMP003',
            department: 'Marketing',
            designation: 'Marketing Manager',
            typeOfEmployment: 'Full Time',
            profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
        },
        {
            id: 4,
            name: 'Sarah Wilson',
            employeeId: 'EMP004',
            department: 'HR',
            designation: 'HR Manager',
            typeOfEmployment: 'Part Time',
            profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
        },
        {
            id: 5,
            name: 'David Brown',
            employeeId: 'EMP005',
            department: 'Engineering',
            designation: 'Senior Developer',
            typeOfEmployment: 'Full Time',
            profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
        },
        {
            id: 6,
            name: 'Emily Davis',
            employeeId: 'EMP006',
            department: 'Sales',
            designation: 'Sales Executive',
            typeOfEmployment: 'Contract',
            profilePicture: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
        }
    ];

    useEffect(() => {
        const fetchAllEmployee = async () => {
            setLoading(true);
            try {
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Use static data instead of API call
                setEmployees(staticEmployees);
                console.log("Loaded static employee data");

            } catch (error) {
                console.error('Error fetching employees:', error);
                toast.error('Failed to load employees');
            }
            setLoading(false);
        };

        fetchAllEmployee();
    }, []);

    // Filter employees based on search term
    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.designation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleClick = (id) => {
        navigate(`/admin/employee/profile/${id}`);
    };

    const handleDeleteEmployee = async () => {
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Remove the deleted employee from the state
            setEmployees(prevEmployees => 
                prevEmployees.filter(employee => employee.id !== selectedEmployeeId)
            );
            
            toast.success('Employee deleted successfully');
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

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Function to add more sample employees
    const addSampleEmployee = () => {
        const newEmployee = {
            id: employees.length + 1,
            name: `New Employee ${employees.length + 1}`,
            employeeId: `EMP${String(employees.length + 1).padStart(3, '0')}`,
            department: 'New Department',
            designation: 'New Role',
            typeOfEmployment: 'Full Time',
            profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
        };
        setEmployees(prev => [...prev, newEmployee]);
        toast.success('Sample employee added');
    };

    return (
        <div className="flex h-[100vh]">
            <AdminSideBar />
            <Toaster />
            <div className="flex flex-col w-full overflow-auto p-4 max-md:ml-0 mr-1">
                <h1 className="max-md:text-sm max-md:text-center text-xl font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-3 rounded-t-md border border-gray-300">
                    All Employee Details
                </h1>
                <div className="flex sm:flex-row justify-between items-center p-3 bg-gray-100 border border-gray-300 rounded-b-md">
                    <div className="relative w-full sm:w-auto mb-2 sm:mb-0">
                        <input
                            onChange={handleSearch}
                            type="text"
                            className="px-4 py-2 pl-10 border border-gray-300 rounded-md w-full sm:w-auto focus:outline-0"
                            placeholder="Search by name, ID, department..."
                            value={searchTerm}
                        />
                        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-4 text-gray-400" />
                    </div>
                    <div className="flex space-x-2 w-full sm:w-auto justify-end right-0">
                        <button 
                            onClick={() => navigate("/admin/add-employee")} 
                            className="bg-blue-500 text-white px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-md flex items-center space-x-2 hover:bg-blue-600 transition-colors"
                        >
                            <AiOutlineUserAdd className="w-4 h-4" />
                            <span className='max-md:hidden'>Add New Employee</span>
                        </button>
                        <button 
                            onClick={addSampleEmployee}
                            className="bg-green-500 text-white px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-md flex items-center space-x-2 hover:bg-green-600 transition-colors"
                        >
                            <AiOutlineUserAdd className="w-4 h-4" />
                            <span className='max-md:hidden'>Add Sample</span>
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className='flex justify-center items-center h-64'>
                        <Loader color="blue-500" /> 
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="divide-y mt-5 divide-gray-200 w-full border border-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Employee Name
                                    </th>
                                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Employee ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Department
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Designation
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredEmployees.length > 0 ? (
                                    filteredEmployees.map((ele) => (
                                        <tr key={ele.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div onClick={() => handleClick(ele.id)} className="flex items-center cursor-pointer">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src={ele.profilePicture}
                                                            alt={ele.name}
                                                            onError={(e) => {
                                                                e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {ele.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{ele.employeeId}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {ele.department}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-blue-800">
                                                    {ele.designation}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span className="text-center px-2 whitespace-nowrap text-sm text-purple-500 font-semibold inline-flex rounded-full bg-teal-100">
                                                    {ele.typeOfEmployment}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-right">
                                                <div className="flex justify-center items-center space-x-3">
                                                    <button 
                                                        onClick={() => openDeleteModal(ele.id)} 
                                                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                                                        title="Delete Employee"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                                            No employees found matching your search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        
                        {/* Employee Count */}
                        <div className="mt-4 text-sm text-gray-600">
                            Showing {filteredEmployees.length} of {employees.length} employees
                        </div>
                    </div>
                )}
            </div>
            
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

export default AdminEmployeeList;