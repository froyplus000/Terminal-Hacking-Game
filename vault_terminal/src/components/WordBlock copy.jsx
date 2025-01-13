function WordBlock({ selectedWords, handleHover, handleWordClick }) {
  // Set of characters for fillers
  const fillerChars = "!@#$%^&*()_+-=<>?{}[]|".split("");
  // Grid size
  const GRID_ROW = 15;
  const GRID_COL = 10;
  // Create a grid - 1st
  // const grid = Array(GRID_ROW * GRID_COL).fill(null);

  const generateFillerGrid = () => {
    const grid = [];
    for (let i = 0; i < GRID_ROW; i++) {
      const row = [];
      for (let j = 0; j < GRID_COL; j++) {
        const randomChar =
          fillerChars[Math.floor(Math.random() * fillerChars.length)];
        row.push(randomChar);
      }
      grid.push(row);
    }
    return grid;
  };
  // Generate the grid
  const fillerGrid = generateFillerGrid();

  return (
    // ORIGINAL
    // <section>
    //   {selectedWords.map((word, index) => (
    //     <p
    //       key={index}
    //       className="hover:bg-green-500 hover:text-black inline-block px-[.15rem] cursor-pointer"
    //       onMouseEnter={() => handleHover(word)} // Update hover word
    //       onClick={() => handleWordClick(word)} // Check if clicked word is correct
    //     >
    //       {word}
    //     </p>
    //   ))}
    // </section>
    // Step 1 GRID
    // <section
    //   className="grid gap-[2px]"
    //   style={{
    //     gridTemplateRows: `repeat(${GRID_ROW}, 1fr)`,
    //     gridTemplateColumns: `repeat(${GRID_COL}, 1fr)`,
    //   }}
    // >
    //   {grid.map((_, index) => (
    //     <div
    //       key={index}
    //       className="flex items-center justify-center w-3 h-4 border border-green-600 hover:bg-green-500 hover:text-black cursor-pointer"
    //     >
    //       {/* Empty for now */}
    //     </div>
    //   ))}
    // </section>

    // Step 2 GRID
    <section className="grid grid-rows-15">
      {fillerGrid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-10">
          {row.map((char, colIndex) => (
            <div
              key={colIndex}
              className=" text-green-400 text-center cursor-pointer hover:bg-green-500 hover:text-black "
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
