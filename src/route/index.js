import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Public pages
import AdminLoginPage from "../Components/Auth/AdminLoginPage";
import EmployeeLogin from "../Components/Auth/EmployeeLogin";
import ForgetPassword from "../Components/Auth/forgetPassword/index";
import AdminVerifyEmail from "../Components/Admin/Auth/index";
import AdminRegister from "../Components/Admin/Auth/adminRegister";
import NotFound from "../Components/commonComponent/notFound";
import SignUp from "../Components/Admin/Auth/signUp";

// Employee Pages
import Home from "../Components/page/Home/index";
import EmployeeList from "../Components/page/employee/getListOfEmployee";
import AddEmployeeProfile from "../Components/page/employee/addEmployee/index";
import Profile from "../Components/page/employee/getPersonalEmployeeDetails/index";
import EmployeePerformance from "../Components/page/employeePerformance/index";
import Payroll from "../Components/page/payroll/employeePayroll";
import Holiday from "../Components/page/holidayLeave/index";
import Notification from "../Components/page/notification/notification";
import Calendar from "../Components/page/calender/calender";

// Admin Pages
import AdminHomePage from "../Components/Admin/pages/adminHomePage";
import AdminProfile from "../Components/Admin/pages/adminProfile";
import AdminControl from "../Components/Admin/pages/adminControl";
import AdminEmployeeList from "../Components/Admin/pages/employee/adminEmployeeList";
import AdminAddEmployee from "../Components/Admin/pages/employee/addEmployee/index";
import AdminEmployeeDetailsById from "../Components/Admin/pages/employee/getPersonalEmployeeDetails/index";

// Sales Pages
import SalesDashboard from "../Components/Sales/dashBoard/salesDashboard";
import Lead from "../Components/Sales/lead/lead";
import SalesNotification from "../Components/Sales/notification/notification";
import SalesCalender from "../Components/Sales/calender/Calender";
import SalesActive from "../Components/Sales/active/active";
import SalesActiveProfile from "../Components/Sales/active/activeProfile";
import LeadProfile from "../Components/Sales/lead/leadProfile";
import SalesTourPlan from "../Components/Sales/tourPlan/TourPlan";

// Telecaller Pages
import TeleCallerDashboard from "../Components/Telecaller/dashBoard/TeleCallerDashboard";
import TeleCallerNotification from "../Components/Telecaller/notification/notification";
import TeleCallerCalender from "../Components/Telecaller/calender/Calender";
import TeleCallerlead from "../Components/Telecaller/lead/lead";
import TeleCallerActive from "../Components/Telecaller/active/active";
import TelecallerLeadProfile from "../Components/Telecaller/lead/leadProfile";

// Sales Supervisor
import SalesSuperVisorDashBoard from "../Components/salesSupervisor/dashBoard/salesSupervisorDashboard";
import MrDetails from "../Components/salesSupervisor/dashBoard/mrDetails";
import SalesSuperVisorNotification from "../Components/salesSupervisor/notification/notification";
import SalesSuperVisorCalender from "../Components/salesSupervisor/calender/Calender";
import SalesSuperVisorActive from "../Components/salesSupervisor/active/activeClients";
import SalesSuperVisorActiveClientProfile from "../Components/salesSupervisor/active/activeClientsProfile";
import SalesSuperTourPlan from "../Components/salesSupervisor/tourPlan/TourPlan";
import SalesSuperVisorLeads from "../Components/salesSupervisor/leads/index";
import SalesSuperVisorReports from "../Components/salesSupervisor/reports/Reports";
import MrClientProfileDetails from "../Components/salesSupervisor/leads/MrClientProfileDetails";
import MrClientLead from "../Components/salesSupervisor/leads/mrClientLeads";
import TelecallerProfile from "../Components/salesSupervisor/leads/telecallerProfile";

// CSE
import CseDashBoard from "../Components/Cse/dashBoard/CseDashboard";
import CseNotification from "../Components/Cse/notification/notification";
import CseCalender from "../Components/Cse/calender/Calender";
import CseLead from "../Components/Cse/leads/index";
import CseLeadProfileDetails from "../Components/Cse/leads/CseLeadProfileDetails";
import CseActive from "../Components/Cse/active/active";

// Developer
import DevCalender from "../Components/Developer/calender/Calender";
import DevNotification from "../Components/Developer/notification/notification";
import DevDashboard from "../Components/Developer/dashBoard/devDashBoard";
import DevProjects from "../Components/Developer/Devprojects/projectsDashBoard";
import DevProjectsTeam from "../Components/Developer/Devprojects/projectsTeamDashBoard";
import UserPorfile from "../Components/Developer/UserProfile/index";

