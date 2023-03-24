import React from "react";

export default function CategoryBar({ className }) {

  function CategoryTag({ bg, title }) {
    return (
      <li className='flex items-center space-x-2 transition hover:scale-110 hover:bg-gray-100 py-1 px-1 rounded-2xl w-fit'>
        <div className={`h-5 w-5 rounded-full ${bg}`}></div>
        <span className="text-sm font-light">{title}</span>
      </li>
    );
  }

  return (
    <ul className={`flex space-x-3 ${className}`}>
      <CategoryTag bg='bg-purple-300' title={"work"} />
      <CategoryTag bg='bg-blue-200' title={"study"} />
      <CategoryTag bg='bg-orange-300' title={"entertainment"} />
      <CategoryTag bg='bg-green-200' title={"family"} />
    </ul>
  );
}
