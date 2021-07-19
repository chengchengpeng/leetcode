// 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。

var Solution = function(nums) {
  this.nums = nums
  this.statusNums = JSON.parse(JSON.stringify(nums))
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.nums = JSON.parse(JSON.stringify(this.statusNums))
  return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let length = this.statusNums.length
  for (let i = 0; i< this.nums.length;i++){
    let index = Math.floor(Math.random()*(length-i)) + i,
    tem = this.nums[i]
    this.nums[i] = this.nums[index]
    this.nums[index] = tem
  }
  return this.nums
};

let test = new Solution([1,2,3,4,5,6])
console.log(test.shuffle());
