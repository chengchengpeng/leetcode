// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

var firstMissingPositive = function(nums) {
  let set = new Set(nums), k = 1
  while (true) {
    if (!set.has(k)){
      return k
    }
    k++
  }
};
