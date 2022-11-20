import React from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const MoviesDetails = () => {
  return (
    <div className="p-32 m-auto max-w-[2000px]">
      <div className="flex gap-20">
        <img
          src="https://portalpopline.com.br/wp-content/uploads/2022/10/poster-pantera-negra-3.jpg"
          alt="poster"
          className=" min-w-[500px] h-[700px] object-cover"
        />

        <div className="flex flex-col gap-10">
          <h1 className=" text-[80px] font-bold leading-[40px]">Movie Title</h1>
          <div className="flex items-center">
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiFillStar size={40} />
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineHeart size={30} />
            <span className=" text-2xl">Horror</span>
          </div>
          <p className="  text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      {/* Comments section */}
      <div className="flex flex-col gap-8 mt-10">
        <h2 className=" pl-4 border-l-8 border-yellow-400 text-3xl font-bold">
          User Reviews
        </h2>
        <form>
          <input
            type="text"
            placeholder="Write your comment"
            className="text-lg w-full bg-slate-50 p-5 rounded-lg border-2"
          />
        </form>
        <div>
          <p className=" text-xl font-bold mb-2">UserName</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
