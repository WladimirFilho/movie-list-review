import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import Register from "./Register";
import { useAuthValue } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import Login from "./Login";

const NavBar = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalReset, setModalReset] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  const { user } = useAuthValue();
  const { logoutUser } = useAuth();

  return (
    <header className=" relative bg-slate-900">
      <div className=" flex text-white sticky p-6 justify-between w-full items-center max-w-[90%] m-auto">
        <Link className="text-2xl font-bold text-yellow-500 " to="/">
          Movie Review
        </Link>
        {!user && (
          <nav className=" flex items-center gap-4 ">
            <span
              onClick={() => {
                setModalLogin(true);
                setModalRegister(false);
              }}
              className=" cursor-pointer font-bold"
            >
              Login
            </span>
            <span
              onClick={() => {
                setModalRegister(true);
                setModalLogin(false);
              }}
              className=" cursor-pointer font-bold"
            >
              Register
            </span>
          </nav>
        )}
        {user && (
          <nav className=" flex items-center gap-4 ">
            <span
              onClick={() => {
                logoutUser();
              }}
              className=" cursor-pointer font-bold"
            >
              SignOut
            </span>
            <Link to="/profile">
              <FaRegUserCircle size={30} />
            </Link>
          </nav>
        )}
      </div>

      <Register
        isActive={modalRegister}
        changeToLogin={setModalLogin}
        modalTocloseAndOpen={setModalRegister}
      />
      <Login
        isActive={modalLogin}
        changeToRegister={setModalRegister}
        modalTocloseAndOpen={setModalLogin}
        changeToReset={setModalReset}
      />
    </header>
  );
};

export default NavBar;
