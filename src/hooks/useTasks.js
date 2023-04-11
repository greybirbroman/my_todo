import { useState, useEffect, useMemo } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('done')
  
  // Вызывается при первой загрузке страницы 
  // и извлекает задачи из локального хранилища, если они там сохранены.
  // Полученные задачи устанавливаются в состояние tasks, используя функцию setTasks
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks && storedTasks.length) {
      setTasks(storedTasks);
    }
  }, []);
  // Вызывается каждый раз, когда состояние tasks изменяется.
  // Он сохраняет текущее состояние tasks в локальное хранилище, используя функцию localStorage.setItem().
  // Данный эффект обеспечивает сохранение задач после добавления, удаления или изменения задачи.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const filterTasks = useMemo(() => {
    if (filter === 'active') {
      return tasks;
    } else if (filter === 'done') {
      return tasks.filter(task => task.completed);
    } else if (filter === 'work') {
      return tasks.filter(task => task.category === 'work');
    }
  }, [tasks, filter])

  
  const addTask = (task) => {
    setTasks((prevTasks) => {
      const newTasks = [task, ...prevTasks];
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



  return { tasks, addTask, deleteTask, updateTask, toggleTaskStatus, filterTasks };
};

export default useTasks;
