var NumArray = function(nums) {
  this.mat = [nums[0]]
  this.nums = nums
  for (let i = 1; i<nums.length; i++) {
      this.mat[i] = this.mat[i-1] + this.nums[i]
  }
};

/**
* @param {number} left
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  return this.mat[right] - this.mat[left] + this.nums[left]
};
let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
