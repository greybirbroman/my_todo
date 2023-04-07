import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default function Task({
  task,
  deleteTask,
  completeTask,
  openEditTodoPopup
}) {
  const [openTaskSettings, setOpenTaskSettings] = useState(false);


  function toggleSettings() {
    setOpenTaskSettings(!openTaskSettings);
  }



  return (
    <div
      className={`flex flex-col ${
        task.done ? 'bg-gray-100 opacity-70' : 'bg-yellow-200'
      } rounded-xl py-2 px-3 space-y-3`}
    >
      <div className={`flex justify-between ${task.done ? 'line-through' : ''}`}>
        <h2 className='font-semibold text-xl'>{task.title}</h2>
        <div className='w-20'>{task.priority}</div>
        <button type='button' className='w-5 relative' onClick={toggleSettings}>
          {openTaskSettings && (
            <div className=' w-20 h-12 bg-gray-100 absolute -left-[55px] top-5 rounded-xl text-sm font-mono flex flex-col justify-center items-stratch'>
              <button type='button' className='border-b'>
                Edit
              </button>
              <button type='button' onClick={deleteTask(task.id)}>
                Delete
              </button>
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
      <p className={`text-sm ${task.done ? 'line-through' : ''}`}>{task.description}</p>
      <div className='flex justify-between'>
        <ul className='space-x-1 flex'>
          <li>
            <div className='h-5 w-5 bg-yellow-700 rounded-full'></div>
          </li>
          <li>
            <div className='h-5 w-5 bg-red-700 rounded-full'></div>
          </li>
        </ul>
        <div className='space-x-1 flex items-center'>
          <span className={`text-sm font-mono ${!task.done && 'text-gray-500'}`}>
            done
          </span>
          <Checkbox checked={task.done} onClick={() => {}}></Checkbox>
        </div>
      </div>
    </div>
  );
}
