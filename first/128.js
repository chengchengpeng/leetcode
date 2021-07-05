// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？

var longestConsecutive = function (nums) {
  let mat = new Set(nums), res = 0
  for (let i = 0; i < nums.length; i++) {
    if (!mat.has(nums[i] - 1)) {
      let k = nums[i], tem = 1
      while (mat.has(++k)) {
        tem++
      }
      res = Math.max(res, tem)
    }
  }
  return res
};

nums = [100,4,200,1,3,2]

console.log(longestConsecutive(nums));
