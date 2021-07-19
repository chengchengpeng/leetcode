// 给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

// 你可以假设所有输入数组都可以得到满足题目要求的结果。

var wiggleSort = function(nums) {
  quict(0,nums.length-1)
  function quict(i, j) {
    if (i >= j) return
    let key  = nums[i], first = i, last = j
    while(last>first){
      while(last > first && nums[last] >= key) {
        last--
      }
      nums[first] = nums[last]
      while(last > first && nums[first] <= key) {
        first++
      }
      nums[last] = nums[first]
    }
    nums[last] = key
    quict(i, first-1)
    quict(first+1, j)
  }
  let mid = Math.ceil(nums.length/2)-1, flag = true
  let arr1 = nums.slice(0, mid+1)
  let arr2 = nums.slice(mid+1)
  for (let i = 0; i< nums.length; i++) {
    if (flag){
      nums[i] = arr1.pop()
    }else{
      nums[i] = arr2.pop()
    }
    flag = !flag
  }
  console.log(nums);
};

nums = [1,5,1,1,6,4]

console.log(wiggleSort(nums));
