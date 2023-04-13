import React from 'react'
import FilterSelect from './FilterSelect'
import SearchInput from './SearchInput'

const SearchFilterField = ({ onFilter, filter, setFilter, onSearch }) => {
  return (
    <div className='flex gap-2'>
      <SearchInput onSearch={onSearch}/>
      <FilterSelect onFilter={onFilter} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default SearchFilterField
