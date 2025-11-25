import React from 'react'

const Leave = () => {
  const leaveData = [
    { from: 'July 01, 2023', to: 'July 05 - July 08', type: 'Full-Day', reason: 'Out of City', status: 'Pending' },
    { from: 'Apr 05, 2023', to: 'Apr 06 - Apr 10', type: 'Full-Day', reason: 'Out of City', status: 'Approved' },
    { from: 'Mar 12, 2023', to: 'Mar 14 - Mar 16', type: 'Full-Day', reason: 'Fever', status: 'Approved' },
    { from: 'Feb 01, 2023', to: 'Feb 02 - Feb 10', type: 'Full-Day', reason: 'Fever', status: 'Approved' },
    { from: 'Jan 01, 2023', to: 'Jan 16 - Jan 19', type: 'Full-Day', reason: 'Fever', status: 'Reject' },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2  divide-black/35">
        <thead className="bg-[#F6F6F6]">
          <tr className="text-left text-base font-semibold font-jakarta text-black tracking-wider">
            <th className="px-6 py-3 ">From</th>
            <th className="px-6 py-3 ">To</th>
            <th className="px-6 py-3 ">Type</th>
            <th className="px-3 py-3 ">Reason</th>
            <th className="px-6 py-3 ">Status</th>
          </tr>
        </thead>
        <tbody className="bg-[#F6F6F6] divide-y-2 divide-[#A2A1A81A]">
          {leaveData.map((ele, index) => (
            <tr key={index} className="text-sm font-normal font-jakarta text-[#232323] tracking-wider">
              <td className="px-6 py-4 ">{ele.from}</td>
              <td className="px-6 py-4 ">{ele.to}</td>
              <td className="px-6 py-4 ">{ele.type}</td>
              <td className="px-6 py-4 ">{ele.reason}</td>
              <td className="px-6 py-4 ">
                <span className={`text-white py-1 px-2 rounded text-xs font-jakarta font-light ${ele.status === 'Reject' ? 'bg-red-500' :
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

export default Leave;