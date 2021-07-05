// 给定两个大小相等的数组 A 和 B，A 相对于 B 的优势可以用满足 A[i] > B[i] 的索引 i 的数目来描述。

// 返回 A 的任意排列，使其相对于 B 的优势最大化。
var advantageCount = function(nums1, nums2) {
  let res = []
  nums1.sort((a,b)=>{return a-b})
  debugger
  for (let i = 0; i<nums2.length; i++) {
    res.push(fun(nums2[i], 0, nums2.length-1-i))
  }
  function fun(item,left, right) {
    if (item >=nums1[nums1.length-1]) {
      return nums1.splice(0,1)[0]
    }
    if (item < nums1[0]) {
      return nums1.splice(0,1)[0]
    }
   let target = Math.floor((left+right)/2)
   if (item >= nums1[target]) {
    if (item < nums1[target+1]){
      return nums1.splice(target+1, 1)[0]
    }else {
      return fun(item, target+2, right)
    }
   } else if (item < nums1[target]) {
    if (item >= nums1[target-1]){
      return nums1.splice(target, 1)[0]
    }else {
      return fun(item, left, right-2)
    }
   }else {
    return fun(item, left+1, right)
   }
  }
  return res
};

A = [798463031,954792861,406138122,95873268,505167177], B = [798463031,505167177,416718209,184854491,607500836]

console.log(advantageCount(A, B));
// [2,11,7,15]
