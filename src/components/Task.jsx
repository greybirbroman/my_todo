import React, { forwardRef } from 'react';
import CheckboxLabel from './CheckboxLabel';
import TaskSettings from './TaskSettings';
import { motion as m } from 'framer-motion';


const Task = ({ task, onDelete, onToggleStatus, onEdit, setSelectedTask }) => {
  const { description, title, id, category, priority, completed, createdAt } =
    task;

  const options = {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    new Date(createdAt)
  );

  function handleDelete() {
    onDelete(id);
  }

  function handleChangeStatus() {
    onToggleStatus(id);
  }

  function handleEditClick() {
    setSelectedTask(task);
    onEdit(id);
  }

  function getTaskColorByPriority(priority) {
    if (priority === 'medium') return 'bg-[#FFF9DE]';
    if (priority === 'low') return 'bg-green-200';
    return 'bg-red-200';
  }

  return (
    <m.div
      className={`${
        completed ? 'bg-slate-200' : getTaskColorByPriority(priority)
      } rounded-xl py-2 px-3 space-y-3 shadow-md cursor-move`}
      initial={{ opacity: 1 }}
      animate={{ opacity: completed ? 0.5 : 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex justify-between'>
        <h2
          className={`font-semibold text-xl ${completed ? 'line-through' : ''}`}
        >
          {title}
        </h2>
        <TaskSettings onEdit={handleEditClick} onDelete={handleDelete} />
      </div>
      <div>
        <p
          className={`flex flex-wrap text-sm ${
            completed ? 'line-through' : ''
          }`}
        >
          {description}
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <ul className='w-fit flex items-center gap-2'>
          {task.category.length !== 0 && (
            <span className='text-[12px] pr-1'>#tags:</span>
          )}
          {category.map((tag) => (
            <li key={tag.id} className='w-fit list-none font-light'>
              <div className='flex items-center text-[12px] font-normal'>
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border border-gray-600 ${tag.class}`}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-between items-center'>
        <span className='text-[12px] text-gray-600'>{formattedDate}</span>

        <div
          className='flex items-center justify-between cursor-pointer'
          onClick={handleChangeStatus}
        >
          <span className='text-[12px]'>done</span>
          <CheckboxLabel checked={completed}></CheckboxLabel>
        </div>
      </div>
    </m.div>
  );
};

export default Task;
