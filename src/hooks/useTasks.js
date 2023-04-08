import { useState, useEffect} from 'react';


const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks && storedTasks.length) {
      setTasks(storedTasks);
    }
  }, []);

  const addTask = (task) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks, task];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task) => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((task) => task.id === updatedTask.id);
      const newTasks = [...prevTasks];
      newTasks[index] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return { tasks, addTask, deleteTask, updateTask, toggleTaskStatus };
};

export default useTasks;
