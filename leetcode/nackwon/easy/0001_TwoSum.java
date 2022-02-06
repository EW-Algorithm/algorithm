class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] resultArr = new int[2];

        int intSize = nums.length;

        int sum = 0;
        for (int i=0; i<intSize; ++i) {
            for (int j=i+1; j<intSize; ++j) {

                if (i != j) {
                    sum = nums[i] + nums[j];

                    if( sum == target) {
                        resultArr[0] = i;
                        resultArr[1] = j;
                        return resultArr;
                    }
                }
            }
        }
        return null;
    }
}