import React, { useEffect, useState } from "react";
import TeleCallerSideBAR from "../widgets/TelecallerSideBar";
import { useNavigate } from "react-router-dom";
import Loader from "../../commonComponent/loader";
import headerBg from "../../../assets/devbackground.png";
import {
  FaSearch,
  FaFilter,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUserPlus,
  FaTimes,
  FaUser,
  FaHospital,
  FaMapPin,
  FaCalendarDay,
  FaStar,
} from "react-icons/fa";

const SIDEBAR_WIDTH = 240; // consistent width for all devices

const Lead = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [allClient, setAllClient] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLead, setNewLead] = useState({
    name: "",
    city: "",
    specialization: "",
    doctorNumber: "",
    clinicDays: [],
    clinicTimingsStart: "09:00 AM",
    clinicTimingsEnd: "05:00 PM",
    status: "new",
    leadScore: 50,
  });

  const staticClientLeads = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      city: "Patna",
      clinicDays: ["Monday", "Wednesday", "Friday"],
      clinicTimingsStart: "09:00 AM",
      clinicTimingsEnd: "05:00 PM",
      doctorNumber: "+91 98765 43210",
      specialization: "Cardiologist",
      status: "new",
      lastContact: "2024-01-15",
      leadScore: 85,
    },
    {
      id: 2,
      name: "Dr. Priya Verma",
      city: "Delhi",
      clinicDays: ["Tuesday", "Thursday"],
      clinicTimingsStart: "10:00 AM",
      clinicTimingsEnd: "04:00 PM",
      doctorNumber: "+91 87654 32109",
      specialization: "Dermatologist",
      status: "contacted",
      lastContact: "2024-01-14",
      leadScore: 72,
    },
    {
      id: 3,
      name: "Dr. Amit Kumar",
      city: "Mumbai",
      clinicDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      clinicTimingsStart: "08:30 AM",
      clinicTimingsEnd: "06:00 PM",
      doctorNumber: "+91 76543 21098",
      specialization: "Orthopedic",
      status: "qualified",
      lastContact: "2024-01-13",
      leadScore: 95,
    },
    {
      id: 4,
      name: "Dr. Neha Singh",
      city: "Lucknow",
      clinicDays: ["Monday", "Thursday", "Saturday"],
      clinicTimingsStart: "11:00 AM",
      clinicTimingsEnd: "06:00 PM",
      doctorNumber: "+91 99887 66554",
      specialization: "Gynecologist",
      status: "new",
      lastContact: "2024-01-12",
      leadScore: 78,
    },
    {
      id: 5,
      name: "Dr. Anil Chauhan",
      city: "Jaipur",
      clinicDays: ["Tuesday", "Friday"],
      clinicTimingsStart: "09:30 AM",
      clinicTimingsEnd: "03:30 PM",
      doctorNumber: "+91 90909 80808",
      specialization: "Neurologist",
      status: "contacted",
      lastContact: "2024-01-11",
      leadScore: 81,
    },
    {
      id: 6,
      name: "Dr. Ritu Malhotra",
      city: "Chandigarh",
      clinicDays: ["Wednesday", "Saturday"],
      clinicTimingsStart: "10:00 AM",
      clinicTimingsEnd: "05:00 PM",
      doctorNumber: "+91 98989 76767",
      specialization: "Pediatrician",
      status: "qualified",
      lastContact: "2024-01-10",
      leadScore: 92,
    },
  ];

  const getAllClient = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setAllClient(staticClientLeads);
    } catch (error) {
      console.log("Error loading client leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllClient();
  }, []);

  const filteredClients = allClient.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      new: { color: "bg-blue-100 text-blue-800", label: "New" },
      contacted: {
        color: "bg-yellow-100 text-yellow-800",
        label: "Contacted",
      },
      qualified: {
        color: "bg-green-100 text-green-800",
        label: "Qualified",
      },
    };

    const config = statusConfig[status] || statusConfig.new;

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        {config.label}
      </span>
    );
  };

  const getLeadScoreColor = (score) => {
    if (score >= 80) return "text-green-600 bg-green-50";
    if (score >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const handleCall = (phoneNumber, e) => {
    e.stopPropagation();
    console.log(`Calling ${phoneNumber}`);
  };

  const handleAddLead = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewLead({
      name: "",
      city: "",
      specialization: "",
      doctorNumber: "",
      clinicDays: [],
      clinicTimingsStart: "09:00 AM",
      clinicTimingsEnd: "05:00 PM",
      status: "new",
      leadScore: 50,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDayToggle = (day) => {
    setNewLead((prev) => ({
      ...prev,
      clinicDays: prev.clinicDays.includes(day)
        ? prev.clinicDays.filter((d) => d !== day)
        : [...prev.clinicDays, day],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate new lead with ID
    const leadToAdd = {
      ...newLead,
      id: allClient.length + 1,
      lastContact: new Date().toISOString().split('T')[0],
    };

    // Add to the list
    setAllClient((prev) => [leadToAdd, ...prev]);

    // Show success message
    alert("New lead added successfully!");

    // Close modal and reset form
    handleCloseModal();
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const timeSlots = [
    "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* FIXED SIDEBAR */}
      <div
        className="fixed top-0 left-0 h-full bg-white shadow-lg z-50"
        style={{ width: SIDEBAR_WIDTH }}
      >
        <TeleCallerSideBAR />
      </div>

      {/* MAIN CONTENT AREA */}
      <div
        className="flex flex-col flex-1"
        style={{ marginLeft: SIDEBAR_WIDTH }}
      >
        {/* FIXED HEADER */}
        <div
          className="p-6 shadow bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Client Leads</h1>
              <p className="text-blue-100 mt-1">
                Manage and track your potential clients
              </p>
            </div>

            <button
              onClick={handleAddLead}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <FaUserPlus className="mr-2" />
              Add New Lead
            </button>
          </div>
        </div>

        {/* FIXED FILTER BAR */}
        <div className="bg-white p-5 shadow-sm sticky top-[85px] z-30 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
            {/* Search */}
            <div className="relative w-full lg:w-1/3">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                placeholder="Search by name, city or specialization…"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                </select>
              </div>

              <p className="text-sm text-gray-600">
                {filteredClients.length} of {allClient.length} leads
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT BODY */}
        <div className="p-6 flex-1">
          {loading ? (
            <div className="flex flex-col items-center py-20">
              <Loader />
              <p className="mt-4 text-gray-500">Loading leads…</p>
            </div>
          ) : filteredClients.length === 0 ? (
            <div className="flex flex-col items-center p-16 bg-white rounded-lg shadow border text-gray-500">
              <FaUserPlus className="text-4xl text-gray-300 mb-4" />
              <h3 className="font-semibold">No leads found</h3>
              <p className="text-center">
                Try changing search or filter options.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow border overflow-hidden h-full">
              {/* TABLE CONTAINER WITH SCROLL */}
              <div className="overflow-y-auto max-h-[calc(100vh-280px)]">
                <table className="w-full">
                  <thead className="sticky top-0 bg-gradient-to-r from-gray-50 to-blue-50 border-b z-10">
                    <tr>
                      <th className="p-4 text-left text-xs font-semibold uppercase">
                        Client Details
                      </th>
                      <th className="p-4 text-left text-xs font-semibold uppercase">
                        Location
                      </th>
                      <th className="p-4 text-left text-xs font-semibold uppercase">
                        Schedule
                      </th>
                      <th className="p-4 text-left text-xs font-semibold uppercase">
                        Status
                      </th>
                      <th className="p-4 text-left text-xs font-semibold uppercase">
                        Contact
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y">
                    {filteredClients.map((client) => (
                      <tr
                        key={client.id}
                        onClick={() =>
                          navigate("/telecaller-lead/profile", {
                            state: { client },
                          })
                        }
                        className="hover:bg-blue-50 cursor-pointer transition"
                      >
                        <td className="p-4">
                          <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white flex items-center justify-center font-semibold">
                              {client.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>

                            <div>
                              <p className="font-semibold">{client.name}</p>
                              <p className="text-sm text-gray-500">
                                {client.specialization}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <span>{client.city}</span>
                          </div>
                        </td>

                        <td className="p-4">
                          <div className="flex flex-col gap-1 text-sm">
                            <div className="flex gap-1 flex-wrap">
                              {client.clinicDays.map((d, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                                >
                                  {d.slice(0, 3)}
                                </span>
                              ))}
                            </div>
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <FaClock />
                              {client.clinicTimingsStart} -{" "}
                              {client.clinicTimingsEnd}
                            </span>
                          </div>
                        </td>

                        <td className="p-4">
                          {getStatusBadge(client.status)}
                          <div
                            className={`mt-2 px-2 py-1 rounded text-xs font-semibold ${getLeadScoreColor(
                              client.leadScore
                            )}`}
                          >
                            Score: {client.leadScore}%
                          </div>
                        </td>

                        <td className="p-4">
                          <button
                            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                            onClick={(e) => handleCall(client.doctorNumber, e)}
                          >
                            <FaPhone />
                            Call
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ADD NEW LEAD MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div
              className="p-6 shadow bg-cover bg-center bg-no-repeat relative "
              style={{ backgroundImage: `url(${headerBg})` }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                    <FaUserPlus className="text-xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Add New Lead</h2>
                    <p className="text-blue-100">Enter the doctor's details</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                >
                  <FaTimes className="text-xl text-white" />
                </button>
              </div>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Name and Specialization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="text-gray-400" />
                    Doctor Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newLead.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Dr. Full Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaHospital className="text-gray-400" />
                    Specialization *
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    value={newLead.specialization}
                    onChange={handleInputChange}
                    required
                    placeholder="Cardiologist, Dentist, etc."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* City and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaMapPin className="text-gray-400" />
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={newLead.city}
                    onChange={handleInputChange}
                    required
                    placeholder="City name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaPhone className="text-gray-400" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="doctorNumber"
                    value={newLead.doctorNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Clinic Days */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <FaCalendarDay className="text-gray-400" />
                  Clinic Days *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {daysOfWeek.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayToggle(day)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${newLead.clinicDays.includes(day)
                          ? "bg-blue-500 text-white border-blue-500 shadow-md"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-300"
                        }`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clinic Timings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaClock className="text-gray-400" />
                    Clinic Start Time
                  </label>
                  <select
                    name="clinicTimingsStart"
                    value={newLead.clinicTimingsStart}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  >
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaClock className="text-gray-400" />
                    Clinic End Time
                  </label>
                  <select
                    name="clinicTimingsEnd"
                    value={newLead.clinicTimingsEnd}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  >
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Status and Lead Score */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaStar className="text-gray-400" />
                    Status
                  </label>
                  <select
                    name="status"
                    value={newLead.status}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaStar className="text-gray-400" />
                    Lead Score: {newLead.leadScore}%
                  </label>
                  <input
                    type="range"
                    name="leadScore"
                    min="0"
                    max="100"
                    value={newLead.leadScore}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-green-600 transition-all shadow-md hover:shadow-lg"
                >
                  Add Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lead;