import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
function Feedback({ hoverWord, gameState, entryHistory }) {
  return (
    <section className="hidden md:flex md:flex-col-reverse col-span-2 md:col-span-1 h-auto">
      <div className="flex">
        <Typewriter
          key={hoverWord}
          words={[`> ${hoverWord}`]} // Use backticks to create a string with hoverWord
          cursor
          cursorBlinking
          typeSpeed={40}
        />
      </div>
      {gameState == 1 && (
        <p className="">
          > Access Granted !! <br />
        </p>
      )}
      {gameState === 2 && (
        <p>
          > Access Denied !! <br />
        </p>
      )}
      {/* Show entry history */}
      <div className="mt-4">
        {entryHistory.map((entry, index) => (
          <p key={index}>
            <br />> Entry={entry.word}
            <br />> Likeliness={entry.likeliness} <br />
          </p>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
