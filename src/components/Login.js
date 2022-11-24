import { FirebaseError } from "firebase/app";
import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const modalChangeHandler = () => {
    props.changeToRegister(true);
    props.modalTocloseAndOpen(false);
  };

  const { loginUser, error: firebaseError, loading } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (email === "") {
      setError("empty email");
      return;
    } else if (password === "") {
      setError("empty password");
      return;
    }
    loginUser(email, password, props.modalTocloseAndOpen);
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

        {!loading && (
          <input
            className="w-full p-2 mt-6 mb-4 text-xl font-bold text-center text-white transition-all duration-200 bg-orange-400 rounded-lg cursor-pointer hover:bg-slate-700"
            type="submit"
            value="Login"
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
      <div>
        <div className="">
          <span className=" mr-2">Forgot password?</span>
          <span
            onClick={modalChangeHandler}
            className=" font-bold text-yellow-500 transition-all duration-200 cursor-pointer hover:text-blue-500"
          >
            Reset
          </span>
        </div>
        <div className="">
          <span className=" mr-2">New user?</span>
          <span
            onClick={modalChangeHandler}
            className=" font-bold text-yellow-500 transition-all duration-200 cursor-pointer hover:text-blue-500"
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
