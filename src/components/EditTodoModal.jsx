import React, { useEffect } from 'react';
import TagsBar from './TagsBar';
import PriorityBar from './PriorityBar';
import { useFormWithValidation } from '../hooks/useForm';
import { createdAt } from '../utils/const';

const EditTodoModal = ({
  isModalEditOpen,
  onCancelClick,
  onEdit,
  selectedTask,
  selectedTags,
  setSelectedTags,
  activeTags,
  setActiveTags,
  priority,
  setPriority,
}) => {
  const { values, setValues, handleChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const updatedTask = {
      id: selectedTask.id,
      title: values.title || selectedTask.title,
      description: values.description || selectedTask.description,
      completed: selectedTask.completed,
      category: selectedTags,
      priority: priority,
      createdAt: selectedTask.createdAt,
    };
    onEdit(updatedTask);
  }

  // При открытии попапа задаем значения в поля формы из вызванной Task. Отмечаем Tags поставленные пользователем.
  useEffect(() => {
    setValues({
      title: selectedTask.title,
      description: selectedTask.description,
    });
    setSelectedTags(selectedTask.category);
    const activeTags = selectedTask.category.map((tag) => tag.id);
    setActiveTags(activeTags);
    setPriority(selectedTask.priority);
  }, [selectedTask]);

  return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center`}>
      <div className='bg-black bg-opacity-50 absolute inset-0 backdrop-blur-[3px]' onClick={isModalEditOpen}></div>
      <div className='relative bg-slate-100 w-[500px] h-fit p-10 rounded-2xl shadow-xl'>
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
              className={`bg-green-200 py-2 px-2 rounded-xl font-semibold border border-gray-600`}
              type='button'
              onClick={handleSubmit}
            >
              Edit
            </button>
            {/* { inputsArea } */}
          </div>
          <label className='text-[14px]'>Title</label>
          <input
            className='mt-2 mb-2 py-1 px-2 placeholder:pl-3 placeholder:text-[14px] font-semibold outline-none rounded-lg'
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
            className='mt-2 py- px-2 placeholder:pl-3 placeholder:text-[14px] font-light outline-none rounded-lg'
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
    </div>
  );
};

export default EditTodoModal;
