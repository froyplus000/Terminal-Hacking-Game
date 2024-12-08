import GameBoard from "./components/GameBoard";
import Menu from "./components/Menu";
import Tutorial from "./components/Tutorial";
import { useState } from "react";

function App() {
  // Correctly initialize the state for the current page
  const [page, setPage] = useState("menu");

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      {/* Conditional rendering based on the current page */}
      {page === "menu" && <Menu setPage={setPage} />}
      {page === "game" && <GameBoard setPage={setPage} />}
      {page === "tutorial" && <Tutorial setPage={setPage} />}
    </main>
  );
}

export default App;
