import React from 'react'

const DeveloperTeam = () => {
  const users = [
    { name: "Kamini Duggal", status: 30, imageUrl: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Vasuda Mishra", status: 40, imageUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Paresh Rawal", status: 40, imageUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Anaya Sangha", status: 40, imageUrl: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Rishi Parsa", status: 40, imageUrl: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Kamala Sidhu", status: 40, imageUrl: "https://randomuser.me/api/portraits/women/4.jpg" },
  ];
  return (

    <div className="max-w-full mx-auto mt-4">
      {users.map((user, index) => (
        <div key={index} className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-4">
            <div className="w-8 text-center">{index + 1}</div>
            <img src={user.imageUrl} alt={user.name} className="w-10 h-10 rounded-full" />
            <div>{user.name}</div>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${user.status}%` }}
              ></div>
            </div>
          </div>
          <div className="w-12 text-right">{user.status}%</div>
        </div>
      ))}
    </div>


  )
}

export default DeveloperTeam