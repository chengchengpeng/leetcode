// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

var findDisappearedNumbers = function(nums) {
let mat = new Array(nums.length+1).fill(0), res = []
  for (let i =0; i<nums.length; i++) {
    mat[nums[i]] = 1
  }
  console.log(mat);
 for (let i = 1; i<=nums.length; i++) {
   if (mat[i] === 0) {
    res.push(i)
   }
 }
 return res
};
nums = [4,3,2,7,8,2,3,1]
console.log(findDisappearedNumbers(nums));
