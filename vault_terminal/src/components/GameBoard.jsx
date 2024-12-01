import { useState } from "react";
import Word from "./Word";

function GameBoard() {
  // UseState for remaining attemp
  const [attempt, setAttempt] = useState(4);
  const [hoverWord, setHoverWord] = useState("John");

  return (
    <section className=" font-mono font-bold text-green-500 border-green-500 border-2 p-10 w-full flex flex-col justify-center m-[20vw] rounded-xl cursor-default">
      {/* Header */}
      <header className=" space-y-2 text-xl">
        <h1>[ Vault 111 Terminal ]</h1>
        <p>Password Required</p>
        <p>Attempts Remaining : {attempt}</p>
      </header>

      <section className="grid grid-cols-5 grid-rows-1 gap-2 mt-10 text-[1.2rem]">
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
          <p className="hover:bg-green-500 hover:text-black inline">John</p>
          <Word WordText="Adam" />
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
          <p>John</p>
        </section>
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

        <section className="flex flex-col-reverse">
          <p> {hoverWord}</p>
        </section>
      </section>
    </section>
  );
}

export default GameBoard;
