import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from "../../commonComponent/loader"
import { FaSearch, FaMapMarkerAlt, FaUserTie, FaBuilding, FaPhone, FaEnvelope } from 'react-icons/fa';

const ByMr = () => {
  const navigate = useNavigate();
  const [leadClient, setLeadClient] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');

  // Static data for sales executives
  const staticSalesExecutives = [
    {
      id: 1,
      name: "Rajesh Kumar",
      profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      officeLocation: "Downtown",
      email: "rajesh.kumar@company.com",
      phone: "+91 98765 43210",
      designation: "Senior Sales Executive",
      activeClients: 42,
      totalLeads: 125,
      performance: "Excellent",
      joinDate: "2022-03-15"
    },
    {
      id: 2,
      name: "Priya Sharma",
      profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      officeLocation: "Uptown",
      email: "priya.sharma@company.com",
      phone: "+91 87654 32109",
      designation: "Sales Executive",
      activeClients: 38,
      totalLeads: 98,
      performance: "Good",
      joinDate: "2022-08-22"
    },
    {
      id: 3,
      name: "Amit Patel",
      profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      officeLocation: "Midtown",
      email: "amit.patel@company.com",
      phone: "+91 76543 21098",
      designation: "Senior Sales Executive",
      activeClients: 35,
      totalLeads: 112,
      performance: "Very Good",
      joinDate: "2021-11-30"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      officeLocation: "Downtown",
      email: "sneha.reddy@company.com",
      phone: "+91 65432 10987",
      designation: "Sales Executive",
      activeClients: 32,
      totalLeads: 87,
      performance: "Good",
      joinDate: "2023-01-10"
    },
    {
      id: 5,
      name: "Vikram Singh",
      profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      officeLocation: "Uptown",
      email: "vikram.singh@company.com",
      phone: "+91 54321 09876",
      designation: "Junior Sales Executive",
      activeClients: 28,
      totalLeads: 65,
      performance: "Satisfactory",
      joinDate: "2023-05-18"
    },
    {
      id: 6,
      name: "Anjali Mehta",
      profilePicture: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      officeLocation: "Midtown",
      email: "anjali.mehta@company.com",
      phone: "+91 43210 98765",
      designation: "Sales Executive",
      activeClients: 41,
      totalLeads: 118,
      performance: "Excellent",
      joinDate: "2022-02-14"
    }
  ];

  // Get unique office locations for filter
  const officeLocations = ['all', ...new Set(staticSalesExecutives.map(exec => exec.officeLocation))];

  useEffect(() => {
    const fetchAllClientLead = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1200));
        setLeadClient(staticSalesExecutives);
      } catch (error) {
        console.log("Error loading sales executives:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllClientLead();
  }, []);

  // Filter executives based on search and location
  const filteredExecutives = leadClient.filter(executive => {
    const matchesSearch = executive.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         executive.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         executive.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = locationFilter === 'all' || executive.officeLocation === locationFilter;
    
    return matchesSearch && matchesLocation;
  });

  const getPerformanceColor = (performance) => {
    switch (performance.toLowerCase()) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'very good': return 'bg-blue-100 text-blue-800';
      case 'good': return 'bg-yellow-100 text-yellow-800';
      case 'satisfactory': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Sales Team</h1>
        <p className="text-gray-600 mt-2">Manage and monitor your sales executives</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Search Bar */}
          <div className="relative flex-1 md:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, designation, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Location Filter */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {officeLocations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="text-sm text-gray-600">
              {filteredExecutives.length} of {leadClient.length} executives
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="min-h-96 flex flex-col justify-center items-center">
          <Loader />
          <p className="text-gray-500 mt-4">Loading sales team data...</p>
        </div>
      ) : filteredExecutives.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-500 bg-white rounded-xl shadow-sm border border-gray-200">
          <FaUserTie className="text-4xl text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold mb-2">No executives found</h3>
          <p className="text-center max-w-md">
            {searchTerm || locationFilter !== 'all' 
              ? "Try adjusting your search or filter criteria."
              : "No sales executives are currently registered."
            }
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 px-6 py-4">
              <div className="col-span-4">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Executive Details
                </span>
              </div>
              <div className="col-span-3">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Contact Information
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Performance
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Location
                </span>
              </div>
              <div className="col-span-1">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Clients
                </span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {filteredExecutives.map((executive) => (
              <div
                key={executive.id}
                onClick={() => navigate(`/super-visor-lead/mrclientleads/${executive.id}`)}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200 group"
              >
                {/* Executive Details */}
                <div className="col-span-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={executive.profilePicture}
                        alt={executive.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm group-hover:border-blue-200 transition-colors duration-200"
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {executive.name}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <FaUserTie className="mr-1 text-xs" />
                        {executive.designation}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="col-span-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <FaEnvelope className="text-gray-400 text-xs" />
                      <span className="truncate">{executive.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <FaPhone className="text-gray-400 text-xs" />
                      <span>{executive.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Performance */}
                <div className="col-span-2">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getPerformanceColor(executive.performance)}`}>
                    {executive.performance}
                  </span>
                </div>

                {/* Location */}
                <div className="col-span-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FaBuilding className="text-gray-400" />
                    <span>{executive.officeLocation}</span>
                  </div>
                </div>

                {/* Active Clients */}
                <div className="col-span-1">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{executive.activeClients}</div>
                    <div className="text-xs text-gray-500">Active</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary Stats */}
      {!loading && filteredExecutives.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-2xl font-bold text-blue-600">{filteredExecutives.length}</div>
            <div className="text-sm text-gray-600">Total Executives</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-2xl font-bold text-green-600">
              {filteredExecutives.filter(e => e.performance === 'Excellent' || e.performance === 'Very Good').length}
            </div>
            <div className="text-sm text-gray-600">High Performers</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-2xl font-bold text-purple-600">
              {filteredExecutives.reduce((sum, exec) => sum + exec.activeClients, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Active Clients</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-2xl font-bold text-orange-600">
              {officeLocations.length - 1}
            </div>
            <div className="text-sm text-gray-600">Office Locations</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ByMr;