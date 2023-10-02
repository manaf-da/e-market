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
import { Link } from "react-router-dom";

const DashboardSidebar = ({ active }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[90vh] overflow-y-scroll  bg-white shadow-sm  p-4 pt-8 sticky top-0 left-0 z-10">
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard size={22} color={active === 1 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 1 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Dashboard
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag size={22} color={active === 2 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 2 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            All Orders
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage size={22} color={active === 3 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 3 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            All Products
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <MdOutlineCreateNewFolder
            size={22}
            color={active === 4 ? "red" : ""}
          />
          <span
            className={`pl-3 ${
              active === 4 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Create Product
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineEventAvailable
            size={22}
            color={active === 5 ? "red" : ""}
          />
          <span
            className={`pl-3 ${
              active === 5 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            All Events
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <BsCalendarEvent size={22} color={active === 6 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 6 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Create Event
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link
          to="/dashboard-withdraw-money"
          className="w-full flex items-center"
        >
          <BiMoneyWithdraw size={22} color={active === 7 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 7 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Withdraw Money
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <HiInboxArrowDown size={22} color={active === 8 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 8 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Shop Inbox
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link to="/dashboard-coupons" className="w-full flex items-center">
          <TbDiscount2 size={22} color={active === 9 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 9 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Discount Codes
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={22}
            color={active === 10 ? "red" : ""}
          />
          <span
            className={`pl-3 ${
              active === 10 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Discount Codes
          </span>
        </Link>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8">
        <Link to="/settings" className="w-full flex items-center">
          <FiSettings size={22} color={active === 11 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 11 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Settings
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
