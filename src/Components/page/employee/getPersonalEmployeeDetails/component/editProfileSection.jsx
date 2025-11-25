import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaBriefcase, FaEnvelope } from 'react-icons/fa'
import { FiArrowLeft } from "react-icons/fi";
import Modal from '../EditModal/Modal';
import { useNavigate } from "react-router-dom";

const EditProfileSection = () => {
  let navigate = useNavigate();
  const allEmployee = useSelector((state) => state.getEmployeeData.AllEmployeeData);//getting data from redux
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEditModal = () => {
    setIsModalOpen(true);
  }

  return (
    <div className="flex-1 p-1">
      <h1 className="flex items-center max-md:text-sm max-md:text-center text-xl font-bold text-white bg-gradient-to-r from-blue-300 to-green-300 p-2 rounded-t-md border border-gray-300">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mr-2"
        >
          <FiArrowLeft className="mr-2" />
        </button>
        <span>Employee Profile</span>
      </h1>
      <div className="mt-5 p-4 bg-white rounded-md shadow-md flex max-md:flex-col max-md:items-center">
        {/* Profile Image and Info */}
        <div className="flex-shrink-0 max-md:mb-4">
          <img
            src={allEmployee?.profilePicture}
            alt="Profile"
            className="w-32 h-32 object-cover border border-gray-300 rounded"
          />
        </div>
        <div className="ml-4 flex-1 mt-7">
          <h2 className="text-md font-bold text-blue-700">{allEmployee?.name}</h2>

          <div className="flex items-center text-md text-gray-600">
            <FaBriefcase className="mr-2" />
            <h2>{allEmployee?.department}</h2>
          </div>

          <div className="flex items-center text-md text-gray-600">
            <FaBriefcase className="mr-2" />
            <h2>{allEmployee?.designation}</h2>
          </div>


          <div className="flex items-center text-md text-gray-600">
            <FaEnvelope className="mr-2" />
            <p>{allEmployee?.officeEmail}</p>
          </div>
        </div>
        {/* Edit Button */}
        <div className="max-md:mt-4 mt-[5rem]">
          <button onClick={openEditModal}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            <FaEdit />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {
        isModalOpen && <Modal onClose={setIsModalOpen} />
      }
    </div>
  )
}

export default EditProfileSection