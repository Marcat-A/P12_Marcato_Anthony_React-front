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

/**
 *
 * @param {Array.<Object>} setActivity Set the new state of the user's activity
 * @param {String} id Devs only, for testing the differents chars, 12 or 18 implemented
 * @return {Promise} Return the datas from the fetch, use .data for explore it
 */
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

/**
 *
 * @param {Array.<Object>} setSessions Set the new state of the user's sessions
 * @param {String} id Devs only, for testing the differents chars, 12 or 18 implemented
 * @return {Promise} Return the datas from the fetch, use .data for explore it
 */
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

/**
 *
 * @param {Array.<Object>} setPerformances Set the new state of the user's performances
 * @param {String} id Devs only, for testing the differents chars, 12 or 18 implemented
 * @return {Promise} Return the datas from the fetch, use .data for explore it
 */
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

export const mockedUserRequest = (setUser, id) => {
  let user = usersData.find((user) => {
    return user.data.id == id;
  });
  setUser(user);
};

export const mockedUserActivity = (setActivity, id) => {
  let activity = usersActivity.find((activity) => {
    return activity.data.userId == id;
  });
  setActivity(activity);
};

export const mockedUserSessions = (setSessions, id) => {
  let session = usersSessions.find((session) => {
    return session.data.userId == id;
  });
  setSessions(session);
};
export const mockedUserPerformances = (setPerformances, id) => {
  let performance = usersPerformances.find((performance) => {
    return performance.data.userId == id;
  });
  setPerformances(performance);
};
