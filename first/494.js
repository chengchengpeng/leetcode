// 给你一个整数数组 nums 和一个整数 target 。

// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

var findTargetSumWays = function(nums, target) {
  let sum = nums.reduce((a,b) =>{return a+b})
  res = (sum -target) / 2
  if (res < 0 || res !== Math.ceil(res))  {
    return 0
  }
  let mat = []
  for (let i = 0; i<= nums.length; i++) {
    mat.push(new Array(res+1).fill(0))
  }
  mat[0][0] = 1
  for (let i = 1; i<= nums.length; i++) {
    for (let k = 0; k<=res; k++) {
      if (nums[i-1] <= k) {
        mat[i][k] = mat[i-1][k] + mat[i-1][k-nums[i-1]]
      } else {
        mat[i][k] = mat[i-1][k]
      }
    }
  }
  return mat[nums.length][res]
};
let nums = [1,1,1,1,1], target = 3
console.log(findTargetSumWays(nums, target));
