import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    class: 'bg-green-500',
    name: 'Work',
  },
  {
    id: 2,
    class: 'bg-orange-500',
    name: 'Study',
  },
  {
    id: 3,
    class: 'bg-red-500',
    name: 'Entertainment',
  },
  {
    id: 4,
    class: 'bg-cyan-500',
    name: 'Shopping',
  },
];

const TagsBar = ({ selectedTags, setSelectedTags, activeTags, setActiveTags }) => {

    const handleClick = (category) => {
        const tagIndex = activeTags.indexOf(category.id);
        if (tagIndex === -1) {
          setActiveTags([...activeTags, category.id]);
          setSelectedTags([...selectedTags, category]);
        } else {
          const newActiveTags = [...activeTags];
          newActiveTags.splice(tagIndex, 1);
          setActiveTags(newActiveTags);
          const newTags = selectedTags.filter(tag => tag.id !== category.id);
          setSelectedTags(newTags);
        }
    };
  
    return (
        <div className='flex flex-wrap sm:flex-col gap-2 text-gray-600 mt-8'>
          <span className='text-sm font-bold'>Tags:</span>
          {categories.map((category) => (
            <div className={`flex py-2 px-2 gap-2 items-center rounded-full ${
                activeTags && activeTags.includes(category.id) ? 'bg-yellow-200' : ''
              }`}>
                <div className={`h-5 w-5 rounded-full ${category.class}`}></div>
            <button
              type='button'
              key={category.id}
              className={`font-bold`}
              onClick={() => handleClick(category)}
            >
              {category.name}
            </button>
            </div>
          ))}
        </div>
    );
  };
  export default TagsBar;