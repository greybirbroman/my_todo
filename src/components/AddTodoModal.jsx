import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormWithValidation } from '../hooks/useForm';
import TagsBar from './TagsBar';
import PriorityBar from './PriorityBar';

const AddTodoModal = ({
  onCancelClick,
  onAddClick,
  selectedTags,
  setSelectedTags,
  activeTags,
  setActiveTags,
  priority,
  setPriority,
}) => {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      completed: false,
      category: selectedTags,
      priority: priority,
    };
    onAddClick(newTask);
    resetForm();
  }

  // При открытии попапа обнуляем состояние Tags.
  useEffect(() => {
    setSelectedTags([]);
    setActiveTags([]);
    setPriority('low');
  }, []);

  return (
    <div className='w-3/4 mx-auto my-auto py-10 px-10 bg-yellow-100 rounded-2xl'>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        {/* { buttonsArea } */}
        <div className='flex justify-between pb-10'>
          <button
            className='font-semibold'
            type='button'
            onClick={onCancelClick}
          >
            Cancel
          </button>
          <button
            className={`${
              !isValid ? 'bg-none text-gray-500' : ''
            }bg-green-200 py-2 px-2 rounded-xl font-semibold border border-gray-600`}
            type='button'
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Add
          </button>
          {/* { inputsArea } */}
        </div>
        <label className='text-[14px]'>Title</label>
        <input
          className='mt-2 mb-2 py-1 px-2 placeholder:pl-3 placeholder:text-[14px] placeholder:font-light font-semibold outline-none rounded-lg'
          onChange={handleChange}
          type='text'
          name='title'
          placeholder='Your title...'
          value={values.title || ''}
          minLength={2}
          required
        ></input>
        <label className='text-[14px]'>Description</label>
        <textarea
          className='mt-2 py-1 px-2 placeholder:pl-3 placeholder:text-[14px] font-light outline-none rounded-lg'
          onChange={handleChange}
          type='text'
          name='description'
          placeholder='Your description...'
          value={values.description || ''}
          rows='5'
        ></textarea>
        {/* { Tags&PriorityArea } */}
        <div className='flex justify-between mt-8'>
          <TagsBar
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            setActiveTags={setActiveTags}
            activeTags={activeTags}
          />
          <PriorityBar priority={priority} setPriority={setPriority} />
        </div>
      </form>
    </div>
  );
};

export default AddTodoModal;
