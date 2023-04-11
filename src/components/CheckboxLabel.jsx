import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxLabel = ({ checked = false, onClick }) => {
  return (
    <Checkbox
      
      onClick={onClick}
      checked={checked}
      control={<Checkbox />}
      defaultChecked 
      color="success"
    />
  );
};

export default CheckboxLabel;
