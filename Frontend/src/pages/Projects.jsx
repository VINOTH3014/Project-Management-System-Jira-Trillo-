// src/pages/Projects.jsx
import { useEffect, useState } from "react";
import API from "../api/api";
import ProjectForm from "../components/Projects";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    API.get("/projects").then(res => setProjects(res.data)).catch(err => console.error(err));
  };

  useEffect(() => loadProjects(), []);

  const deleteProject = id => {
    if (window.confirm("Delete project?")) API.delete(`/projects/${id}`).then(() => loadProjects());
  };

  return (
    <div className="container mt-4">
      <h3>Projects</h3>
      <ProjectForm reload={loadProjects} />

      <table className="table mt-4">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Description</th><th>Action</th></tr>
        </thead>
        <tbody>
          {projects.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.name}</td><td>{p.description}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => deleteProject(p.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}