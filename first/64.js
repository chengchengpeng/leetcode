/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-19 18:54:09
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-19 19:15:45
 */
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

function test(nums, target) {
  let i = 0, j=nums.length-1, mid=0
  while(i<=j){
    mid = Math.floor(i+(j-i)/2)
    if(nums[mid] === target) {
      let a=mid-1, b=mid+1
      while(nums[a] === target) {
        a--
      }
      while(nums[b] === target) {
        b++
      }
       return [a,b]
    }  else if (nums[mid] > target) {
      j = mid-1
    } else{
      i = mid+1
    }
  }
  return [-1, -1]
}
