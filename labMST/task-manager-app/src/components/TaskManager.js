import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export default function TaskManager() {


  const { values, handleChange, resetForm } = useForm({
    title: "",
    priority: "Low",
  });

  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.title.trim()) {
      return;
    }

    setTasks([...tasks, values]);

    resetForm();
  };

  return (
    <div className="task-manager">

      <h2>Task Manager</h2>

      <form onSubmit={handleSubmit}>

        {/* form input */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="title" style={{ display: "block" }}> Task Title:</label>

          < input type="text"id="title" name="title" value={values.title} onChange={handleChange} placeholder="Enter a task" required/>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="priority" style={{ display: "block" }}> Priority: </label>

          <select  id="priority" name="priority" value={values.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit">Add Task</button>

      </form>

  
      <div className="task-list" style={{ marginTop: "20px" }}>

        <h3>Tasks</h3>

        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.title} | {task.priority}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}