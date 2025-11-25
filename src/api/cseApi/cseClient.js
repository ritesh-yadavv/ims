// STATIC DATA for testing
const STATIC_CLIENTS = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul@example.com",
    status: "active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Aman Verma",
    email: "aman@example.com",
    status: "active",
  }
];

const STATIC_OTP_RESPONSE = {
  message: "OTP sent to email successfully",
  otp: "1234", // for testing
};

const STATIC_VERIFY_OTP_RESPONSE = {
  message: "OTP Verified Successfully",
  isVerified: true,
};

const STATIC_ACTIVE_CLIENTS = STATIC_CLIENTS.filter(
  (c) => c.status === "active"
);

export const GetAllClient = async (token, cseId) => {
  console.log("Static GetAllClient called", { token, cseId });
  return STATIC_CLIENTS;  // returning static list
};

export const CseGenerateOtp = async (token, email) => {
  console.log("Static Generate OTP", { token, email });
  return STATIC_OTP_RESPONSE; // static response
};

export const CseVerifyOtp = async (token, data) => {
  console.log("Static Verify OTP", { token, data });
  return STATIC_VERIFY_OTP_RESPONSE;
};

export const CseGetActiveClient = async (token) => {
  console.log("Static Get Active Clients", { token });
  return STATIC_ACTIVE_CLIENTS;
};
