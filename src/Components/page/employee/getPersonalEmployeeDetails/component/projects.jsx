import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1 - Design Phase',
      startDate: 'Feb 01, 2023',
      finishDate: 'Mar 05, 2023',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Project 2 - Development Phase',
      startDate: 'Feb 12, 2023',
      finishDate: 'April 20, 2023',
      status: 'Completed'
    },
    {
      id: 3,
      name: 'Project 3 - Marketing Phase',
      startDate: 'April 05, 2023',
      finishDate: 'October 05, 2023',
      status: 'In Process'
    },
    {
      id: 4,
      name: 'Project 4 - Development Phase',
      startDate: 'May 12, 2023',
      finishDate: 'August 12, 2023',
      status: 'In Process'
    },
   
   
  ];

  return (
    <div className="overflow-x-auto mb-5">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Sr. No.</th>
            <th className="py-2 px-4 border-b text-left">Project Name</th>
            <th className="py-2 px-4 border-b text-left">Start Date</th>
            <th className="py-2 px-4 border-b text-left">Finish Date</th>
            <th className="py-2 px-4 border-b text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{project.name}</td>
              <td className="py-2 px-4 border-b">{project.startDate}</td>
              <td className="py-2 px-4 border-b">{project.finishDate}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`py-1 px-3 rounded text-xs ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
