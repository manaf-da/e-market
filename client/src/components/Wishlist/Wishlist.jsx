import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import styles from "./../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";

const Wishlist = ({ setOpenWishlist }) => {
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
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          <h5>Wishlist Items is empty!</h5>
        </div>
        {/* Item length */}
        <div className={`${styles.normalFlex} p-4`}>
          <AiOutlineHeart size={25} />
          <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
        </div>
        <br />
        {/* Single Items   */}
        <div className="w-full border-t">
          {cartData &&
            cartData.map((i, index) => <SingleWishlist key={index} data={i} />)}
        </div>
      </div>
    </div>
  );
};

const SingleWishlist = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RiDeleteBinLine
          size={30}
          className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2 text-gray-800"
          title="Remove item"
        />
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
        <BsCartPlus
          className="cursor-pointer text-gray-800"
          size={30}
          title="Add to cart"
        />
      </div>
    </div>
  );
};

export default Wishlist;
