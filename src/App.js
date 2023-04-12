import './App.css';
import React, { useState } from 'react';
import useTasks from './hooks/useTasks';
import AddTaskBar from './components/AddTaskBar';
import AddTodoModal from './components/AddTodoModal';
import EditTodoModal from './components/EditTodoModal';
import TasksList from './components/TasksList';
import FilterSelect from './components/FilterSelect';

function App() {
  
  const [isModalAddOpen, setIsModaAddOpen] = useState(false); // Стейт для Модальных окон.
  const [isModalEditOpen, setIsModaEditOpen] = useState(false); // Стейт для Модальных окон.
  const [selectedTask, setSelectedTask] = useState(null); // Стейт для отслеживания карточки на которой произошло событие.
  const [selectedTags, setSelectedTags] = useState([]);
  const [activeTags, setActiveTags] = useState('');
  const [priority, setPriority] = useState('')
  const [filter, setFilter] = useState('all')
  
  const { tasks, addTask, deleteTask, toggleTaskStatus, updateTask } =
    useTasks();
    
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
    setFilter(filter)
  }

  return (
    <div className='text-gray-700 py-5 px-10 mx-auto flex flex-col max-w-[992px] min-w-[400px] space-y-3 bg-yellow-50'>
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
          <AddTaskBar onAddClick={toggleAddModal} />
          <FilterSelect onFilter={handleFilterTasks} filter={filter} setFilter={setFilter}/>
          <TasksList
            tasks={tasks}
            onDelete={deleteTask}
            onToggleTaskStatus={toggleTaskStatus}
            onEdit={toggleEditModal}
            setSelectedTask={setSelectedTask}
            selectedTags={selectedTags}
            priority={priority}
            filter={filter}
          />
        </>
      )}
    </div>
  );
}

export default App;
