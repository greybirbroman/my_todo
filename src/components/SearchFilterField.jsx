import React from 'react'
import FilterSelect from './FilterSelect'
import SearchInput from './SearchInput'

const SearchFilterField = ({ onFilter, filter, setFilter }) => {
  return (
    <div className='flex gap-2'>
      <SearchInput />
      <FilterSelect onFilter={onFilter} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default SearchFilterField
