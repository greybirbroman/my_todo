import { useMemo } from 'react';
import Task from './Task';
import noTask from '../images/no-task.png';
import { setReorderConstraints, tasksVariants } from '../utils/const';
import { motion as m, AnimatePresence, Reorder } from 'framer-motion';

export const TasksList = ({
  tasks,
  setTasks,
  onDelete,
  onToggleTaskStatus,
  onEdit,
  setSelectedTask,
  priority,
  filter,
  selectedFilterTags,
}) => {


  const filteredTasks = useMemo(() => {
    let filtered = tasks;

    if (selectedFilterTags.length > 0) {
      filtered = filtered.filter((task) => {
        const taskTags = task.category?.map((tag) => tag.name) || [];
        return selectedFilterTags.some((tag) => taskTags.includes(tag));
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
    const updatedTasksLocal = filteredTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    onToggleTaskStatus(id);
    tasks.map((task, index) => {
      if (task.id === id) {
        tasks[index].completed = !task.completed;
      }
      return task;
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasksLocal));
  };

  const renderImage = () => {
    if(!filteredTasks.length) {
      return (
        <div className='w-full h-full flex items-center justify-center pt-10'>
          <img src={noTask} alt='no_tasks' className='object-cover justify-center' />
        </div>
      );
    }
  };

  const renderTasks = (filteredTasks) => {
    if (filteredTasks.length) {
      return filteredTasks.map((task, index) => {
        return (
          <Reorder.Item
            value={task}
            key={task.id}
            whileDrag={{ scale: 1.005, opacity: 0.7 }}
            className='h-fit w-full'
            drag={true}
            dragElastic={0.5}
            dragConstraints={setReorderConstraints}
          >
            <Task
              key={task.id}
              index={index}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleStatus={handleToggleTaskStatus}
              setSelectedTask={setSelectedTask}
              selectedTags={task.category}
              priority={priority}
            />
          </Reorder.Item>
        );
      });
    }
  };

  return (
    <>
      <div
      className='w-full h-[100%]'>
        <Reorder.Group
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-5'
          as='ul'
          values={filteredTasks}
          onReorder={setTasks}
          {...tasksVariants}
        >
          <AnimatePresence>{renderTasks(filteredTasks)}</AnimatePresence>
          <div className="no-tasks-container">{renderImage()}</div>
        </Reorder.Group>
      </div>
    </>
  );
};

export default TasksList;
