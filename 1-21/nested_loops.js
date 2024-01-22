const gridData = require('./data/gridCalc')

/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

function calculateGridFunctions(grid) {
  let gridFunctionSum = 0;
  for (const gridEle of grid) {
    for (const calculation of gridEle) {
      let calcFunction = Object.values(calculation)[0];
      let params = Object.values(calculation)[1]
      gridFunctionSum += calcFunction(...params);
      // for (const calcEle in calculation) {
      //     let param = calculation.params 
      //     if (calcEle !== 'params') {
      //       gridFunctionSum += calculation[calcEle](...param)
      //     }
      // }
    }
  }
  // let calculationsArr = [];
  // for (const gridEle of grid) {
  //   calculationsArr.push(...gridEle);
  // }

  // return calculationsArr.reduce((functionSum, currObj) => {
  //   let func = Object.values(currObj)[0];
  //   let params = Object.values(currObj)[1];
  //   functionSum += func(...params)

  //   return functionSum
  // }, 0)

  return gridFunctionSum;
}

console.log(calculateGridFunctions(gridData))