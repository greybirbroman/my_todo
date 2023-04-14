import { useMemo, useState } from 'react';
import Task from './Task';
import noTask from '../images/no-task.png';
import {motion as m } from 'framer-motion';


export const TasksList = ({
  tasks,
  onDelete,
  onToggleTaskStatus,
  onEdit,
  setSelectedTask,
  priority,
  filter,
  selectedFilterTags
}) => {

  const [updatedTasks, setUpdatedTasks] = useState(tasks);
  

  const filteredTasks = useMemo(() => {
    let filtered = tasks

    if(selectedFilterTags.length) {
      filtered = filtered.filter(task => {
        const taskTags = task.category?.map(tag => tag.name) || [];
        return selectedFilterTags.some(tag => taskTags.includes(tag));
      });
    }
    switch (filter) {
      case 'all':
        return filtered;
      case 'active':
        return filtered.filter((task) => !task.completed);
      case 'completed':
        return filtered.filter((task) => task.completed);
      case 'low':
        return filtered.filter((task) => task.priority === 'low');
        case 'medium':
        return filtered.filter((task) => task.priority === 'medium');
        case 'high':
        return filtered.filter((task) => task.priority === 'high');
      default:
        return filtered;
    }
  }, [tasks, filter, selectedFilterTags]);

  const handleToggleTaskStatus = (id) => {
    const updatedTasksLocal = filteredTasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    onToggleTaskStatus(id);
    tasks.map((task, index) => {
      if (task.id === id) {
        tasks[index].completed = !task.completed
      }
      return task;
    });
    setUpdatedTasks(updatedTasksLocal);
    localStorage.setItem("tasks", JSON.stringify(updatedTasksLocal));
  }

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    // Если пользователь отпустил элемент за пределами списка задач, то ничего не делаем.
    if (!destination) {
      return;
    }
    // Копируем массив задач для его изменения.
    const updatedTasks = [...filteredTasks];
    console.log(updatedTasks)

    // Удаляем задачу из старой позиции и вставляем ее в новую позицию.
    const [removedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, removedTask);

    // Обновляем состояние задач и сохраняем его в localStorage.
    setUpdatedTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
  const renderImage = () => {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <img src={noTask} alt='no_tasks' className='object-cover' />
      </div>
    );
  }

  const renderTasks = (filteredTasks) => {
    if (filteredTasks.length) {
      return filteredTasks.map((task) => (
        <m.div
        key={task.id}
        drag
        dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}
        dragElastic={0.5}
        onDragEnd={handleDragEnd}
        >
        <Task
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={handleToggleTaskStatus}
          setSelectedTask={setSelectedTask}
          selectedTags={task.category}
          priority={priority}
        />
        </m.div>
      ));
    }
  };

  return (
    <>
    {!filteredTasks.length && renderImage()}
      <ul className='w-full h-fit grid md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4'>
        {renderTasks(filteredTasks)}
      </ul>
      </>
  );
};

export default TasksList;
