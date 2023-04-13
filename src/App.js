import './App.css';
import React, { useState, useEffect } from 'react';
import useTasks from './hooks/useTasks';
import AddTaskBar from './components/AddTaskBar';
import AddTodoModal from './components/AddTodoModal';
import EditTodoModal from './components/EditTodoModal';
import TasksList from './components/TasksList';
import TagsFilterBar from './components/TagsFilterBar';
import SearchFilterField from './components/SearchFilterField';

function App() {
  const { tasks, addTask, deleteTask, toggleTaskStatus, updateTask } = useTasks();
  const [isModalAddOpen, setIsModaAddOpen] = useState(false); // Стейт для Модальных окон.
  const [isModalEditOpen, setIsModaEditOpen] = useState(false); // Стейт для Модальных окон.
  const [selectedTask, setSelectedTask] = useState(null); // Стейт для отслеживания карточки на которой произошло событие.
  const [selectedTags, setSelectedTags] = useState([]); // Стейт хранения выбранных категорий 
  const [activeTags, setActiveTags] = useState(''); 
  const [priority, setPriority] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTasks, setSearchTasks] = useState(tasks);
  const allTasks = tasks.length
  const doneTasks = tasks.filter(task => task.completed).length

// Этот эффект использует функцию setTimeout,
// чтобы задержать обновление результатов поиска на 500 миллисекунд
// после изменения searchQuery. Кроме того,
// эффект очищает таймаут, если компонент размонтируется
// или если searchQuery изменяется раньше, чем 500 миллисекунд. 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredTasks = tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchTasks(filteredTasks);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  const addNewTask = (newTask) => {
    addTask(newTask);
    toggleAddModal();
  };

  const editTask = (editedTask) => {
    updateTask(editedTask);
    toggleEditModal();
  };

  function toggleAddModal() {
    setIsModaAddOpen(!isModalAddOpen);
  }

  function toggleEditModal() {
    setIsModaEditOpen(!isModalEditOpen);
  }

  function handleFilterTasks(filter) {
    setFilter(filter);
  }

  function handleSearchQueryChange(searchQuery) {
    setSearchQuery(searchQuery);
  }

  function handleFilterTags(filter, selectedTags) {
    setFilter(filter);
    setSelectedTags(selectedTags);
  }

  return (
    <div className='text-gray-700 py-5 px-10 mx-auto flex flex-col max-w-[992px] min-w-[400px] space-y-3 bg-white'>
      {isModalAddOpen && (
        <AddTodoModal
          onCancelClick={toggleAddModal}
          onAddClick={addNewTask}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          activeTags={activeTags}
          setActiveTags={setActiveTags}
          priority={priority}
          setPriority={setPriority}
        />
      )}

      {isModalEditOpen && (
        <EditTodoModal
          onCancelClick={toggleEditModal}
          onEdit={editTask}
          selectedTask={selectedTask}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          activeTags={activeTags}
          setActiveTags={setActiveTags}
          priority={priority}
          setPriority={setPriority}
        />
      )}
      {!isModalAddOpen && !isModalEditOpen && (
        <>
          <AddTaskBar onAddClick={toggleAddModal} allTasks={allTasks} doneTasks={doneTasks} />
          <SearchFilterField
            onFilter={handleFilterTasks}
            filter={filter}
            setFilter={setFilter}
            onSearch={handleSearchQueryChange}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <TagsFilterBar selectedTags={selectedTags} onTagFilter={handleFilterTags}/>
          <TasksList
            tasks={searchQuery !== '' ? searchTasks : tasks} // Если поисковая строка не пустая
            onDelete={deleteTask}                            // отдаем на рендер массив найденых задач.
            onToggleTaskStatus={toggleTaskStatus}
            onEdit={toggleEditModal}
            setSelectedTask={setSelectedTask}
            selectedTags={selectedTags}
            priority={priority}
            filter={filter}
            searchText={searchQuery}
          />
        </>
      )}
    </div>
  );
}

export default App;
