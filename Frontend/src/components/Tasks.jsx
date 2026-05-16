// import { useEffect, useState } from "react";
// import API from "../api/api";

// function Tasks(){

// const [tasks,setTasks] = useState([]);

// useEffect(()=>{
// loadTasks();
// },[]);

// const loadTasks = async ()=>{

// const res = await API.get("/tasks");
// setTasks(res.data);

// }

// return(

// <div className="card">

// <h2>Task List</h2>

// <table>

// <thead>

// <tr>
// <th>ID</th>
// <th>Task Name</th>
// <th>Assigned To</th>
// <th>Status</th>
// </tr>

// </thead>

// <tbody>

// {tasks.map((t)=>(
// <tr key={t.id}>
// <td>{t.id}</td>
// <td>{t.name}</td>
// <td>{t.assignedTo}</td>
// <td>{t.status}</td>
// </tr>
// ))}

// </tbody>

// </table>

// </div>

// )

// }

// export default Tasks

import { useEffect, useState } from "react";
import API from "../api/api";

function Tasks(){

const [tasks,setTasks] = useState([]);
const [name,setName] = useState("");
const [status,setStatus] = useState("TODO");

useEffect(()=>{
loadTasks();
},[]);

const loadTasks = async ()=>{
const res = await API.get("/tasks");
setTasks(res.data);
}

const addTask = async ()=>{

await API.post("/tasks",{
name,
status
});

loadTasks();

}

return(

<div className="card">

<h2>Task List</h2>

<input
placeholder="Task Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
>

<option value="TODO">To Do</option>
<option value="IN_PROGRESS">In Progress</option>
<option value="DONE">Done</option>

</select>

<button onClick={addTask}>Add Task</button>

<table>

<thead>
<tr>
<th>ID</th>
<th>Task</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{tasks.map((t)=>(
<tr key={t.id}>
<td>{t.id}</td>
<td>{t.name}</td>
<td>{t.status}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Tasks