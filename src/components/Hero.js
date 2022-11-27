import React from "react";

const Hero = () => {
  return (
    <div className=" relative overflow-hidden h-[500px] bg-slate-600">
      <div className=" absolute w-full top-0 left-0 h-[500px] bgBlack">
        <h1 className=" font-bold text-8xl text-white">
          Avatar. The Movie "Again"
        </h1>
      </div>

      <img
        className=" w-full"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e1abc38-de5f-4eba-a2b7-a7e94adaadb0/d2gmb0r-1b6ba1a0-718c-4ded-b4d0-4c2c90ff352d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlMWFiYzM4LWRlNWYtNGViYS1hMmI3LWE3ZTk0YWRhYWRiMFwvZDJnbWIwci0xYjZiYTFhMC03MThjLTRkZWQtYjRkMC00YzJjOTBmZjM1MmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-EDML6G-wkvgFqTPkJRn3YZcVDdGD01PQK_m-ixu28g"
      />
    </div>
  );
};

export default Hero;
