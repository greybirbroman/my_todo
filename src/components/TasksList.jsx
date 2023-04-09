import Task from './Task';

export const TasksList = ({ tasks, onDelete, onToggleTaskStatus, onEdit, setSelectedTask, selectedTags }) => {


  const renderTasks = (tasks) => {
    return tasks.map((task) => (
      <Task
      key={task.id}
      task={task}
      onEdit={onEdit}
      onDelete={onDelete}
      onToggleStatus={onToggleTaskStatus}
      setSelectedTask={setSelectedTask}
      selectedTags={selectedTags}
      />
      ));
    };

    
  return (
  <ul className='grid grid-col gap-4'>{renderTasks(tasks)}</ul>
  );
}

export default TasksList
