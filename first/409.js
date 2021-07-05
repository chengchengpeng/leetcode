// 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

// 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

// 注意:
// 假设字符串的长度不会超过 1010。
var longestPalindrome = function(s) {
  let map = new Map(), hasOdd = false, count = 0
  for (let i= 0;i<s.length; i++) {
    let item = s.charAt(i)
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    }else {
      map.set(item,1)
    }
  }
  for (let value of map.values()) {
    if (value/2 === Math.floor(value/2)) {
      count +=value
    }else {
      hasOdd  = true
      count = count + value - 1
    }
  }
  if (hasOdd) {
    count++
  }
  return count
};
