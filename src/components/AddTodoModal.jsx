import React from 'react';
import { useFormWithValidation } from '../hooks/useForm';

const AddTodoModal = ({ onCancelClick, onAddClick }) => {
  const { values, handleChange, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onAddClick({
      title: values.title,
      description: values.description
    })
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
      </form>
    </div>
  );
};

export default AddTodoModal;
