import React, { useEffect, useState } from 'react';
import { useFormWithValidation } from '../hooks/useForm';

const EditTodoModal = ({ onCancelClick, onEdit, selectedTask }) => {
  const { values, setValues, handleChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const updatedTask = {
      id: selectedTask.id,
      title: values.title || selectedTask.title,
      description: values.description || selectedTask.description,
      completed: selectedTask.completed
    }
    onEdit(updatedTask)
  }

  useEffect(() => {
    setValues({
      title: selectedTask.title,
      description: selectedTask.description
    });
  }, [selectedTask]);

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='flex justify-between pb-10'>
          <button type='button' onClick={onCancelClick}>
            Cancel
          </button>
          <button type='button'>Edit</button>
        </div>
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

export default EditTodoModal;