// Senior Developer
import SrDashBoard from "../Components/SeniorDeveloper/Home/SrDashBoard";
import SrNotification from "../Components/SeniorDeveloper/Notification/notification";
import SrCalender from "../Components/SeniorDeveloper/Calender/calender";
import SrProject from "../Components/SeniorDeveloper/Page/allProject";
import SrProjectDevTeam from "../Components/SeniorDeveloper/Page/index";

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<EmployeeLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/admin" element={<AdminVerifyEmail />} />
          <Route path="/admin-signup" element={<AdminRegister />} />

          {/* Employee */}
          <Route path="/home" element={<Home />} />
          <Route path="/employee-details" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployeeProfile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route
            path="/employee-performance"
            element={<EmployeePerformance />}
          />

          {/* Admin */}
          <Route path="/admin-dashboard" element={<AdminHomePage />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/controls" element={<AdminControl />} />
          <Route path="/admin/employee-list" element={<AdminEmployeeList />} />
          <Route path="/admin/add-employee" element={<AdminAddEmployee />} />
          <Route
            path="/admin/employee/profile/:id"
            element={<AdminEmployeeDetailsById />}
          />

          {/* Sales */}
          <Route path="/sales-dashboard" element={<SalesDashboard />} />
          <Route path="/sales/lead" element={<Lead />} />
          <Route path="/sales/lead/profile" element={<LeadProfile />} />
          <Route
            path="/sales/notifications"
            element={<SalesNotification />}
          />
          <Route path="/sales/calender" element={<SalesCalender />} />
          <Route path="/sales/active" element={<SalesActive />} />
          <Route
            path="/sales/active/profile"
            element={<SalesActiveProfile />}
          />
          <Route path="/sales/tour" element={<SalesTourPlan />} />

          {/* Telecaller */}
          <Route path="/telecaller" element={<TeleCallerDashboard />} />
          <Route
            path="/telecaller-notifications"
            element={<TeleCallerNotification />}
          />
          <Route
            path="/telecaller-calendar"
            element={<TeleCallerCalender />}
          />
          <Route path="/telecaller-lead" element={<TeleCallerlead />} />
          <Route
            path="/telecaller-lead/profile"
            element={<TelecallerLeadProfile />}
          />
          <Route path="/telecaller-active" element={<TeleCallerActive />} />

          {/* Supervisor */}
          <Route path="/sales-super-visor" element={<SalesSuperVisorDashBoard />} />
          <Route path="/sales-super-mr" element={<MrDetails />} />
          <Route
            path="/super-visor-notifications"
            element={<SalesSuperVisorNotification />}
          />
          <Route
            path="/super-visor-calendar"
            element={<SalesSuperVisorCalender />}
          />
          <Route path="/super-visor-active" element={<SalesSuperVisorActive />} />
          <Route
            path="/super-visor-active/ClientsProfile"
            element={<SalesSuperVisorActiveClientProfile />}
          />
          <Route path="/super-visor-plan" element={<SalesSuperTourPlan />} />
          <Route path="/super-visor-lead" element={<SalesSuperVisorLeads />} />
          <Route
            path="/super-visor-lead/mrclientleads/:id"
            element={<MrClientLead />}
          />
          <Route
            path="/super-visor-lead/mrclientleadProfile"
            element={<MrClientProfileDetails />}
          />
          <Route
            path="/super-visor-lead/telecallerProfile"
            element={<TelecallerProfile />}
          />
          <Route
            path="/super-visor-report"
            element={<SalesSuperVisorReports />}
          />

          {/* CSE */}
          <Route path="/cse" element={<CseDashBoard />} />
          <Route path="/cse-notifications" element={<CseNotification />} />
          <Route path="/cse-calendar" element={<CseCalender />} />
          <Route path="/cse-lead" element={<CseLead />} />
          <Route path="/cse-lead/profile" element={<CseLeadProfileDetails />} />
          <Route path="/cse-active" element={<CseActive />} />

          {/* Developer */}
          <Route path="/dev/notification" element={<DevNotification />} />
          <Route path="/dev/calender" element={<DevCalender />} />
          <Route path="/dev/dashboard" element={<DevDashboard />} />
          <Route path="/dev/project" element={<DevProjects />} />
          <Route
            path="/developer/project/team"
            element={<DevProjectsTeam />}
          />
          <Route
            path="/developer/user/profile"
            element={<UserPorfile />}
          />

          {/* Senior Developer */}
          <Route path="/sr/dev/home" element={<SrDashBoard />} />
          <Route path="/sr/dev/notification" element={<SrNotification />} />
          <Route path="/sr/dev/calender" element={<SrCalender />} />
          <Route path="/sr/dev/project" element={<SrProject />} />
          <Route
            path="/sr/dev/project/team"
            element={<SrProjectDevTeam />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default Index;
