import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import css from "./App.module.css";
import Charts from "./components/Charts/Charts";
import Resume from "./components/Resume/Resume";
import data from "../src/__mocks__/mockData";

function App() {
  return (
    <div className={css.App}>
      <Navbar />
      <Sidebar />
      <main className={css.container}>
        <div className={css.hello}>
          <h1 className={css.title}>
            Bonjour <span>{data.usersData[1].userInfos.firstName}</span>
          </h1>
          <h2 className={css.subtitle}>
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </h2>
        </div>
        <div className={css.mainContent}>
          <Charts data={data} />
          <Resume data={data.usersData[1]} />
        </div>
      </main>
    </div>
  );
}

export default App;
