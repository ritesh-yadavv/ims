import React from "react";

const UpcomingAgenda = () => {
  return (
    <>
      <table className=" sm:mt-5 md:mt-44  xl:mt-32  sm:ml-2 md:ml-5  sm:w-[264px] xl:pl-3 sm:pr-4 xl:w-[264px] md:w-[220px] md:h-[368px]  divide-gray-200 inline-block  justify-center align-center border-2 border-grey-700 content-align  mx-auto rounded-lg  ">
        <thead>
          <tr>
            <th className="py-1 mb-10 pt-4 my-4 md:text-[16px] font-medium xl:text-[20px] pb-4">
              My Upcoming Agendas
            </th>
          </tr>
        </thead>
        <tbody className="md:mx-2 xl:text-[16px] lg:mx-4 md:text-[14px] lg:text-[15px] mb-4">
          <tr className="ps-3">
            <td>
              <div className="ml-3 px-2 mb-1 xl:text-[16px] text-orange-800 bg-orange-200 text-base font-semibold divide-gray-200 inline-block  justify-center align-center border-2 border-grey-700 content-align  mx-auto rounded-lg">
                11.00-12.00 feb22,2024
              </div>
              <div className="ml-3 font-medium text-black mb-5">
                Meeting with Dr. Gupta
              </div>
            </td>
          </tr>
          <tr className="ps-3">
            <td>
              <div className="ml-3 px-2 mb-1 xl:text-[16px] text-blue-800 bg-blue-200 text-base font-semibold divide-gray-200 inline-block  justify-center align-center border-2 border-grey-700 content-align  mx-auto rounded-lg">
                11.00-12.00 feb22,2024
              </div>
              <div className="ml-3 font-medium text-black mb-5">
                Meeting with Dr. Gupta
              </div>
            </td>
          </tr>
          <tr className="ps-3">
            <td>
              <div className="ml-3 px-2 mb-1 xl:text-[16px] text-violet-800 bg-violet-200 text-base font-semibold divide-gray-200 inline-block  justify-center align-center border-2 border-grey-700 content-align  mx-auto rounded-lg">
                11.00-12.00 feb22,2024
              </div>
              <div className="ml-3 font-medium text-black mb-5">
                Meeting with Dr. Gupta </div>
            </td>
          </tr>
          <tr className="ps-3">
            <td>
              <div className="ml-3 px-2 mb-1 xl:text-[16px] text-red-800 bg-orange-200 text-base font-semibold divide-gray-200 inline-block  justify-center align-center border-2 border-grey-700 content-align  mx-auto rounded-lg">
                11.00-12.00 feb22,2024
              </div>
              <div className="ml-3 font-medium text-black mb-5">
                Meeting with Dr. Gupta
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <div className="relative py-3 xl:-ml-2 md:mt-5 md:-mr-5 xl:-mr-8  font-medium bg-[#004AAD] text-white rounded-lg shadow-lg ">
            <button className="w-full flex justify-center items-center">
              View Other MR
            </button>
          </div>
        </tfoot>
      </table>
    </>
  );
};

export default UpcomingAgenda;
