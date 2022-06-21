/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if(numRows===1) return [[numRows]]
    const arr = new Array(numRows-1).fill();
    arr[0] = [1]
    for (let i = 1; i < numRows; i++) {
        arr[i] = [...arr[i - 1]]
        arr[i].unshift(1)
        for (let j = 0; j < arr[i].length; j++) {
            if (j === 0 || j === arr[i].length - 1) continue;
            arr[i][j] = arr[i-1][j]+arr[i-1][j-1]
        }
    }
    return arr
};
// @lc code=end

