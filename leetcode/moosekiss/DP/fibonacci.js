// 1 1 2 3 5 8 13 21 34 55

// #1. Recursion
// const fibonacci = (n) => {
//     if(n <= 1) return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// const result = fibonacci(10);
// console.log(result);


// #2. DP
const fibonacci = (n, memo) => {
    
    memo = memo || {};

    if(memo[n]) return memo[n];
    if(n <= 1) return 1;

    // Memoization
    return memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);

}

const result = fibonacci(10);
console.log(result);