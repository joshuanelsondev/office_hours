const usersData = require("./user.data");

/**
 Write a function that takes in an array of users and returns the oldest user
 * @param {Object[]} users - An array of users.
 * @returns {string} The full name of the oldest user.
 */

function getOldestUser(usersArr) {
  //   Create accumulator variables
  let oldestUser = "";
  let oldestAge = 0;

  // Iterate through the usersArr checking for the oldest age and updating our accumulators as needed
  usersArr.forEach((user) => {
    // Check to see if the current user's age is greater than the oldestAge
    if (Number(user.age) > oldestAge) {
      //   Update the oldest age to the current user's age
      oldestAge = Number(user.age);
      // Update the oldest user to the current user's first and last name, formatted correctly
      oldestUser = `${user.firstName} ${user.lastName}`;
    }
  });

  return oldestUser;
}

console.log(getOldestUser(usersData));
