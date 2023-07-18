import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (e) => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else if (e.target.name === 'description') {
      setDescription(e.target.value);
    }
  };

  const handleAddTask = () => {
    if (task.trim() !== '' && description.trim() !== '') {
      const newTask = { task, description };
      setTaskList([...taskList, newTask]);
      setTask('');
      setDescription('');
    }
  };

  const handleDeleteTask = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      const updatedList = taskList.filter((_, i) => i !== index);
      setTaskList(updatedList);
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          name="task"
          value={task}
          onChange={handleInputChange}
        />
        <textarea
          className="form-control mt-2"
          placeholder="Enter task description"
          name="description"
          value={description}
          onChange={handleInputChange}
        ></textarea>
        <button className="btn btn-primary mt-2" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul className="list-group">
        {taskList.map((task, index) => (
          <li className="list-group-item" key={index}>
            <h5>{task.task}</h5>
            <p>{task.description}</p>
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
