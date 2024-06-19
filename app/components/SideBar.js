import { FaHome, FaWallet, FaHistory, FaLink } from 'react-icons/fa';
import { GrHomeRounded } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";

import { IoCloseCircleOutline } from "react-icons/io5";
import Image from 'next/image';

const Sidebar = ({ setContent }) => {
    const activeMenu="true";
  
  return (
    <div className="w-96 h-full bg-black text-white flex flex-col " >
      <div className="flex items-center justify-center my-7">
      <Image
        src="/omega-logo.png"
        alt="logo"
        width={120}
        height={120}
      />     
         <button onClick={()=>{}} className="text-2xl rounded-full md:hidden ml-auto px-4">
        <IoCloseCircleOutline />
        </button>

      </div>


      <div className="flex-grow mx-auto">
        <button onClick={() => setContent('home')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
          <GrHomeRounded className="mx-5" />
          Home
        </button>
        <button onClick={() => setContent('wallet')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
        <IoWalletOutline className="mx-5 text-xl" />
          Wallet
        </button>
        <button onClick={() => setContent('transactionHistory')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
          <FaHistory className="mx-5" />
          Transaction history
        </button>
        <button onClick={() => setContent('referrals')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
          <FaLink className="mx-5" />
          Referrals
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
