import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
function Feedback({ hoverWord, gameState }) {
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
      {gameState == 1 && <p className="">> Access Granted !</p>}
      {gameState == 2 && (
        <p className="flex flex-col-reverse">
          > access denied ! <br />> Try again later
        </p>
      )}
    </section>
  );
}

export default Feedback;
