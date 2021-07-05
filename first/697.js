// 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。

// 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

var findShortestSubArray = function(nums) {
  let map = new Map()
  for (let i=0; i<nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], [map.get(nums[i])[0]+1, map.get(nums[i])[1], i])
    }else {
      map.set(nums[i], [1, i, i])
    }
  }

  let maxsum = 0, minlen = 0
  for (let [count, left, right] of map.values()) {
    if (count > maxsum) {
      maxsum = count
      minlen = right-left+1
    }else if (count === maxsum) {
      minlen  = Math.min(minlen, right-left+1)
    }
  }
  return minlen
};

let a =  [1, 2, 2, 3, 1]
console.log(findShortestSubArray(a));
