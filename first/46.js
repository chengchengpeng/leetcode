/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-26 13:34:56
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-31 16:34:16
 */
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

var permute = function(nums) {
  let n = nums.length, result = []
  backtrack(nums,0, result)
  function backtrack(nums,k, result) {
    if (k === n-1){
      let tem = JSON.parse(JSON.stringify(nums))
      result.push(tem)
    }else{
      for (let i = k; i<n; i++) {
        changeItem(nums, k, i)
        backtrack(nums,k+1, result)
        changeItem(nums, k, i)
      }
    }
  }
  function changeItem(nums, i, j) {
    tem = nums[i]
    nums[i] = nums[j]
    nums[j] = tem
  }
  return result
}



let nums = [1,2,3]
debugger
console.log(permute(nums));
