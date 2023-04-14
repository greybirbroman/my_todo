import React from 'react';

const AddTaskBar = ({ onAddClick, allTasks, doneTasks }) => {


  return (
    <div className='flex justify-between items-center sm:text-sm md:text-xl text-2xl py-5 px-5 bg-slate-200 rounded-lg'>
      <h1>todo<span className='text-[#6469ff]'>'s</span></h1>
      <span className='rounded-xl px-2 py-2 bg-slate-200'><span className='text-[#6469ff]'>{doneTasks}</span>/{allTasks} complete</span>
      <button  className='font-normal border-2 border-[#6469ff] px-2 py-2 rounded-xl' onClick={onAddClick}>
        new task
      </button>
    </div>
  );
};

export default AddTaskBar;
