import axiosInstance from "../axiosInstance";
import { ENDPOINTS } from "../endpoint";

// Reusable Authorization Header
const authHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

// ==============================
//      Create New Client
// ==============================
export const CreateClient = async (data, token) => {
  const response = await axiosInstance.post(
    ENDPOINTS.CREATE_CLIENT,
    data,
    authHeaders(token)
  );
  return response.data;
};

// ==============================
//     Get All Telecaller Clients
// ==============================
export const GetAllClient = async (token) => {
  const response = await axiosInstance.get(
    ENDPOINTS.Get_All_Client_Telecaller,
    authHeaders(token)
  );
  return response.data;
};
