import React from "react";


const UpcomingAgenda = () => {
  const agendas = [
      { time: '11:00 - 12:00 Feb 22, 2024', title: 'Installation at Dr Gupta', color: 'text-orange-600 bg-orange-100' },
      { time: '11:00 - 12:00 Feb 23, 2024', title: 'Installation at Dr Gupta', color: 'text-blue-600 bg-blue-100' },
      { time: '11:00 - 12:00 Feb 24, 2024', title: 'Schedule Demo', color: 'text-pink-600 bg-pink-100' },
      { time: '11:00 - 12:00 Feb 25, 2024', title: 'Schedule Demo', color: 'text-red-600 bg-red-100' }
  ];

  return (
      <div className="bg-[#F6F6F6] rounded-lg font-jakarta shadow-md p-6">
          <h6 className="text-xl text-black font-medium border-b pb-2 mb-4">Upcoming Agenda</h6>
          <ul className="space-y-4">
              {agendas.map((agenda, index) => (
                  <li key={index} className="text-xs">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${agenda.color} mb-1`}>
                          {agenda.time}
                      </span>
                      <span className="block text-black font-medium text-sm">{agenda.title}</span>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default UpcomingAgenda;

