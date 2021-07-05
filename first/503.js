// 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。
// 数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

var nextGreaterElements = function(nums) {
  let arr = new Array(nums.length).fill(-1), k = 0, i = 1, temarr = [0]
  while(k<2*nums.length-1) {
    while(temarr.length && nums[i] > nums[temarr[temarr.length-1]])
      arr[temarr.pop()] = nums[i]
    if (k<nums.length){
      temarr.push(i)
    }
    if (i === nums.length-1){
      i = 0
    }else{
      i++
    }
    k++
  }
  return arr
};
let a = [1,2,3,4,3]
console.log(nextGreaterElements(a));
