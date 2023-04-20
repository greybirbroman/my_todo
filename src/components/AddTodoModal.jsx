import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormWithValidation } from '../hooks/useForm';
import TagsBar from './TagsBar';
import PriorityBar from './PriorityBar';
import { AnimatePresence, motion as m } from 'framer-motion';
import { buttonVariants } from '../utils/const';



const AddTodoModal = ({
  closeAddModal,
  isModalAddOpen,
  onAddClick,
  selectedTags,
  setSelectedTags,
  activeTags,
  setActiveTags,
  priority,
  setPriority,
}) => {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();

  // При открытии попапа сбрасываем состояние тегов и приоритет задачи
  useEffect(() => {
    setSelectedTags([]);
    setActiveTags([]);
    setPriority('low');
  }, [isModalAddOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      completed: false,
      category: selectedTags,
      priority: priority,
      createdAt: new Date(),
    };
    onAddClick(newTask);
    resetForm();
  }

  return (
    <>
      <AnimatePresence>
        {isModalAddOpen && (
          <div
            className={`z-50 inset-0 flex justify-center items-center fixed`}
          >
            <m.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1}}
             exit={{ opacity: 0 }}
              className='bg-black bg-opacity-50 absolute inset-0 backdrop-blur-[3px]'
              onClick={closeAddModal}
            ></m.div>
            <m.div
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -150 }}
              transition={{ duration: 0.3 }}
              className='relative bg-slate-100 w-[500px] h-fit p-10 rounded-2xl shadow-xl'
            >
              <form className='flex flex-col' onSubmit={handleSubmit}>
                {/* { buttonsArea } */}
                <div className='flex justify-between pb-10'>
                  <m.button
                    variants={buttonVariants}
                    whileHover='hover'
                    whileTap='tap'
                    className='font-semibold'
                    type='button'
                    onClick={closeAddModal}
                  >
                    Cancel
                  </m.button>
                  <m.button
                    variants={isValid && buttonVariants}
                    whileHover='hover'
                    whileTap='tap'
                    className={`${
                      !isValid
                        ? 'text-gray-300 border-gray-300'
                        : 'text-gray-700 border-[#6469ff]'
                    } py-2 px-2 rounded-xl font-semibold border`}
                    type='button'
                    onClick={handleSubmit}
                    disabled={!isValid}
                  >
                    Add
                  </m.button>
                  {/* { inputsArea } */}
                </div>
                <label className='text-[14px] mb-2'>Title</label>
                <input
                  className='mb-2 w-full border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-[#4649ff] focus:border-[#4649ff] focus:border outline-none p-3'
                  onChange={handleChange}
                  type='text'
                  name='title'
                  placeholder='Your title...'
                  value={values.title || ''}
                  minLength={2}
                  required
                ></input>
                <label className='text-[14px] mb-2'>Description</label>
                <textarea
                  className='w-full border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-[#4649ff] focus:border-[#4649ff] focus:border outline-none p-3'
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
            </m.div>
          </div>
        )}
      </AnimatePresence>
      {/* <ToastContainer/> */}
    </>
  );
};

export default AddTodoModal;
