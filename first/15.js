// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

var threeSum = function(nums) {
  let res = [],n,m
  sort = nums.sort((a,b) => {return a-b})
  for (let i = 0; i< nums.length; i++) {
    if (nums[i] === nums[i-1]) continue
      n = i+1, m = nums.length-1
      while (m>n) {
        if (n>i+1 && nums[n] === nums[n-1]) {
          n++
          continue
        }
        if (nums[n] + nums[m] + nums[i] > 0) {
          m--
        }else if(nums[n] + nums[m] + nums[i] < 0) {
          n++
        }else {
          res.push([nums[i], nums[n], nums[m]])
          n++
        }
    }
  }
  return res
};
nums = [0,0,0,0,0]
console.log(threeSum(nums));
