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
    let minIndex = prices.length;
    let max = 0;
    let min;
    let cache = JSON.parse(JSON.stringify(prices));
    for (let i = prices.length - 1; i >= 0; i--) {
        if (i >= minIndex && prices[i] <= max) continue;
        max = prices[i];
        cache.splice(i);
        if (cache.length < 1) break;
        i < minIndex && (min = Math.min(...cache), index = prices.indexOf(min));

        max - min>maxProfit && (maxProfit=(max - min));
    };
    // for(let i =prices.length-1; i >0; i--) {
    //     const targetMax =prices[i];
    //     for(let j =i-1;j>=0;j--){
    //         if(targetMax-prices[j]>maxProfit){
    //             maxProfit = targetMax-prices[j];
    //         }
    //     }
    // }

    return maxProfit;
}
// @lc code=end

