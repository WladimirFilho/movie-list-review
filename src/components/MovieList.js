import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const MovieList = (props) => {
  return (
    <div className=" flex flex-wrap gap-4">
      {props.movies?.map((movie, index) => (
        <Link key={index} to={`/details/${movie.id}`}>
          <Card
            title={movie.title}
            image={movie.image}
            genre={movie.genre}
            rating={movie.rating}
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
