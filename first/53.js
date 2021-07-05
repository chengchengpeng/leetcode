// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

var maxSubArray = function(nums) {
  let mat1 = new Array(nums.length),// 和
  mat2 =  new Array(nums.length)
  mat1[0] = mat2 = nums[0]
  for (let i = 1; i<nums.length; i++) {
    mat1[i] = Math.max(mat1[i-1] + nums[i], nums[i])
    mat2[i] = Math.max(mat1[i], mat2[i-1])
  }
  return mat2[nums.length-1]
};
