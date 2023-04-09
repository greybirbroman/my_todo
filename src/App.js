import './App.css';
import React, { useState } from 'react';
import useTasks from './hooks/useTasks';
import AddTaskBar from './components/AddTaskBar';
import AddTodoModal from './components/AddTodoModal';
import EditTodoModal from './components/EditTodoModal';
import TasksList from './components/TasksList';
import TagsBar from './components/TagsBar';
import TagsList from './components/TagsList';

function App() {
  const { tasks, addTask, deleteTask, toggleTaskStatus, updateTask } =
    useTasks();

  const [isModalAddOpen, setIsModaAddOpen] = useState(false); // Стейт для Модальных окон.
  const [isModalEditOpen, setIsModaEditOpen] = useState(false); // Стейт для Модальных окон.
  const [selectedTask, setSelectedTask] = useState(null); // Стейт для отслеживания карточки на которой произошло событие.
  const [selectedTags, setSelectedTags] = useState([]);

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

  return (
    <div className='text-gray-700 py-5 px-10 mx-auto flex flex-col max-w-[992px] min-w-[400px] space-y-3 bg-yellow-50 h-full'>
      {isModalAddOpen && (
        <AddTodoModal
          onCancelClick={toggleAddModal}
          onAddClick={addNewTask}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      )}

      {isModalEditOpen && (
        <EditTodoModal
          onCancelClick={toggleEditModal}
          onEdit={editTask}
          selectedTask={selectedTask}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      )}
      {!isModalAddOpen && !isModalEditOpen && (
        <>
          <AddTaskBar onAddClick={toggleAddModal} />
          <TasksList
            tasks={tasks}
            onDelete={deleteTask}
            onToggleTaskStatus={toggleTaskStatus}
            onEdit={toggleEditModal}
            setSelectedTask={setSelectedTask}
            selectedTags={selectedTags}
          />
        </>
      )}
    </div>
  );
}

export default App;
