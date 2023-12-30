import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import styles from "./../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "./../../redux/actions/wishList";
import { backend_url } from "../../server";
import { addToCart } from "./../../redux/actions/cart";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 };
    dispatch(addToCart(newData));
    setOpenWishlist(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-0 right-3">
              <AiOutlineClose
                size={22}
                className="cursor-pointer "
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5 className="text-gray-500 capitalize">
              Wishlist Items are empty!
            </h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5 fixed top-0 right-3">
                <AiOutlineClose
                  size={22}
                  className="cursor-pointer "
                  onClick={() => setOpenWishlist(false)}
                />
              </div>
            </div>

            {/* Item length */}
            <div className={`${styles.normalFlex} p-4`}>
              <AiOutlineHeart size={25} />
              <h5 className="pl-2 text-[20px] font-[500]">
                {wishlist && wishlist.length}
              </h5>
            </div>
            <br />
            {/* Single Items   */}
            <div className="w-full border-t">
              {wishlist &&
                wishlist.map((i, index) => (
                  <SingleWishlist
                    key={index}
                    data={i}
                    removeFromWishlistHandler={removeFromWishlistHandler}
                    addToCartHandler={addToCartHandler}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const SingleWishlist = ({
  data,
  removeFromWishlistHandler,
  addToCartHandler,
}) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.discountPrice * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RiDeleteBinLine
          size={30}
          className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2 text-gray-800"
          title="Remove item"
          onClick={() => removeFromWishlistHandler(data)}
        />
        <img
          src={`${backend_url}${data?.images[0]}`}
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <BsCartPlus
          className="cursor-pointer text-gray-800"
          size={30}
          title="Add to cart"
          onClick={() => addToCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Wishlist;
