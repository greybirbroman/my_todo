import React, { useEffect } from 'react';
import TagsBar from './TagsBar';
import PriorityBar from './PriorityBar';
import { useFormWithValidation } from '../hooks/useForm';
import { motion as m, AnimatePresence } from 'framer-motion';
import { buttonVariants } from '../utils/const';

const EditTodoModal = ({
  isModalEditOpen,
  closeEditModal,
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
    <>
      <AnimatePresence>
        {isModalEditOpen && (
          <div
            className={`fixed z-50 inset-0 flex justify-center items-center`}
          >
            <div
              className='bg-black bg-opacity-50 absolute inset-0 backdrop-blur-[3px]'
              onClick={closeEditModal}
            ></div>
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
                    onClick={closeEditModal}
                  >
                    Cancel
                  </m.button>
                  <m.button
                    variants={buttonVariants}
                    whileHover='hover'
                    whileTap='tap'
                    className={`text-gray-700 border-[#6469ff] py-2 px-2 rounded-xl font-semibold border`}
                    type='button'
                    onClick={handleSubmit}
                  >
                    Edit
                  </m.button>
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
    </>
  );
};

export default EditTodoModal;
