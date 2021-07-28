// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

var minNumber = function(nums) {
  function sort(i,j) {
    if (i >= j) return
    let first = i, last = j, key = nums[i]
    while (first<last) {
      while (first<last && parseInt(String(key)+String(nums[last])) <= parseInt(String(nums[last])+String(key))){
        last--
      }
      nums[first] = nums[last]
      while(first<last && parseInt(String(key)+String(nums[first])) >= parseInt(String(nums[first])+String(key))){
        first++
      }
      nums[last] = nums[first]
    }
    nums[first] = key
    sort(i, first-1)
    sort(first+1, j)
  }
  sort(0,nums.length-1)
  return nums.join("")
};
console.log(minNumber([1,1,1]));
