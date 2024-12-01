import { useState } from "react";

function GameBoard() {
  // UseState for remaining attemp
  const [attempt, setAttempt] = useState(4);

  return (
    <section className=" font-mono font-bold text-3xl text-green-500 border-green-500 border p-10 w-full flex items-center m-[20vw]">
      {/* Header */}
      <header className=" space-y-2">
        <h1>[ Vault 111 Terminal ]</h1>
        <p>Password Required</p>
        <p>Attempts Remaining : {attempt}</p>
      </header>

      <section className="grid grid-cols-5 grid-rows-1 "></section>
    </section>
  );
}

export default GameBoard;
