import Taskform from "./components/Taskform";
import TaskList from "./components/TaskList";
import Progresstracker from "./components/ProgressTracker";
import { useEffect, useState } from "react";
import './Style.css';
export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedT, index) => {
    // setTasks(tasks.map((task,i)=>(
    //   i==index ? updatedT : task
    // )));

    const newTasks = [...tasks];
    newTasks[index] = updatedT;
    setTasks(newTasks);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const clearAll = () => {
      setTasks([]);
  }

  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>
      {tasks.length>0 && (
      <button className="clearAll" onClick={() => clearAll()}>Clear all tasks</button>)}
    </div>
  )
}
