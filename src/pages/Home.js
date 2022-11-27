import React, { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import MovieList from "../components/MovieList";

function Home() {
  const { documents: movies } = useFetchDocuments("movies");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  console.log(movies && movies[0].createdAt);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      const filterMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      if (filterMovies.length > 0) {
        setSearchResult(filterMovies);
      }
    }
    setSearch("");
  };

  const bestRatingsHandler = () => {
    const bestRatings = movies.filter((movie) => movie.rating >= 4);
    bestRatings.sort((a, b) => b.rating - a.rating);
    setSearchResult(bestRatings);
  };
  const lastUploadsHandler = () => {
    const lastUploads = movies.sort(
      (a, b) => b.createdAt.seconds - a.createdAt.seconds
    );
    setSearchResult(lastUploads);
  };

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
          <span
            onClick={() => {
              setSearchResult(movies);
            }}
            className=" p-4 text-white font-semibold cursor-pointer text-sm bg-yellow-500 rounded-3xl"
          >
            All Movies
          </span>
          <span
            onClick={bestRatingsHandler}
            className=" p-4 text-white font-semibold cursor-pointer text-sm bg-yellow-500 rounded-3xl"
          >
            Best Ratings
          </span>
          <span
            onClick={lastUploadsHandler}
            className=" p-4 text-white font-semibold cursor-pointer text-sm bg-yellow-500 rounded-3xl"
          >
            Last Uploads
          </span>
        </div>
      </div>
      {searchResult.length > 0 ? (
        <MovieList movies={searchResult} />
      ) : (
        <MovieList movies={movies} />
      )}
      <div className="p-28 flex flex-col items-center justify-center gap-16">
        <h2 className="text-2xl">
          Are you looking for something special? Search our reviews.
        </h2>
        <form onSubmit={handleSubmit} className=" w-[50%] relative">
          <input
            value={search || ""}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
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
