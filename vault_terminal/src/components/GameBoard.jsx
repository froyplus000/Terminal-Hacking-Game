import { useState, useEffect, useRef } from "react";

import HexBlock from "./HexBlock";
import WordBlock from "./WordBlock";
import Feedback from "./Feedback";

function GameBoard({ setPage }) {
  // List of words in the game
  const wordList = [
    "breaker",
    "tracker",
    "cracker",
    "bracket",
    "hacker",
    "racket",
    "stacker",
    "slacker",
    "reactor",
    "tractor",
    "flicker",
    "clicker",
    "speaker",
    "sticker",
    "pickers",
    "packers",
    "bravers",
    "dreamer",
    "severed",
    "cleared",
    "charmer",
    "lighter",
    "fighter",
    "glimmer",
    "shatter",
    "splatter",
    "scatter",
    "flutter",
    "stagger",
    "trigger",
    "brittle",
    "whistle",
    "grapple",
    "captive",
    "caution",
    "curtain",
    "fortune",
    "future",
    "venture",
    "capture",
    "fracture",
    "gesture",
    "pattern",
    "letters",
    "factors",
    "sectors",
    "vectors",
    "mentor",
    "hunter",
    "winter",
    "dinner",
    "banner",
    "manner",
    "hammer",
    "buffer",
    "safer",
    "career",
    "sphere",
    "desire",
    "empire",
    "revive",
    "derive",
    "divide",
    "unite",
    "remote",
    "resort",
    "report",
    "export",
    "import",
    "upvote",
    "device",
    "decide",
    "inside",
    "guided",
    "aerial",
    "serial",
    "period",
    "legacy",
    "reward",
    "remark",
    "entity",
    "felony",
    "agency",
    "memory",
    "victor",
    "factor",
    "mirror",
    "terror",
    "forest",
    "digest",
    "subtle",
    "gentle",
    "hustle",
    "bottle",
    "battle",
    "rattle",
    "better",
    "setter",
    "letter",
    "writer",
    "bitten",
    "rotten",
    "hidden",
    "ridden",
    "shield",
    "wield",
    "field",
    "build",
    "guild",
    "child",
    "wilds",
    "sands",
    "singer",
    "finger",
    "linger",
    "danger",
    "ranger",
    "hanger",
    "anchor",
    "mentor",
    "return",
    "reform",
    "retake",
    "revoke",
    "reacts",
    "refine",
    "refund",
    "revamp",
    "marker",
    "worker",
    "trader",
    "loader",
    "leader",
    "reader",
    "dealer",
    "singer",
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
  // State variables
  const [selectedWords, setSelectedWord] = useState([]); // List of selected word will be use in a single game. (8-12 words)
  const [hex1, setHex1] = useState([]); // Hex value for the left block
  const [hex2, setHex2] = useState([]); // Hex value for the right block
  const [firstBlockWords, setFirstBlockWords] = useState([]); // Left block word
  const [secondBlockWords, setSecondBlockWords] = useState([]); // Right block word
  const [password, setPassword] = useState(""); // The password randomly chosen for each game
  const [attempt, setAttempt] = useState(4); // Remaining Attemps
  const [entryHistory, setEntryHistory] = useState([]); // Track all past entries
  const [hoverWord, setHoverWord] = useState(""); // HoverWord to perform typing animation in Feedback Section
  const [gameState, setGameState] = useState(0); // Game state, 0 = Playing, 1 = Win, 2 = Lose
  // Audio UseRef Vairables - Need to use useRef to store the audio object to prevent re-rendering
  const typingSound = useRef(new Audio("/assets/typing.mp3"));
  const failSound = useRef(new Audio("/assets/fail.mp3"));
  const unlockSound = useRef(new Audio("/assets/unlock.mp3"));
  const deniedSound = useRef(new Audio("/assets/denied.mp3"));

  // Initialize Selected word for game.
  function StartGame() {
    // This will sort and shuffle word from "wordList" and store in new array call "shuffled"
    const shuffled = wordList.toSorted(() => Math.random() - 0.5);
    // Slice() will created new array based on shuffled array just created with range that calculates below
    const selected = shuffled.slice(
      // Range start from 0
      0,
      // Get random range number from 8 - 15 : "Math.floor(Math.random() * (max - min) ) + min;"
      // This game will need to have word range at least 8 to 15, so the range will be start from 0 to (8-15)
      Math.floor(Math.random() * (15 - 8 + 1)) + 8
    );
    // Once we got those new array that store Selected words from shuffled words array, set those value to selected(useState)
    setSelectedWord(selected);
    // Split the selected words into two blocks
    const midIndex = Math.ceil(selected.length / 2);
    setFirstBlockWords(selected.slice(0, midIndex));
    setSecondBlockWords(selected.slice(midIndex));

    // Randomly choose one word as the correct password
    const randomCorrectPassword =
      selected[Math.floor(Math.random() * selected.length)];
    setPassword(randomCorrectPassword);

    console.log("Correct Password:", randomCorrectPassword); // Debugging, DELETE LATER

    // Reset the game state - NEW GAME
    setAttempt(4);
    setGameState(0);
    setHoverWord("");
    setEntryHistory([]);
  }

  function GenerateHex(setHex) {
    let hexArray = [];
    // Generate 2 Columns of Hex value
    // generate hexvalue 15 rows for each column
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
  useEffect(() => {
    console.log("useEffect called!"); // Debugging
    StartGame(); // Call StartGame when the component is first loaded
    GenerateHex(setHex1); // Generate a random hex value for UI
    GenerateHex(setHex2); // Generate another random hex value for UI
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
    if (gameState !== 0) return; // If the game is over, do nothing

    // Call function to calculate the likeliness of the word to the password
    const likelinessScore = calculateLikeliness(password, word);

    setEntryHistory((prevHistory) => [
      ...prevHistory,
      { word, likeliness: likelinessScore },
    ]);

    if (word === password) {
      setGameState(1); // Player wins
      handleEntrySound(1); // Play success sound
      return;
    }

    // Decrease attempts and check if game ends
    setAttempt((prev) => {
      const newAttempts = prev - 1;
      if (newAttempts <= 0) {
        setGameState(2); // Player loses
        handleEntrySound(2); // Play failure sound
      } else {
        handleEntrySound(0); // Play failure sound for incorrect guess
      }
      return newAttempts;
    });
  }

  function handleEntrySound(result) {
    // Fail, Play the fail sound
    if (result === 0) {
      failSound.current.currentTime = 0;
      failSound.current.volume = 0.12;
      failSound.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
    // Success, Play the unlock sound
    if (result === 1) {
      unlockSound.current.currentTime = 0;
      unlockSound.current.volume = 1;
      unlockSound.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
    // Fail and Lose, Play the unlock sound
    if (result === 2) {
      failSound.current.currentTime = 0;
      failSound.current.volume = 0.12;
      failSound.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });

      deniedSound.current.currentTime = 0;
      deniedSound.current.volume = 0.2;
      deniedSound.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  }

  function calculateLikeliness(password, guess) {
    let matches = 0; // count of matching characters
    for (let i = 0; i < password.length; i++) {
      // iterate over each character in password
      // If the character at the same index in the password and guess is the same, increment the matches count
      if (password[i] === guess[i]) {
        matches++;
      }
    }
    return matches; // return the number of matching characters
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
          selectedWords={firstBlockWords}
          handleHover={handleHover}
          handleWordClick={handleWordClick}
        />

        <HexBlock hex={hex2} />
        <WordBlock
          selectedWords={secondBlockWords}
          handleHover={handleHover}
          handleWordClick={handleWordClick}
        />

        {/* Need to be update when EntryWord and Likeliness change */}
        <Feedback
          hoverWord={hoverWord}
          gameState={gameState}
          entryHistory={entryHistory}
        />
      </section>

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
