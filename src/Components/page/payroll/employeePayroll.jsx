import React, { useState, useEffect } from 'react';
import SideNavBar from "../../widgets/sideNavBar";
import { Search, Edit3, Eye, Download, Filter, IndianRupee, Calendar } from 'lucide-react';

// Static employee payroll data
const employeePayrollData = [
    {
        id: 1,
        name: "Halley Johnson",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        employeeId: "EMP001",
        department: "Engineering",
        designation: "Senior Developer",
        CTC: "₹4,20,000",
        salaryPerMonth: "₹35,000",
        deduction: "₹1,000",
        incentive: "₹500",
        netSalary: "₹34,500",
        joinDate: "2022-01-15"
    },
    {
        id: 2,
        name: "John Smith",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        employeeId: "EMP002",
        department: "Marketing",
        designation: "Marketing Manager",
        CTC: "₹5,00,000",
        salaryPerMonth: "₹41,667",
        deduction: "₹1,200",
        incentive: "₹600",
        netSalary: "₹41,067",
        joinDate: "2021-03-20"
    },
    {
        id: 3,
        name: "Emma Davis",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        employeeId: "EMP003",
        department: "Design",
        designation: "UI/UX Designer",
        CTC: "₹4,80,000",
        salaryPerMonth: "₹40,000",
        deduction: "₹1,100",
        incentive: "₹550",
        netSalary: "₹39,450",
        joinDate: "2022-06-10"
    },
    {
        id: 4,
        name: "Michael Brown",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        employeeId: "EMP004",
        department: "Engineering",
        designation: "Frontend Developer",
        CTC: "₹4,50,000",
        salaryPerMonth: "₹37,500",
        deduction: "₹1,050",
        incentive: "₹525",
        netSalary: "₹36,975",
        joinDate: "2023-01-08"
    },
    {
        id: 5,
        name: "Sophia Wilson",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        employeeId: "EMP005",
        department: "HR",
        designation: "HR Manager",
        CTC: "₹4,70,000",
        salaryPerMonth: "₹39,167",
        deduction: "₹1,150",
        incentive: "₹575",
        netSalary: "₹38,592",
        joinDate: "2021-11-15"
    },
    {
        id: 6,
        name: "Robert Taylor",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        employeeId: "EMP006",
        department: "Sales",
        designation: "Sales Executive",
        CTC: "₹4,30,000",
        salaryPerMonth: "₹35,833",
        deduction: "₹1,050",
        incentive: "₹800",
        netSalary: "₹35,583",
        joinDate: "2022-08-22"
    }
];

const EmployeePayroll = () => {
    const [employees, setEmployees] = useState(employeePayrollData);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filteredEmployees = employeePayrollData.filter(employee =>
            employee.name.toLowerCase().includes(value) ||
            employee.employeeId.toLowerCase().includes(value) ||
            employee.department.toLowerCase().includes(value)
        );

        setEmployees(filteredEmployees);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleDownloadPayslip = (employeeId) => {
        alert(`Payslip download initiated for ${employeeId}`);
    };

    const formatCurrency = (amount) => amount.replace('₹', '₹ ');

    if (loading) {
        return (
            <div className="flex h-screen overflow-hidden font-jakarta">
                <div className="h-full w-[260px] bg-white border-r flex-shrink-0">
                    <SideNavBar />
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                        <p className="text-gray-600">Loading payroll data...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen overflow-hidden font-jakarta">

            {/* FIXED FULL HEIGHT SIDEBAR */}
            <div className="h-full w-[260px] bg-white border-r flex-shrink-0">
                <SideNavBar />
            </div>

            {/* MAIN CONTENT (SCROLLABLE) */}
            <div className="flex-1 overflow-y-auto p-4 w-full">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-4 rounded-t-lg border border-gray-300 shadow-sm">
                        Employee Payroll Management
                    </h1>
                </div>

                {/* SEARCH + FILTERS */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                    <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">

                        <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
                            <div className="relative w-full sm:w-64">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Search employees..."
                                />
                                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            </div>

                            <div className="relative w-full sm:w-48">
                                <select
                                    value={selectedMonth}
                                    onChange={handleMonthChange}
                                    className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="2024-01">January 2024</option>
                                    <option value="2024-02">February 2024</option>
                                    <option value="2024-03">March 2024</option>
                                    <option value="2024-04">April 2024</option>
                                    <option value="2024-05">May 2024</option>
                                    <option value="2024-06">June 2024</option>
                                </select>
                                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                <Filter className="h-4 w-4" />
                                <span>Filter</span>
                            </button>

                            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                <Download className="h-4 w-4" />
                                <span>Export</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* PAYROLL TABLE */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-medium">Employee</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium">CTC</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium">Monthly Salary</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium">Deductions</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium">Incentives</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium">Net Salary</th>
                                    <th className="px-6 py-4 text-center text-xs font-medium">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {employees.map(employee => (
                                    <tr key={employee.id} className="hover:bg-gray-50">

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <img
                                                    className="h-10 w-10 rounded-full border"
                                                    src={employee.imageUrl}
                                                    alt={employee.name}
                                                />
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium">{employee.name}</p>
                                                    <p className="text-sm text-gray-500">
                                                        {employee.department} • {employee.employeeId}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4">{employee.CTC}</td>
                                        <td className="px-6 py-4">{employee.salaryPerMonth}</td>
                                        <td className="px-6 py-4 text-red-600">{employee.deduction}</td>
                                        <td className="px-6 py-4 text-green-600">{employee.incentive}</td>
                                        <td className="px-6 py-4 text-blue-600 font-semibold">{employee.netSalary}</td>

                                        <td className="px-6 py-4 text-center">
                                            <div className="flex justify-center space-x-2">
                                                <Eye className="h-4 w-4 text-blue-500 cursor-pointer" />
                                                <Edit3 className="h-4 w-4 text-green-500 cursor-pointer" />
                                                <Download
                                                    onClick={() => handleDownloadPayslip(employee.employeeId)}
                                                    className="h-4 w-4 text-purple-500 cursor-pointer"
                                                />
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* SUMMARY CARDS */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">

                    <div className="bg-blue-50 p-4 rounded-lg border">
                        <p className="text-sm text-blue-700">Total Employees</p>
                        <p className="text-2xl font-bold text-blue-900">{employees.length}</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border">
                        <p className="text-sm text-green-700">Total Monthly Payout</p>
                        <p className="text-2xl font-bold text-green-900">₹2,37,167</p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border">
                        <p className="text-sm text-red-700">Total Deductions</p>
                        <p className="text-2xl font-bold text-red-900">₹6,550</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border">
                        <p className="text-sm text-purple-700">Total Incentives</p>
                        <p className="text-2xl font-bold text-purple-900">₹3,550</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EmployeePayroll;
