import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import db from "../firebase/config";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import AddToFavorits from "../components/AddToFavorits";
import Comments from "../components/Comments";

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
            <AddToFavorits data={movieData} movieId={id} />
            <span className=" text-2xl">{movieData?.genre}</span>
          </div>
          <p className="  text-xl text-justify">{movieData?.description}</p>
        </div>
      </div>

      {/* Comments section */}
      <Comments id={id}/>
    </div>
  );
};

export default MoviesDetails;
