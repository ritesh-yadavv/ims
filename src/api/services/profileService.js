import axiosInstance from "../axiosInstance";
import { ENDPOINTS } from "../endpoint";

// Reusable Authorization header
const authHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

// =========================
//      Profile Services
// =========================

// Get Profile
export const getProfile = async (token) => {
  const response = await axiosInstance.get(
    ENDPOINTS.GETPROFILE,
    authHeaders(token)
  );
  return response.data;
};

// Update Profile
export const updateProfile = async (data, token) => {
  const response = await axiosInstance.put(
    ENDPOINTS.UPDATEPROFILE,
    data,
    authHeaders(token)
  );
  return response.data;
};

// Change Password
export const changePassword = async (data, token) => {
  const response = await axiosInstance.post(
    ENDPOINTS.CHANGEPASSWORD,
    data,
    authHeaders(token)
  );
  return response.data;
};
