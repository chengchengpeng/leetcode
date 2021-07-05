// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

var subarraySum = function(nums, k) {
  let mat = new Map(), pre = 0, res = 0
  mat.set(0, 1)
  for (let i = 0; i<nums.length; i++) {
    pre = pre+nums[i]
    res = mat.has(pre-k) ? mat.get(pre-k)+res : res
    if (mat.has(pre)) {
      mat.set(pre, mat.get(pre) + 1)
    }else {
      mat.set(pre, 1)
    }
  }
  return res
};
