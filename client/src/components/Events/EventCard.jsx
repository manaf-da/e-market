import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { backend_url } from "../../server";

const EventCard = ({ active, data }) => {
  if (!data) {
    return null;
  }
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src={`${backend_url}${data.images[0]}`} alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>{data.name} </h2>
        <p>{data.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#000] pr-3 line-through">
              {data.originalPrice}$
            </h5>
            <h5
              className={`${styles.productDiscountPrice} font-bold text-[20px] font-Roboto`}
            >
              {data.discountPrice}$
            </h5>
          </div>
          <span className="pr-3 font-bold  text-[17px] text-[#32994d]">
            120 sold
          </span>
        </div>
        <CountDown data={data} />
      </div>
    </div>
  );
};

export default EventCard;
