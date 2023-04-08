import React, { useState } from 'react';
import { useFormWithValidation } from '../hooks/useForm';

const EditTodoModal = ({ onCancelClick, updateTask, task }) => {
  const [taskData, setTaskData] = useState(task)
  const { values, handleChange, resetForm } = useFormWithValidation();

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setTaskData({...taskData, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateTask(taskData)

  }

  return (
    <div>
      <form className='flex flex-col'>
        <div className='flex justify-between pb-10'>
          <button type='button' onClick={onCancelClick}>
            Cancel
          </button>
          <button>Edit</button>
        </div>
        <input
          onChange={handleInputChange}
          type='text'
          name='title'
          placeholder='Your title...'
          value={taskData.title}
        ></input>
        <label>Description</label>
        <textarea
          onChange={handleInputChange}
          type='text'
          name='description'
          placeholder='Your description..'
          value={taskData.description}
          rows='5'
        ></textarea>
      </form>
    </div>
  );
};

export default EditTodoModal;
