import React from "react";

function Menu({ setPage }) {
  return (
    <section className="font-mono font-bold text-green-500 border-green-500 border-2 p-10 w-full flex flex-col justify-center items-center m-[20vw] rounded-3xl cursor-default text-[1rem]">
      <h1 className=" text-3xl m-10">Welcome to Terminal Hacking Game</h1>
      <button
        onClick={() => setPage("game")} // Call setPage with the new state when clicked
        className=" text-2xl hover:bg-green-500 hover:text-black px-3 my-5 mb-1 rounded-lg"
      >
        Start Game
      </button>
      <button
        onClick={() => setPage("tutorial")} // Call setPage with the new state when clicked
        className=" text-2xl hover:bg-green-500 hover:text-black px-3 my-5 rounded-lg"
      >
        Tutorial
      </button>
      <p className=" mt-5 border-green-500 border-2 px-4 py-1 rounded-md">
        Warning: The game will have some Sound Effect
      </p>
    </section>
  );
}

export default Menu;
