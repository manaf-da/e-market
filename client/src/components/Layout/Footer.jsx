import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerCompanyLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#212529] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4  py-7 border-b">
        <h1 className=" lg:text-2xl text-sm md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="">Subscribe</span> us for get news <br />
          events and offers
        </h1>
        <div className="">
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-1 mr-1 lg:mb-0 mb-4 py-2.5  px-2 focus:outline-none"
          />
          <button className=" bg-[#036666] duration-300   px-5 py-2.5  text-white md:w-auto w-full ">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img src="" alt="" style={{ filter: "brightness(0) invert(1)" }} />
          <br />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            reprehenderit et recusandae adipisci unde delectus accusamus rem
            velit inventore expedita voluptas ullam vitae quos quaerat alias!
            Similique rem repellendus architecto.
          </p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={22} className="cursor-pointer" />
            <AiFillTwitterSquare
              size={22}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={22}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={22}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 text-lg font-bold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className=" hover:text-[#036666] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 text-lg font-bold">Shop</h1>
          {footerCompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className=" hover:text-[#036666] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 text-lg font-bold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className=" hover:text-[#036666] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 M.shop. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
