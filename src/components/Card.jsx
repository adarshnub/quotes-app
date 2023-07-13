import React from 'react';

const Card = () => {
  return (
    <div
    className='bg-red-400
    rounded-2xl
    h-[8rem]
    flex flex-col
    justify-center
    items-center
    gap-8
    text-white
    w-3/4
    '>
        <p>quote</p>
        <h4 
        className='text-sm
        font-bold'>
            ~author</h4>
    </div>
  )
}

export default Card;