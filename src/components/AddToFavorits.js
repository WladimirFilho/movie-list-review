import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAuthValue } from "../context/AuthContext";
import db from "../firebase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useInsertDocument } from "../hooks/useInsertDocument";
import { useDeleteDocument } from "../hooks/useDeleteDocument";

const AddToFavorits = (props) => {
  const { user } = useAuthValue();
  const favoritesRef = collection(db, `users/${user?.uid}/favorites`);
  const [favorites] = useCollectionData(favoritesRef);
  const { insertDocument } = useInsertDocument(`users/${user?.uid}/favorites`);
  const { deleteDocument } = useDeleteDocument(`users/${user.uid}/favorites`);

  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteHandler = () => {
    const verify = favorites.filter((movie) => movie.id === props.movieId);
    if (verify.length >= 1) {
      deleteDocument(props.movieId);
    } else {
      const data = { ...props.data, id: props.movieId };
      insertDocument(data, props.movieId);
    }
  };

  useEffect(() => {
    if (favorites) {
      const verify = favorites.filter((movie) => movie.id === props.movieId);
      if (verify.length > 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [favorites]);

  return (
    <>
      {isFavorite ? (
        <AiFillHeart
          className="cursor-pointer"
          onClick={favoriteHandler}
          size={30}
        />
      ) : (
        <AiOutlineHeart
          className="cursor-pointer"
          onClick={favoriteHandler}
          size={30}
        />
      )}
    </>
  );
};

export default AddToFavorits;
