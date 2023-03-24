import React, { useEffect } from "react";
import CategoryBar from "./CategoryBar";
import PriorityBar from "./PriorityBar";
import { useFormWithValidation } from "../hooks/useForm";


export default function EditToDoPopup({ onCancel, onEditTask, onEdit }) {
  const { values, setValues, isValid, handleChange, errors, resetForm } =
    useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    if (isValid) {
      onEdit({
        title: values.title,
        description: values.description,
      })
    }
  }

  function currentTask() {
    const localTasks = JSON.parse(localStorage.getItem('tasks'))
    let currentTask = localTasks.filter(task => task.title);
    console.log(currentTask)
    
    onEditTask({
        title: values.title,
        description: values.description
    })
  }

  useEffect(() => {
   currentTask()
    }, [])
  


  return (
    <div className='w-full py-5 px-3'>
      <form className='form space-y-5' onSubmit={handleSubmit}>
        <div className='flex justify-between'>
          <button type='button' onClick={onCancel}>
            Cancel
          </button>
          <button
            onSubmit={handleSubmit}
            className={`${isValid ? 'bg-gray-500' : 'bg-gray-200'} w-20 text-white rounded-xl py-1`}
            type='submit'
            disabled={!isValid}
          >
            Edit
          </button>
        </div>
        <div className='space-y-3'>
          <h3>Title</h3>
          <input
            placeholder='add a title...'
            type='text'
            name='title'
            minLength='1'
            value={values?.title || ""}
            onChange={handleChange}
            className='bg-gray-100 rounded w-full placeholder:pl-2 placeholder:font-mono placeholder:text-xs outline-none px-2 py-2'
          ></input>
        </div>
        <div className='space-y-3'>
          <h3>Description</h3>
          <textarea
            placeholder='add a description...'
            name='description'
            value={values?.description || ""}
            onChange={handleChange}
            type='text'
            className='bg-gray-100 rounded w-full h-40 placeholder:pl-2 placeholder:font-mono placeholder:text-xs outline-none px-2 py-2'
          ></textarea>
        </div>
        <PriorityBar />
        <div className='space-y-3'>
          <h3>Tags</h3>
          <CategoryBar className={"flex-col space-x-0 space-y-2 px-2 py-2"} />
        </div>
      </form>
    </div>
  );
}