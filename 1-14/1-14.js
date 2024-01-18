const usersData = require("./user.data");

/**
 Write a function that takes in an array of users and returns the oldest user
 * @param {Object[]} users - An array of users.
 * @returns {string} The full name of the oldest user.
 */

function getOldestUser(usersArr) {
  //   Create accumulator variables
  let oldestAge = 0;
  let oldestUser = '';  
  // Iterate through the usersArr checking for the oldest age and updating our accumulators as needed
  for (const user of usersArr) {
    
    // Check to see if the current user's age is greater than the oldestAge
    if (Number(user.age) > oldestAge) {

    //   Update the oldest age to the current user's age
      oldestAge = Number(user.age); 
      // Update the oldest user to the current user's first and last name, formatted correctly
      oldestUser = `${user.firstName} ${user.lastName}`
    }
  }  

  return oldestUser;

}

// console.log(getOldestUser(usersData));

// 
/**
 Write a function that takes in an array of users and returns a new array containing only the users that wear glasses
 * @param {Object[]} users - An array of users.
 * @returns {Object[]} An array of objects of users that wear glasses.
 */

 function getUsersThatWearGlasses(usersArr) {
    const usersThatWearGlasses = [];
    
    for (let i = 0; i < usersArr.length; i++) {
      if (usersArr[i].wearsGlasses) {
        usersThatWearGlasses.push(usersArr[i])
      }
    }

    return usersThatWearGlasses;
 }

//  console.log(getUsersThatWearGlasses(usersData));

/**
 Write a function that takes in an array of users and returns an object counting the eye colors of the users that wear glasses
 * @param {Object[]} users - An array of users.
 * @returns {Object[]} An object with the eye color count of the users that wear glasses.
 * 
 */

 function countTheEyeColorOfGlassesWearers(usersArr) {
    // Unknown keys and values, initialize as an empty object accumulator
    const eyeColorCountOfGlassesWearers = {}

    for (const user of usersArr) {
      // check if the user wears glasses
      if (user.wearsGlasses) {
        // count the eye color, determine if the key/value exists in our accumulator
        if (!eyeColorCountOfGlassesWearers[user.eyeColor]) {
          eyeColorCountOfGlassesWearers[user.eyeColor] = 1;
        } else {
         eyeColorCountOfGlassesWearers[user.eyeColor]++; 
        }
      }
    }

  return eyeColorCountOfGlassesWearers; 
 }

//  console.log(countTheEyeColorOfGlassesWearers(usersData))

function countTheEyeColor(usersArr) {
    // Unknown keys and values, initialize as an empty object accumulator
    const eyeColorCount = {}

    for (const user of usersArr) {
        // count the eye color, determine if the key/value exists in our accumulator
        // if the key/value pair doesn't exist we create [it]
        if (!eyeColorCount[user.eyeColor.toLowerCase()]) {
          eyeColorCount[user.eyeColor.toLowerCase()] = 1;
        } else {
          // if the key/value pair does exist we iterate [it]
         eyeColorCount[user.eyeColor.toLowerCase()]++; 
        }
    }

  return eyeColorCount; 
 }

 console.log(countTheEyeColor(usersData));