import React from 'react'

const Attandence = () => {
  const attendanceData = [
    { date: 'july-01-23', checkIn: '09:00 AM', checkOut: '5:00 PM', workingHours: 8, status: 'Present' },
    { date: 'july-02-23', checkIn: '09:30 AM', checkOut: '5:30 PM', workingHours: 8, status: 'Present' },
    { date: 'july-03-23', checkIn: '-', checkOut: '-', workingHours: 0, status: 'Absent' },
    { date: 'july-01-23', checkIn: '09:00 AM', checkOut: '17:00 PM', workingHours: 8, status: 'Present' },
    { date: 'july-02-23', checkIn: '09:30 AM', checkOut: '17:30 PM', workingHours: 8, status: 'Present' },

  ];
  return (

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Working Hours</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {attendanceData.map((ele, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ele.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ele.checkIn}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ele.checkOut}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ele.workingHours}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={` py-1 px-2 rounded-full text-xs ${ele.status === 'Absent' ? 'text-red-500' : 'text-green-500'}`}>
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

export default Attandence