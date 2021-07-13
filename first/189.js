// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

var rotate = function(nums, k) {
  let set = new Set()
  debugger

  for(let i = 0; i< k && i <nums.length; i++) {
    if (!set.has(i)){
      let j = i
    let tem = nums[j] ,next, index
    while (!set.has(j)) {
      set.add(j)
      index = j+k
      while (index >=nums.length ) {
        index = index-nums.length
      }
      next = nums[index]
      nums[index] = tem
      tem = next
      j = index
    }
    }
  }
  return nums
};
console.log(rotate([1,2,3,4,5,6,7], 3));
