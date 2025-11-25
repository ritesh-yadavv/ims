import React from 'react'

const Leave = () => {
  const leaveData = [
    { date: 'July 01, 2023', duration: 'July 05 - July 08', days: '3 Days', reportingManager: 'HR', status: 'Pending' },
    { date: 'Apr 05, 2023', duration: 'Apr 06 - Apr 10', days: '4 Days', reportingManager: 'HR', status: 'Approved' },
    { date: 'Mar 12, 2023', duration: 'Mar 14 - Mar 16', days: '2 Days', reportingManager: 'HR', status: 'Approved' },
    { date: 'Feb 01, 2023', duration: 'Feb 02 - Feb 10', days: '8 Days', reportingManager: 'HR', status: 'Approved' },
    { date: 'Jan 01, 2023', duration: 'Jan 16 - Jan 19', days: '3 Days', reportingManager: 'HR', status: 'Reject' },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporting Manager</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leaveData.map((ele, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ele.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ele.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ele.days}</td>
              <td className="px-6 py-4 whitespace-nowrap   text-sm text-gray-500">{ele.reportingManager}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`text-white py-1 px-2 rounded text-center text-xs ${ele.status === 'Reject' ? 'bg-red-500' :
                    ele.status === 'Pending' ? 'bg-yellow-500' :
                      'bg-green-500'
                  }`}>
                  {ele.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Leave