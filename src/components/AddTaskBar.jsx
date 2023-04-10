import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const AddTaskBar = ({onAddClick}) => {
  return (
    <div className='flex justify-between text-2xl'>
      <h1>todo's</h1>
      <Button variant='contained' size='medium' endIcon={<SendIcon />} onClick={onAddClick}>New Task</Button>
    </div>
  )
}

export default AddTaskBar
