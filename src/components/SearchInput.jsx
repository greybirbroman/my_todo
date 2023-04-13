import React, { useState } from 'react'
import useTasks from '../hooks/useTasks'
import { useFormWithValidation } from '../hooks/useForm';

const SearchInput = ({onSearch, searchText, setSearchText}) => {
    
    const [searchResults, setSearchResults] = useState(null);
    const [searchTimeout, setSearchTimeout] = useState(null);
    const { tasks } = useTasks()
    const { values, setValues } = useFormWithValidation()

    const handleSearchChange = (e) => {

      const { value } = e.target.value
      setSearchText(value)
      onSearch(value)
        // clearTimeout(searchTimeout);
        // setValues({
        //   search: e.target.value
        // });
    
        // setSearchTimeout(
        //   setTimeout(() => {
        //     const searchResults = tasks.filter(
        //       (task) =>
        //       task.title.toLowerCase().includes(searchText.toLowerCase()) || // ищем по совпадении в имени и названии запроса
        //       task.description.toLowerCase().includes(searchText.toLowerCase())
        //     );
        //     setSearchResults(searchResults);
        //   }, 500) // оттягиваем запрос на поиск если пользователь решит добавить к запросу что-то еще
        // );
      };

  return (
    <input
        className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block p-3'
        type='text'
        id='search'
        name='search'
        value={searchText}
        placeholder={'task...'}
        onChange={handleSearchChange}
        required
      />
  )
}

export default SearchInput
