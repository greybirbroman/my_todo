import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxLabel = ({ checked = false, onClick }) => {
  return (
  <>
      {!checked ? (
        <FormControlLabel onClick={onClick} checked={checked} control={<Checkbox />}/>
      ) : (
        <FormControlLabel onClick={onClick} checked={checked} disabled control={<Checkbox />} />
      )}
   </>
  );
}

export default CheckboxLabel