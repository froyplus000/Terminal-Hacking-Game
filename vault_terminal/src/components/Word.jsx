function Word({ WordText }) {
  return (
    <a className="hover:bg-green-500 hover:text-black inline px-[.15rem] cursor-pointer">
      {WordText}
    </a>
  );
}

export default Word;
