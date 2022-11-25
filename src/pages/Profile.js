import React, { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import AddMovie from "../components/AddMovie";
import Card from "../components/Card";
import { useAuthValue } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuthValue();

  const [username, setUsername] = useState(user.displayName);
  const [password, setPassword] = useState("");
  const [confirmPassord, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const {
    loading,
    error: firebaseError,
    message: firebaseMessage,
    changeUserName,
    changePassword,
  } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (username === "" && password === "") {
      setError("Empty username or password");
      return;
    } else if (username === user.displayName && password === "") {
      setError("Name already in use");
      return;
    } else if (confirmPassord !== password) {
      setError("Not equal to password");
      return;
    } else if (username !== "" && password === "") {
      changeUserName(user, username);
      return;
    } else if (password !== "" && username === "") {
      changePassword(user, password);
      return;
    } else if (username !== "" && password !== "") {
      changeUserName(user, username);
      changePassword(user, password);
      return;
    }
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
      setTimeout(() => {
        setError(null);
      }, 5000);
    }

    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }, [error, message]);

  return (
    <div className="p-32 m-auto max-w-[2000px] flex flex-col gap-10">
      <FaRegUserCircle size={200} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[800px]"
      >
        <h3 className=" font-bold text-2xl">Change your name</h3>
        <label className="flex flex-col gap-2">
          <span className=" font-bold">Name</span>
          <input
            value={username || ""}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="p-2 border-2 border-black"
            type="text"
          />
        </label>
        <h3 className=" mt-8 font-bold text-2xl">Change your password</h3>
        <label className="flex flex-col gap-2">
          <span className=" font-bold">Password</span>
          <input
            value={password || ""}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="p-2 border-2 border-black"
            type="password"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className=" font-bold">Confirm password</span>
          <input
            value={confirmPassord || ""}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            className="p-2 border-2 border-black"
            type="password"
          />
        </label>
        {loading && (
          <div className=" flex gap-4 mt-4">
            <span className="w-full px-8 py-2 font-bold text-center border-2 border-black">
              Loading ...
            </span>
          </div>
        )}
        {!loading && (
          <div className=" flex gap-4 mt-4">
            <input
              className=" px-8 py-2 font-bold transition-all duration-300 border-2 border-black cursor-pointer hover:bg-blue-500 hover:text-white"
              type="submit"
              value="Save"
            />
            <span className="px-8 py-2 font-bold transition-all duration-300 border-2 border-black cursor-pointer hover:bg-red-500 hover:text-white">
              Cancel
            </span>
          </div>
        )}
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
      </form>
      <div>
        <AddMovie />
      </div>

      <div className="w-full ">
        <h2 className="w-full text-center font-bold text-[100px] tracking-tight my-20">
          My favorits
        </h2>
        <div className="flex gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Profile;
