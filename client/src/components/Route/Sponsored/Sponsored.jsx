import React from "react";
import styles from "../../../styles/styles";
import brand1 from "../../../assets/brand-01.png";
import brand2 from "../../../assets/brand-02.png";
import brand3 from "../../../assets/brand-03.png";
import brand4 from "../../../assets/brand-04.png";
import brand5 from "../../../assets/brand-05.png";
import brand6 from "../../../assets/brand-06.png";
import brand7 from "../../../assets/brand-07.png";
import brand8 from "../../../assets/brand-08.png";
import Marquee from "react-fast-marquee";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section}  hidden sm:block bg-white  px-10 mb-12 cursor-pointer rounded-xl`}
    >
      <Marquee>
        <div className="m-4">
          <img src={brand1} alt="brand1" />
        </div>
        <div className="m-4">
          <img src={brand2} alt="brand2" />
        </div>
        <div className="m-4">
          <img src={brand3} alt="brand3" />
        </div>
        <div className="m-4">
          <img src={brand4} alt="brand4" />
        </div>
        <div className="m-4">
          <img src={brand5} alt="brand5" />
        </div>
        <div className="m-4">
          <img src={brand6} alt="brand6" />
        </div>
        <div className="m-4">
          <img src={brand7} alt="brand7" />
        </div>
        <div className="m-4">
          <img src={brand8} alt="brand8" />
        </div>
      </Marquee>

      {/*  <div className="flex justify-end  relative w-full ">
       */}
      {/*  <ul className="flex animate-marquee">
          <li className="m-4">
            <img src={brand1} alt="brand1" />
          </li>
          <li className="m-4">
            <img src={brand2} alt="brand2" />
          </li>
          <li className="m-4">
            <img src={brand3} alt="brand3" />
          </li>
          <li className="m-4">
            <img src={brand4} alt="brand4" />
          </li>
          <li className="m-4">
            <img src={brand5} alt="brand5" />
          </li>
          <li className="m-4">
            <img src={brand6} alt="brand6" />
          </li>
          <li className="m-4">
            <img src={brand7} alt="brand7" />
          </li>
          <li className="m-4">
            <img src={brand8} alt="brand8" />
          </li>
        </ul> */}
      {/* </div> */}
    </div>
  );
};

export default Sponsored;
