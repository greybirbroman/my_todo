import React, { useEffect } from 'react';
import { motion as m } from 'framer-motion';
import { buttonVariants } from '../utils/const';

const Form = ({ onSubmit, onCloseModal, submitButtonName, isValid, children, isDisabled }) => {

  useEffect(() => {
    console.log("isDisabled changed to:", isDisabled);
  }, [isDisabled]); 
  
  return (
    <form className='flex flex-col' onSubmit={onSubmit}>
      <div className='flex justify-between pb-10'>
        <m.button
          variants={buttonVariants}
          whileHover='hover'
          whileTap='tap'
          className='font-semibold'
          type='button'
          onClick={onCloseModal}
        >
          Cancel
        </m.button>
        <m.button
          variants={isValid && buttonVariants}
          whileHover='hover'
          whileTap='tap'
          className={`${
            !isValid
              ? 'text-gray-300 border-gray-300'
              : 'text-gray-700 border-[#6469ff]'
          } py-2 px-2 rounded-xl font-semibold border`}
          type='sumbit'
          disabled={!isValid || isDisabled}
        >
          {submitButtonName}
        </m.button>
      </div>
        {children}
    </form>
  );
};

export default Form;
