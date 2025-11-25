import React, { useState, useEffect } from 'react';
import Loader from "../../commonComponent/loader";
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AssignRole = ({ isOpen, setIsOpen, onRoleAssigned }) => {

    // 🔹 Static Employees
    const staticEmployees = [
        {
            id: "1",
            name: "Ritu Singh",
            email: "ritu@example.com",
            profilePicture: "https://i.pravatar.cc/150?img=5"
        },
        {
            id: "2",
            name: "Rohan Kumar",
            email: "rohan@example.com",
            profilePicture: "https://i.pravatar.cc/150?img=12"
        },
        {
            id: "3",
            name: "Priya Sharma",
            email: "priya@example.com",
            profilePicture: "https://i.pravatar.cc/150?img=32"
        },
    ];

    // 🔹 Static Roles
    const staticRoles = [
        { role: "Admin" },
        { role: "Manager" },
        { role: "Team Lead" },
        { role: "Developer" },
    ];

    const [totalEmployee, setTotalEmployee] = useState(null);
    const [roles, setRoles] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setTotalEmployee(staticEmployees); // simulate loader
            setRoles(staticRoles);
        }, 500);
    }, []);

    const formik = useFormik({
        initialValues: {
            role: "",
            employeeIds: []
        },
        validationSchema: Yup.object({
            role: Yup.string().required("Role is required"),
            employeeIds: Yup.array()
                .min(1, "Please select at least one employee")
                .required("At least one employee is required"),
        }),
        onSubmit: async (values) => {
            toast.success("Role assigned successfully!");

            setTimeout(() => {
                onRoleAssigned && onRoleAssigned();
                setIsOpen(false);
            }, 800);
        },
    });

    const toggleEmployeeSelection = (id) => {
        if (formik.values.employeeIds.includes(id)) {
            formik.setFieldValue('employeeIds',
                formik.values.employeeIds.filter(empId => empId !== id)
            );
        } else {
            formik.setFieldValue('employeeIds',
                [...formik.values.employeeIds, id]
            );
        }
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    const filteredEmployees = totalEmployee?.filter(emp =>
        emp.name.toLowerCase().includes(searchText.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <Toaster />

            {totalEmployee ? (
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                    <form onSubmit={formik.handleSubmit}>
                        <h2 className="text-lg font-bold mb-4">Select Employees</h2>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search employees..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />

                        {/* Employees */}
                        <div className="max-h-60 overflow-y-auto">
                            {filteredEmployees.map((employee) => (
                                <div
                                    key={employee.id}
                                    className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => toggleEmployeeSelection(employee.id)}
                                >
                                    <img
                                        src={employee.profilePicture}
                                        alt={employee.name}
                                        className="w-10 h-10 rounded-full mr-3"
                                    />
                                    <div className="flex-grow">
                                        <h3 className="text-sm font-medium">{employee.name}</h3>
                                        <p className="text-xs text-gray-500">{employee.email}</p>
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formik.values.employeeIds.includes(employee.id)}
                                        onChange={() => toggleEmployeeSelection(employee.id)}
                                        className="form-checkbox"
                                    />
                                </div>
                            ))}
                        </div>

                        {formik.errors.employeeIds && (
                            <div className="text-red-500 text-sm mt-2">
                                {formik.errors.employeeIds}
                            </div>
                        )}

                        {/* Role Dropdown */}
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Role
                            </label>

                            <select
                                value={formik.values.role}
                                onChange={formik.handleChange}
                                name="role"
                                className="w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="" disabled>Select a role</option>
                                {roles.map((role, index) => (
                                    <option key={index} value={role.role}>
                                        {role.role}
                                    </option>
                                ))}
                            </select>

                            {formik.errors.role && (
                                <div className="text-red-500 text-sm">{formik.errors.role}</div>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end space-x-4 mt-6">
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default AssignRole;
