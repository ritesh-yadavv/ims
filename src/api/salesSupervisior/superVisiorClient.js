// -------- STATIC SALES SUPERVISOR & REPORT DATA --------

let STATIC_SUPERVISOR_LEADS = [
  { id: 1, salesId: 101, client: "Ravi Kumar", status: "hot" },
  { id: 2, salesId: 101, client: "Priya Verma", status: "warm" },
  { id: 3, salesId: 102, client: "Aman Singh", status: "cold" },
];

let STATIC_SALES_EXECUTIVES = [
  { id: 101, name: "Ritesh Yadav", region: "Varanasi" },
  { id: 102, name: "Neha Gupta", region: "Lucknow" },
  { id: 103, name: "Amit Sharma", region: "Delhi" },
];

let STATIC_MONTHLY_LEADERBOARD = [
  { id: 1, salesPerson: "Ritesh", score: 95 },
  { id: 2, salesPerson: "Neha", score: 90 },
  { id: 3, salesPerson: "Amit", score: 85 },
];

let STATIC_UPCOMING_AGENDAS = [
  { id: 1, empId: 101, date: "2025-02-20", task: "Client Visit - Ravi" },
  { id: 2, empId: 101, date: "2025-02-20", task: "Demo for Priya" },
  { id: 3, empId: 102, date: "2025-02-21", task: "Office Review" },
];

let STATIC_MONTHLY_REPORT = [
  { id: 1, employeeId: 101, month: "January", leads: 40, sales: 18 },
  { id: 2, employeeId: 101, month: "February", leads: 45, sales: 20 },
];

let STATIC_WEEKLY_REPORT = [
  { id: 1, employeeId: 101, week: "Feb 1–7", leads: 10, sales: 4 },
  { id: 2, employeeId: 101, week: "Feb 8–14", leads: 12, sales: 5 },
];

let STATIC_TOUR_PLAN = [
  { id: 1, employeeId: 101, date: "2025-02-22", location: "Varanasi" },
  { id: 2, employeeId: 101, date: "2025-02-23", location: "Gorakhpur" },
];


// =====================================================
// Get Supervisor Lead Clients
// =====================================================
export const GetSalesSuperVisiorLeadClient = async (token, id) => {
  console.log("STATIC: GetSalesSuperVisiorLeadClient", id);

  return STATIC_SUPERVISOR_LEADS.filter((lead) => lead.salesId === Number(id));
};



// =====================================================
// Get All Sales Executives
// =====================================================
export const GetAllSalesExexutive = async (token) => {
  console.log("STATIC: GetAllSalesExexutive");

  return STATIC_SALES_EXECUTIVES;
};



// =====================================================
// Get Monthly Leaderboard
// =====================================================
export const GetMonthlyLeaderBoard = async (token) => {
  console.log("STATIC: GetMonthlyLeaderBoard");

  return STATIC_MONTHLY_LEADERBOARD;
};



// =====================================================
// Get Upcoming Agendas
// =====================================================
export const GetUpcomingAgendas = async (token, data) => {
  console.log("STATIC: GetUpcomingAgendas", data);

  return STATIC_UPCOMING_AGENDAS.filter(
    (item) => item.empId === Number(data.id) && item.date === data.date
  );
};



// =====================================================
// Get Monthly Report
// =====================================================
export const GetMonthlyReport = async (token, data) => {
  console.log("STATIC: GetMonthlyReport", data);

  return STATIC_MONTHLY_REPORT;
};



// =====================================================
// Get Weekly Report
// =====================================================
export const GetWeeklyReport = async (token, data) => {
  console.log("STATIC: GetWeeklyReport", data);

  return STATIC_WEEKLY_REPORT;
};



// =====================================================
// Get Tour Plan
// =====================================================
export const GetTourPlan = async (token, id) => {
  console.log("STATIC: GetTourPlan", id);

  return STATIC_TOUR_PLAN.filter((plan) => plan.employeeId === Number(id));
};
