import React from 'react'
import {FaHandHoldingUsd } from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";


const TopBar = () => {
  return (
    <div className="bg-[#242424] text-white p-6 rounded-b-[35px] max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-[1.2rem] font-semibold py-5">Dashboard</h1>
        <div className="flex space-x-2 mx-2 ">
          <button className="bg-black rounded-3xl">
          <IoNotificationsOutline className="text-xl m-2" />
          </button>
         <button className="bg-black rounded-3xl"> 
         <FaRegUser className="text-xl m-2"/>
         </button>
          <button onClick={()=>{}} className="md:hidden text-xl m-2 bg-black rounded-3xl">
          <RiMenu4Fill className="text-xl m-2" />

          </button>

        </div>
      </div>
      <div className="mt-2">
        <p className="text-[#686868] text-[0.9rem]">Available Balance</p>
        <p className="text-2xl py-3 font-bold">$10.0</p>
      </div>
      <div className="flex space-x-4 my-5">
        <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          <FaHandHoldingUsd className="mr-2" />
          Deposit
        </button>
        <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          <FaHandHoldingUsd className="mr-2" />
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default TopBar
