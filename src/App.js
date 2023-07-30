import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task"
import Add from "./components/Add";


function App() {
  const [tasks, setTasks ] = useState([
    {
      id: 1,
      text: 'whatever',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'whatever2',
      day: 'Aug 5th at 8:45pm',
      reminder: true
    }
  ])

  // Add Function 

  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }


  // Delete Task

  const deleteTask = (id) =>{
    setTasks(tasks.filter((info)=> info.id !== id))
  }

  // Reminder
const toggleReminder = (id)=>{
  setTasks(tasks.map((info)=>info.id === id ? {...info, reminder : !info.reminder} : info))
}

  return (
    <div className="container">
     <Header />
     <Add onAdd={addTask}/>
     {tasks.length > 0 ? <Task tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder}/> : 'No more Taske'}
    </div>
  )
}

export default App;
