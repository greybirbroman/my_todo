import React from 'react'
import FilterSelect from './FilterSelect'
import SearchInput from './SearchInput'

const SearchFilterField = ({ onFilter, filter, setFilter, onSearch, searchQuery, setSearchQuery }) => {
  return (
    <div className='flex gap-2'>
      <SearchInput onSearch={onSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <FilterSelect onFilter={onFilter} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default SearchFilterField
