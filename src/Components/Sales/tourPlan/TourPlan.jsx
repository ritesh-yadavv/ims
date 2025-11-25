import React from "react";
import SalesSidebar from "../widgets/SalesSideBar";
import { useSelector } from 'react-redux';
import headerBg from "../../../assets/devbackground.png";


const data = [
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
    {
        date: "03/02/25",
        day: "Monday",
        locations: "Kankarbagh"
    },
];

const TourPlan = () => {
    const SalesProfile = useSelector((state) => state.employeeProfile.employeeProfile);

    return (
        <>
            <div className="flex h-screen bg-white">
                <SalesSidebar />
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <div className="p-4">
                       
                                   <div
  className="text-white py-2 px-4 rounded-t-lg bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: `url(${headerBg})` }}
>
  {/* Optional overlay for better text visibility */}
  {/* <div className="absolute inset-0 bg-black/40 rounded-t-lg"></div> */}

  <h2 className="relative z-10 text-lg font-bold">
    Tour Plan
  </h2>
</div>
                        <div className="p-4">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img
                                        src={SalesProfile?.profilePicture}
                                        alt={SalesProfile?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="ml-4 text-lg font-medium">Hi {SalesProfile?.name}!</h3>
                            </div>

                            <table className="w-full text-sm text-left border-collapse">

                                <thead>
                                    <tr className="">
                                        <th className="border border-gray-200 px-4 py-2">Date</th>
                                        <th className="border border-gray-200 px-4 py-2">Day</th>
                                        <th className="border border-gray-200 px-4 py-2">Area</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {data.map((item, index) => (
                                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                            <td className="border border-gray-200 px-4 py-2 font-medium">
                                                {item.date}
                                            </td>
                                            <td className="border border-gray-200 px-4 py-2">
                                                {item.day}
                                            </td>
                                            <td className="border border-gray-200 px-4 py-2">
                                                {item.locations}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourPlan;
