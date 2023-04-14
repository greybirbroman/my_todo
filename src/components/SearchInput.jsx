import React from 'react'

const SearchInput = ({onSearch, searchQuery, setSearchQuery}) => {

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value)
      onSearch(e.target.value)
      };

  return (
      <input
          className='w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#4649ff] focus:border-[#4649ff] focus:border-2 outline-none p-3'
          type='text'
          id='search'
          name='search'
          value={searchQuery}
          placeholder={'find todo...'}
          onChange={handleSearchChange}
          required
          autoComplete='off'
        />
  )
}

export default SearchInput
