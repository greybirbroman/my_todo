import { categories } from "../utils/const";

const TagsBar = ({
  selectedTags,
  setSelectedTags,
  activeTags,
  setActiveTags,
}) => {
  const handleClick = (category) => {
    const tagIndex = activeTags.indexOf(category.id);
    if (tagIndex === -1) {
      setActiveTags([...activeTags, category.id]);
      setSelectedTags([...selectedTags, category]);
    } else {
      const newActiveTags = [...activeTags];
      newActiveTags.splice(tagIndex, 1);
      setActiveTags(newActiveTags);
      const newTags = selectedTags.filter((tag) => tag.id !== category.id);
      setSelectedTags(newTags);
    }
  };

  return (
    <ul className='flex flex-col gap-2 text-gray-600'>
      <span className='text-sm font-bold'>Tags:</span>
      {categories.map((category) => (
        <li
          key={category.id}
          className={`flex py-2 px-2 gap-2 w-fit items-center rounded-full border border-gray-600 cursor-pointer ${
            activeTags && activeTags.includes(category.id)
              ? 'bg-yellow-200'
              : ''
          }`}
          onClick={() => handleClick(category)}
        >
          <div className={`h-5 w-5 rounded-full ${category.class}`}></div>
          <button type='button' key={category.id} className={`font-medium`}>
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TagsBar;
