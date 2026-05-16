// import { useEffect, useState } from "react";
// import API from "../api/api";

// function Projects(){

// const [projects,setProjects] = useState([]);

// useEffect(()=>{
// loadProjects();
// },[]);

// const loadProjects = async ()=>{

// const res = await API.get("/projects");
// setProjects(res.data);

// }

// return(

// <div className="card">

// <h2>Project Overview</h2>

// <table>

// <thead>
// <tr>
// <th>ID</th>
// <th>Project Name</th>
// <th>Start Date</th>
// <th>End Date</th>
// </tr>
// </thead>

// <tbody>

// {projects.map((p)=>(
// <tr key={p.id}>
// <td>{p.id}</td>
// <td>{p.name}</td>
// <td>{p.startDate}</td>
// <td>{p.endDate}</td>
// </tr>
// ))}

// </tbody>

// </table>

// </div>

// )

// }

// export default Projects


import { useEffect, useState } from "react";
import API from "../api/api";

function Projects(){

const [projects,setProjects] = useState([]);
const [name,setName] = useState("");
const [startDate,setStartDate] = useState("");
const [endDate,setEndDate] = useState("");
const [description,setDescription] = useState("");

useEffect(()=>{
loadProjects();
},[]);

const loadProjects = async ()=>{
const res = await API.get("/projects");
setProjects(res.data);
}

const addProject = async ()=>{

await API.post("/projects",{
name,
description,
startDate,
endDate
});

loadProjects();

}

return(

<div className="card">

<h2>Project Overview</h2>

<input
placeholder="Project Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<input
type="date"
value={startDate}
onChange={(e)=>setStartDate(e.target.value)}
/>

<input
type="date"
value={endDate}
onChange={(e)=>setEndDate(e.target.value)}
/>

<button onClick={addProject}>Add Project</button>

<table>

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Start</th>
<th>End</th>
</tr>
</thead>

<tbody>

{projects.map((p)=>(
<tr key={p.id}>
<td>{p.id}</td>
<td>{p.name}</td>
<td>{p.startDate}</td>
<td>{p.endDate}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Projects