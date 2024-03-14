import React from "react";
import { FaSearch } from "react-icons/fa";
// SearchBar component represents a beautiful search bar
function SearchBar() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-2xl font-bold mb-2'>
            What are you looking for?
        </div>
      <div className="flex border-solid border-2 border-sky-500 w-1/2 h-12 justify-between items-center rounded-3xl relative">
        <div className='ml-6'>
          <FaSearch/>
        </div>
        <div className='w-full mx-4'>
          <input className='h-10 focus:outline-none w-full' type="text" />
        </div>
        <div className='px-6 mr-1 relative bg-black text-white h-10 w-20 rounded-full flex justify-center items-center'>
          <button className=''>Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
