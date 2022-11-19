import React from "react";
import Card from "../components/Card";

function Home() {
  return (
    <div className="p-8 mt-16">
      <div className="w-[90%] flex items-center justify-between m-auto mb-20">
        <div>
          <h1 className=" mb-2 text-5xl font-bold">Highlights today</h1>
          <p className="text-xl font-semibold">
            Be sure not to miss these reviews today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className=" p-4 text-white font-semibold cursor-pointer text-sm bg-yellow-500 rounded-3xl">
            All Movies
          </span>
          <span className=" p-4 text-white font-semibold cursor-pointer text-sm bg-yellow-500 rounded-3xl">
            Best Ratings
          </span>
          <span className=" p-4 text-white font-semibold cursor-pointer text-sm bg-yellow-500 rounded-3xl">
            Last Uploads
          </span>
        </div>
      </div>
      <div className=" flex flex-wrap w-[90%] gap-4 m-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
