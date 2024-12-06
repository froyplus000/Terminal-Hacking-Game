import { useState } from "react";
import Word from "./Word";

function GameBoard() {
  // List of words in the game
  const wordList = [
    "Vault",
    "Security",
    "Failure",
    "Override",
    "Password",
    "Error",
    "Escape",
    "Admin",
    "Login",
    "Protocol",
    "Terminal",
    "Reactor",
    "Hacker",
    "Memory",
    "Control",
  ];
  const [selectedWords, setSelectedWord] = useState([]); // List of selected word will be use in a single game. (8-12 words)
  const [attempt, setAttempt] = useState(4); // Remaining Attemps
  const [hoverWord, setHoverWord] = useState("John"); // HoverWord to perform typing animation in Feedback Section
  const [gameState, setGameState] = useState(0); // Game state, 0 = Playing, 1 = Pass, 2 = Failed

  function initializeGameWords() {
    const shufferd = wordList.toSorted(() => Math.random() - 0.5);
    console.log(shufferd);
    const selected = shufferd.slice(
      0,
      Math.floor(Math.random() * (12 - 8 + 1)) + 8
    );
    setSelectedWord(selected);
  }

  // Initialize the game words when the component loads
  useState(() => {
    initializeGameWords();
  }, []);

  return (
    <section className=" font-mono font-bold text-green-500 border-green-500 border-2 p-10 w-full flex flex-col justify-center m-[20vw] rounded-3xl cursor-default">
      {/* Header */}
      <header className=" space-y-2 text-xl">
        <h1>[ Vault 111 Terminal ]</h1>
        <p>Password Required</p>
        <p>Attempts Remaining : {attempt}</p>
      </header>

      <section className="grid grid-cols-[1fr,2fr,1fr,2fr,1.5fr] grid-rows-1 gap-2 mt-6 text-[1.2rem]">
        {/* Hexadecimal Blocks */}
        <section>
          {Array.from({ length: 15 }).map((_, i) => (
            <p key={i}>0x50{(Math.random() * 999).toFixed(0)}</p>
          ))}
        </section>

        {/* Words */}
        <section>
          {selectedWords.map((word, index) => (
            <p
              key={index}
              className="hover:bg-green-500 hover:text-black inline-block px-[.15rem] cursor-pointer"
              onMouseEnter={() => setHoverWord(word)} // Update hover word
            >
              {word}
            </p>
          ))}
        </section>

        {/* OLD */}
        <section className="">
          <p>0x5023D</p>
          <p>0x5023D</p>
          <p>0x503F2</p>
          <p>0x508C2</p>
          <p>0x5045F</p>
          <p>0x5023D</p>
          <p>0x5023D</p>
          <p>0x503F2</p>
          <p>0x508C2</p>
          <p>0x5045F</p>
          <p>0x5023D</p>
          <p>0x5023D</p>
          <p>0x5045F</p>
          <p>0x5023D</p>
          <p>0x5023D</p>
        </section>

        <section>
          <p className=" hover:bg-green-500 hover:text-black inline">John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
        </section>
        {/* Feedback */}
        <section className="flex flex-col-reverse">
          <p> {hoverWord}</p>
        </section>

        {/* Reset Game */}
        <button
          onClick={initializeGameWords}
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Reset Game
        </button>
      </section>
    </section>
  );
}

export default GameBoard;
