import React, { useEffect, useState } from 'react';
import { useFormWithValidation } from '../hooks/useForm';

const EditTodoModal = ({ onCancelClick, onSave, task }) => {
  const { values, setValues, handleChange } = useFormWithValidation();

  console.log(task)

  function handleSubmit(e) {
    e.preventDefault();
    onSave({
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
    });
  }

  useEffect(() => {
    setValues({
      title: task.title,
      description: task.description
    });
  }, [task]);

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
