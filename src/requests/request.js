import axios from "axios";
import {
  usersData,
  usersActivity,
  usersSessions,
  usersPerformances,
} from "../__mocks__/mockData";

/**
 *
 * @param {Array.<Object>} setUser Set the new state of the user
 * @param {String} id Devs only, for testing the differents chars, 12 or 18 implemented
 * @return {Promise} Return the datas from the fetch, use .data for explore it
 */
export const userRequest = async (setUser, id, setError) => {
  const route = "http://localhost:3000";
  await axios
    .get(`${route}/users/${id}`)
    .then((res) => {
      setUser(res.data);
      setError(false);
    })
    .catch((err) => {
      const error = document.getElementById("error");
      setError(true);
      error.innerHTML = `${err.message}`;
    });
};

/**
 *
 * @param {Array.<Object>} setActivity Set the new state of the user's activity
 * @param {String} id Devs only, for testing the differents chars, 12 or 18 implemented
 * @return {Promise} Return the datas from the fetch, use .data for explore it
 */
export const userActivity = async (setActivity, id, setError) => {
  const route = "http://localhost:3000";
  await axios
    .get(`${route}/user/${id}/activity`)
    .then((res) => {
      setActivity(res.data);
      setError(false);
    })
    .catch((err) => {
      const error = document.getElementById("error");
      error.innerHTML = `${err.message}`;
      setError(true);
    });
};

/**
 *
 * @param {Array.<Object>} setSessions Set the new state of the user's sessions
 * @param {String} id Devs only, for testing the differents chars, 12 or 18 implemented
 * @return {Promise} Return the datas from the fetch, use .data for explore it
 */
export const userSessions = async (setSessions, id, setError) => {
  const route = "http://localhost:3000";
  await axios
    .get(`${route}/user/${id}/average-sessions`)
    .then((res) => {
      setSessions(res.data);
      setError(false);
    })
    .catch((err) => {
      const error = document.getElementById("error");
      error.innerHTML = `${err.message}`;
      setError(true);
    });
};

/**
 *
 * @param {Array.<Object>} setPerformances Set the new state of the user's performances
 * @param {String} id Devs only, for testing the differents chars, 12 or 18 implemented
 * @return {Promise} Return the datas from the fetch, use .data for explore it
 */
export const userPerformance = async (setPerformances, id, setError) => {
  const route = "http://localhost:3000";
  await axios
    .get(`${route}/user/${id}/performance`)
    .then((res) => {
      setPerformances(res.data);
      setError(false);
    })
    .catch((err) => {
      const error = document.getElementById("error");
      error.innerHTML = `${err.message}`;
      setError(true);
    });
};

export const mockedUserRequest = (setUser, id, setError) => {
  let user = usersData.find((user) => {
    return user.data.id == id;
  });
  setUser(user);
  setError(false);
};

export const mockedUserActivity = (setActivity, id, setError) => {
  let activity = usersActivity.find((activity) => {
    return activity.data.userId == id;
  });
  setActivity(activity);
  setError(false);
};

export const mockedUserSessions = (setSessions, id, setError) => {
  let session = usersSessions.find((session) => {
    return session.data.userId == id;
  });
  setSessions(session);
  setError(false);
};
export const mockedUserPerformances = (setPerformances, id, setError) => {
  let performance = usersPerformances.find((performance) => {
    return performance.data.userId == id;
  });
  setPerformances(performance);
  setError(false);
};
