import React, { useEffect, useState } from "react";
import SalesSideBar from "../widgets/SalesSideBar";
import { useNavigate } from "react-router-dom";
import Loader from "../../commonComponent/loader";
import { FaSearch,FaUserPlus} from "react-icons/fa";
import headerBg from "../../../assets/devbackground.png"


const Lead = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [allClient, setAllClient] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const staticClientLeads = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      address: "123 Medical Plaza, Health Street",
      city: "Mumbai",
      clinicDays: ["Monday", "Wednesday", "Friday"],
      callTimingsStart: "09:00 AM",
      callTimingsEnd: "05:00 PM",
      status: "new",
      specialization: "Cardiologist",
      lastContact: "2024-01-15",
      leadScore: 85
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      address: "456 Health Center, Wellness Road",
      city: "Delhi",
      clinicDays: ["Tuesday", "Thursday"],
      callTimingsStart: "10:00 AM",
      callTimingsEnd: "04:00 PM",
      status: "contacted",
      specialization: "Dentist",
      lastContact: "2024-01-14",
      leadScore: 72
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      address: "789 Clinic Complex, Care Avenue",
      city: "Bangalore",
      clinicDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      callTimingsStart: "08:30 AM",
      callTimingsEnd: "06:00 PM",
      status: "qualified",
      specialization: "Orthopedic",
      lastContact: "2024-01-13",
      leadScore: 95
    }
  ];

  const getAllClient = async () => {
    setLoading(true);
    setTimeout(() => {
      setAllClient(staticClientLeads);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getAllClient();
  }, []);

  const filteredClients = allClient.filter(client => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const config = {
      new: "bg-blue-100 text-blue-800",
      contacted: "bg-yellow-100 text-yellow-800",
      qualified: "bg-green-100 text-green-800"
    }[status];

    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${config}`}>{status}</span>;
  };

  const getLeadScoreColor = (score) => {
    if (score >= 80) return "text-green-600 bg-green-50";
    if (score >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <>
      {/* FIXED SIDEBAR (never scrolls) */}
      <div className="fixed left-0 top-0 h-full w-64 z-50 shadow-lg">
        <SalesSideBar />
      </div>

      {/* RIGHT SECTION */}
      <div className="ml-64 w-[calc(100%-16rem)] h-screen overflow-y-auto bg-gray-50">

        {/* Header */}
  <div
  className="p-6 shadow bg-cover bg-center bg-no-repeat relative "
  style={{ backgroundImage: `url(${headerBg})` }}
>
  {/* Optional dark overlay for clear text */}
  {/* <div className="absolute inset-0 bg-black/40 rounded-t-xl"></div> */}

  {/* Header Content */}
  <div className="relative z-10 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-white">Client Leads</h1>

    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg flex items-center shadow">
      <FaUserPlus className="mr-2" />
      Add New Lead
    </button>
  </div>
</div>


        {/* Search & Filter */}
        <div className="p-6 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="relative w-1/3">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                className="w-full pl-10 pr-3 py-2 border rounded-lg"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="border rounded-lg px-3 py-2"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="p-6">
          {loading ? (
            <Loader />
          ) : (
            <div className="bg-white shadow border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-left">Client Details</th>
                    <th className="p-4 text-left">City</th>
                    <th className="p-4 text-left">Schedule</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Lead Score</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {filteredClients.map((client) => (
                    <tr
                      key={client.id}
                      className="hover:bg-blue-50 cursor-pointer"
                      onClick={() => navigate("/sales/lead/profile", { state: { client } })}
                    >
                      <td className="p-4">{client.name}</td>
                      <td className="p-4">{client.city}</td>
                      <td className="p-4">
                        {client.callTimingsStart} - {client.callTimingsEnd}
                      </td>
                      <td className="p-4">{getStatusBadge(client.status)}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full ${getLeadScoreColor(client.leadScore)}`}>
                          {client.leadScore}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Lead;
