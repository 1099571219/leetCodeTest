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
    const base = nums.splice(0,1)[0];
    if(!cache){
        cache = [];
    }
    if(cache.includes(base)){
        return singleNumber(nums,cache);
    };

    if(nums.includes(base)){
        cache.push(base);
        return singleNumber(nums,cache);
    }else{
        return base;
    }
};
singleNumber([2,2,1])
// @lc code=end

