const modeledUser = {
  data: {
    id: 1,
    userInfos: {
      firstName: "John",
      lastName: "Doe",
      age: 1,
    },
    score: 0.5,
    keyData: {
      calorieCount: 1000,
      proteinCount: 1,
      carbohydrateCount: 1,
      lipidCount: 1,
    },
  },
};

const modeledActivity = {
  data: {
    userId: 1,
    sessions: [
      {
        day: "string",
        kilogram: 1,
        calories: 1,
      },
      {
        day: "string2",
        kilogram: 2,
        calories: 2,
      },
    ],
  },
};

const modeledSessions = {
  data: {
    userId: 1,
    sessions: [
      {
        day: 1,
        sessionLength: 1,
      },
      {
        day: 2,
        sessionLength: 2,
      },
    ],
  },
};

const modeledPerformances = {
  data: {
    userId: 1,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 1,
        kind: 1,
      },
      {
        value: 2,
        kind: 2,
      },
      {
        value: 3,
        kind: 3,
      },
      {
        value: 4,
        kind: 4,
      },
      {
        value: 5,
        kind: 5,
      },
      {
        value: 6,
        kind: 6,
      },
    ],
  },
};

export { modeledUser, modeledActivity, modeledSessions, modeledPerformances };
