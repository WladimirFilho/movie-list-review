import { FirebaseError } from "firebase/app";
import React, { useEffect, useState } from "react";
import { useAuthValue } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const modalChangeHandler = () => {
    props.changeToLogin(true);
    props.modalTocloseAndOpen(false);
  };

  const { register, error: firebaseError, loading } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (username === "") {
      setError("empty username");
      return;
    } else if (email === "") {
      setError("empty email");
      return;
    } else if (password === "") {
      setError("empty password");
      return;
    } else if (confirmPassword === "") {
      setError("empty confirm password");
      return;
    } else if (password !== confirmPassword) {
      setError("Password is not equal");
      return;
    }
    register(email, password, username, props.modalTocloseAndOpen);
    return;
  };

  useEffect(() => {
    if (FirebaseError) {
      setError(firebaseError);
    }
  }, [firebaseError]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error]);

  if (!props.isActive) return;

  return (
    <div className="text-white bg-slate-900 p-4 absolute w-[400px] rounded-2xl m-auto right-0 left-0 z-10 top-32 shadow-lg">
      <div className="flex items-center justify-between mb-2 font-bold text-orange-400">
        <span>Sign In</span>
        <p
          onClick={() => {
            props.modalTocloseAndOpen(false);
          }}
          className=" flex items-center justify-center w-10 h-10 p-2 transition-all duration-200 cursor-pointer hover:text-white "
        >
          x
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="flex flex-col w-full ">
          <span className="mb-2 font-bold">User name</span>
          <input
            className="p-2 rounded-lg text-black"
            type="text"
            value={username || ""}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label className="flex flex-col w-full ">
          <span className="mb-2 font-bold">Email</span>
          <input
            className="p-2 rounded-lg text-black"
            type="email"
            value={email || ""}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="flex flex-col w-full ">
          <span className="mb-2 font-bold">Password</span>
          <input
            className="p-2 rounded-lg text-black"
            type="password"
            value={password || ""}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label className="flex flex-col w-full ">
          <span className="mb-2 font-bold">Confirm password</span>
          <input
            className="p-2 rounded-lg text-black"
            type="password"
            value={confirmPassword || ""}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </label>
        {!loading && (
          <input
            className="w-full p-2 mt-6 mb-4 text-xl font-bold text-center text-white transition-all duration-200 bg-orange-400 rounded-lg cursor-pointer hover:bg-slate-700"
            type="submit"
            value="Register"
          />
        )}
        {loading && (
          <input
            className="w-full p-2 mt-6 mb-4 text-xl font-bold text-center text-white transition-all duration-200 bg-orange-400 rounded-lg"
            disabled
            type="submit"
            value="Loading..."
          />
        )}
        {error && <p className="error">{error}</p>}
      </form>
      <div className="">
        <span className=" mr-2">Already registered?</span>
        <span
          onClick={modalChangeHandler}
          className=" font-bold text-yellow-500 transition-all duration-200 cursor-pointer hover:text-blue-500"
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Register;
