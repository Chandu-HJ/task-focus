import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Taskform from './components/Taskform';
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
function App() {


  return (
    <>
      <h1>Task Focus</h1>
      <p>Our Friendly TaskManager</p>
      <Taskform/>
      <TaskList/>
      <ProgressTracker/>

    </>
  )
}

export default App
