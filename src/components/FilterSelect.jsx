import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterSelect = ({ onFilter }) => {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFilter = () => {
    onFilter(category)
  }
 
  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl size='small' fullWidth>
        <InputLabel id='demo-simple-select-label'>Filter</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={category}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem onClick={handleFilter} value={10}>Active</MenuItem>
          <MenuItem onClick={handleFilter} value={20}>Done</MenuItem>
          <MenuItem onClick={handleFilter} value={30}>Work</MenuItem>
          <MenuItem onClick={handleFilter} value={30}>Study</MenuItem>
          <MenuItem onClick={handleFilter} value={30}>Entertainment</MenuItem>
          <MenuItem onClick={handleFilter} value={30}>Shopping</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
