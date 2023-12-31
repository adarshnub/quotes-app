import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import {getQuoteByTag, getRandomQuote, getTags} from './selectors/selectors'
import { fetchQuoteByTagAPI, fetchRandomQuote ,fetchTagsAPI} from "./actions/actions";


function App() {
  const dispatch = useDispatch();
  const randomQuote = useSelector(getRandomQuote);
  const tags = useSelector(getTags);
  const quoteByTag = useSelector(getQuoteByTag);
  const [selectedTag, setSelectedTag] = useState('');
  
  useEffect(() => {
    dispatch(fetchRandomQuote());
    dispatch(fetchTagsAPI());
  },[dispatch]);


  const generateRandomQuote = () => {
    if(selectedTag){
      dispatch(fetchQuoteByTagAPI(selectedTag));
    } else {
      dispatch(fetchRandomQuote());
    }
  }

  const handleTagChange = (e) => {
    const tag = e.target.value;
    setSelectedTag(tag);
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
      >{selectedTag && quoteByTag ? (
          <Card quote={quoteByTag.content} author={quoteByTag.author} />
        ) : randomQuote ? (
          <Card quote={randomQuote.content} author={randomQuote.author} />
        ) : (
          <Card text="loading quote......" />
          // <p>Loading quote...</p>
        )}
         <div 
         className=""
         >
          {
            tags.length > 0 && (
              <div
              className="text-md
              font-semibold
              "
              >
                <select
                className="rounded-lg
                px-3
                py-2"
                onChange={handleTagChange} 
                value={selectedTag}>
                  <option 
                  value="">Select Tag</option>
                  {tags.map((tags) => (
                    <option key={tags._id} value={tags.slug}>{tags.name}</option>
                  ))}
                </select>
              </div>
            )
          }
         </div>
        
        <button onClick={generateRandomQuote} > 
          <span className="text-white
          bg-green-600
          rounded-md
          px-4
          py-1
          hover:bg-green-300
          hover:text-black
          hover:font-bold">
            Next Quote</span>
        </button>
        
      </div>

    </div>
  );
}

export default App;
