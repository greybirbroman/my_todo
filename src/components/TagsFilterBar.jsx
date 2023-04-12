import React from 'react'
import { categories } from '../utils/const'

const TagsFilterBar = ({ activeTags }) => {
  return (
    <ul className='flex justify-evenly text-gray-600'>
      {categories.map((category) => (
        <li
          key={category.id}
          className={`flex py-1 px-1 gap-1 w-fit items-center rounded-full cursor-pointer`}
          onClick={() => {}}
        >
          <div className={`h-5 w-5 rounded-full ${category.class}`}></div>
          <button type='button' key={category.id} className={`font-light text-[12px]`}>
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TagsFilterBar
