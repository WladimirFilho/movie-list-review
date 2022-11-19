import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (username === "") {
      setError("empty username");
    } else if (email === "") {
      setError("empty email");
    } else if (password === "") {
      setError("empty password");
    } else if (confirmPassword === "") {
      setError("empty confirm password");
    }
  };

  return (
    <div className=" hidden text-white bg-black p-4 absolute w-[400px] rounded-lg m-auto right-0 left-0 z-10 top-40">
      <div className="flex justify-between font-bold items-center mb-2">
        <span>Sign In</span>
        <p className=" flex justify-center items-center border-2 p-2 rounded-full w-10 h-10 ">
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
        <input
          className="mt-8 mb-4 w-full p-2 text-xl font-bold text-center text-black transition-all duration-200 bg-white rounded-lg cursor-pointer hover:bg-zinc-800 hover:text-white"
          type="submit"
          value="Register"
        />
        {error && <p className="error">{error}</p>}
      </form>
      <div className="">
        <span className=" mr-2">Already registered?</span>
        <span className=" font-bold text-yellow-500">Login</span>
      </div>
    </div>
  );
};

export default Register;
