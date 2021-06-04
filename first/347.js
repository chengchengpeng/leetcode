/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-24 15:10:00
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-24 18:58:26
 */
// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。


var topKFrequent = function(nums, k) {
  function quitSort(nums, n, m) {
    let first = n, last = m, key = nums[n]
    while (first < last) {
      while (first<last && nums[last][1] < key[1]) {
        last--
      }
      nums[first] = nums[last]
      while (first<last && nums[first][1] >= key[1]) {
        first++
      }
      nums[last] = nums[first]
    }
    nums[first] = key
    if (first+1 === k) {
      return;
    }else if (first+1 > k) {
      quitSort(nums, n, first-1)
    }else {
      quitSort(nums, first+1, m)
    }
  }
  let temMap = new Map()
  for (let i = 0; i< nums.length; i++) {
    if (temMap.get(nums[i])) {
      temMap.set(nums[i], temMap.get(nums[i]) + 1)
    }else {
      temMap.set(nums[i], 1)
    }
  }
  let arr = [...temMap],res = []
  console.log(arr);
  debugger
  quitSort(arr, 0, arr.length-1)
  console.log(arr);
  for (let item of arr.slice(0,k)) {
    res.push(item[0])
  }
  return res
};

let nums = [5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,
  -2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,
  -1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5]
, k = 7

console.log(topKFrequent(nums,k));
