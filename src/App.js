import { useState, useEffect } from "react";
import Header from "./components/Header";
import Task from "./components/Task"
import Add from "./components/Add";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks ] = useState([])

  useEffect(()=>{
    const getTasks = async ()=>{
      const tasksFromServer = await fetchTask()
      setTasks(tasksFromServer)
    }
    
    getTasks()
  }, [])
  // fetch task from server
  const fetchTask = async ()=> {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
   
    return data
  }

  // Add Function 

  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(task)
    })

    const data = res.json()

    setTasks([...tasks, data])


    
    // const id = Math.floor(Math.random() * 1000) + 1

    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }


  // Delete Task

  const deleteTask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((info)=> info.id !== id))
  }

  // Reminder
const toggleReminder = (id)=>{
  setTasks(tasks.map((info)=>info.id === id ? {...info, reminder : !info.reminder} : info))
}

  return (
    <div className="container">
     <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <Add onAdd={addTask}/> }
     {tasks.length > 0 ? <Task tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder}/> : 'No more Tasks'}
    </div>
  )
}

export default App;
