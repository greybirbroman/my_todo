import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterSelect = ({ onFilter, filter, setFilter }) => {

  const handleChange = (event) => {
    setFilter(event.target.value);
    handleFilter(event.target.value);
  };

  const handleFilter = (filter) => {
    onFilter(filter);
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl size='small' fullWidth>
        <InputLabel id='demo-simple-select-label'>Filter</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={filter}
          label='Filter'
          onChange={handleChange}
        >
          <MenuItem value='all'>All</MenuItem>
          <MenuItem value='active'>Active</MenuItem>
          <MenuItem value='completed'>Done</MenuItem>
          <MenuItem value='low'>Low priority</MenuItem>
          <MenuItem value='work'>Work</MenuItem>

          
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
