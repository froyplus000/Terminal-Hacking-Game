function Word({ WordText }) {
  return (
    <a className="hover:bg-green-500 hover:text-black inline px-1 cursor-pointer">
      {WordText}
    </a>
  );
}

export default Word;
