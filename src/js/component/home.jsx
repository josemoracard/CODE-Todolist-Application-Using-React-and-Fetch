import React, { useState } from 'react';
import "../../styles/index.css";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = newTask.trim();
    if(task){
      setTasks([...tasks, task]);
      setNewTask('');
    }
  }

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <div id="container">
      <h1 id="title">Todos</h1>
      <div id='container-body'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What needs to be done?"
        />
      </form>
      
      <ul>
      {tasks.length === 0 && <p>No tasks, add a task</p>}
        {tasks.map((task, index) => (
          <li key={index} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
            {task}
            {hoverIndex === index && <span onClick={() => handleDelete(index)}><i className="fa-solid fa-x"></i></span>}
          </li>
        ))}
      </ul>
      {tasks.length > 0 && <p id='tasks-left'>Number of tasks: {tasks.length}</p>}
      </div>
      </div>
    </div>
  );
}

export default Home;