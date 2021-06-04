/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-19 19:43:54
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-21 11:07:49
 */
// 一个原本增序的数组被首尾相连后按某个位置断开（如 [1,2,2,3,4,5] → [2,3,4,5,1,2]，在第一
// 位和第二位断开），我们称其为旋转数组。给定一个值，判断这个值是否存在于这个为旋转数组
// 中。


function search(nums, target) {
  let i =0, j = nums.length-1, mid = 0
  if (nums.length===0) return false
  if (nums.length===1) return target === nums[0]
  while (i<=j) {
    mid = Math.floor(i+(j-i)/2)
    if(target=== nums[mid]) return true
    if(nums[i] === nums[mid] && nums[j] === nums[mid]) {
      i++
      j--
    }
    else if (nums[mid] >= nums[i]) {
      if (target<nums[mid] && target>= nums[i]) {
        j = mid-1
      } else {
        i = mid + 1
      }
    } else{
      if (target<=nums[j] && target>=nums[mid+1]) {
        i = mid + 1
      } else {
        j = mid-1
      }
    }
  }
  return false
}
debugger

console.log(search([1,0,1,1,1,1], 0))

