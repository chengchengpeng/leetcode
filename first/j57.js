// 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。
// 如果有多对数字的和等于s，则输出任意一对即可。
var twoSum = function(nums, target) {
  let i= 0, j = nums.length-1
  while(i != j){
    if (nums[i] + nums[j]> target) {
      j--
    }else if (nums[i] + nums[j]< target){
      i++
    }else{
      return [nums[i], nums[j]]
    }
  }
  return []
};

