'use strict';
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 1 || numRows > 30) {
    return false;
  }
  let arr = new Array();
  for (let i = 0; i < numRows; i++) {
    let tempArr = new Array();
    if (i === 0) {
      tempArr = [1];
    } else if (i === 1) {
      tempArr = [1, 1];
    } else {
      tempArr[0] = 1;
      for (let j = 1; j < i; j++) {
        tempArr[j] = arr[i - 1][j] + arr[i - 1][j - 1];
      }
      tempArr[i] = 1;
    }
    arr.push(tempArr);
  }
  console.log(arr);
};
generate(1);
generate(2);
generate(3);
generate(4);
generate(5);
