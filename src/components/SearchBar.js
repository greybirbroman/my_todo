import React from "react";

export default function SearchBar() {
  return (
    <form className='py-2'>
      <fieldset className='flex'>
        <input
          type='input'
          placeholder='find todo...'
          className='w-3/4 outline-0 border placeholder:pl-1'
        ></input>
        <button type='submit' className='bg-cyan-500 w-1/4 text-white'>
          Search
        </button>
      </fieldset>
    </form>
  );
}
