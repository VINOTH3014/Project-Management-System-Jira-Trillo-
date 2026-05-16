// src/pages/Users.jsx
import { useEffect, useState } from "react";
import API from "../api/api";
import UserForm from "../components/UserForm";

export default function Users() {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    API.get("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => loadUsers(), []);

  const deleteUser = id => {
    if (window.confirm("Are you sure?")) {
      API.delete(`/users/${id}`).then(() => loadUsers());
    }
  };

  return (
    <div className="container mt-4">
      <h3>Users</h3>
      <UserForm reload={loadUsers} />

      <table className="table mt-4">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Action</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td><td>{u.name}</td><td>{u.email}</td><td>{u.role}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}