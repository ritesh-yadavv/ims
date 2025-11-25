import React, { useEffect, useState } from "react";
import TelecallerSideBar from "../widgets/TelecallerSideBar";
import headerBg from "../../../assets/devbackground.png";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaCalendar,
  FaSearch,
  FaFilter,
  FaUserCircle,
} from "react-icons/fa";

const ActiveClients = () => {
  const [activeClient, setActiveClient] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Static Data
  const staticClients = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      city: "Patna",
      status: [true, true, true, true, true, false, false],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      time: "09:00 - 17:00",
      contact: "+91 98765 43210",
      specialization: "Cardiologist",
      lastContact: "2024-01-15",
      callPriority: "high",
    },
    {
      id: 2,
      name: "Dr. Priya Verma",
      city: "Delhi",
      status: [true, false, true, false, true, false, false],
      days: ["Mon", "Wed", "Fri"],
      time: "10:00 - 16:00",
      contact: "+91 87654 32109",
      specialization: "Dermatologist",
      lastContact: "2024-01-14",
      callPriority: "medium",
    },
    {
      id: 3,
      name: "Dr. Amit Kumar",
      city: "Mumbai",
      status: [true, true, false, true, false, true, false],
      days: ["Tue", "Thu", "Sat"],
      time: "11:00 - 19:00",
      contact: "+91 76543 21098",
      specialization: "Orthopedic",
      lastContact: "2024-01-13",
      callPriority: "high",
    },
    {
      id: 4,
      name: "Dr. Sneha Singh",
      city: "Bangalore",
      status: [false, true, true, true, true, false, false],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      time: "08:30 - 16:30",
      contact: "+91 65432 10987",
      specialization: "Pediatrician",
      lastContact: "2024-01-12",
      callPriority: "medium",
    },
    {
      id: 5,
      name: "Dr. Vikram Patel",
      city: "Chennai",
      status: [true, false, false, true, false, true, true],
      days: ["Mon", "Thu", "Sat", "Sun"],
      time: "13:00 - 21:00",
      contact: "+91 54321 09876",
      specialization: "Dentist",
      lastContact: "2024-01-11",
      callPriority: "low",
    },
    {
      id: 6,
      name: "Dr. Anjali Mehta",
      city: "Hyderabad",
      status: [true, true, true, true, true, true, false],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      time: "09:00 - 18:00",
      contact: "+91 43210 98765",
      specialization: "Gynecologist",
      lastContact: "2024-01-10",
      callPriority: "high",
    },
  ];

  const getAllActiveClient = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 500));
    setActiveClient(staticClients);
    setLoading(false);
  };

  useEffect(() => {
    getAllActiveClient();
  }, []);

  const filteredClients = activeClient.filter((c) => {
    const search =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const status =
      statusFilter === "all" ||
      (statusFilter === "active" && c.status.filter(Boolean).length > 3) ||
      (statusFilter === "inactive" && c.status.filter(Boolean).length <= 3);

    return search && status;
  });

  const getStatusColor = (arr) => {
    const active = arr.filter(Boolean).length;
    const p = (active / arr.length) * 100;
    if (p >= 80) return "text-green-600 bg-green-50";
    if (p >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getPriorityBadge = (p) => {
    const color = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800",
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${color[p]}`}>
        {p.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* FIXED WIDTH SIDEBAR */}
      <div className="w-[250px] flex-shrink-0">
        <TelecallerSideBar />
      </div>

      {/* MAIN CONTENT — NO GAP, NO MARGIN */}
      <div className="flex-1 overflow-hidden">

        {/* HEADER */}
        <div
          className="p-6 shadow bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          <div className="flex items-center justify-between ml-6">
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-3xl opacity-80 text-white" />
              <div>
                <h1 className="text-2xl font-bold text-white">Active Clients</h1>
                <p className="text-blue-100">Monitor & manage client activity</p>
              </div>
            </div>

            <div className="text-right mr-6">
              <div className="text-4xl font-bold text-white text-center">{filteredClients.length}</div>
              <div className="text-blue-100">Total Clients</div>
            </div>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="bg-white p-4 shadow sticky top-[96px] z-40 border-b">
          <div className="flex justify-between items-center gap-4">
            <div className="relative w-80">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                className="pl-10 pr-3 py-2 border rounded w-full"
                placeholder="Search doctor, city, specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-500" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border rounded p-2"
              >
                <option value="all">All</option>
                <option value="active">Highly Active</option>
                <option value="inactive">Less Active</option>
              </select>
            </div>
          </div>
        </div>

        {/* TABLE WRAPPER */}
        <div className="h-[calc(100vh-180px)] overflow-y-auto p-5">

          <div className="bg-white shadow rounded border overflow-hidden">

            <table className="w-full">
              {/* TABLE HEADER */}
              <thead className="bg-gray-100 sticky top-0 z-30">
                <tr>
                  <th className="px-6 py-3 text-left text-xs uppercase font-semibold">Client</th>
                  <th className="px-6 py-3 text-left text-xs uppercase font-semibold">Location</th>
                  <th className="px-6 py-3 text-left text-xs uppercase font-semibold">Weekly Status</th>
                  <th className="px-6 py-3 text-left text-xs uppercase font-semibold">Contact</th>
                  <th className="px-6 py-3 text-left text-xs uppercase font-semibold">Priority</th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
                          {client.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-semibold">{client.name}</div>
                          <div className="text-sm text-gray-500">
                            {client.specialization}
                          </div>
                          <div className="text-xs text-gray-400">
                            Last: {new Date(client.lastContact).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-400" />
                        {client.city}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <FaClock className="text-gray-400" />
                        {client.time}
                      </div>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        <FaCalendar className="text-gray-400" />
                        {client.days.map((day, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                            {day}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {client.status.map((s, i) => (
                          <span
                            key={i}
                            className={`w-6 h-6 flex items-center justify-center text-xs rounded-full text-white ${s ? "bg-green-500" : "bg-red-500"
                              }`}
                          >
                            {s ? "✓" : "✕"}
                          </span>
                        ))}
                      </div>

                      <div
                        className={`mt-2 text-xs px-2 py-1 rounded text-center ${getStatusColor(
                          client.status
                        )}`}
                      >
                        {client.status.filter(Boolean).length}/7 Active
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <button className="bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-2">
                        <FaPhone /> Call
                      </button>
                      <div className="text-xs text-gray-500 mt-1">{client.contact}</div>
                    </td>

                    <td className="px-6 py-4">{getPriorityBadge(client.callPriority)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveClients;
