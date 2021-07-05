// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额

var rob = function(nums) {
  let mat1 = new Array(nums.length-1), mat2 = new Array(nums.length-1)
  mat1[0] = nums[0]
  if (nums.length === 1) {
    return nums[0]
  }
  mat1[1] = Math.max(nums[0], nums[1])
  if (nums.length === 2) {
    return mat1[1]
  }
  mat2[0] = nums[1]
  mat2[1] = Math.max(nums[1], nums[2])

  for (let i = 2 ; i< nums.length; i++) {
    if (i<nums.length-1) {
      mat1[i] = Math.max(mat1[i-2] + nums[i], mat1[i-1])
    }
    if (i>2) {
      mat2[i-1] = Math.max(mat2[i-3] + nums[i], mat2[i-2])
    }
  }
  return Math.max(mat1[nums.length-2], mat2[nums.length-2])
};
console.log(rob([1,2,3,1]));
