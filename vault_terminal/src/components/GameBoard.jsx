import { useState } from "react";
import Word from "./Word";
import { Typewriter } from "react-simple-typewriter";

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
  const [attempt, setAttempt] = useState(4); // Remaining Attemps
  const [hoverWord, setHoverWord] = useState("John"); // HoverWord to perform typing animation in Feedback Section
  const [gameState, setGameState] = useState(0); // Game state, 0 = Playing, 1 = Pass, 2 = Failed
  const [hex1, setHex1] = useState([]);
  const [hex2, setHex2] = useState([]);

  // Initialize Selected word for game.
  function initializeGameWords() {
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

  // Initialize the game words when the component loads
  useState(() => {
    initializeGameWords();
    GenerateHex(setHex1);
    GenerateHex(setHex2);
  }, []);

  return (
    <section className=" font-mono font-bold text-green-500 border-green-500 border-2 p-10 w-full flex flex-col justify-center m-[20vw] rounded-3xl cursor-default text-[1rem]">
      {/* Header */}
      <header className=" space-y-2 text-xl">
        <h1>[ Vault 111 Terminal ]</h1>
        <p>Password Required</p>
        <p>Attempts Remaining : {attempt}</p>
      </header>

      <section className="grid grid-cols-[1fr,2fr,1fr,2fr,1.5fr] grid-rows-1 gap-2 mt-6 text-[1.2rem]">
        {/* Hexadecimal Blocks 1 */}
        <section>
          {hex1.map((hexValue, index) => (
            <p key={index} className="cursor-default">
              {hexValue}
            </p>
          ))}
        </section>

        {/* Words */}
        <section>
          {selectedWords.map((word, index) => (
            <p
              key={index}
              className="hover:bg-green-500 hover:text-black inline-block px-[.15rem] cursor-pointer"
              onMouseEnter={() => setHoverWord(word)} // Update hover word
              // onClick={selectedWords(word)}
            >
              {word}
            </p>
          ))}
        </section>

        {/* Hexadecimal Blocks 2 */}
        <section>
          {hex1.map((hexValue, index) => (
            <p key={index} className="cursor-default">
              {hexValue}
            </p>
          ))}
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
          <Typewriter
            key={hoverWord}
            words={[`> ${hoverWord}`]} // Use backticks to create a string with hoverWord
            // cursor
            // cursorStyle="|"
            typeSpeed={30}
          />
        </section>

        {/* Reset Game */}
        {/* <button
          onClick={initializeGameWords}
          className="mt-6 bg-green-500 text-black px-10 py-2 rounded hover:bg-green-700"
        >
          Reset Game
        </button> */}
      </section>
    </section>
  );
}

export default GameBoard;
