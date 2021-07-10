// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），
// 并返回该子数组所对应的乘积。

var maxProduct = function(nums) {
  let premax = preMaxandcurr = preMinandcurr = nums[0] ,a, b,c
  for (let i = 1; i< nums.length; i++) {
      b = preMaxandcurr
    if (nums[i]>=0) {
      premax = Math.max(premax, nums[i] * b,nums[i])
      preMaxandcurr = Math.max(nums[i] * b,nums[i])
      preMinandcurr = Math.min(nums[i] * preMinandcurr,nums[i])
    }else {
      premax = Math.max(premax, nums[i] * preMinandcurr,nums[i])
      preMaxandcurr = Math.max(nums[i] * preMinandcurr,nums[i])
      preMinandcurr = Math.min(nums[i] * b,nums[i])
    }
  }
  return premax
};
debugger
console.log(maxProduct([-4,-3,-2]));
