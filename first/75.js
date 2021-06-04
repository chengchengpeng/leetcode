/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-24 20:07:16
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-25 10:59:32
 */
// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

var sortColors = function(nums) {
  let i = 0, j = nums.length-1, item
  while (nums[j]===2) {
    j--
  }
  for (let n = 0; n<=j; n++) {
    item = nums[n]
    if (item === 0) {
      nums[n] = nums[i]
      nums[i] = item
      i++
    }
    if (item === 2) {
      let temJ = nums[j]
      nums[j] = item
      while (nums[j]===2) {
        j--
      }
      if (temJ === 0) {
        nums[n] = nums[i]
        nums[i] = temJ
        i++
      }
      if(temJ === 1){
        nums[n] = temJ
      }
    }
  }
};
let a = [2,0,2,1,1,0]
debugger
sortColors(a)
console.log(a);
