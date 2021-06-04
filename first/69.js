/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-18 17:25:23
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-20 14:20:38
 */
// 给定一个非负整数，求它的开方，向下取整。


// function mySqrt(x, e) {
//   if(x ===1) return 1
//     let i = 0,j=x, mid, abs = 0
//     while (j.toFixed(e+1)!==i.toFixed(e+1)) {
//         mid = i + (j-i) / 2
//         if(mid*mid <= x) {
//         i = mid
//         }else {
//         j = mid
//         }
//         abs = mid
//     }
//     return abs.toFixed(e)
// }

function mySqrt(x) {
    let i = 0,j=x, mid, abs = 0
    // 下面这个循环跳跃这遍历所求值所在的区间，
    while (i<=j) {
        mid = Math.floor((j+i) / 2)
        // 如果mid的平方小于等于x那么其值，一定在mid到j之间，保留此时mid为结果值，如果在mid到mid+1之间，
        // 那么此时mid就是所求值，而且在以后的循环中不可能在出现mid的平方小于等于x的情况，
        // 如果在mid+1到j之间， 那么就继续循环， 总会出现所求值在mid到mid+1之间，
        if(mid*mid <= x) {
          abs = mid
          i = mid+1
        }else {
        j = mid-1
        }
    }
    return abs
}
for (let i = 0; i<100; i++) {
  console.log(i, mySqrt(i,2));
}
