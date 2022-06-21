/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length-1; i++) {
        let profit =0; 
        for (let j = i+1; j < prices.length; j++) {
            prices[j] > profit && (profit=prices[j])
        }
        profit-prices[i]> maxProfit && (maxProfit = (max-prices[i]))
    }
    return maxProfit;
};
// @lc code=end

