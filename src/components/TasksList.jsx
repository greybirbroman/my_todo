import Task from './Task';

export const TasksList = ({ tasks, onDelete, onToggleTaskStatus }) => {

  const renderTasks = (tasks) => {
    return tasks.map((task) => (
      <Task
      key={task.id}
      task={task}
      onDelete={onDelete}
      onToggleStatus={onToggleTaskStatus}
      />
      ));
    };

    
  return (
  <ul className='grid grid-col gap-4'>{renderTasks(tasks)}</ul>
  );
}

export default TasksList
