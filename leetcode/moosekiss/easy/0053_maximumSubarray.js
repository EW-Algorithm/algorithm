/**
 * @param {number[]} nums
 * @return {number}
 */
 const maxSubArray = (nums) => {

    // #1. Broute Force
    

    // #2. 
    let curSum = nums[0];
    let maxSum = nums[0];

    for(let i=1; i<nums.length; i++) {
        curSum = Math.max(nums[i]+curSum, nums[i]);
        maxSum = Math.max(curSum, maxSum);

        console.log("curSum: " + curSum + " maxSum: "+ maxSum);
    }

    return maxSum;
};

const result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(result);


// Brute Force (완전탐색 알고리즘) 방식은 O(N²)

// 카데인 알고리즘을 이용하면 O(N)

// Kadane’s Algorithm - Dynamic Programming(동적 계획법)

// divide and conquer(분할정복)
