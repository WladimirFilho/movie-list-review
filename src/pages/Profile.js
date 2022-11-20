import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Card from "../components/Card";

const Profile = () => {
  return (
    <div className="p-32 m-auto max-w-[2000px] flex flex-col gap-10">
      <FaRegUserCircle size={200} />
      <form className="flex flex-col gap-4 max-w-[800px]">
        <h3 className=" font-bold text-2xl">Change your name</h3>
        <label className="flex flex-col gap-2">
          <span className=" font-bold">Name</span>
          <input className="p-2 border-2 border-black" type="text" />
        </label>
        <h3 className=" mt-8 font-bold text-2xl">Change your password</h3>
        <label className="flex flex-col gap-2">
          <span className=" font-bold">Password</span>
          <input className="p-2 border-2 border-black" type="text" />
        </label>
        <label className="flex flex-col gap-2">
          <span className=" font-bold">Confirm password</span>
          <input className="p-2 border-2 border-black" type="text" />
        </label>
        <div className=" flex gap-4 mt-4">
          <input
            className=" border-2 border-black font-bold px-8 py-2"
            type="submit"
            value="Save"
          />
          <span className=" border-2 border-black font-bold px-8 py-2">
            Cancel
          </span>
        </div>
      </form>
      <div className="w-full ">
        <h2 className="w-full text-center font-bold text-[100px] tracking-tight my-20">
          My favorits
        </h2>
        <div className="flex gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Profile;
