import { useEffect, useState } from "react";
import API from "../api/api";

function Users() {

const [users,setUsers] = useState([]);
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("Employee");

useEffect(()=>{
loadUsers();
},[]);

const loadUsers = async () =>{
const res = await API.get("/users");
setUsers(res.data);
};

const addUser = async () =>{

console.log("Button clicked");
await API.post("/users",{
name,
email,
password,
role
});

loadUsers();
};

return(

<div className="card">

<h2>User Management</h2>

<input placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input placeholder="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option>Admin</option>
<option>Manager</option>
<option>Employee</option>

</select>

<button onClick={addUser}>Register User</button>

<h3>User List</h3>

<table>

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Role</th>
</tr>
</thead>

<tbody>

{users.map((u)=>(
<tr key={u.id}>
<td>{u.id}</td>
<td>{u.name}</td>
<td>{u.email}</td>
<td>{u.role}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Users