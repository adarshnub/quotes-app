import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div
      className="main-container  
    mx-auto 
    min-h-screen 
    bg-violet-600
    px-8
    md:px-20
    "
    >
      <nav
        className="text-white
       py-4
       md:text-lg"
      >
        <ul className="flex justify-between ">
          <li>Home</li>
          <li>Bookmarks</li>
        </ul>
      </nav>

      <div
      className="content-container
      container mx-auto
      w-3/4
      flex flex-col
      gap-12
      justify-center
      items-center
      mt-8"
      >
        <Card />
        <div><input /></div>
        <button>
          <span className="text-white
          bg-green-600
          rounded-md
          px-4
          py-1">
            Next Quote</span>
        </button>
      </div>

    </div>
  );
}

export default App;
