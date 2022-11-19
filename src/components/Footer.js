import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 ">
      <div className=" flex text-white sticky p-6 h-[80px] justify-between w-full items-center max-w-[90%] m-auto">
        <span>Developed by Wladimir and Rafael</span>
        <div className="flex gap-4">
          <FaFacebook size={30} />
          <FiInstagram size={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
