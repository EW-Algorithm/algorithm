/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    
    let p1=m-1, p2=n-1, i=m+n-1;
    // p1 = 2 / p2 = 2 / i = 5
    
    while(p2 >= 0) {
        if(p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i--] = nums1[p1--];
        } else {
            nums1[i--] = nums2[p2--];
        }
    }

    console.log(nums1);

};


let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
const result = merge(nums1, m, nums2, n);

/**

[1][2][3][0][0][0]
      p1        i

[2][5][6]
      p2

 */