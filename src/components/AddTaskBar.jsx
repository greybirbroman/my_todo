import React from 'react'

const AddTaskBar = ({onAddClick}) => {
  return (
    <div className='flex justify-between text-2xl'>
      <h1>todo's</h1>
      <button type='button' onClick={onAddClick}>+</button>
    </div>
  )
}

export default AddTaskBar
