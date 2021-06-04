/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-24 09:55:19
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-24 15:03:34
 */
var findKthLargest = function(nums, k) {
  return quit_sort(nums, 0, nums.length-1)
  function quit_sort(nums, n,  m) {
    let first = n, last = m, key = nums[n]
    while (first<last) {
      while (first<last && nums[last] <= key) {
        last--
      }
      nums[first] = nums[last]
      while (first<last && nums[first] >= key) {
        first++
      }
      nums[last] = nums[first]
    }
    nums[first] = key
    if (first+1 === k) return nums[first]
    if (first+1 > k) {
      return  quit_sort(nums, n,  first)
    }else {
      return quit_sort(nums, first+1,  m)
    }
  }
};

debugger
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));

