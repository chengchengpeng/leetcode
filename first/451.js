/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-24 19:32:24
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-24 20:06:35
 */
// 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
var frequencySort = function(s) {
  let temMap = new Map()
  for (let i = 0; i<s.length; i++) {
    let key = s.charAt(i), value = temMap.get(key)
    if (value){
      temMap.set(key, value+1)
    }else{
      temMap.set(key, 1)
    }
  }
  let arr = [...temMap]
  function quitSort(nums, n, m) {
    let first = n, last = m, key = nums[n]
    if(first>=last) return
    while (first<last) {
      while (first<last && nums[last][1] <= key[1]) {
        last--
      }
      nums[first] = nums[last]
      while (first<last && nums[first][1]>=key[1]) {
        first++
      }
      nums[last] = nums[first]
    }
    nums[first] = key
    quitSort(nums, n, first)
    quitSort(nums, first+1, m)
  }
  quitSort(arr, 0, arr.length-1)
  let result = []
  for (let item of arr) {
      let tem = new Array(item[1]).fill(item[0])
      result = result.concat(tem)
  }
  return result.join("");
};

console.log(frequencySort('Aafawfgweqwrasdasagsdfadbb'));
