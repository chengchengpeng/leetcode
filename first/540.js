/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-21 11:10:51
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-21 13:39:33
 */
function test(nums) {
  let i = 0, j= nums.length-1, mid
  while (true) {
    mid = (i+j)/2
    if (j-i === 2 ) {
      if (nums[mid] === nums[mid-1]) return nums[mid+1]
      if (nums[mid] === nums[mid+1]) return nums[mid-1]
      return nums[mid]
    }
    if ((mid-i)/2 === Math.floor((mid-i)/2)) {
      if(nums[mid] === nums[mid-1]) {
        j = mid-2
      }else if (nums[mid] === nums[mid+1]) {
        i = mid + 2
      }else {
        return nums[mid]
      }
    }else {
      if(nums[mid] === nums[mid-1]) {
        i = mid + 1
      }else if (nums[mid] === nums[mid+1]) {
        j = mid-1
      }else {
        return nums[mid]
      }
    }
  }
}


console.log(test([3,3,7,7,10,11,11]));

// [1,1,2,3,3,4,4,8,8]
// 08
// 4

