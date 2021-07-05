// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

// 说明：

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
var strStr = function(haystack, needle) {
  if (!needle) return 0
  let needleLength = needle.length, next = new Array(needleLength).fill(0),
  j = 0, i= 1,n = 0, m = 0
  next[0] = 0
  while(i<needleLength) {
    if(j===0 && needle[i] !== needle[j]) {
      next[i] = 0
      i++
      continue
    }
    if (needle[i] === needle[j]) {
      next[i] = j+1
      j++
      i++
    } else {
      j = next[j-1]
    }
  }
  while(n<haystack.length) {
    if (haystack[n] === needle[m]) {
      if (m === needleLength-1) {
        return n-m
      }else {
        n++
        m++
      }
    }else {
      if (m === 0) {
        n++
      }else{
        m = next[m-1]
      }
    }
  }
  return -1
};

haystack = "mississippi", needle = "issip"
console.log(strStr(haystack, needle));
