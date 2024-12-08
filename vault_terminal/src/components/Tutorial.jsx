import React from "react";

function Tutorial({ setPage }) {
  return (
    <section className=" text-green-500">
      <button
        onClick={() => setPage("menu")}
        className=" bg-green-500 text-black px-10 py-2 rounded hover:bg-green-600 transition-all "
      >
        Back to Menu
      </button>
    </section>
  );
}

export default Tutorial;
