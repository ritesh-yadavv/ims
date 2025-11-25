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
      <table className="min-w-full divide-y-2  divide-black/35">
        <thead className="bg-[#F6F6F6]">
          <tr className=" text-left text-base font-semibold font-jakarta text-black  tracking-wider">
            <th className="px-6 py-3  ">Date</th>
            <th className="px-6 py-3 ">Check In</th>
            <th className="px-6 py-3 ">Check Out</th>
            <th className="px-3 py-3  ">Working Hours</th>
            <th className="px-6 py-3  ">Status</th>
          </tr>
        </thead>
        <tbody className="bg-[#F6F6F6] divide-y-2 divide-[#A2A1A81A]">
          {attendanceData.map((ele, index) => (
            <tr key={index} className=" text-sm font-normal font-jakarta text-[#232323] tracking-wider">
              <td className="px-6 py-4 ">{ele.date}</td>
              <td className="px-6 py-4 ">{ele.checkIn}</td>
              <td className="px-6 py-4 ">{ele.checkOut}</td>
              <td className="px-6 py-4 ">{ele.workingHours}</td>
              <td className="px-6 py-4 ">
                <span className={` py-1 px-2 rounded text-xs font-jakarta font-light ${ele.status === 'Absent' ? 'text-red-500 bg-red-100' : 'text-green-500 bg-[#3FC28A1A]'}`}>
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

export default Attandence;