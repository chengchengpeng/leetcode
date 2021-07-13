// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

var search = function(nums, target) {
  let i = 0, j= nums.length-1, mid
  debugger
  while (j >= i) {
    mid = Math.floor((i+j)/2)
    if (nums[mid] === target) return mid
    if (i === j) return -1
    if (nums[j] >=nums[mid+1]){
      if (nums[mid+1] <= target && target<=nums[j]){
        i = mid + 1
      }else{
        j = mid-1
      }
    }else{
      if (target >= nums[i] && target<=nums[mid-1]){
        j = mid-1
      }else {
        i = mid+1
      }
    }
}
return -1
};
console.log(search([1,3],0));
