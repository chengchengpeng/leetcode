// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

var missingNumber = function(nums) {
  let set = new Set(nums)
  for (let i= 0; i<=n; i++) {
    if (!set.has(i)) return i
  }
};

var missingNumber = function(nums) {
  res = 0
  for (let i = 0; i< nums.length; i++) {
    res = res ^ i ^ nums[i]
  }
  res = res ^ nums.length
  return res
}
