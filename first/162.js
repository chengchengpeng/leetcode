// 峰值元素是指其值大于左右相邻值的元素。

// 给你一个输入数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

// 你可以假设 nums[-1] = nums[n] = -∞ 。
var findPeakElement = function(nums) {
  return getnum(0, nums.length-1)
  function getnum(left, right){
    if (left === right) return left
    let mid = Math.floor((left+right)/2)
    if (nums[mid] > nums[mid+1]){
      return getnum(left, mid)
    }else {
      return getnum(mid+1, right)
    }
  }
};
