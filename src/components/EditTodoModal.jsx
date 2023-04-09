import React, { useEffect } from 'react';
import TagsBar from './TagsBar';
import { useFormWithValidation } from '../hooks/useForm';

const EditTodoModal = ({ onCancelClick, onEdit, selectedTask, selectedTags, setSelectedTags }) => {
  const { values, setValues, handleChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const updatedTask = {
      id: selectedTask.id,
      title: values.title || selectedTask.title,
      description: values.description || selectedTask.description,
      completed: selectedTask.completed,
      category: selectedTags,
    }
    onEdit(updatedTask)
  }
  console.log(selectedTask)

  useEffect(() => {
    setValues({
      title: selectedTask.title,
      description: selectedTask.description
    });
    setSelectedTags(selectedTask.category)
  }, [selectedTask]);

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='flex justify-between pb-10'>
          <button type='button' onClick={onCancelClick}>
            Cancel
          </button>
          <button type='submit' onSubmit={handleSubmit}>Edit</button>
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
        <TagsBar selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </form>
    </div>
  );
};

export default EditTodoModal;
