import React, { useState } from 'react';
import CheckboxLabel from './CheckboxLabel';
import { useFormWithValidation } from '../hooks/useForm';

const Task = ({ task, onDelete, onToggleStatus, onEdit, setSelectedTask }) => {
  const { description, title, id, category, priority } = task;
  const [openTaskSettings, setOpenTaskSettings] = useState(false);  
  console.log(task.completed);
 

  function toggleSettings() {
    setOpenTaskSettings(!openTaskSettings);
  }

  function handleDelete() {
    onDelete(id)
  }

  function handleChangeStatus() {
    onToggleStatus(id)
  }

  function handleEditClick() {
    setSelectedTask(task)
    onEdit(id)
  }

 function getTaskColorByPriority(priority) {
    if(priority === 'medium') return 'bg-yellow-200'
    if(priority === 'low') return 'bg-green-200'
    return 'bg-red-200'
  }

  return (
    <li
      className={`w-full ${
        task.completed ? 'bg-gray-100 opacity-70' : getTaskColorByPriority(priority)
      } rounded-xl py-2 px-3 space-y-3 border border-gray-600 shadow-lg`}
    >
      <div
        className={`flex justify-between ${
          task.completed ? 'line-through' : ''
        }`}
      >
        <h2 className='font-semibold text-xl'>{title}</h2>
        <button type='button' className='w-5 relative' onClick={toggleSettings}>
          {openTaskSettings && (
            <div className=' w-20 h-12 bg-gray-100 absolute -left-[55px] top-5 rounded-xl text-sm font-mono flex flex-col justify-center items-stratch'>
              <button type='button' className='border-b' onClick={handleEditClick}>
                Edit
              </button>
              <button type='button' onClick={handleDelete}>Delete</button>
            </div>
          )}

          <button type='button' className='w-5' onClick={toggleSettings}>
            <svg
              className='fill-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path d='M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z' />
            </svg>
          </button>
        </button>
      </div>
      <div>
      <p className={`flex flex-wrap text-sm ${task.completed ? 'line-through' : ''}`}>
        {description}
      </p>
      </div>
      <div className='flex justify-between'>
        <ul className='w-fit flex'>
            {category.map((tag) => (
              <li key={tag.id} className='w-fit list-none py-1 px-1'>
              <div className='flex items-center gap-1'>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${tag.class}`}></div>
                  <p className={`text-[14px] ${''}`}>{tag.name}</p>
              </div>
             </li>
            ))}
        </ul>
        <div 
        className='space-x-1 flex items-center'
        >
          <span
            className={`text-sm font-mono ${
              !task.completed && 'text-gray-500'
            }`}
          >
            done
          </span>
          <CheckboxLabel checked={task.completed} onClick={handleChangeStatus}></CheckboxLabel>
        </div>
      </div>
    </li>
  );
};

export default Task;
