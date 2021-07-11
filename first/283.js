// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

var moveZeroes = function (nums) {
  let i = 0, j = 0, curr
  while (j < nums.length) {
    if (nums[j]){
      curr = nums[j]
      nums[j] = nums[i]
      nums[i] = curr
      i++
    }
    j++
  }
  return nums
};
