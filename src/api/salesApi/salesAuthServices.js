// ---- STATIC MOCK DATA ----

let STATIC_CLIENTS = [
  { id: 1, name: "Ravi Kumar", locality: "VARANASI", status: "active" },
  { id: 2, name: "Priya Verma", locality: "LUCKNOW", status: "inactive" },
];

let STATIC_CSE_SALES = [
  { id: 10, name: "Amit Singh", officeLocation: "VARANASI" },
  { id: 11, name: "Kritika Sharma", officeLocation: "LUCKNOW" }
];

let STATIC_MEETING_NOTES = [];

let STATIC_SALES_PROFILE = {
  id: 501,
  name: "Ritesh Yadav",
  role: "Sales Executive",
  email: "sales.ritesh@example.com"
};

let STATIC_MONTHLY_LEADERBOARD = [
  { id: 1, salesPerson: "Ritesh", score: 95 },
  { id: 2, salesPerson: "Amit", score: 90 },
  { id: 3, salesPerson: "Neha", score: 85 },
];


// ========================================================
// CREATE CLIENT
// ========================================================
export const CreteClient = async (data, token) => {
  console.log("STATIC: Create Client", data);

  const newClient = {
    id: STATIC_CLIENTS.length + 1,
    ...data,
  };

  STATIC_CLIENTS.push(newClient);

  return { success: true, client: newClient };
};



// ========================================================
// GET ALL CLIENTS
// ========================================================
export const GetAllClient = async (token) => {
  console.log("STATIC: GetAllClient");
  return STATIC_CLIENTS;
};



// ========================================================
// GET ALL CSE SALES by locality
// ========================================================
export const GetAllCseSales = async (token, locality) => {
  console.log("STATIC: GetAllCseSales", locality);

  return STATIC_CSE_SALES.filter(
    (emp) => emp.officeLocation === locality.toUpperCase()
  );
};



// ========================================================
// ASSIGN CSE SALES
// ========================================================
export const AssignCseSales = async (token, data) => {
  console.log("STATIC: Assign CSE Sales", data);

  return {
    success: true,
    assigned: {
      clientId: data.clientId,
      cseId: data.cseId
    }
  };
};



// ========================================================
// SALES PROFILE
// ========================================================
export const GetSalesProfile = async (token) => {
  console.log("STATIC: GetSalesProfile");
  return STATIC_SALES_PROFILE;
};



// ========================================================
// CREATE MEETING NOTES
// ========================================================
export const CreteMeetingNotesSales = async (data, token) => {
  console.log("STATIC: Create Meeting Notes", data);

  const newNote = {
    id: STATIC_MEETING_NOTES.length + 1,
    ...data,
    date: new Date().toISOString()
  };

  STATIC_MEETING_NOTES.push(newNote);

  return { success: true, note: newNote };
};



// ========================================================
// GET ACTIVE CLIENTS FOR SALES
// ========================================================
export const GetActiveClientSales = async (token) => {
  console.log("STATIC: GetActiveClientSales");

  return STATIC_CLIENTS.filter((c) => c.status === "active");
};



// ========================================================
// GET MONTHLY LEADERBOARD
// ========================================================
export const GetMonthlyLeaderBoard = async (token) => {
  console.log("STATIC: GetMonthlyLeaderBoard");

  return STATIC_MONTHLY_LEADERBOARD;
};
