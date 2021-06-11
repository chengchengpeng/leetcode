/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-06-05 10:20:14
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-06-05 11:01:02
 */
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额

var rob = function(nums) {
  let pre, cur = nums[0]
  if (nums<2) return cur
  pre = cur
  if (pre < nums[1]) {
    cur= nums[1]
  }
  for (let i = 2; i<nums.length; i++) {
    let tem = cur
    if (nums[i] + pre > cur) {
      cur = nums[i] + pre
    }
    pre = tem
  }
  return cur
};
console.log(rob([2,7,9,3,1]));
