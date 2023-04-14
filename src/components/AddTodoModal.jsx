import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormWithValidation } from '../hooks/useForm';
import TagsBar from './TagsBar';
import PriorityBar from './PriorityBar';
import { motion as m, AnimatePresence } from 'framer-motion';

const AddTodoModal = ({
  isModalAddOpen,
  setIsModalAddOpen,
  onAddClick,
  selectedTags,
  setSelectedTags,
  activeTags,
  setActiveTags,
  priority,
  setPriority,
}) => {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();

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

  function handleCloseModal() {
    setIsModalAddOpen(false);
  }

  // При открытии попапа обнуляем состояние Tags.
  useEffect(() => {
    setSelectedTags([]);
    setActiveTags([]);
    setPriority('low');
  }, []);

  return (
    <>
      <AnimatePresence>
        <div className={`fixed z-50 inset-0 flex justify-center items-center`}>
          <div
            className='bg-black bg-opacity-50 absolute inset-0 backdrop-blur-[3px]'
            onClick={handleCloseModal}
          ></div>
          <m.div
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -150,
              transition: { type: 'spring', stiffness: 300, damping: 30 },
            }}
            transition={{ duration: 0.3 }}
            className='relative bg-slate-100 w-[500px] h-fit p-10 rounded-2xl shadow-xl'
          >
            <form className='flex flex-col' onSubmit={handleSubmit}>
              {/* { buttonsArea } */}
              <div className='flex justify-between pb-10'>
                <button
                  className='font-semibold'
                  type='button'
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
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
                </button>
                {/* { inputsArea } */}
              </div>
              <label className='text-[14px] mb-2'>Title</label>
              <input
                className='w-full border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-[#4649ff] focus:border-[#4649ff] focus:border outline-none p-3'
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
      </AnimatePresence>
    </>
  );
};

export default AddTodoModal;
