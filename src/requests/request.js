import axios from "axios";

export const userRequest = async (setUser, id) => {
  const route = "http://localhost:3000";
  await axios
    .get(`${route}/user/${id}`)
    .then((res) => {
      setUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userActivity = async (setActivity, id) => {
  const route = "http://localhost:3000";
  await axios
    .get(`${route}/user/${id}/activity`)
    .then((res) => {
      setActivity(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const userSessions = async (setSessions, id) => {
  const route = "http://localhost:3000";
  await axios
    .get(`${route}/user/${id}/average-sessions`)
    .then((res) => {
      setSessions(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const userPerformance = async (setPerformances, id) => {
  const route = "http://localhost:3000";
  await axios
    .get(`${route}/user/${id}/performance`)
    .then((res) => {
      setPerformances(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
