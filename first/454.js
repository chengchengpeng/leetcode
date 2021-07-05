// 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) 
// ，使得 A[i] + B[j] + C[k] + D[l] = 0。

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let nums12 = [], lenght = nums1.length, map = new Map(), count = 0
  for (let i = 0; i < lenght; i++) {
    for (let j = 0; j < lenght; j++) {
      nums12.push(nums1[i] + nums2[j])
      if (map.has(nums3[i] + nums4[j])) {
        map.set(nums3[i] + nums4[j], map.get(nums3[i] + nums4[j]) + 1)
      } else {
        map.set(nums3[i] + nums4[j], 1)
      }

    }
  }
  console.log(map);
  for (let item of nums12) {
    if (map.has(-item)) {

      count = count + map.get(-item)
    }
  }
  return count
};
let a = [1, 2],
  b = [-2, -1],
  c = [-1, 2],
  d = [0, 2]
console.log(fourSumCount(a,b,c,d));
