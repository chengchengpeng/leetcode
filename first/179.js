
// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
var largestNumber = function(nums) {
  nums.sort(rule)
  function rule(a,b) {
    let aa = [...a.toString().split(""),  ...b.toString().split("")]
    let bb = [...b.toString().split(""),...a.toString().split("")]
    let i = 0
    while (i< aa.length) {
      if (aa[i] > bb[i]) {
        return -1
      } else if (aa[i]<bb[i]){
        return 1
      }
      i++
    }
    return -1
  }
  if (nums[0] === 0) return '0'
  return nums.join("")
};

nums = [3,30,34,5,9]
console.log(largestNumber(nums));
