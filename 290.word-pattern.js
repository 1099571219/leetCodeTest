/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function (pattern, s) {
    const newPattern = s.split(' ')
    const source = pattern.split('')
    const sourceState = []
    const newState = []
    const cache = []
    const cache2 = []
    let state =true;
    
    for (let i = 0; i < source.length - 1; i++) {
        if (source[i] === source[i + 1]) {
            sourceState.push(true)
            cache.push(source[i+1])
        } else if (i===0) {
            sourceState.push('1')
            cache.push(source[i])
        } else if (cache.indexOf(source[i + 1]) < 0) {
            cache.push(source[i + 1])
            sourceState.push('1')
        } else {
            sourceState.push('1')
        }
        if (newPattern[i] === newPattern[i + 1]) {
            newState.push(true)
            cache2.push(newPattern[i+1])
        } else if (i===0) {
            newState.push('1')
            cache2.push(newPattern[i])
        } else if (cache2.indexOf(newPattern[i + 1]) < 0) {
            cache2.push(newPattern[i + 1])
            newState.push('1')
        } else {
            newState.push('1')
        }
    }
    // console.log(sourceState)
    // console.log(newState)
    // console.log(cache);
    // console.log(cache2);
    if (sourceState.length === newState.length) {
        for(let i = 0 ;i<sourceState.length;i++){
            if(sourceState[i]===newState[i]) {
                continue
            }
            state = false;
        }
    }else{
        state = false
    }
    if (state && cache.length===cache2.length) {
        return console.log(true);
    } else {
        return console.log(false);
    }
};
// @lc code=end

