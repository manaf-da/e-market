import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import styles from "./../../styles/styles";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256gb ssd and 8gb red color",
      description: "test",
      price: "400",
    },
    {
      name: "Iphone 14 pro max 256gb ssd and 8gb red color",
      description: "test",
      price: "300",
    },
    {
      name: "Iphone 14 pro max 256gb ssd and 8gb red color",
      description: "test",
      price: "550",
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="flex w-full justify-end pt-5 pr-5 fixed top-0 right-3">
            <AiOutlineClose
              size={22}
              className="cursor-pointer "
              onClick={() => setOpenCart(false)}
            />
          </div>
          <h5>Cart Items is empty!</h5>
        </div>
        {/* Item length */}
        <div className={`${styles.normalFlex} p-4`}>
          <HiOutlineShoppingBag size={25} />
          <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
        </div>
        <br />
        {/* Single Items   */}
        <div className="w-full border-t">
          {cartData &&
            cartData.map((i, index) => <SingleCart key={index} data={i} />)}
        </div>
        <div className="px-5 mb-3">
          {/* checkout buttons */}
          <Link to="/checkout">
            <div
              className={`h-[40px] flex items-center justify-center w-[100%] bg-[#e44343] `}
            >
              <h1 className="text-[#fff] text-[18px] font-[600]">
                Checkout Now (USD$1000)
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SingleCart = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <AiOutlinePlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <AiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src="https://assets.burberry.com/is/image/Burberryltd/BBA1E1CC-A693-48E2-A073-ED1D0B80BDAF?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-gray-500">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <RiDeleteBinLine
          className="cursor-pointer text-gray-800"
          size={30}
          title="Remove item"
        />
      </div>
    </div>
  );
};

export default Cart;