import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import AddToDoBar from "./components/AddToDoBar";
import SearchBar from "./components/SearchBar";
import CategoryBar from "./components/CategoryBar";
import AddToDoPopup from "./components/AddToDoPopup";
import EditToDoPopup from "./components/EditToDoPopup";
import TasksList from "./components/TasksList";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [openAddPopup, setOpenAddPopup] = useState(false);
  const [openEditPopup, setOpenEditPopup] = useState(false);

  const [tasks, setTasks] = useState([]);
  const completedTasksNumberIs = tasks.filter((task) => task.done).length;
  const totalTasksNumberIs = tasks.length;

  // Кладем в LocalStorage наши задачи, если в задачах пусто - прекращаем выполнение
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Достаем наши задачи из LocalStorage, обновляем стейт массива
  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(localTasks);
  }, []);


  // Открыть Popup добавления задач
  function toggleAddPopup() {
    setOpenAddPopup(!openAddPopup);
  }

  function toggleEditPopup() {
    setOpenEditPopup(!openEditPopup);
  }

  // Обновить состояние задачи
  function updateTaskDone(id) {
    let updatedTask = [...tasks].filter((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTask);
  }

  // Удалить задачу
  function deleteTask(id) {
    let updatedTaskList = [...tasks].filter((task) => task.id !== id);
    setTasks(updatedTaskList);
  }

// Добавить новую задачу
  function addTask({ title, description }) {
    setTasks((prev) => {
      return [
        ...prev,
        { title: title, description: description, done: false, id: uuidv4() },
      ];
    });
    toggleAddPopup();
  }

// Редактировать задачу
  function editTask(id, title, description) {
  
   
    
    // console.log(currentTask)
   toggleEditPopup()
   
  }

  return (
    <div className='text-gray-700 py-2 px-2 flex flex-col max-w-[992px] min-w-[400px] space-y-3'>
      {openAddPopup && <AddToDoPopup onAdd={addTask} onCancel={toggleAddPopup} />}
      {openEditPopup && <EditToDoPopup onEdit={editTask} onCancel={toggleEditPopup} />}
      <>
        <AddToDoBar onClick={toggleAddPopup} />
        <SearchBar />
        <CategoryBar />
        <ProgressBar
          progress={completedTasksNumberIs}
          total={totalTasksNumberIs}
        />
        <TasksList
          tasks={tasks}
          onToggleDone={updateTaskDone}
          onDeleteTask={deleteTask}
          onEdit={editTask}
        />
      </>
    </div>
  );
}

export default App;
