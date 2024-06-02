/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans=[];
    for(let i=0; i< nums.length * 2; i++){
        if(i >= nums.length){
            ans.push(nums[i-nums.length]);
        } else {
            ans.push(nums[i]);
        }
    }

    return ans;
};