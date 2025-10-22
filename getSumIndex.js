/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const targetValue = 6;
let initValue = 0;
let sumNum = 0;
let retValue = [0, 0];

// const nums = [2, 7, 11, 15];
// const nums = [2,5,5,11];
const nums = [3,2,4];
function getSum(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    initValue = nums[i]; //5

    for (let j = i + 1; j < nums.length; j++) {
      sumNum = nums[i] + nums[j]; // 5+ 5 =7

      if (sumNum === target) {
        retValue = [i, j];
       // console.log(retValue, "retValue");
        return retValue;
        // break;
      }
    }
   
  }
}

console.log(getSum(nums, targetValue));
