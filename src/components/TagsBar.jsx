import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    class: 'bg-green-200',
    name: 'Work',
  },
  {
    id: 2,
    class: 'bg-orange-200',
    name: 'Study',
  },
  {
    id: 3,
    class: 'bg-red-200',
    name: 'Entertainment',
  },
  {
    id: 4,
    class: 'bg-cyan-200',
    name: 'Shopping',
  },
];

const TagsBar = ({ selectedTags, setSelectedTags }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (category) => {
    setActiveCategory(category);
    const index = selectedTags.indexOf(category);
    if (index === -1) {
      setSelectedTags([...selectedTags, category]);
    } else {
      const newTags = [...selectedTags];
      newTags.splice(index, 1);
      setSelectedTags(newTags);
    }
  };
  return (
    <div className='flex justify-start mt-8'>
      <div className='flex items-center space-x-4 text-gray-600'>
        <span className='text-sm font-bold'>Tags:</span>
        {categories.map((category, index) => (
          <button
            type='button'
            key={index}
            className={`${
              activeCategory === category ? 'bg-gray-200' : category.class
            } py-2 px-4 rounded-full font-bold ${category.class}`}
            onClick={() => handleClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagsBar;
