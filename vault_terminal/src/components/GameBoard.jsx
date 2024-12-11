import { useState, useEffect, useRef } from "react";

import HexBlock from "./HexBlock";
import WordBlock from "./WordBlock";
import Feedback from "./Feedback";

function GameBoard({ setPage }) {
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

  // Hexadecimal values
  const hexValue = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const [selectedWords, setSelectedWord] = useState([]); // List of selected word will be use in a single game. (8-12 words)
  const [password, setPassword] = useState("");
  const [attempt, setAttempt] = useState(4); // Remaining Attemps
  const [hoverWord, setHoverWord] = useState(""); // HoverWord to perform typing animation in Feedback Section
  const [gameState, setGameState] = useState(0); // Game state, 0 = Playing, 1 = Win, 2 = Lose
  const [hex1, setHex1] = useState([]);
  const [hex2, setHex2] = useState([]);

  const typingSound = useRef(new Audio("/assets/typing.mp3")); // Use `useRef` for persistent audio object
  const failSound = useRef(new Audio("/assets/fail.mp3"));

  // Initialize Selected word for game.
  function StartGame() {
    // This will sort and shuffle word from "wordList" and store in new array call "shuffled"
    const shuffled = wordList.toSorted(() => Math.random() - 0.5);
    // Slice() will created new array based on shuffled array just created with range that calculates below
    const selected = shuffled.slice(
      // Range start from 0
      0,
      // Get random range number from 8 - 12 "Math.floor(Math.random() * (max - min) ) + min;"
      // This game will need to have word range at least 8 to 12, so the range will be start from 0 to (8-12)
      Math.floor(Math.random() * (12 - 8 + 1)) + 8
    );
    // Once we got those new array that store Selected words from shuffled words array, set those value to selected(useState)
    setSelectedWord(selected);

    // Randomly choose one word as the correct password
    const randomCorrectPassword =
      selected[Math.floor(Math.random() * selected.length)];
    setPassword(randomCorrectPassword);

    console.log("Correct Password:", randomCorrectPassword); // Debugging
    setAttempt(4);
    setGameState(0);
  }

  function GenerateHex(setHex) {
    let hexArray = [];
    // Generate 2 rolls of Hex value
    // generate hexvalue 15 times per roll
    for (let index = 0; index < 15; index++) {
      // Random
      const shuffledHex = hexValue.toSorted(() => Math.random() - 0.5);
      console.log(shuffledHex);
      // Select 4 characters from the shuffled array for the suffix.
      const randomChars = shuffledHex.slice(0, 4);
      // Combine the prefix and the randomly selected suffix.
      const row = "0x5" + randomChars.join("");
      // Add the row to the hexArray.
      hexArray.push(row);
    }
    console.log(hexArray); // Log the generated rows for debugging.
    setHex(hexArray); // Once done, setHex to the generated array.
  }

  // Initialize when the component loads
  useState(() => {
    StartGame(); // Select initial game words (8 - 15)
    // Get random hex value for UI
    GenerateHex(setHex1);
    GenerateHex(setHex2);
  }, []);

  // Handle Hovering Word
  function handleHover(word) {
    setHoverWord(word);
  }
  // Play Sound when Hover
  useEffect(() => {
    const playSound = () => {
      // Pause any current playback
      typingSound.current.pause();
      typingSound.current.currentTime = Math.random(); // Random starting time of an audio to make it sound better, each time hover play different point
      typingSound.current.playbackRate = 1.5;
      // Play the new sound
      typingSound.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    };

    if (hoverWord) {
      playSound();
    }
  }, [hoverWord]);

  function handleWordClick(word) {
    if (word === password) {
      setGameState(1); // Player Win
      handleEntrySound(1); // Pass success (1) to handleEntrySound
    } else {
      setAttempt((prev) => prev - 1); // Decrease attempts
      handleEntrySound(0); // Pass failure (0) to handleEntrySound
      console.log("Remaining Attempts:", attempt);

      if (attempt - 1 <= 0) {
        setGameState(2); // Player Lose
        console.log("Unsuccessful, Access Denied!!");
        return;
      }
    }
  }

  function handleEntrySound(result) {
    if (result === 0) {
      // Play the fail sound
      failSound.current.currentTime = 0; // Reset to the beginning
      failSound.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  }

  return (
    <section className=" text-green-500 border-green-500 border-2 p-4 md:p-10  w-[90vw] md:w-full flex flex-col justify-center md:m-[20vw] m-[5vw] rounded-3xl cursor-default text-[.9rem] uppercase">
      {/* Header */}
      <header className=" space-y-2 ">
        <h1>[ Vault 111 Terminal ]</h1>
        <p>Password Required</p>
        <p>Attempts Remaining : {attempt}</p>
      </header>

      <section className="grid grid-cols-[1fr,2fr] md:grid-cols-[.3fr,2fr,.3fr,2fr,2.5fr] grid-rows-1 gap-1 md:gap-2 mt-6">
        <HexBlock hex={hex1} />
        <WordBlock
          selectedWords={selectedWords}
          handleHover={handleHover}
          handleWordClick={handleWordClick}
        />

        <HexBlock hex={hex2} />
        <WordBlock
          selectedWords={selectedWords}
          handleHover={handleHover}
          handleWordClick={handleWordClick}
        />

        <Feedback hoverWord={hoverWord} gameState={gameState} />
      </section>

      {/* Feedback - Mobile */}
      {/* <section className="flex md:hidden md:items-end col-span-2 h-auto">
        <Typewriter
          key={hoverWord}
          words={[`> ${hoverWord}`]} // Use backticks to create a string with hoverWord
          cursor
          cursorBlinking
          typeSpeed={40}
        />
        <h1 className="block">{hoverWord}</h1>
      </section> */}

      <section className="flex mt-6 gap-3">
        {/* New Game */}
        <button
          onClick={StartGame}
          className=" bg-green-500 text-black px-10 py-2 rounded hover:bg-green-600 transition-all w-[50%]"
        >
          New Game
        </button>
        <button
          onClick={() => setPage("menu")}
          className=" bg-green-500 text-black px-10 py-2 rounded hover:bg-green-600 transition-all w-[50%] "
        >
          Back to Menu
        </button>
      </section>
    </section>
  );
}

export default GameBoard;
