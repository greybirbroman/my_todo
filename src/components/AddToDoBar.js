import React from "react";

export default function AddToDoBar({ onClick, tasks }) {
    
  return (
    <div className='flex justify-between'>
      <h1 className='font-mono text-xl'>todo</h1>
      <button
        className='w-5 hover:opacity-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        type='button'
        onClick={onClick}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path d='M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z' />
        </svg>
      </button>
    </div>
  );
}
