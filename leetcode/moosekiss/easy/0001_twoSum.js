/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let twoSum = function(nums, target) {

    for(let i=0; i<=nums.length; i++) {
        for(let j=i+1; j<=nums.length-1; j++) {

            if(nums[i]+nums[j] == target) {
                return [i, j];
            }
        }
    }

};

let result = twoSum([3,3], 6);
console.log(result);