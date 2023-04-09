import './App.css';
import React, { useState, useEffect } from 'react';
import useTasks from './hooks/useTasks';
import { v4 as uuidv4 } from 'uuid';
import AddTaskBar from './components/AddTaskBar';
import AddTodoModal from './components/AddTodoModal';
import EditTodoModal from './components/EditTodoModal';
import TasksList from './components/TasksList';

function App() {
  const { tasks, addTask, deleteTask, toggleTaskStatus, updateTask } = useTasks();

  const [isModalAddOpen, setIsModaAddOpen] = useState(false); // Стейт для Модальных окон.
  const [isModalEditOpen, setIsModaEditOpen] = useState(false); // Стейт для Модальных окон.

  const [selectedTask, setSelectedTask] = useState(null); // Стейт для отслеживания карточки на которой произошло событие.

  const addNewTask = ({ title, description }) => {
    const newTask = { id: uuidv4(), title, description, completed: false };
    addTask(newTask);
    toggleAddModal();
  };

  const handleEditClick = (id) => {
    toggleEditModal();
    const updateTask = {
      ...selectedTask,
      title: selectedTask.title,

    }
    updateTask(selectedTask);
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
        <AddTodoModal onCancelClick={toggleAddModal} onAddClick={addNewTask} />
      )}

      {isModalEditOpen && (
        <EditTodoModal onCancelClick={toggleEditModal} onEdit={handleEditClick} task={selectedTask} />
      )}
      {!isModalAddOpen && !isModalEditOpen && (
        <>
          <AddTaskBar onAddClick={toggleAddModal} />
          <TasksList
            tasks={tasks}
            onDelete={deleteTask}
            onToggleTaskStatus={toggleTaskStatus}
            onEdit={handleEditClick}
            setSelectedTask={setSelectedTask}
          />
        </>
      )}
    </div>
  );
}

export default App;
