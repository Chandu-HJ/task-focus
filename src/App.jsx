
import Taskform from "./components/Taskform";
import TaskList from "./components/TaskList";
import Progresstracker from "./components/Progresstracker";
import { useEffect, useState } from "react";

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

  

  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}
