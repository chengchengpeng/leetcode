/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-31 16:14:50
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-31 19:00:14
 */


// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
var permuteUnique = function(nums) {
  let arr = [], numsLength = nums.length
    position(0)
    function position(k) {
      if (k === numsLength) {
        arr.push(JSON.parse(JSON.stringify(nums)))
      }
      let visited =new Set()
      for (let i = k; i<numsLength; i++){
        if (!visited.has(nums[i])) {
          visited.add(nums[i])
          changeItem(k, i)
          position(k+1)
          changeItem(i, k)
        }
      }

    }
    function changeItem(i, j) {
      let tem = nums[i]
      nums[i] = nums[j]
      nums[j] = tem
    }
    return arr
};
let nums = [1,1,2]
console.log(permuteUnique(nums));
