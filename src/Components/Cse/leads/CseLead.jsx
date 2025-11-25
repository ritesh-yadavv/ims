import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from "../../commonComponent/loader"

const CseLead = () => {
  const navigate = useNavigate();
  const [leadClient, setLeadClient] = useState([]);
  const [loading, setLoading] = useState(false);

  // Static client data
  const staticClientData = [
    {
      id: 1,
      clientName: 'John Smith',
      clientAddress: '123 Business Park, Downtown, New York, NY 10001, United States',
      purpose: 'Product Demonstration',
      visitDate: '2024-01-15',
      visitTime: '10:00 AM',
      email: 'john.smith@business.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Solutions Inc.',
      status: 'Scheduled'
    },
    {
      id: 2,
      clientName: 'Sarah Johnson',
      clientAddress: '456 Corporate Avenue, Suite 300, San Francisco, CA 94105',
      purpose: 'Contract Review',
      visitDate: '2024-01-16',
      visitTime: '2:30 PM',
      email: 'sarah.j@corporation.com',
      phone: '+1 (555) 987-6543',
      company: 'Global Enterprises',
      status: 'Confirmed'
    },
    {
      id: 3,
      clientName: 'Mike Wilson',
      clientAddress: '789 Industrial Zone, Building B, Chicago, IL 60601',
      purpose: 'Technical Consultation',
      visitDate: '2024-01-17',
      visitTime: '11:15 AM',
      email: 'mike.wilson@industry.com',
      phone: '+1 (555) 456-7890',
      company: 'Manufacturing Corp',
      status: 'Pending'
    },
    {
      id: 4,
      clientName: 'Emily Davis',
      clientAddress: '321 Innovation Drive, Tech Park, Boston, MA 02108',
      purpose: 'Project Discussion',
      visitDate: '2024-01-18',
      visitTime: '3:45 PM',
      email: 'emily.davis@innovate.com',
      phone: '+1 (555) 234-5678',
      company: 'StartUp Innovations',
      status: 'Scheduled'
    },
    {
      id: 5,
      clientName: 'Robert Brown',
      clientAddress: '654 Commerce Street, Financial District, Los Angeles, CA 90015',
      purpose: 'Partnership Meeting',
      visitDate: '2024-01-19',
      visitTime: '9:00 AM',
      email: 'robert.b@finance.com',
      phone: '+1 (555) 345-6789',
      company: 'Capital Investments',
      status: 'Confirmed'
    }
  ];

  const getAllLeadClient = async () => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Use static data instead of API call
      setLeadClient(staticClientData);
      console.log("Loaded static client data");
    } catch (error) {
      console.error("Error fetching lead clients:", error?.message || error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllLeadClient();
  }, []);

  // Format date for better display
  const formatDate = (dateString) => {
    if (!dateString) return 'Not scheduled';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : leadClient.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen text-gray-500 space-y-4">
          <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="text-lg">No clients found</p>
          <p className="text-sm">Clients will appear here once they are assigned to you.</p>
        </div>
      ) : (
        <div className="container mx-auto mt-4 p-4">
       
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">{leadClient.length}</div>
              <div className="text-gray-600 text-sm">Total Clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-green-600">
                {leadClient.filter(client => client.status === 'Confirmed').length}
              </div>
              <div className="text-gray-600 text-sm">Confirmed</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">
                {leadClient.filter(client => client.status === 'Scheduled').length}
              </div>
              <div className="text-gray-600 text-sm">Scheduled</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-yellow-600">
                {leadClient.filter(client => client.status === 'Pending').length}
              </div>
              <div className="text-gray-600 text-sm">Pending</div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-md">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-700 border-b">
                  <th className="py-4 px-4 text-left font-semibold">Client Name</th>
                  <th className="py-4 px-4 text-left font-semibold">Company</th>
                  <th className="py-4 px-4 text-left font-semibold">Address</th>
                  <th className="py-4 px-4 text-left font-semibold">Purpose</th>
                  <th className="py-4 px-4 text-left font-semibold">Visit Date</th>
                  <th className="py-4 px-4 text-left font-semibold">Visit Time</th>
                  <th className="py-4 px-4 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {leadClient.map((item, index) => (
                  <tr
                    key={item.id}
                    onClick={() =>
                      navigate("/cse-lead/profile", {
                        state: { client: item },
                      })
                    }
                    className="border-b border-gray-200 hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{item.clientName}</div>
                      <div className="text-gray-500 text-xs">{item.email}</div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{item.company}</td>
                    <td className="py-4 px-4 text-gray-700">
                      <div className="truncate max-w-xs" title={item.clientAddress}>
                        {item.clientAddress}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{item.purpose}</td>
                    <td className="py-4 px-4 text-gray-700">{formatDate(item.visitDate)}</td>
                    <td className="py-4 px-4 text-gray-700 font-mono">{item.visitTime}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Information */}
          <div className="mt-4 text-center text-gray-500 text-sm">
            Showing {leadClient.length} client{leadClient.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}
    </>
  );
}

export default CseLead