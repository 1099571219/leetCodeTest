/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        const num =  nums.splice(i,1)
        console.log(nums);
        console.log(num);
        if(!nums.includes(num))return num;
        i--;
    }
    return undefined;
};
singleNumber([2,2,1])
// @lc code=end

