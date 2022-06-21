/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const drop = [];
    for(let i =0;i<nums.length;i++) {
        if(drop.includes(nums[i]))continue;
        const cache = [];
        cache.push(nums[i]);        
        for(let j =i+1;j<nums.length;j++) {
            if(nums[j] ===cache[0]){
                cache.push(nums[j]);
            }
        }
        if(cache.length>Math.floor(nums.length/2)){
            return cache[0];
        }else{
            drop.push(cache[0])
        }
    }
};
// @lc code=end

