/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Binary Search
 */
const searchInsert = function(nums, target) {
    
    let left = 0;
    let right = nums.length-1;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);   // 내림

        if(nums[mid] == target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right+1;

};

const result = searchInsert([1,3,5,6], 2);
console.log(result);


// #1. O(n)
// const searchInsert = function(nums, target) {
//     for(let i=0; i<=nums.length-1; i++) {
//         if(target <= nums[i]) {
//             return i;
//         }
//     }
//     return nums.length;
    
// };

// const result = searchInsert([1,3,5,6], 7);
// console.log("output: " + result);



// #2. 한계
// const searchInsert = function(nums, target) {
//     // let pivot = Math.floor(nums.length / 2);    // 소수점이 나올시 버림
//     console.log("length: " + nums.length);
//     console.log("pivot: " + pivot);

//     // [1,3,5,6,8,9], 2

//     while(true) {
//         let pivot = Math.floor(nums.length / 2);
        
//         if(target <= nums[pivot]) { // left
//             pivot = pivot/2;
//             // 0부터 pivot까지 length 가 pivot
            
//         } else {
//             // pivot 부터 전체 length 길이짜리 pivot
            
//         }
//         // return pivot == 1 ? true : false;
//         // return pivot;
//     }
    
// };

// const result = searchInsert([1,3,5,6,8,9], 2);
// console.log(result);
