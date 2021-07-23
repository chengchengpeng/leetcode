// 统计一个数字在排序数组中出现的次数。

var search = function(nums, target) {
  let i = 0; j = nums.length-1, total = 0
  debugger
  while(i<=j) {
    let mid = Math.floor((i+j)/2)
    if (nums[mid] >  target){
      j = mid-1
    }else if (nums[mid] <  target){
      i = mid +1
    }else {
      let tem =mid
      while(nums[tem] === target) {
        total++
        tem++
      }
      tem = mid-1
      while(nums[tem] === target) {
        total++
        tem--
      }
      console.log(mid);
      break
    }
  }
  return total
};
console.log(search([5,7,7,8,8,10], 8))
