import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className=" bg-slate-900">
      <div className=" flex text-white sticky p-6 justify-between w-full items-center max-w-[90%] m-auto">
        <Link className=" text-yellow-500 font-bold text-2xl" to="/">
          Movie Review
        </Link>
        <ul className=" flex items-center gap-4 ">
          <Link className=" font-bold" to="/login">
            Login
          </Link>
          <Link to="/">
            <FaRegUserCircle size={30} />
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
