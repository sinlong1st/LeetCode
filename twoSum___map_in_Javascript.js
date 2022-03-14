/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let box = new Map(); //Create a temp box to contain numbẻ
    for (let i = 0; i < nums.length; i++){
        currNum = nums[i];
        remainderNum = target - currNum;
        if (box.has(remainderNum)){ //If the box already had the remainder
            return [box.get(remainderNum),i];
        }
        box.set(currNum,i)  //If not, we will put the current number to the box so we can assess it later
    }
    return null;
};