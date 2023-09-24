import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCalendarEvent } from "react-icons/bs";
import { LiaShoppingBasketSolid, LiaAddressBookSolid } from "react-icons/lia";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { RiMessage2Line, RiLockPasswordLine } from "react-icons/ri";
import {
  MdOutlineSpatialTracking,
  MdLogout,
  MdPayment,
  MdOutlineCreateNewFolder,
  MdOutlineLocalOffer,
  MdOutlineEventAvailable,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FiShoppingBag, FiPackage, FiSettings } from "react-icons/fi";
import { AiOutlineGift } from "react-icons/ai";
import { CiMoneyBill, CiDiscount1, CiSettings } from "react-icons/ci";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io";
import { TbDiscount2 } from "react-icons/tb";

const DashboardSidebar = ({ active }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[90vh] overflow-y-scroll  bg-white shadow-sm  p-4 pt-8 sticky top-0 left-0 z-10">
      <div className="flex items-center cursor-pointer w-full mb-8">
        <RxDashboard size={22} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Dashboard
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <FiShoppingBag size={22} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          All Orders
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <FiPackage size={22} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          All Products
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <MdOutlineCreateNewFolder size={22} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Create Product
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <MdOutlineEventAvailable size={22} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          All Events
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <BsCalendarEvent size={22} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Create Event
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <BiMoneyWithdraw size={22} color={active === 7 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Withdraw Money
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <HiInboxArrowDown size={22} color={active === 8 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Shop Inbox
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <TbDiscount2 size={22} color={active === 9 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 9 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Discount Codes
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <HiOutlineReceiptRefund size={22} color={active === 10 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 10 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Discount Codes
        </span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <FiSettings size={22} color={active === 11 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 11 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Settings
        </span>
      </div>
    </div>
  );
};

export default DashboardSidebar;
