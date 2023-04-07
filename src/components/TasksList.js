import { useTasks } from '../hooks/useTasks'
import Task from './Task';

export const TasksList = () => {

  const { tasks } = useTasks()

  const renderTasks = (tasks) => {
    if (tasks.length > 0) {
      return tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ));
    }
  };
  return <ul className='grid grid-col gap-4'>{renderTasks(tasks)}</ul>;
}

export default TasksList