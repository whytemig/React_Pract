import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task2 = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>{task.test} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={()=> onDelete(task.id)}/></h3>  
      <p>{task.day}</p>  
    </div>
  )
}

export default Task2