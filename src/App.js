import './App.css';
import React, { useState, useEffect } from 'react';
import useTasks from './hooks/useTasks';
import { v4 as uuidv4 } from 'uuid';
import AddTaskBar from './components/AddTaskBar';
import AddTodoModal from './components/AddTodoModal';
import EditTodoModal from './components/EditTodoModal';
import TasksList from './components/TasksList';

function App() {
  const { tasks, setTasks, addTask } = useTasks();

  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const [showEditTodoModal, setShowEditTodoModal] = useState(false);

  const addNewTask = ({ title, description }) => {
    const newTask = { id: uuidv4(), title, description, completed: false };
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    toggleModalAddTodo()
  };

  // useEffect(() => {
  //   toggleModalAddTodo();
  // }, [tasks]);

  function toggleModalAddTodo() {
    setShowAddTodoModal(!showAddTodoModal);
  }

  function toggleModalEditTodo() {
    setShowEditTodoModal(!showEditTodoModal);
  }

  return (
    <div className='text-gray-700 py-5 px-10 mx-auto flex flex-col max-w-[992px] min-w-[400px] space-y-3 bg-yellow-50 h-screen'>
      {showAddTodoModal ? (
        <AddTodoModal onCancelClick={toggleModalAddTodo} onAddClick={addNewTask} />
      ) : showEditTodoModal ? (
        <EditTodoModal onCancelClick={toggleModalEditTodo} />
      ) : (
        <>
          <AddTaskBar onAddClick={toggleModalAddTodo} />
          <TasksList tasks={tasks} />
        </>
      )}
    </div>
  );
}

export default App;
