import React, { useState } from 'react';
import CheckboxLabel from './CheckboxLabel';
import { useFormWithValidation } from '../hooks/useForm';
import TaskSettings from './TaskSettings';

const Task = ({ task, onDelete, onToggleStatus, onEdit, setSelectedTask }) => {
  const { description, title, id, category, priority } = task;
console.log(task); 
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
    if(priority === 'medium') return 'bg-[#FFF9DE]'
    if(priority === 'low') return 'bg-green-200'
    return 'bg-red-200'
  }

  return (
    <li
      className={`w-full ${
        task.completed ? 'bg-gray-100 opacity-70' : getTaskColorByPriority(priority)
      } rounded-xl py-2 px-3 space-y-3 shadow-md`}
    >
      <div
        className={`flex justify-between ${
          task.completed ? 'line-through' : ''
        }`}
      >
        <h2 className='font-semibold text-xl'>{title}</h2>
        <TaskSettings onEdit={handleEditClick} onDelete={handleDelete}/>
      </div>
      <div>
      <p className={`flex flex-wrap text-sm ${task.completed ? 'line-through' : ''}`}>
        {description}
      </p>
      </div>
      <div className='flex justify-between items-center'>
        <ul className='w-fit flex'>
            {category.map((tag) => (
              <li key={tag.id} className='w-fit list-none py-1 px-1 font-light'>
              <div className='flex items-center gap-1'>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${tag.class}`}></div>
                  {/* <p className={`text-[14px] ${''}`}>{tag.name}</p> */}
              </div>
             </li>
            ))}
        </ul>
        <div 
        className='flex items-center justify-between cursor-pointer'
        onClick={handleChangeStatus}
        >
          <span
            className={`text-[14px] ${
              task.completed ? 'text-gray-500' : 'text-gray-700'
            }`}
          >
            done
          </span>
          <CheckboxLabel checked={task.completed}></CheckboxLabel>
        </div>
      </div>
    </li>
  );
};

export default Task;
