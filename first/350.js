// 给定两个数组，编写一个函数来计算它们的交集。
var intersect = function(nums1, nums2) {
  let map = new Map(), arr = []
  for (let item of nums1){
    if (map.has(item)){
      map.set(item, map.get(item) + 1)
    }else {
      map.set(item, 1)
    }
  }
  for (let item of nums2) {
    if (map.has(item)) {
      arr.push(item)
      if (map.get(item) === 1){
        map.delete(item)
      }else{
        map.set(item, map.get(item) - 1)
      }
    }
  }
  return arr
};
