import React, { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import {getRandomQuote, getTags} from './selectors/selectors'
import { fetchRandomQuote ,fetchTagsAPI} from "./actions/actions";


function App() {
  const dispatch = useDispatch();
  const randomQuote = useSelector(getRandomQuote);
  const tags = useSelector(getTags);
  
  useEffect(() => {
    dispatch(fetchRandomQuote());
    dispatch(fetchTagsAPI());
  },[dispatch]);


  const generateRandomQuote = () => {
    dispatch(fetchRandomQuote());
  }


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
      >{randomQuote ? (
          <Card quote={randomQuote.content} author={randomQuote.author} />
        ) : (
          <p>Loading quote...</p>
        )}
         <div><input /></div>
        <button onClick={generateRandomQuote} > 
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
