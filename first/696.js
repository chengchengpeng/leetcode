// 给定一个字符串 s，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是连续的。

// 重复出现的子串要计算它们出现的次数。
var countBinarySubstrings = function (s) {
  let pre = 0, next = 1,count = 0
  for (let i=1; i<s.length;i++) {
    if (s.charAt(i) === s.charAt(i-1)) {
      next++
    }else {
      pre = next
      next = 1
    }
    if (next<=pre) {
      count++
    }
  }
  return count
};
let a = "00110011"
console.log(countBinarySubstrings(a));
