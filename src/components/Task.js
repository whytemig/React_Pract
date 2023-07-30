import Task2 from "./Task2";


const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task2 key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default Task;
