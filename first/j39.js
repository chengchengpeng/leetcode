// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
var majorityElement = function(nums) {
  let com, total = 0
  for (let i = 0; i<nums.length; i++) {
    if (total ===0) {
      com = nums[i]
      total++
    }else{
      if (com === nums[i]) {
        total++
      }else{
        total--
      }
    }
  }
  return com
};
