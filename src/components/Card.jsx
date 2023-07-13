import React from "react";

const Card = ({quote,author,text}) => {
  return (
    <div
      className="bg-red-400
    rounded-2xl
    min-h-[8rem]
    flex flex-col
    justify-center
    items-center
    gap-8
    text-white
    w-[17rem]
    sm:w-full
    px-4
    py-2
    ">
      
      <p>{quote}</p>
      <h1 className="font-bold text-black">{text}</h1>
      <h4
        className="text-sm
        font-bold"
      >
        ~{author}
      </h4>
    </div>
  );
};

export default Card;
