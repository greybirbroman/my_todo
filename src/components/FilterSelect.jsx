import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterSelect = ({ onFilter, filter, setFilter }) => {
  console.log(filter);

  const handleChange = (event) => {
    setFilter(event.target.value);
    handleFilter(event.target.value);
  };

  const handleFilter = (selectedFilter) => {
    onFilter(selectedFilter);
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl size='small' fullWidth>
        <InputLabel id='demo-simple-select-label'>Filter</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={filter}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value='active'>Active</MenuItem>
          <MenuItem value='done'>Done</MenuItem>
          <MenuItem value='work'>Work</MenuItem>
          <MenuItem value='study'>Study</MenuItem>
          <MenuItem value='entertainment'>Entertainment</MenuItem>
          <MenuItem value='shopping'>Shopping</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
