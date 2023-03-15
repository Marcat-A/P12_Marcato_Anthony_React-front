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
  mockedUserRequest,
  mockedUserActivity,
  mockedUserSessions,
  mockedUserPerformances,
} from "./requests/request";
import { useEffect, useState } from "react";

function App() {
  /**
   * @param {String} id Devs only, for testing the differents chars, 12 or 18 implemented
   * @param {Boolean} mocked Devs only, for testing the difference between mockedDatas or DB
   * @param {Boolean} selected Devs only, for testing the difference between mockedDatas or DB
   * @param {Array.<Object>} user Used for saving the datas from the API fetching the user
   * @param {Array.<Object>} activity Used for saving the datas from the API fetching the activitys of the user
   * @param {Array.<Object>} sessions Used for saving the datas from the API fetching the sessions of the user
   * @param {Array.<Object>} performances Used for saving the datas from the API fetching the performances of the user
   */
  const [id, setId] = useState("12");
  const [mocked, setMocked] = useState(true);
  const [user, setUser] = useState([{}]);
  const [activity, setActivity] = useState([{}]);
  const [sessions, setSessions] = useState([{}]);
  const [performances, setPerformances] = useState([{}]);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if (mocked === false) {
      userRequest(setUser, id);
      userActivity(setActivity, id);
      userSessions(setSessions, id);
      userPerformance(setPerformances, id);
    } else {
      mockedUserRequest(setUser, id);
      mockedUserActivity(setActivity, id);
      mockedUserSessions(setSessions, id);
      mockedUserPerformances(setPerformances, id);
    }
  }, [id]);
  return selected ? (
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
  ) : (
    <div className={css.loader}>
      <h2>Choose the id you want to test</h2>
      <div className={css.id}>
        <button
          onClick={() => setId("12")}
          className={id === "12" ? `${css.btn} ${css.active}` : `${css.btn}`}
        >
          12
        </button>
        <button
          onClick={() => setId("18")}
          className={id === "18" ? `${css.btn} ${css.active}` : `${css.btn}`}
        >
          18
        </button>
      </div>
      <h2>Choose the datas you want to use</h2>
      <div className={css.mocked}>
        <button
          onClick={() => setMocked(true)}
          className={mocked ? `${css.btn} ${css.active}` : `${css.btn}`}
        >
          Use the mocked datas
        </button>
        <button
          onClick={() => setMocked(false)}
          className={!mocked ? `${css.btn} ${css.active}` : `${css.btn}`}
        >
          Use the backend
        </button>
      </div>
      <div className={css.valid}>
        <button
          className={`${css.btn} ${css.validBtn}`}
          onClick={() => setSelected(true)}
        >
          Use this configuration !
        </button>
      </div>
    </div>
  );
}

export default App;
