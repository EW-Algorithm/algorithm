class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        result = []
        for i in range(0, len(nums)):
            for k, t in enumerate(nums):
                if nums[i] + nums[k] == target and i != k:
                    return [i, k]
