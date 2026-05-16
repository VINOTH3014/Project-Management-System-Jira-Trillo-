import Users from "./components/Users";
import Projects from "./components/Projects";
import Kanban from "./components/Kanban";
import Tasks from "./components/Tasks";
import "./style.css";

function App() {

  return (

    <div className="container">

      <h1 className="title">
        Project Management System (Jira/Trello Clone)
      </h1>

      <div className="grid">

        <Users />

        <Projects />

        <Kanban />

        <Tasks />

      </div>

    </div>

  );

}

export default App;