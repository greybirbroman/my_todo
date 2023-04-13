import { useMemo } from 'react';
import { categories } from '../utils/const';
import Task from './Task';
import noTask from '../images/no-task.png';

export const TasksList = ({
  tasks,
  onDelete,
  onToggleTaskStatus,
  onEdit,
  setSelectedTask,
  priority,
  filter,
  searchText
}) => {
  const filteredTasks = useMemo(() => {

    const filteredBySearch = tasks.filter(task => task.name.toLowerCase().includes(searchText.toLowerCase()));
    switch (filter) {
      case 'all':
        return filteredBySearch;
      case 'active':
        return filteredBySearch.filter((task) => !task.completed);
      case 'completed':
        return filteredBySearch.filter((task) => task.completed);
      case 'low':
        return filteredBySearch.filter((task) => task.priority === 'low');
      case 'work': // Делаем проверку на undefined чтобы избежать ошибки, если у задачи нет категории.
        return filteredBySearch.filter((task) => task.category?.[0]?.name === 'Work');
      default:
        return tasks;
    }
  }, [tasks, filter, searchText]);

  const renderTasks = (tasks) => {
    if (tasks.length) {
      return tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
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
    <ul className='grid grid-cols-2 sm:grid-cols-1 items-start justify-center gap-3'>
      {renderTasks(filteredTasks)}
    </ul>
  );
};

export default TasksList;
