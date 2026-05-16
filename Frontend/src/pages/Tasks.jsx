// src/pages/Tasks.jsx
import { useEffect, useState } from "react";
import API from "../api/api";
import TaskForm from "../components/TaskForm";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const loadTasks = () => API.get("/tasks").then(res => setTasks(res.data));
  const loadProjects = () => API.get("/projects").then(res => setProjects(res.data));

  useEffect(() => {
    loadTasks();
    loadProjects();
  }, []);

  const deleteTask = id => {
    if (window.confirm("Delete task?")) API.delete(`/tasks/${id}`).then(() => loadTasks());
  };

  return (
    <div className="container mt-4">
      <h3>Tasks</h3>
      <TaskForm reload={loadTasks} projects={projects} />

      <table className="table mt-4">
        <thead>
          <tr><th>ID</th><th>Title</th><th>Description</th><th>Project</th><th>Action</th></tr>
        </thead>
        <tbody>
          {tasks.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td><td>{t.title}</td><td>{t.description}</td><td>{t.project?.name}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => deleteTask(t.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}