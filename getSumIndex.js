/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const targetValue = 6;
let initValue = 0;
let sumNum = 0;
let retValue = [];

// const nums = [2, 7, 11, 15];
const nums = [3,2,4];
function getSum(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    // Ind2 = i + 1;
    sumNum = nums[i] + nums[i + 1];

      console.log(i, "i");
      console.log(sumNum, "sum");

    if (sumNum === target) {
      retValue = [i, i + 1];
      console.log(retValue, "retValue");
        return retValue;
    }
    // else {
    //   console.log("Target Value not found");
    // }

  }
}

console.log(getSum(nums, targetValue));
