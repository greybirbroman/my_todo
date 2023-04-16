import React from 'react';
import { categories } from '../utils/const';
import { motion as m } from 'framer-motion';
import { buttonVariants } from '../utils/const';

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
    <ul className='justify-evenly text-gray-600 flex flex-wrap lg:flex-col gap-2 lg:min-w-[200px] lg:justify-start'>
      {categories.map((category) => (
        <m.li
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          key={category.id}
          className={`flex py-2 px-2 gap-1 w-fit items-center rounded-full cursor-pointer shadow-md ${selectedFilterTags.includes(category.name) ? 'bg-yellow-200' : ''}`}
          onClick={() => handleTagClick(category.name)}
        >
          <div className={`h-5 w-5 rounded-full ${category.class}`}></div>
          <button type='button' key={category.id} className={`lg:font-medium sm:font-normal lg:text-[18px] md:text-[14px] text-[12px]`}>
            {category.name}
          </button>
        </m.li>
      ))}
    </ul>
  )
}

export default TagsFilterBar
