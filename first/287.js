// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。

// 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。

// 你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间。

var findDuplicate = function(nums) {
  let slow = nums[0],fast = nums[nums[0]]
  while (slow !==fast) {
    slow = nums[slow]
    fast= nums[nums[fast]]
  }
  let otslow = 0
  while(otslow !== slow){
    otslow = nums[otslow]
    slow = nums[slow]
  }
  return slow
};
console.log(findDuplicate([1,3,4,2,1]));

