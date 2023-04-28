import React from 'react';

const TextArea = ({ label, placeholder, type, name, onChange, value }) => {
  return (
    <>
      <label className='text-[14px] mb-2'>{label}</label>
      <textarea
        className='w-full border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-[#4649ff] focus:border-[#4649ff] focus:border outline-none p-3'
        onChange={onChange}
        type={type || 'text'}
        name={name}
        placeholder={placeholder}
        value={value}
        rows='5'
      ></textarea>
    </>
  );
};

export default TextArea;
