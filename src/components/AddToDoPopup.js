import React, { useEffect } from "react";
import CategoryBar from "./CategoryBar";
import PriorityBar from "./PriorityBar";
import { useFormWithValidation } from "../hooks/useForm";
import { v4 as uuidv4 } from "uuid";

export default function AddToDoPopup({ onCancel, onAdd, onEdit }) {
  const { values, setValues, isValid, handleChange, errors, resetForm } =
    useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    if (isValid) {
      onAdd({
        title: values.title,
        description: values.description,
        id: uuidv4(),
      });
      resetForm();
    }
  }


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
            Add
          </button>
        </div>
        <div className='space-y-3'>
          <h3>Title</h3>
          <input
            placeholder='add a title...'
            type='text'
            name='title'
            minLength='1'
            value={values.title || ''}
            onChange={handleChange}
            className='bg-gray-100 rounded w-full placeholder:pl-2 placeholder:font-mono placeholder:text-xs outline-none px-2 py-2'
          ></input>
        </div>
        <div className='space-y-3'>
          <h3>Description</h3>
          <textarea
            placeholder='add a description...'
            name='description'
            value={values.description || ""}
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
