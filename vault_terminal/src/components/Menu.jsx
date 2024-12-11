function Menu({ setPage }) {
  return (
    <section className="font-mono font-bold text-green-500 border-green-500 border-2 p-10 w-full flex flex-col justify-center items-center m-[20vw] rounded-3xl cursor-default text-[1rem]">
      <h1 className=" text-3xl m-10">Welcome to Terminal Hacking Game</h1>
      <button
        onClick={() => setPage("game")} // Call setPage with the new state when clicked
        className=" text-2xl hover:bg-green-500 hover:text-black px-3 my-5 mb-1 rounded-lg transition-all"
      >
        Start Game
      </button>
      <button
        onClick={() => setPage("tutorial")} // Call setPage with the new state when clicked
        className=" text-2xl hover:bg-green-500 hover:text-black px-3 my-5 rounded-lg transition-all"
      >
        Tutorial
      </button>
      <div className=" mt-5 border-green-700 border-2 px-10 py-3 rounded-xl text-center text-sm">
        <h3 className=" uppercase text-lg mb-2">Disclaimer</h3>
        <p className=" ">
          The game may contain sound effects. This project is for learning
          purposes only. Sound effects provided by{" "}
          <a
            href="https://pixabay.com"
            className="underline hover:text-green-300"
          >
            Pixabay
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Menu;
