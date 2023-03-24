import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

export default function TasksList({ tasks, onToggleDone, onDeleteTask, onEdit }) {
  return (
    <ul className='grid grid-col gap-4'>
      {tasks.map((task) => {
        return (
          <Task
            {...task}
            onToggleDone={(done) => onToggleDone(task.id, done)}
            onDeleteTask={() => onDeleteTask(task.id)}
            onEditTask={() => onEdit(task.id)}
            key={uuidv4()}
          />
        );
      })}
    </ul>
  );
}
