import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import db from "../firebase/config";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Home() {
  const query = collection(db, "movies");
  const [moviesList, loading, error, snapshot] = useCollectionData(query);

  return (
    <div className="p-8 mt-16 w-[90%] m-auto">
      <div className="flex items-center justify-between mb-20">
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
      <div className=" flex flex-wrap gap-4">
        {moviesList?.map((movie, index) => (
          <Link key={index} to={`/details/${snapshot.docs[`${index}`].id}`}>
            <Card
              title={movie.title}
              image={movie.image}
              genre={movie.genre}
              rating={movie.rating}
            />
          </Link>
        ))}
      </div>
      <div className="p-28 flex flex-col items-center justify-center gap-16">
        <h2 className="text-2xl">
          Are you looking for something special? Search our reviews.
        </h2>
        <form className=" w-[50%] relative">
          <input
            className=" border-black border-2 p-4 rounded-full text-center w-full text-xl  "
            type="text"
            placeholder="Movie name"
          />
          <input
            className=" cursor-pointer border-black border-2 bg-black right-[0px] absolute rounded-r-full p-4 text-xl text-white "
            type="submit"
            value="SEARCH"
          />
        </form>
      </div>
    </div>
  );
}

export default Home;
