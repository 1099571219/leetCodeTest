/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const source = String(x).split('')
    const reverse = String(x).split('').reverse()
    return reverse.every((item,index)=>item===source[index] ? true : false)
};
// @lc code=end

