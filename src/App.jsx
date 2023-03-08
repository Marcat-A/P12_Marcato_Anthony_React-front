import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import css from "./App.module.css";
import Charts from "./components/Charts/Charts";
import Resume from "./components/Resume/Resume";
import {
  userRequest,
  userActivity,
  userSessions,
  userPerformance,
} from "./requests/request";
import { useEffect, useState } from "react";

function App() {
  let id = "12";
  const [user, setUser] = useState([{}]);
  const [activity, setActivity] = useState([{}]);
  const [sessions, setSessions] = useState([{}]);
  const [performances, setPerformances] = useState([{}]);
  useEffect(() => {
    userRequest(setUser, id);
    userActivity(setActivity, id);
    userSessions(setSessions, id);
    userPerformance(setPerformances, id);
  }, [id]);
  return (
    <div className={css.App}>
      <Navbar />
      <Sidebar />
      <main className={css.container}>
        <div className={css.hello}>
          <h1 className={css.title}>
            Bonjour{" "}
            <span>{user?.data ? user.data.userInfos.firstName : ""}</span>
          </h1>
          <h2 className={css.subtitle}>
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </h2>
        </div>
        <div className={css.mainContent}>
          <Charts
            user={user}
            activity={activity}
            sessions={sessions}
            performances={performances}
          />
          <Resume data={user.data?.keyData ? user.data?.keyData : {}} />
        </div>
      </main>
    </div>
  );
}

export default App;
