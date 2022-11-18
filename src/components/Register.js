import React from "react";

const Register = () => {
  const handleSubit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" bg-slate-200 p-4">
      <form onSubmit={handleSubit}>
        <label className="flex flex-col w-full ">
          <span>User name</span>
          <input type="text" />
        </label>
        <label className="flex flex-col w-full ">
          <span>Email</span>
          <input type="email" />
        </label>
        <label className="flex flex-col w-full ">
          <span>Password</span>
          <input type="password" />
        </label>
        <label className="flex flex-col w-full ">
          <span>Confirm password</span>
          <input type="password" />
        </label>
        <input
          className="p-2 text-center w-full bg-black rounded-lg mt-2 text-white cursor-pointer"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
