import { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard() {

  const [stats, setStats] = useState({});

  useEffect(() => {
    API.get("/dashboard")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (

    <div className="dashboard">

      <div className="box blue">
        Total Projects : {stats.totalProjects}
      </div>

      <div className="box orange">
        Tasks In Progress : {stats.inProgress}
      </div>

      <div className="box green">
        Completed Tasks : {stats.completed}
      </div>

    </div>
  );
}

export default Dashboard;