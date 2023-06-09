import React from 'react';
import {motion as m } from 'framer-motion';
import { buttonVariants } from '../utils/const';

const AddTaskBar = ({ onAddClick, allTasks, doneTasks }) => {


  return (
    <div className='flex justify-between items-center sm:text-sm md:text-xl text-2xl py-5 px-5 rounded-lg shadow-md'>
      <h1 className='text-3xl '>todo<span className='text-[#6469ff]'>'s</span></h1>
      <span className='rounded-xl px-2 py-2 bg-slate-50 shadow-inner'><span className='text-[#6469ff]'>{doneTasks}</span>/{allTasks} complete</span>
      <m.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className='font-normal px-2 py-2 rounded-xl shadow-md bg-slate-50 text-[#6469ff] hover:text-white hover:bg-[#6469ff]' onClick={onAddClick}>
        new task
      </m.button>
    </div>
  );
};

export default AddTaskBar;
