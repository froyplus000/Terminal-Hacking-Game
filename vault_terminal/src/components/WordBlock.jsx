function WordBlock({ selectedWords, handleHover, handleWordClick }) {
  return (
    <section>
      {selectedWords.map((word, index) => (
        <p
          key={index}
          className="hover:bg-green-500 hover:text-black inline-block px-[.15rem] cursor-pointer"
          onMouseEnter={() => handleHover(word)} // Update hover word
          onClick={() => handleWordClick(word)} // Check if clicked word is correct
        >
          {word}
        </p>
      ))}
    </section>
  );
}

export default WordBlock;
