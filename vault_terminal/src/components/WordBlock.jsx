import { useMemo } from "react";
function WordBlock({ selectedWords, handleHover, handleWordClick }) {
  // Set of characters for fillers
  const fillerChars = "!@#$%^&*()_+-=<>?{}[]|".split("");
  // Grid size
  const GRID_ROW = 15;
  const GRID_COL = 10;

  const generateGridWithWords = () => {
    // Step 1: Create a grid filled with filler characters
    const grid = Array.from({ length: GRID_ROW }, () =>
      Array.from(
        { length: GRID_COL },
        () => fillerChars[Math.floor(Math.random() * fillerChars.length)]
      )
    );

    // Step 2: Place words into the grid
    selectedWords.forEach((word) => {
      let placed = false;

      while (!placed) {
        const randomRow = Math.floor(Math.random() * GRID_ROW);
        const randomCol = Math.floor(Math.random() * (GRID_COL - word.length)); // Ensure word fits horizontally

        // Check if the word can be placed
        const canPlace = grid[randomRow]
          .slice(randomCol, randomCol + word.length)
          .every((char) => fillerChars.includes(char));

        if (canPlace) {
          // Place the word in the grid
          for (let i = 0; i < word.length; i++) {
            grid[randomRow][randomCol + i] = word[i];
          }
          placed = true;
        }
      }
    });

    return grid;
  };

  // Generate the grid with words
  const gridWithWords = generateGridWithWords();

  return (
    <section className="grid grid-rows-15">
      {gridWithWords.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-10">
          {row.map((char, colIndex) => (
            <div
              key={colIndex}
              className="text-green-400 text-center cursor-pointer hover:bg-green-500 hover:text-black"
              onMouseEnter={() => handleHover?.(char)} // Optional hover handler
              onClick={() => handleWordClick?.(char)} // Optional click handler
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default WordBlock;
