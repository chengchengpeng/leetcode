// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

var canPartition = function(nums) {
  let tag = nums.reduce((a,b)=>{return a+b}) / 2
  if (Math.floor(tag) !== tag) return false
   let arr = new Array(tag+1).fill(false)
   for (let i = 0; i<nums.length; i++) {
     let curr = nums[i]
    for (let j = tag; j>=curr; j--) {
      arr[j] = arr[j] || arr[j-curr] || curr === j
    }
   }
   return arr[tag]
};

nums = [1,5,11,5]

console.log(canPartition(nums));
