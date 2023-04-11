import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const AddTaskBar = ({ onAddClick }) => {
  return (
    <div className='flex justify-between text-2xl'>
      <h1>todo's</h1>
      <Button
        sx={{ fontFamily: 'poppins', border: '1px solid gray' }}
        variant='elevated'
        color='primary'
        size='medium'
        disabled={false}
        endIcon={<SendIcon />}
        onClick={onAddClick}
      >
        New Task
      </Button>
    </div>
  );
};

export default AddTaskBar;
