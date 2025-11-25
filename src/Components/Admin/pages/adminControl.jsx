import { useState } from 'react';
import AdminSideBar from "../widgets/adminSideBar";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineUserAdd, AiOutlineFilter } from 'react-icons/ai';
import CreateRole from '../modal/createRole';
import AssignRole from '../modal/assignRole';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../commonComponent/loader';
import DeleteModal from '../modal/deleteModal';

// STATIC IMAGES
import ProfilePlaceholder from "../../../assets/1.png";
import TrashIcon from "../../../assets/1.png";

const AdminControl = () => {
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // STATIC ROLES
    const [roles, setRoles] = useState([
        { role: "Admin" },
        { role: "Manager" },
        { role: "HR" },
        { role: "Employee" }
    ]);

    // STATIC EMPLOYEES
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Ritu Sharma",
            employeeId: "EMP001",
            department: "HR",
            typeOfEmployment: "Full Time",
            profilePicture: ProfilePlaceholder
        },
        {
            id: 2,
            name: "Aman Gupta",
            employeeId: "EMP002",
            department: "Admin",
            typeOfEmployment: "Part Time",
            profilePicture: ProfilePlaceholder
        },
        {
            id: 3,
            name: "Priya Verma",
            employeeId: "EMP003",
            department: "Manager",
            typeOfEmployment: "Full Time",
            profilePicture: ProfilePlaceholder
        }
    ]);

    const [selectedRole, setSelectedRole] = useState("");
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    const filteredEmployees = selectedRole
        ? employees.filter(emp => emp.department === selectedRole)
        : employees;

    // CREATE ROLE
    const handleRoleCreated = (newRole) => {
        setRoles(prev => [...prev, { role: newRole }]);
        toast.success("New Role Added");
    };

    // ASSIGN ROLE
    const handleRoleAssigned = (empId, newRole) => {
        setEmployees(prev =>
            prev.map(emp =>
                emp.id === empId ? { ...emp, department: newRole } : emp
            )
        );
        toast.success("Role Assigned Successfully");
    };

    // DELETE EMPLOYEE
    const handleDeleteEmployee = () => {
        setEmployees(prev =>
            prev.filter(emp => emp.id !== selectedEmployeeId)
        );
        toast.success("Employee Deleted");
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="flex h-screen">
            <AdminSideBar />
            <Toaster />

            <div className="flex-1 p-4 overflow-auto h-screen">
                {/* HEADER */}
                <h1 className="text-xl font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-3 rounded-t-md border border-gray-300">
                    Admin Controls
                </h1>

                {/* SEARCH + BUTTONS */}
                <div className="flex sm:flex-row justify-between items-center p-3 bg-gray-100 border border-gray-300 rounded-b-md">

                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-0"
                        />
                        <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className="flex space-x-3">
                        <button
                            onClick={() => setIsAssignModalOpen(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
                        >
                            <AiOutlineUserAdd />
                            <span>Assign Role</span>
                        </button>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
                        >
                            <AiOutlineUserAdd />
                            <span>Add Role</span>
                        </button>

                        <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center space-x-2">
                            <AiOutlineFilter />
                            <select
                                onChange={(e) => setSelectedRole(e.target.value)}
                                className="bg-transparent outline-none"
                            >
                                <option value="">Select role</option>
                                {roles.map((role, index) => (
                                    <option key={index} value={role.role}>
                                        {role.role}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* TABLE */}
                <div className="overflow-x-auto mt-5">
                    <table className="w-full border border-gray-300 divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium">Employee</th>
                                <th className="px-6 py-3 text-left text-xs font-medium">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium">Department</th>
                                <th className="px-6 py-3 text-left text-xs font-medium">Status</th>
                                <th className="px-6 py-3 text-center text-xs font-medium">Action</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredEmployees.map((ele) => (
                                <tr key={ele.id}>
                                    <td className="px-6 py-4 flex items-center">
                                        <img
                                            src={ele.profilePicture}
                                            alt="profile"
                                            className="h-10 w-10 rounded-full"
                                        />
                                        <span className="ml-4">{ele.name}</span>
                                    </td>

                                    <td className="px-6 py-4 text-sm">{ele.employeeId}</td>

                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                            {ele.department}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {ele.typeOfEmployment}
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        <img
                                            src={TrashIcon}
                                            alt="delete"
                                            className="h-6 cursor-pointer"
                                            onClick={() => {
                                                setSelectedEmployeeId(ele.id);
                                                setIsDeleteModalOpen(true);
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MODALS */}
            {isModalOpen && (
                <CreateRole
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    onRoleCreated={handleRoleCreated}
                />
            )}

            {isAssignModalOpen && (
                <AssignRole
                    isOpen={isAssignModalOpen}
                    setIsOpen={setIsAssignModalOpen}
                    roles={roles}
                    employees={employees}
                    onRoleAssigned={handleRoleAssigned}
                />
            )}

            {isDeleteModalOpen && (
                <DeleteModal
                    isOpen={isDeleteModalOpen}
                    setIsOpen={setIsDeleteModalOpen}
                    handleDelete={handleDeleteEmployee}
                />
            )}
        </div>
    );
};

export default AdminControl;
