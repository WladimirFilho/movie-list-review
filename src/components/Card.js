import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Card = (props) => {
  const [stars, setStars] = useState([]);

  const setRatingStars = (size) => {
    const arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(i);
    }
    return arr;
  };

  useEffect(() => {
    setStars(setRatingStars(props.rating));
  }, [props.rating]);

  return (
    <div className=" flex flex-col gap-2  relative w-[200px] mt-4 cursor-pointer">
      <img
        src={props.image}
        alt="poster"
        className=" w-[200px] h-[300px] object-cover"
      />
      <div className="">
        <div className="flex items-center justify-between">
          <span className="flex ">
            {stars.map((e) => (
              <AiFillStar key={e} />
            ))}
          </span>
          <span className=" text-sm">{props.genre}</span>
        </div>
        <h3 className=" text-xl font-bold">{props.title}</h3>
      </div>
    </div>
  );
};

export default Card;
