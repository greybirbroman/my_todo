import Task from './Task';
import noTask from '../images/no-task.png';

export const TasksList = ({
  tasks,
  onDelete,
  onToggleTaskStatus,
  onEdit,
  setSelectedTask,
  priority,
}) => {
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
    return <div className='w-full h-full flex items-center justify-center'>
              <img src={noTask} alt='no_tasks' className='object-cover pt-20' />
           </div>
    
  };

  return (
    <ul className='flex flex-wrap sm:flex-col items-start justify-center gap-3 pt-20'>
      {renderTasks(tasks)}
    </ul>
  );
};

export default TasksList;
