// --- STATIC DATA MOCKS ---
const STATIC_HR_LOGIN_RESPONSE = {
  success: true,
  token: "mock-hr-token-12345",
  user: {
    id: 101,
    name: "Ritesh Yadav",
    email: "ritesh.hr@example.com",
    role: "HR Manager"
  }
};

const STATIC_HR_PROFILE = {
  id: 101,
  name: "Ritesh Yadav",
  email: "ritesh.hr@example.com",
  role: "HR Manager",
  phone: "+91 9876543210",
  department: "Human Resources",
  joiningDate: "2021-05-15"
};


// --- STATIC FUNCTIONS ---
export const Hrlogin = async (data) => {
  console.log("STATIC HR Login called with:", data);

  // optional: add simple validation
  if (data.email === "ritesh.hr@example.com" && data.password === "123456") {
    return STATIC_HR_LOGIN_RESPONSE;
  }

  return {
    success: false,
    message: "Invalid credentials!"
  };
};


export const HrGetProfile = async (token) => {
  console.log("STATIC HR Profile called with token:", token);

  if (token === "mock-hr-token-12345") {
    return STATIC_HR_PROFILE;
  }

  return {
    success: false,
    message: "Invalid or expired token!"
  };
};
