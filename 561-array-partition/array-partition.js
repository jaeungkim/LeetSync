/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    // Sort the array
    nums.sort((a, b) => a - b);
    
    let sum = 0;
    [1,2,3,4]
    // Since the array is sorted, we can take every other number starting from index 0
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    
    return sum;
};