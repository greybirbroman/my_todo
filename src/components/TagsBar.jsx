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

const TagsBar = ({ selectedTags, setSelectedTags}) => {

    const [activeTags, setActiveTags] = useState([]);
    console.log(activeTags)
  
    const handleClick = (category) => {
      const index = activeTags.indexOf(category.name);
      if (index === -1) {
        setActiveTags([...activeTags, category.name]);
        setSelectedTags([...selectedTags, category]);
      } else {
        const newActiveTags = [...activeTags];
        newActiveTags.splice(index, 1);
        setActiveTags(newActiveTags);
        const newTags = selectedTags.filter(tag => tag.name !== category.name);
        setSelectedTags(newTags);
      }
    };
  
    return (
        <div className='flex flex-wrap sm:flex-col gap-2 text-gray-600 mt-8'>
          <span className='text-sm font-bold'>Tags:</span>
          {categories.map((category) => (
            <div className={`flex py-2 px-2 gap-2 items-center rounded-full ${
                activeTags.includes(category.name) ? 'bg-yellow-200' : ''
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