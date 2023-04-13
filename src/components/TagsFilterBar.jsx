import React from 'react'
import { categories } from '../utils/const'

const TagsFilterBar = ({ selectedFilterTags, onTagFilter }) => {
  console.log(`selected filter by tag ${selectedFilterTags}`)
  const handleTagClick = (tag) => {
    if (selectedFilterTags.includes(tag)) {
      onTagFilter(selectedFilterTags.filter((t) => t !== tag));
    } else {
      onTagFilter([...selectedFilterTags, tag]);
    }
}

  return (
    <ul className='justify-evenly text-gray-600 hidden sm:flex'>
      {categories.map((category) => (
        <li
          key={category.id}
          className={`flex py-2 px-2 gap-1 w-fit items-center rounded-full cursor-pointer ${selectedFilterTags.includes(category.name) ? 'bg-yellow-200' : ''}`}
          onClick={() => handleTagClick(category.name)}
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
