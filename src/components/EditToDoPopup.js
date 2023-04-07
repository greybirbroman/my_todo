import React, { useEffect, useRef } from 'react';
import CategoryBar from './CategoryBar';
import PriorityBar from './PriorityBar';
import { useFormWithValidation } from '../hooks/useForm';

export default function EditToDoPopup({ onCancel, onEdit }) {

  
  const { values, setValues, isValid, handleChange } =
    useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
      onEdit({
        title: values.title,
        description: values.description,
      });
  }

  return (
    <div className='w-full py-5 px-3'>
      <form className='form space-y-5' onSubmit={handleSubmit}>
        <div className='flex justify-between'>
          <button type='button' onClick={onCancel}>
            Cancel
          </button>
          <button
            className={`${
              isValid ? 'bg-gray-500' : 'bg-gray-200'
            } w-20 text-white rounded-xl py-1`}
            type='submit'
            disabled={!isValid}
            onClick={onEdit}
          >
            Edit
          </button>
        </div>
        <div className='space-y-3'>
          <label htmlFor='title'>Title</label>
          <input
            placeholder='add a title...'
            type='text'
            name='title'
            id='title'
            minLength='1'
            value={values.title}
            onChange={handleChange}
            autoComplete='off'
            className='bg-gray-100 rounded w-full placeholder:pl-2 placeholder:font-mono placeholder:text-xs outline-none px-2 py-2'
          ></input>
        </div>
        <div className='space-y-3'>
          <label htmlFor='description'>Description</label>
          <textarea
            placeholder='add a description...'
            type='text'
            name='description'
            id='description'
            value={values.description}
            onChange={handleChange}
            autoComplete='off'
            className='bg-gray-100 rounded w-full h-40 placeholder:pl-2 placeholder:font-mono placeholder:text-xs outline-none px-2 py-2'
          ></textarea>
        </div>
        <PriorityBar />
        <div className='space-y-3'>
          <h3>Tags</h3>
          <CategoryBar className={'flex-col space-x-0 space-y-2 px-2 py-2'} />
        </div>
      </form>
    </div>
  );
}
