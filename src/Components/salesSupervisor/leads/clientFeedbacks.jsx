import React from 'react';

const ClientFeedbacks = () => {
  const feedbacks = [
    { name: "Anaya Sangha", notes: "Less patients for now", time: "11:23 am", date: "12/11/24" },
    { name: "Rishi Parsa", notes: "Shifting clinic to other place", time: "11:23 am", date: "12/11/24" },
    { name: "Kamala Sidhu", notes: "Less Patient", time: "11:23 am", date: "12/11/24" },
    { name: "Anaya Sangha", notes: "Others", time: "11:23 am", date: "12/11/24" },
    { name: "Rishi Parsa", notes: "Shifting clinic to other place", time: "11:23 am", date: "12/11/24" },
    { name: "Kamala Sidhu", notes: "Shifting clinic to other place", time: "11:23 am", date: "12/11/24" },
    { name: "Rishi Parsa", notes: "Shifting clinic to other place", time: "11:23 am", date: "12/11/24" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 ">Client Feedbacks</h1>
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full bg-[#F6F6F6] border border-gray-200 ">
          <thead >
            <tr className="bg-white">
              <th className="border-b px-4 py-2 text-left">Name</th>
              <th className="border-b px-4 py-2 text-left">Notes</th>
              <th className="border-b px-4 py-2 text-left">Time</th>
              <th className="border-b px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index} className="hover:bg-white">
                <td className="border-b px-4 py-2 flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-200 text-blue-600 rounded-full mr-2">
                    📞
                  </span>
                  {feedback.name}
                </td>
                <td className="border-b px-4 py-2">{feedback.notes}</td>
                <td className="border-b px-4 py-2">{feedback.time}</td>
                <td className="border-b px-4 py-2">{feedback.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientFeedbacks;
