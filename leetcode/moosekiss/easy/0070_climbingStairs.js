/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {

    // 1. 재귀 => O(2^n)
    // if(n <= 2) {
    //     return n;
    // } else {
    //     return climbStairs(n-1) + climbStairs(n-2);
    // }

    // 2. DP => O(n)
    // DP문제는 점화식을 찾아야함.
    let arr = [];
    if(n <= 2) return n
    
    arr[1] = 1;
    arr[2] = 2;
    for(let i=3; i<=n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];


};

const result = climbStairs(5);
console.log("result: " + result);


    // 1 -> 1
    // 2 -> 2
    // 3 -> 3
    // 4 -> 5
    // 5 -> 8
    // 6 -> 13

    // 1111
    // 112
    // 121
    // 211
    // 22

    // 11111
    // 1112
    // 1121
    // 1211
    // 2111
    // 122
    // 212
    // 221

