import React, { useState } from 'react';
import Task from './Task';

export default function TasksList({
  tasks,
  onToggleDone,
  onDeleteTask,
  onEditTask,
  onEditMode,
  
}) {

const [selectedTask, setSelectedTask] = useState(null)



  const renderTasks = (tasks) => {
    if(tasks.length > 0) {
      return tasks.map((task) => (
        <Task
        key={task.id}
        done={task.done}
        title={task.title}
        description={task.description}
        onToggleDone={(done) => onToggleDone(task.id, done)}
        onDeleteTask={() => onDeleteTask(task.id)}
        />
        ))}
      }
  return (
    <ul className='grid grid-col gap-4'>
     {renderTasks(tasks)}
    </ul>
  );
}
