// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

var majorityElement = function(nums) {
  let map = new Map()
  for (let item of nums){
    if (map.has(item)){
      map.set(item, map.get(item) + 1)
    }else {
      map.set(item,1)
    }
  }
  for (let [key, value] of map) {
    if (value >= nums.length /2) return key
  }
};
