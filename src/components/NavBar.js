import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex text-white">
      <Link to="/">Movie Review</Link>
      <ul className=" flex ">
        <Link to="/login">Login</Link>
        <Link to="/">
          <FaRegUserCircle />
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
