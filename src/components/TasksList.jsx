import { useMemo } from 'react';
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

  const handleToggleTaskStatus = (id) => {
    const updatedTasks = filteredTasks.map(task => {
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
    localStorage.setItem('tasks', tasks)
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
