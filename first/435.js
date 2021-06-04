/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-13 09:36:02
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-13 10:19:06
 */

// 给定多个区间，计算让这些区间互不重叠所需要移除区间的最少个数。起止相连不算重叠。
// 输入输出样例
// 输入是一个数组，数组由多个长度固定为 2 的数组组成，表示区间的开始和结尾。输出一个
// 整数，表示需要移除的区间数量。

let intervals = [[1,2],[2,3],[3,4],[1,3]]
intervals.sort((a,b)=>{return a[1] - b[1]})
let flag = intervals[0][1],sum = 0
for (let i = 1; i<intervals.length; i++) {
  if(intervals[i][0]>=flag){
    flag = intervals[i][1]
  }else{
    sum++
  }
}
console.log(sum);


