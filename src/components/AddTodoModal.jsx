import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormWithValidation } from '../hooks/useForm';
import TagsBar from './TagsBar';

const AddTodoModal = ({ onCancelClick, onAddClick, selectedTags, setSelectedTags, activeTags, setActiveTags }) => {
  const { values, handleChange, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      completed: false,
      category: selectedTags,
    }
    onAddClick(newTask)
    resetForm()
  }


  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='flex justify-between pb-10'>
          <button type='button' onClick={onCancelClick}>
            Cancel
          </button>
          <button type='button' onClick={handleSubmit}>
            Add
          </button>
        </div>
        <label>Title</label>
        <input
          onChange={handleChange}
          type='text'
          name='title'
          placeholder='Your title...'
          value={values.title || ''}
        ></input>
        <label>Description</label>
        <textarea
          onChange={handleChange}
          type='text'
          name='description'
          placeholder='Your description..'
          value={values.description || ''}
          rows='5'
        ></textarea>
        <TagsBar selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </form>
    </div>
  );
};

export default AddTodoModal;
