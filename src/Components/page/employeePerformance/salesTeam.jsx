import React from 'react'

const SalesTeam = () => {
  const data = [
    { name: 'Kamini Duggal', clients: 36, imageUrl: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Vasuda Mishra', clients: 35, imageUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: 'Paresh Rawal', clients: 34, imageUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: 'Anaya Sangha', clients: 33, imageUrl: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: 'Rishi Parsa', clients: 32, imageUrl: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Kamala Sidhu', clients: 31, imageUrl: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: 'Kamini Duggal', clients: 36, imageUrl: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Vasuda Mishra', clients: 35, imageUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: 'Paresh Rawal', clients: 34, imageUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: 'Anaya Sangha', clients: 33, imageUrl: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: 'Rishi Parsa', clients: 32, imageUrl: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Kamala Sidhu', clients: 31, imageUrl: "https://randomuser.me/api/portraits/women/4.jpg" },
  ];

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      <div className="bg-gradient-to-r from-blue-400 to-green-400 px-6 py-3 flex justify-between items-center">
        <h2 className="text-white text-lg">Monthly Leaderboard</h2>
        <h3 className="text-white text-sm">February</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {data.map((item, index) => (
          <li key={index} className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 text-center">{index + 1}</div>
              <img src={item.imageUrl} alt={item.name} className="w-10 h-10 rounded-full" />
              <div>{item.name}</div>
            </div>
            <div className="text-right">{item.clients}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SalesTeam;
