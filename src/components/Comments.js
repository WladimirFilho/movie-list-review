import { collection } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthValue } from "../context/AuthContext";
import db from "../firebase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useInsertDocument } from "../hooks/useInsertDocument";
import { useDeleteDocument } from "../hooks/useDeleteDocument";

const Comments = (props) => {
  const { user } = useAuthValue();
  const commentsRef = collection(db, `movies/${props.id}/comments`);
  const [comments] = useCollectionData(commentsRef);
  const { insertDocument } = useInsertDocument(`movies/${props.id}/comments`);
  const { deleteDocument } = useDeleteDocument(`movies/${props.id}/comments`);

  const [newComment, setNewComment] = useState("");

  const commentHandler = (e) => {
    e.preventDefault();

    if (newComment === "") {
      return;
    }
    const data = {
      order: comments.length + 1,
      user: user.uid,
      username: user.displayName,
      comments: newComment,
    };

    insertDocument(data);
    setNewComment("");
  };

  return (
    <div className="flex flex-col gap-8 mt-10">
      <h2 className=" pl-4 border-l-8 border-yellow-400 text-3xl font-bold">
        User Reviews
      </h2>
      <form className="relative" onSubmit={commentHandler}>
        <input
          value={newComment || ""}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          type="text"
          placeholder="Write your comment"
          className="text-lg w-full bg-slate-50 p-5 rounded-lg border-2"
        />
        <input
          className=" cursor-pointer absolute p-5 bg-slate-900 right-0 text-lg text-white rounded-lg border-2 border-slate-900"
          type="submit"
          value="Send"
        />
      </form>
      <div>
        {comments
          ?.sort((a, b) => b.order - a.order)
          .map((comment, index) => (
            <div className=" py-2 border-b-2 border-yellow-400" key={index}>
              <p className="  text-xl font-bold mb-2">{comment.username}</p>
              <p className=" text-gray-500 italic py-2">{comment.comments}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
