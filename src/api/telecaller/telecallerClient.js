import axiosInstance from "../axiosInstance";
import { ENDPOINTS } from "../endpoint";

// Reusable Authorization Header
const authHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

// ==============================
//     Get Active Telecaller Clients
// ==============================
export const GetActiveClient = async (token) => {
  const response = await axiosInstance.get(
    ENDPOINTS.GET_ACTIVE_CLIENT_Telecaller,
    authHeaders(token)
  );
  return response.data;
};

// ==============================
//     Telecaller Monthly Leaderboard
// ==============================
export const TeleCallerMonthlyLeaderBoard = async (token) => {
  const response = await axiosInstance.get(
    ENDPOINTS.TElECaLLER_MONTHLY_LEADER_BOARD,
    authHeaders(token)
  );
  return response.data;
};
