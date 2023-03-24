import React from "react";

export default function PriorityBar() {
  function PriorityTag({ bg, title }) {
    return (
      <li className='flex items-center space-x-2 transition hover:scale-110 hover:bg-gray-100 rounded-2xl'>
        <button
          type='button'
          className={`py-2 px-2 w-20 rounded-full text-center ${bg}`}
        >
          {title}
        </button>
      </li>
    );
  }

  return (
    <div className='flex items-center justify-start space-x-3 font-mono text-sm'>
      <p>Priority:</p>
      <ul className='flex space-x-3'>
        <PriorityTag bg='bg-red-400' title={"high"} />
        <PriorityTag bg='bg-yellow-400' title={"medium"} />
        <PriorityTag bg='bg-green-400' title={"low"} />
      </ul>
    </div>
  );
}
