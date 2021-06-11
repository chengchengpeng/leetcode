/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-06-06 09:12:15
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-06-06 09:31:59
 */
// 如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。

// 例如，以下数列为等差数列:

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// 以下数列不是等差数列。

// 1, 1, 2, 5, 7
//  

// 数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。

// 如果满足以下条件，则称子数组(P, Q)为等差数组：

// 元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。

// 函数要返回数组 A 中所有为等差数组的子数组个数。

// 可以使用动态或者递归

var numberOfArithmeticSlices = function(nums) {
  let sum = 0
  mySlice(nums.length - 1)
  function mySlice(i) {
    if (i<2) return 0
    let flag = 0
    if (nums[i]- nums[i-1] === nums[i-1]- nums[i-2]) {
      flag =  1 + mySlice(i-1)
      sum = sum + flag
    }else {
      mySlice(i-1)
    }
    return flag
  }
  return sum
};

