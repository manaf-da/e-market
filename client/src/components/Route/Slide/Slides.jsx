import React, { useState, useEffect } from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";
import { slides } from "../../../static/data";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundImage: `url(${slides[currentSlide].imageUrl})`,
        backgroundPosition: "right",
        backgroundSize: "contain",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={goToPreviousSlide}
            className="text-white p-2 bg-gray-800 rounded-full focus:outline-none"
          >
            <MdArrowBackIos />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={goToNextSlide}
            className="text-white p-2 bg-gray-800 rounded-full focus:outline-none"
          >
            <MdArrowForwardIos />
          </button>
        </div>

        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          {slides[currentSlide].title}
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba] ">
          {slides[currentSlide].description}
        </p>

        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Slides;
