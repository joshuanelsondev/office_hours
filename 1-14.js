const users = [
  {
    firstName: "josh",
    lastName: "nelson",
    age: "29",
    eyeColor: "brown",
    heightInCm: "172",
    wearsGlasses: false,
  },
  {
    firstName: "nadia",
    lastName: "matos",
    age: "32",
    eyeColor: "brown",
    heightInCm: "155",
    wearsGlasses: true,
  },
  {
    name: "alexandra",
    lastName: "perez",
    age: "23",
    eyeColor: "brown",
    heightInCm: "160",
    wearsGlasses: true,
  },
  {
    firstName: "Justin",
    lastName: "Overton",
    age: "30",
    eyeColor: "brown",
    heightInCm: "177",
    wearsGlasses: true,
  },
  {
    firstName: "markedia",
    lastName: "hinds",
    age: "88",
    eyeColor: "brown",
    heightInCm: "163",
    wearsGlasses: true,
  },
  {
    firstName: "Larry",
    lastName: "Lamouth",
    age: "28",
    eyeColor: "brown",
    heightInCm: "182.88",
    wearsGlasses: false,
  },
];

/**
 Write a function that takes in an array of users and returns the oldest user
 * @param {Object[]} users - An array of users.
 * @returns {number} The full name of the oldest user.
 */

function getOldestUser(usersArr) {
  let oldestAge = 0;
  let oldestUser;
  users.forEach((user) => {
    if (user.age > oldestAge) {
      oldestAge = user.age;
      oldestUser = `${user.firstName} ${user.lastName}`;
    }
  });

  return oldestUser;
}

console.log(getOldestUser(users));
