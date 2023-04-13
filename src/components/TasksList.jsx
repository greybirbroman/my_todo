import { useMemo } from 'react';
import Task from './Task';
import noTask from '../images/no-task.png';
import useTasks from '../hooks/useTasks';

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
      // case 'work': // Делаем проверку на undefined чтобы избежать ошибки, если у задачи нет категории.
      //   return filtered.filter((task) => task.category?.[0]?.name === 'Work');
      default:
        return filtered;
    }
  }, [tasks, filter, selectedFilterTags]);

  const renderTasks = (tasks) => {
    if (tasks.length) {
      return tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          completed={task.completed}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleTaskStatus}
          setSelectedTask={setSelectedTask}
          selectedTags={task.category}
          priority={priority}
        />
      ));
    }

    return (
      <div className='w-full h-full flex items-center justify-center'>
        <img src={noTask} alt='no_tasks' className='object-cover pt-20' />
      </div>
    );
  };

  return (
    <>
      <ul className='grid grid-cols-2 sm:grid-cols-1 items-start justify-center gap-3'>
        {renderTasks(filteredTasks)}
      </ul>
    </>
  );
};

export default TasksList;
