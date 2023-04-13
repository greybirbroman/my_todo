import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const AddTaskBar = ({ onAddClick, allTasks, doneTasks }) => {

  return (
    <div className='flex justify-between items-center text-2xl pb-5'>
      <h1>todo's</h1>
      <span className='rounded-xl px-2 py-2'>{doneTasks}/{allTasks} complete</span>
      <Button
        sx={{ fontFamily: 'poppins', border: '1px solid gray' }}
        variant='outlined'
        color='success'
        size='small'
        disabled={false}
        endIcon={<SendIcon />}
        onClick={onAddClick}
      >
        new task
      </Button>
    </div>
  );
};

export default AddTaskBar;
