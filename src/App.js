import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";


function App() {
  const [tasks, setTasks ] = useState([
    {
      id: 1,
      test: 'whatever',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      test: 'whatever2',
      day: 'Aug 5th at 8:45pm',
      reminder: true
    }
  ])


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
     {tasks.length > 0 ? <Task tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder}/> : 'No more Taske'}
    </div>
  )
}

export default App;
