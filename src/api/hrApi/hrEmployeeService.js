// ---- STATIC DATA ----

let STATIC_EMPLOYEES = [
  {
    id: 1,
    name: "Ritesh Yadav",
    empSerialId: "EMP001",
    email: "ritesh@example.com",
    department: "Development",
    type: "full-time",
    status: "active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    empSerialId: "EMP002",
    email: "priya@example.com",
    department: "HR",
    type: "part-time",
    status: "active",
  },
];

let STATIC_LEAVES = [
  {
    id: 11,
    employeeId: 1,
    empSerialId: "EMP001",
    type: "Sick Leave",
    status: "pending",
    date: "2025-02-10",
  },
];

let STATIC_PAYROLL = [
  {
    id: 21,
    empSerialId: "EMP001",
    month: "January",
    amount: 50000,
  },
];

let STATIC_HOLIDAYS = [
  { id: 101, title: "New Year", date: "2025-01-01" },
  { id: 102, title: "Independence Day", date: "2025-08-15" },
];


// ===============================
// 💼 EMPLOYEE APIS
// ===============================

// Get ALL employees
export const getAllHrEmployees = async (token) => {
  console.log("STATIC: getAllHrEmployees");
  return STATIC_EMPLOYEES;
};

// Get employee by ID
export const getEmployeeById = async (id, token) => {
  console.log("STATIC: getEmployeeById", id);
  return STATIC_EMPLOYEES.find((emp) => emp.id === Number(id)) || null;
};

// Create new employee
export const createEmployeeHr = async (data, token) => {
  console.log("STATIC: createEmployeeHr", data);

  const newEmp = {
    id: STATIC_EMPLOYEES.length + 1,
    ...data,
  };

  STATIC_EMPLOYEES.push(newEmp);

  return { success: true, employee: newEmp };
};



// ===============================
// 📝 LEAVE APIS
// ===============================

// Get all leave with pagination mock
export const getAllLeave = async (token, pageNo) => {
  console.log("STATIC: getAllLeave | Page:", pageNo);

  return {
    page: pageNo,
    total: STATIC_LEAVES.length,
    leaves: STATIC_LEAVES,
  };
};

// Update leave approval
export const updateLeaveApproval = async (token, id, status, data) => {
  console.log("STATIC: updateLeaveApproval", { id, status, data });

  const leave = STATIC_LEAVES.find((l) => l.id === id);
  if (leave) {
    leave.status = status;
  }

  return {
    success: true,
    updatedLeave: leave,
  };
};



// ===============================
// 💰 PAYROLL
// ===============================

export const getAllPayroll = async (token) => {
  console.log("STATIC: getAllPayroll");
  return STATIC_PAYROLL;
};



// ===============================
// 🎉 HOLIDAY LIST
// ===============================

// Get holidays
export const getHolidayList = async (token) => {
  console.log("STATIC: getHolidayList");
  return STATIC_HOLIDAYS;
};

// Add holiday
export const addHolidayList = async (token, data) => {
  console.log("STATIC: addHolidayList", data);

  const newHoliday = {
    id: STATIC_HOLIDAYS.length + 101,
    ...data,
  };

  STATIC_HOLIDAYS.push(newHoliday);

  return { success: true, holiday: newHoliday };
};

// Update holiday
export const updateHolidayList = async (token, data) => {
  console.log("STATIC: updateHolidayList", data);

  const index = STATIC_HOLIDAYS.findIndex((h) => h.id === data.id);

  if (index !== -1) STATIC_HOLIDAYS[index] = data;

  return { success: true, updated: data };
};

// Delete holiday
export const deleteHoliday = async (token, id) => {
  console.log("STATIC: deleteHoliday", id);

  STATIC_HOLIDAYS = STATIC_HOLIDAYS.filter((h) => h.id !== id);

  return { success: true, deletedId: id };
};
