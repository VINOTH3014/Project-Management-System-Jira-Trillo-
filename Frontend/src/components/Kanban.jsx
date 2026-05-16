// import { useEffect, useState } from "react";
// import API from "../api/api";

// function Kanban(){

// const [tasks,setTasks] = useState([]);

// useEffect(()=>{
// loadTasks();
// },[]);

// const loadTasks = async ()=>{
// const res = await API.get("/tasks");
// setTasks(res.data);
// }

// const todo = tasks.filter(t=>t.status==="TODO");
// const progress = tasks.filter(t=>t.status==="IN_PROGRESS");
// const done = tasks.filter(t=>t.status==="DONE");

// return(

// <div className="card full">

// <h2>Task Board (Kanban View)</h2>

// <div className="kanban">

// <div className="column todo">

// <h3>To Do</h3>

// {todo.map(t=>(
// <div className="task">{t.name}</div>
// ))}

// </div>

// <div className="column progress">

// <h3>In Progress</h3>

// {progress.map(t=>(
// <div className="task">{t.name}</div>
// ))}

// </div>

// <div className="column done">

// <h3>Done</h3>

// {done.map(t=>(
// <div className="task">{t.name}</div>
// ))}

// </div>

// </div>

// </div>

// )

// }

// export default Kanban

import { useEffect, useState } from "react";
import API from "../api/api";

function Kanban(){

const [tasks,setTasks] = useState([]);

useEffect(()=>{
loadTasks();
},[]);

const loadTasks = async ()=>{
const res = await API.get("/tasks");
setTasks(res.data);
}

const todo = tasks.filter(t=>t.status==="TODO");
const progress = tasks.filter(t=>t.status==="IN_PROGRESS");
const done = tasks.filter(t=>t.status==="DONE");

return(

<div className="card full">

<h2>Task Board (Kanban View)</h2>

<div className="kanban">

<div className="column todo">
<h3>To Do</h3>

{todo.map(t=>(
<div className="task">{t.name}</div>
))}

</div>

<div className="column progress">
<h3>In Progress</h3>

{progress.map(t=>(
<div className="task">{t.name}</div>
))}

</div>

<div className="column done">
<h3>Done</h3>

{done.map(t=>(
<div className="task">{t.name}</div>
))}

</div>

</div>

</div>

)

}

export default Kanban