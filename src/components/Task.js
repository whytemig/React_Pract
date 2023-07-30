import Task2 from "./Task2";


const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task2 key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default Task;
