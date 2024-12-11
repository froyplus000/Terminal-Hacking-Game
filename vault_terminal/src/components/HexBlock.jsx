function HexBlock({ hex }) {
  return (
    <section>
      {hex.map((hexValue, index) => (
        <p key={index} className="cursor-default">
          {hexValue}
        </p>
      ))}
    </section>
  );
}

export default HexBlock;
