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
    <Box sx={{ minWidth: 100, fontFamily: 'poppins', fontSize: '16px'}}>
      <FormControl size='medium' fullWidth>
        <InputLabel id='demo-simple-select-label'>filter</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={filter}
          label='Filter'
          onChange={handleChange}
        >
          <MenuItem value='all'>all</MenuItem>
          <MenuItem value='active'>active</MenuItem>
          <MenuItem value='completed'>done</MenuItem>
          <MenuItem value='low'>priority: low</MenuItem>
          <MenuItem value='medium'>priority: medium</MenuItem>
          <MenuItem value='high'>priority: high</MenuItem>

          
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
