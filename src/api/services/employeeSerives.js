import axiosInstance from "../axiosInstance";
import { ENDPOINTS } from "../endpoint";

// Helper function to attach auth headers
const authHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

// =========================
//    Employees Services
// =========================

// Fetch all employees
export const getAllEmployees = async (token) => {
  const response = await axiosInstance.get(
    ENDPOINTS.GETALL_EMPLOYEES,
    authHeaders(token)
  );
  return response.data;
};

// Fetch single employee by ID
export const getEmployeeById = async (id, token) => {
  const response = await axiosInstance.get(
    `${ENDPOINTS.GET_EMPLOYEE_BY_ID}/${id}`,
    authHeaders(token)
  );
  return response.data;
};

// Create a new employee
export const createEmployee = async (data, token) => {
  const response = await axiosInstance.post(
    ENDPOINTS.CREATE_EMPLOYEE,
    data,
    authHeaders(token)
  );
  return response.data;
};

// Update employee data
export const updateEmployeeData = async (id, data, token) => {
  const response = await axiosInstance.patch(
    `${ENDPOINTS.UPDATE_EMPLOYEE}/${id}`,
    data,
    authHeaders(token)
  );
  return response.data;
};

// Delete an employee
export const deleteEmployee = async (id, token) => {
  const response = await axiosInstance.delete(
    `${ENDPOINTS.DELETE_EMPLOYEE}/${id}`,
    authHeaders(token)
  );
  return response.data;
};

// =========================
//        Roles Service
// =========================

// Create new role
export const createNewRole = async (data, token) => {
  const response = await axiosInstance.post(
    ENDPOINTS.CREATE_NEW_ROLE,
    data,
    authHeaders(token)
  );
  return response.data;
};

// Get all roles
export const getAllRole = async (token) => {
  const response = await axiosInstance.get(
    ENDPOINTS.GET_ALL_ROLE,
    authHeaders(token)
  );
  return response.data;
};

// Assign role to employee
export const assignNewRole = async (data, token) => {
  const response = await axiosInstance.post(
    ENDPOINTS.ASSIGN_NEW_ROLE,
    data,
    authHeaders(token)
  );
  return response.data;
};

// Filter employees by role
export const filterEmployee = async (role, token) => {
  const response = await axiosInstance.get(
    `${ENDPOINTS.FILTER_EMPLOYEE}?role=${role}`,
    authHeaders(token)
  );
  return response.data;
};
