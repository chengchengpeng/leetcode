/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-14 15:08:52
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-14 16:28:16
 */
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
let i = 0, j = 0
nums1.splice(m)
while (i< nums1.length && j< n) {
  if(nums1[i] >= nums2[j]) {
    nums1.splice(i, 0,nums2[j])
    j++
  }
  i++
}
nums1.splice(nums1.length,0, ...nums2.slice(j))

console.log(nums1);
