import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import db from "../firebase/config";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

const MoviesDetails = () => {
  const { id } = useParams();

  const reference = doc(db, "movies", id);
  const [movie, loading, error] = useDocument(reference);
  const [stars, setStars] = useState([]);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (movie) {
      setMovieData(movie.data());
    }
  }, [movie]);

  const setRatingStars = (size) => {
    const arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(i);
    }
    return arr;
  };

  useEffect(() => {
    if (movieData) {
      setStars(setRatingStars(movieData.rating));
    }
  }, [movieData]);

  return (
    <div className="p-32 m-auto max-w-[2000px]">
      <div className="flex gap-20">
        <img
          src={movieData?.image}
          alt="poster"
          className=" min-w-[500px] h-[700px] object-cover"
        />

        <div className="flex flex-col gap-10">
          <h1 className=" text-[80px] font-bold leading-[40px]">
            {movieData?.title}
          </h1>
          <div className="flex items-center">
            {stars.map((e) => (
              <AiFillStar key={e} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineHeart size={30} />
            <span className=" text-2xl">{movieData?.genre}</span>
          </div>
          <p className="  text-xl text-justify">{movieData?.description}</p>
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
