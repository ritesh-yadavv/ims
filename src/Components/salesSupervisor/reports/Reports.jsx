import React, { useEffect, useState } from "react";
import SalesSupervisorSidebar from "../widgets/SalesSupervisorSidebar";
import { Bar } from "react-chartjs-2";
import headerBg from "../../../assets/devbackground.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Reports = () => {

  const getCurrentMonthDates = () => {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      .toISOString()
      .split("T")[0];
    const lastDay = now.toISOString().split("T")[0];
    return { firstDay, lastDay };
  };

  const { firstDay, lastDay } = getCurrentMonthDates();

  const [startDate, setStartDate] = useState(firstDay);
  const [endDate, setEndDate] = useState(lastDay);

  // ⭐ STATIC REPORT DATA (Replaces Backend API)
  const [reportData, setReportData] = useState([
    {
      name: "MR Ramesh",
      totalVisits: 30,
      totalConversions: 10,
    },
    {
      name: "MR Suresh",
      totalVisits: 22,
      totalConversions: 5,
    },
    {
      name: "MR Manish",
      totalVisits: 18,
      totalConversions: 7,
    },
    {
      name: "MR Rajesh",
      totalVisits: 27,
      totalConversions: 11,
    },
  ]);

  // No backend – only filtering logic retained
  useEffect(() => {
    // Example: you can filter data by date (if needed)
    setReportData([...reportData]); 
  }, [startDate, endDate]);

  const chartData = {
    labels: reportData.map((item) => item.name),
    datasets: [
      {
        label: "Total Visits",
        data: reportData.map((item) => item.totalVisits),
        backgroundColor: "#0ea5e9",
        maxBarThickness: 80,
      },
      {
        label: "Total Conversions",
        data: reportData.map((item) => item.totalConversions),
        backgroundColor: "#34d399",
        maxBarThickness: 80,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: { stacked: true },
      y: {
        stacked: true,
        beginAtZero: true,
        title: { display: true, text: "Total Visits" },
      },
    },
  };

  return (
    <div className="flex h-screen bg-white">
      <SalesSupervisorSidebar />

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="w-full p-4 flex items-center justify-center">
          <div className="w-full max-w-7xl">

            {/* Header */}
            
                              <div className="text-xl mb-4 font-bold  rounded-lg shadow-lg p-4  bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url(${headerBg})` }}>
            <h2 className="text-lg font-bold text-white">Reports</h2>
          </div>

            {/* Date Pickers */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row justify-end items-center mb-4">
              <div className="flex items-center space-x-2">
                <label className="font-medium">Start Date:</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="px-4 py-2 border rounded-md"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="font-medium">End Date:</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="px-4 py-2 border rounded-md"
                />
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: "500px" }}>
              <Bar data={chartData} options={options} />
            </div>

            {/* Footer */}
            <div className="text-center mt-4">
              <span className="text-blue-500">List Of MR's</span>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Reports;
