import React, { useEffect, useState } from "react";
import SalesSideBar from "../widgets/SalesSideBar";
import { useNavigate } from "react-router-dom";
import Loader from "../../commonComponent/loader";
import headerBg from "../../../assets/devbackground.png";


const Active = () => {
  const navigate = useNavigate();
  const [activeClient, setActiveClient] = useState([]);
  const [loading, setLoading] = useState(false);

  // Static data for active clients
  const staticActiveClients = [
    {
      id: 1,
      name: "John Smith",
      address: "123 Main Street",
      city: "New York",
      clinicDays: ["Monday", "Wednesday", "Friday"],
      callTimingsStart: "09:00 AM",
      callTimingsEnd: "05:00 PM"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      address: "456 Oak Avenue",
      city: "Los Angeles",
      clinicDays: ["Tuesday", "Thursday"],
      callTimingsStart: "10:00 AM",
      callTimingsEnd: "04:00 PM"
    },
    {
      id: 3,
      name: "Mike Davis",
      address: "789 Pine Road",
      city: "Chicago",
      clinicDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      callTimingsStart: "08:30 AM",
      callTimingsEnd: "06:00 PM"
    },
    {
      id: 4,
      name: "Emily Wilson",
      address: "321 Elm Street",
      city: "Miami",
      clinicDays: ["Wednesday", "Friday"],
      callTimingsStart: "11:00 AM",
      callTimingsEnd: "07:00 PM"
    },
    {
      id: 5,
      name: "David Brown",
      address: "654 Maple Drive",
      city: "Seattle",
      clinicDays: ["Monday", "Thursday"],
      callTimingsStart: "09:30 AM",
      callTimingsEnd: "05:30 PM"
    }
  ];

  useEffect(() => {
    const fetchActiveClient = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        setTimeout(() => {
          setActiveClient(staticActiveClients);
        }, 1000);
      } catch (error) {
        console.log("Error loading clients:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchActiveClient();
  }, []);

  return (
    <>
      <div className="flex h-screen bg-white">
        <SalesSideBar />

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-4">
           <div
  className="text-white py-2 px-4 rounded-t-lg bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: `url(${headerBg})` }}
>
  {/* Optional overlay for better text visibility */}
  {/* <div className="absolute inset-0 bg-black/40 rounded-t-lg"></div> */}

  <h2 className="relative z-10 text-lg font-bold">
    Active Clients
  </h2>
</div>

            {loading ? (
              <div className="flex justify-center items-center h-screen">
                <Loader />
              </div>
            ) : activeClient.length === 0 ? (
              <div className="flex justify-center items-center h-screen text-gray-500">
                No client found
              </div>
            ) : (
              <div className="border border-gray-200 rounded-b-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-3 border-b font-semibold text-gray-700">Name</th>
                      <th className="p-3 border-b font-semibold text-gray-700">Address</th>
                      <th className="p-3 border-b font-semibold text-gray-700">City</th>
                      <th className="p-3 border-b font-semibold text-gray-700">Days</th>
                      <th className="p-3 border-b font-semibold text-gray-700">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeClient.map((item) => (
                      <tr
                        onClick={() => navigate("/sales/active/profile", { state: { client: item } })}
                        key={item.id}
                        className="hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                      >
                        <td className="p-3 border-b text-gray-800 font-medium">{item.name}</td>
                        <td className="p-3 border-b text-gray-600">{item.address}</td>
                        <td className="p-3 border-b text-gray-600">{item.city}</td>
                        <td className="p-3 border-b">
                          <div className="flex gap-1">
                            {item.clinicDays?.map((day, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                              >
                                {day.slice(0, 1)}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-3 border-b text-gray-600">
                          {item.callTimingsStart} - {item.callTimingsEnd}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Active;