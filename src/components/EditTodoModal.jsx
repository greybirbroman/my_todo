import React from 'react'

const EditTodoModal = ({onCancelClick}) => {
  return (
    <div>
      <form className='flex flex-col'>
        <div className='flex justify-between pb-10'>
            <button type='button' onClick={onCancelClick}>Cancel</button>
            <button>Edit</button>
        </div>
        <label>Title</label>
        <input></input>
        <label>Description</label>
        <textarea rows='5' ></textarea>
      </form>
    </div>
  )
}

export default EditTodoModal
