// 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

// 如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。


var increasingTriplet = function(nums) {
  let one = 'start', arr = []
  for (let item of nums){
    if (one === "start") {
      one = item
      arr.push(item)
    }else if (arr.length ===1){
      if (item > one) {
        arr.push(item)
      }else {
        one = item
        arr[0] = item
      }
    }else {
      if (item < one) one = item
      if (item > one && item < arr[1])  arr = [one, item]
      if (item > arr[1]) return true
    }
  }
  return false
};
