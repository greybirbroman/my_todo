import './App.css';
import React, { useState, useEffect } from 'react';
import useTasks from './hooks/useTasks';
import { v4 as uuidv4 } from 'uuid';
import AddTaskBar from './components/AddTaskBar';
import AddTodoModal from './components/AddTodoModal';
import EditTodoModal from './components/EditTodoModal';
import TasksList from './components/TasksList';

function App() {

  const { tasks, addTask, deleteTask, toggleTaskStatus } = useTasks();

  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const [showEditTodoModal, setShowEditTodoModal] = useState(false);

  const addNewTask = ({ title, description }) => {
    const newTask = { id: uuidv4(), title, description, completed: false };
    addTask(newTask)
    toggleModal()
  };

  

  function toggleModal() {
    setShowAddTodoModal(!showAddTodoModal);
    setShowEditTodoModal(!showEditTodoModal);
  }


  return (
    <div className='text-gray-700 py-5 px-10 mx-auto flex flex-col max-w-[992px] min-w-[400px] space-y-3 bg-yellow-50 h-full'>
      {showAddTodoModal ? (
        <AddTodoModal 
        onCancelClick={toggleModal} 
        onAddClick={addNewTask} />
      ) : showEditTodoModal ? (
        <EditTodoModal 
        onCancelClick={toggleModal}
        />
      ) : (
        <>
          <AddTaskBar onAddClick={toggleModal} />
          <TasksList 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggleTaskStatus={toggleTaskStatus}/>
        </>
      )}
    </div>
  );
}

export default App;
