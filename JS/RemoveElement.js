'use strict';

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length > 100 || val < 0 || val > 100) {
    return 0;
  }
  let duplicates = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 || nums[i] > 50) {
      return 0;
    }
    if (nums[i] === val) {
      nums[i] = null;
      duplicates++;
    }
  }
  nums.sort();
  return nums.length - duplicates;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
