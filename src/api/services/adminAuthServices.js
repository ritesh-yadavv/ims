// ------ STATIC AUTH & ADMIN DATA ------

let STATIC_VERIFIED_EMAILS = ["test@example.com", "admin@company.com"];

let STATIC_OTP = "123456";  // Always successful for testing

let STATIC_UPLOADED_FILES = [];

let STATIC_ORGANISATIONS = [];

let STATIC_ADMIN_USER = {
  id: 1,
  name: "Super Admin",
  email: "admin@company.com",
  role: "Admin",
  token: "static-admin-token-123"
};
// =====================================================
// VERIFY EMAIL
// =====================================================
export const verifyEmail = async (data) => {
  console.log("STATIC: verifyEmail", data);

  const { email } = data;

  const exists = STATIC_VERIFIED_EMAILS.includes(email);

  return {
    success: exists,
    message: exists ? "Email verified successfully" : "Email not found",
  };
};



// =====================================================
// VERIFY OTP
// =====================================================
export const verifyOtp = async (data) => {
  console.log("STATIC: verifyOtp", data);

  if (data.otp === STATIC_OTP) {
    return { success: true, message: "OTP verified successfully" };
  }

  return { success: false, message: "Invalid OTP" };
};



// =====================================================
// UPLOAD FILE
// =====================================================
export const uploadfile = async (data) => {
  console.log("STATIC: uploadfile", data);

  const newFile = {
    id: STATIC_UPLOADED_FILES.length + 1,
    fileName: data.name || "uploaded_file",
  };

  STATIC_UPLOADED_FILES.push(newFile);

  return {
    success: true,
    file: newFile,
  };
};



// =====================================================
// ORGANISATION REGISTER
// =====================================================
export const organisationRegister = async (data) => {
  console.log("STATIC: organisationRegister", data);

  const newOrg = {
    id: STATIC_ORGANISATIONS.length + 1,
    ...data,
  };

  STATIC_ORGANISATIONS.push(newOrg);

  return {
    success: true,
    organisation: newOrg,
  };
};



// =====================================================
// ADMIN LOGIN
// =====================================================
export const Adminlogin = async (data) => {
  console.log("STATIC: Adminlogin", data);

  if (data.email === STATIC_ADMIN_USER.email && data.password === "admin123") {
    return {
      success: true,
      user: STATIC_ADMIN_USER,
    };
  }

  return { success: false, message: "Invalid admin credentials" };
};
