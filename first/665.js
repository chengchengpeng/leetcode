/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-14 14:01:34
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-14 14:38:12
 */
// 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。

// 我们是这样定义一个非递减数列的： 对于数组中任意的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。

let nums = [4,2,3]

var checkPossibility = function(nums) {
  const isDecreasingArr = (nums) =>{
      for (let index = 1; index < nums.length; index++) {
          if (nums[index] < nums[index-1] ) return false
      }
      return true
  }
  if (isDecreasingArr(nums)) return true
  for (let i = 1; i<nums.length; i++) {
      if (nums[i] < nums[i-1] ) {
          let pre = nums[i-1],next = nums[i]
          nums[i] =  pre
          if (isDecreasingArr(nums)){
          return true
          }else{
              nums[i] = next
          }
          nums[i-1] =  next
          if (isDecreasingArr(nums)){
          return true
          } else{
              nums[i-1] = pre
          }
          return false
      }
  }
};
