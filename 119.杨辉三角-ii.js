/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const arr = new Array(rowIndex + 1).fill();
    arr[0] = [1];
    arr[1] = [1, 1];
    arr[2] = [1, 2, 1];
    if(rowIndex<3){
        return arr[rowIndex];
    }
    for (let i = 3; i < arr.length; i++) {
        arr[i] = JSON.parse(JSON.stringify(arr[i-1]))
        arr[i].splice(1,0,i)
        for (let j = 2; j < arr[i].length; j++) {
            if(j === arr[i].length - 1){
                break;
            }
            arr[i][j] = arr[i-1][j]+arr[i-1][j-1];
        }
    }
    return arr[arr.length-1]
};
// console.log(getRow(3));
// @lc code=end

