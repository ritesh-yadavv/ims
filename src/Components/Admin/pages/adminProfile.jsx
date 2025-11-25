import React from 'react'
import AdminSideBar from '../widgets/adminSideBar'
import Loader from "../../commonComponent/loader"
import { useSelector } from 'react-redux'


const AdminProfile = () => {
    const profileData = useSelector((state) => state.profile.profile)


    return (
        <div className="flex">
            <AdminSideBar />
            <div className="flex-1  p-4 overflow-auto h-screen">
                <h1 className="text-xl font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-3 rounded-t-md border border-gray-300 max-md:text-sm max-md:text-center">
                    {profileData && `Welcome ${profileData.companyName}`}
                </h1>

                {profileData ? (
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex flex-col items-center mb-6">
                            {/* <img
                                src={profileData?.companyLogoURL}
                                alt="Logo"
                                className="w-32 h-32  rounded-full object-cover mb-4"
                            /> */}
                            {/* <h2 className="text-2xl font-semibold text-gray-800">
                                {profileData.companyName}
                            </h2> */}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="col-span-1">
                                <label className="text-sm font-medium text-gray-700 block mb-1">
                                    GST IN:
                                </label>
                                <p className="text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-2.5">
                                    {profileData.gstIN}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <label className="text-sm font-medium text-gray-700 block mb-1">
                                    PAN:
                                </label>
                                <p className="text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-2.5">
                                    {profileData.pan}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <label className="text-sm font-medium text-gray-700 block mb-1">
                                    Business Email:
                                </label>
                                <p className="text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-2.5">
                                    {profileData.businessEmail}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <label className="text-sm font-medium text-gray-700 block mb-1">
                                    Business Phone:
                                </label>
                                <p className="text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-2.5">
                                    {profileData.businessPhone}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <label className="text-sm font-medium text-gray-700 block mb-1">
                                    Admin Email:
                                </label>
                                <p className="text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-2.5">
                                    {profileData.adminEmail}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <label className="text-sm font-medium text-gray-700 block mb-1">
                                    Office Address:
                                </label>
                                <p className="text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-2.5">
                                    {profileData.officeAddress}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <label className="text-sm font-medium text-gray-700 block mb-1">
                                    City:
                                </label>
                                <p className="text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-2.5">
                                    {profileData.city}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <label className="text-sm font-medium text-gray-700 block mb-1">
                                    State:
                                </label>
                                <p className="text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-2.5">
                                    {profileData.state}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <label className="text-sm font-medium text-gray-700 block mb-1">
                                    Pincode:
                                </label>
                                <p className="text-gray-800 bg-gray-50 border border-gray-300 rounded-lg p-2.5">
                                    {profileData.pincode}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-center items-center h-screen'>
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminProfile;
