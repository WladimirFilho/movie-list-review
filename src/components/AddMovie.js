import React, { useState, useEffect } from "react";
import { useInsertDocument } from "../hooks/useInsertDocument";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const {
    insertDocument,
    error: firebaseError,
    message: firebaseMessage,
    loading,
  } = useInsertDocument("movies");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setError("empty title");
      return;
    } else if (description === "") {
      setError("empty description");
      return;
    } else if (genre === "") {
      setError("empty genre");
      return;
    } else if (imagePath === "") {
      setError("empty image");
      return;
    } else if (rating === "") {
      setError("empty rating");
      return;
    }
    const data = {
      title,
      image: imagePath,
      description,
      rating,
      genre,
    };

    insertDocument(data);
    e.target.reset();
    return;
  };

  useEffect(() => {
    if (firebaseError) {
      setError(firebaseError);
    }
    if (firebaseMessage) {
      setMessage(firebaseMessage);
    }
  }, [firebaseError, firebaseMessage]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 5000);
    }
    if (message) {
      setTimeout(() => setMessage(null), 5000);
    }
  }, [message]);
  return (
    <form className="flex flex-col gap-4 max-w-[800px]" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Title</span>
        <input
          className="p-2 border-2 border-black"
          type="text"
          value={title || ""}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Description</span>
        <input
          className="p-2 border-2 border-black"
          type="text"
          value={description || ""}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Genre</span>
        <input
          className="p-2 border-2 border-black"
          type="text"
          value={genre || ""}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Image Cover</span>
        <input
          placeholder="url"
          className="p-2 border-2 border-black"
          type="text"
          value={imagePath || ""}
          onChange={(e) => {
            setImagePath(e.target.value);
          }}
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Rating</span>
        <input
          className="p-2 border-2 border-black"
          type="text"
          value={rating || ""}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
      </label>

      {!loading && (
        <input
          className=" px-8 py-2 font-bold transition-all duration-300 border-2 border-black cursor-pointer hover:bg-blue-500 hover:text-white mt-2"
          type="submit"
          value="Add movie"
        />
      )}
      {loading && (
        <input
          className="w-full px-8 py-2 font-bold text-center border-2 border-black mt-2"
          type="submit"
          value="Loading ..."
        />
      )}
      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}
    </form>
  );
};

export default AddMovie;
