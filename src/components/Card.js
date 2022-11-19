import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = () => {
  return (
    <div className=" flex flex-col gap-2  relative w-[200px] mt-4 cursor-pointer">
      <div className=" absolute flex justify-center items-center w-12 h-12 border-4 bg-white border-black rounded-full mt-[-25px] mx-auto left-0 right-0">
        <span className=" align-middle font-bold ">5.6</span>
      </div>
      <img
        src="https://portalpopline.com.br/wp-content/uploads/2022/10/poster-pantera-negra-3.jpg"
        alt="poster"
        className=" w-[200px] h-[300px] object-cover"
      />
      <div className="">
        <div className="flex items-center justify-between">
          <span className="flex ">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
          <span className=" text-sm">Action</span>
        </div>
        <h3 className=" text-xl font-bold">Wakanda Forever</h3>
      </div>
    </div>
  );
};

export default Card;
