import { categories } from '../utils/const';
import { motion as m } from 'framer-motion';
import { buttonVariants } from '../utils/const';

const TagsBar = ({ selectedTags, setSelectedTags }) => {
  // const handleClick = (category) => {
  //   const tagIndex = activeTags.indexOf(category.id);
  //   if (tagIndex === -1) {
  //     setActiveTags([...activeTags, category.id]);
  //     setSelectedTags([...selectedTags, category]);
  //   } else {
  //     const newActiveTags = [...activeTags];
  //     newActiveTags.splice(tagIndex, 1);
  //     setActiveTags(newActiveTags);
  //     const newTags = selectedTags.filter((tag) => tag.id !== category.id);
  //     setSelectedTags(newTags);
  //   }
  // };

  const handleClick = (category) => {
    if (selectedTags.find((tag) => tag.id === category.id)) {
      setSelectedTags(selectedTags.filter((tag) => tag.id !== category.id));
    } else {
      setSelectedTags([...selectedTags, category]);
    }
  };

  return (
    <ul className='flex flex-wrap gap-2 text-gray-600'>
      {/* <span className='text-sm font-bold'>Tags:</span> */}
      {categories.map((category) => (
        <m.li
          variants={buttonVariants}
          whileHover='hover'
          whileTap='tap'
          key={category.id}
          className={`flex py-2 px-2 gap-2 w-fit items-center shadow-md rounded-full cursor-pointer ${
            selectedTags && selectedTags.some((tag) => tag.id === category.id)
              ? 'bg-yellow-200'
              : 'bg-white'
          }`}
          onClick={() => handleClick(category)}
        >
          <div className={`h-5 w-5 rounded-full ${category.class}`}></div>
          <button type='button' key={category.id} className={`font-medium`}>
            {category.name}
          </button>
        </m.li>
      ))}
    </ul>
  );
};
export default TagsBar;
