import React, { useEffect, useState } from 'react';
import { useFormWithValidation } from '../hooks/useForm';

const EditTodoModal = ({ onCancelClick, onSave, selectedTask }) => {
  const { values, setValues, handleChange } = useFormWithValidation();
  console.log(selectedTask)

  function handleSubmit(e) {
    e.preventDefault();
    onSave({
      id: selectedTask.id,
      title: selectedTask.title,
      description: selectedTask.description,
      completed: selectedTask.completed,
    });
  }

  useEffect(() => {
    setValues({
      title: selectedTask.title,
    });
  }, []);

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='flex justify-between pb-10'>
          <button type='button' onClick={onCancelClick}>
            Cancel
          </button>
          <button>Edit</button>
        </div>
        <input
          onChange={handleChange}
          type='text'
          name='title'
          placeholder='Your title...'
          value={values.title}
        ></input>
        <label>Description</label>
        <textarea
          onChange={handleChange}
          type='text'
          name='description'
          placeholder='Your description..'
          value={values.description}
          rows='5'
        ></textarea>
      </form>
    </div>
  );
};

export default EditTodoModal;
